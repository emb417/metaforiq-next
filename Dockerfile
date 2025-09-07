# Multi-stage build for a lean and production-ready Docker image.

# -----------------------------------------------------------
# STAGE 1: The Builder Stage
# This stage installs all dependencies and builds the Next.js application.
# -----------------------------------------------------------
# We use the official Node.js 22 LTS (Long Term Support) image.
# The "alpine" variant is chosen to keep the image size as small as possible.
FROM node:22-alpine AS builder

# Add a build argument for the API URL.
ARG LIBOWSKI_API_URL=http://localhost:8080
ENV LIBOWSKI_API_URL=$LIBOWSKI_API_URL

# Set the working directory inside the container. All subsequent commands will
# run in this directory unless otherwise specified.
WORKDIR /app

# Tell npm to use the pre-built binaries for sharp.
# This prevents the build from failing due to native compilation issues in the
# QEMU emulation layer.
ENV npm_config_arch=arm64
ENV npm_config_platform=linux

# Copy package.json and package-lock.json first to leverage Docker's layer caching.
# This ensures that npm dependencies are only re-installed when these files change.
COPY package*.json ./

# Install dependencies. `npm ci` is used instead of `npm install` for reproducible
# builds, as it uses the exact versions specified in package-lock.json.
RUN npm ci

# Copy the rest of the application source code into the container.
COPY . .

# Build the Next.js application for production.
# NEXT_TELEMETRY_DISABLED=1 prevents Next.js from collecting anonymous telemetry data.
# The next build command will now generate a 'standalone' folder.
RUN NEXT_TELEMETRY_DISABLED=1 npm run build

# -----------------------------------------------------------
# STAGE 2: The Production Stage
# This stage uses a much smaller, non-development-focused Node.js image to run
# the production application, reducing the final image size and attack surface.
# -----------------------------------------------------------
FROM node:22-alpine AS runner

# Set the working directory.
WORKDIR /app

# Set the user to 'node' for enhanced security.
USER node

# The Next.js app needs specific files to run. We copy them from the builder stage.
# We only copy the files that are absolutely necessary.
# We no longer need to copy node_modules separately as they are part of the standalone build.
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/public ./public

# Expose the port on which the Next.js application will listen.
EXPOSE 3000

# The command to run the Next.js application in production.
# This starts the Next.js server.
CMD ["node", "server.js"]
