# Metaforiq.com

Personal portfolio and app to demo fun projects: canvas typewriter, canvas force rain matrix style, virtual pinball league data visualizations and libowski chat bot.

## Getting Started with Local Development

For local development, we use Docker Compose to run the entire stack. This ensures a consistent environment for all developers and provides real-time debugging with combined logging.

Before you begin, ensure you have the `rpi-docker-compose`, `metaforiq-node`, and `rpi-nginx` repositories cloned as sibling directories.

1. **Start the services**
   Run this command from the root of the `rpi-docker-compose` directory.

   ```bash
   docker compose up
   ```

2. **Access the application**
   The Next.js web application should be accessible in your browser at `http://localhost`.

3. **Stopping the services**
   To stop all services, press `Ctrl + C` in your terminal. To stop and remove the containers, run the following command.

   ```bash
   docker compose down
   ```

## Getting Started with Production

Production deployment is fully automated via GitHub Actions and Docker Hub. The following command is used on the server to pull the latest images and restart all services.

1. **Start the services**
   Ensure you are in the `rpi-docker-compose` directory on your server and have your `.env` files in place.

   ```bash
   docker compose up -d
   ```

2. **View the application**
   Once the containers are up, the application should be live and accessible at `https://metaforiq.com`.

## Tech Stack

### Next.js

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [React](https://react.dev/) - React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.
- [TailwindCSS](https://v2.tailwindcss.com/docs) - A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
- [React-Icons](https://react-icons.github.io/react-icons/) - Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - The Canvas API provides a means for drawing graphics via JavaScript and the HTML `<canvas>` element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing
- [antd](https://ant.design/docs/spec/introduce) - Help designers/developers building beautiful products more flexible and working with happiness
- [jose](https://github.com/panva/jose) - A JavaScript module for JSON Object Signing and Encryption.
- [zod](https://github.com/colinhacks/zod) - A TypeScript-first schema declaration and validation library.
- [sharp](https://github.com/lovell/sharp) - The typical use case for this high speed Node-API module is to convert large images in common formats to smaller, web-friendly JPEG, PNG, WebP, GIF and AVIF images of varying dimensions.
