# MetaforIQ.com

MetaforIQ is a consulting and software development company based in the
United States. We specialize in the discovery and delivery of AI-enabled
capabilities, data platforms, and B2B SaaS solutions. We translate ambiguous
business problems into clear, actionable insights and solutions.

The site is built with **Next.js 16**, a fully custom **CSS Modules + Design
Token** system (no Tailwind), and deployed via a Docker‑based workflow.

---

## Local Development

Local development uses **Docker Compose** to ensure a consistent, reproducible
environment across machines. The Next.js app, API services, and Nginx proxy all
run together with unified logging.

Before starting, ensure the following sibling repositories exist:

- `rpi-docker-compose`
- `metaforiq-node`
- `rpi-nginx`

### Start the stack

Run from the root of `rpi-docker-compose`:

```bash
docker compose up
```

### Access the application

The site will be available at:

`http://localhost`

### Stop the stack

Press `Ctrl + C` to stop the containers, or:

```bash
docker compose down
```

---

## Production Deployment

Production is fully automated via **GitHub Actions** and **Docker Hub**. The
server simply pulls the latest images and restarts the stack.

### Start services on the server

From the `rpi-docker-compose` directory:

```bash
docker compose up -d
```

Ensure your `.env` files are present before running.

### View the live site

`https://metaforiq.com`

---

## Tech Stack

### Frontend

- **Next.js 16**  
  Modern React server components, Turbopack, and a simplified build pipeline.

- **React**  
  Component‑driven UI architecture.

- **CSS Modules + Design Tokens**  
  A fully custom semantic design system using:
  - global CSS variables for color, spacing, typography, radii
  - component‑scoped CSS Modules
  - dark‑mode aware semantic tokens

### Backend / Utilities

- **Node.js**  
  Supporting services and API utilities.

### Infrastructure

- **Docker & Docker Compose**  
  Local and production orchestration.

- **Nginx**  
  Reverse proxy and static asset delivery.

- **GitHub Actions**  
  CI/CD pipeline for automated builds and deployments.

---

## Project Structure

The frontend uses a clean, component‑driven architecture:

```bash
/app              ← Next.js App Router (pages & layouts)
  /styles
    globals.css   ← design tokens + global utilities
/components       ← reusable UI components
  /NavBar
  /Hero
  /Services
  /ServiceCard
  /Expertise
  /CTASection
  /Footer
  /LoadingMessage
```

All components use:

- semantic CSS variables
- CSS Modules for scoping
- global `.container` layout primitive
- zero Tailwind classes

---

## License

This project is proprietary and not licensed for redistribution.

---
