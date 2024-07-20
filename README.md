# Metaforiq.com

Personal portfolio and app to demo fun projects: canvas typewriter, canvas force rain matrix style, virtual pinball league data visualizations and libowski chat bot.

## Getting Started with Developing

This project uses a .env file for a few use cases:

1. Libowski base URL used on Libowski pages
    * LIBOWSKI_API_URL=[BASE URL]
1. Libowski session management
    * SECRET_KEY=[32 random characters]
1. Virtual Pinball Chat API
    * VPC_API_URL=[API URL]
1. (Optional) Google Tag Manager ID
    * NEXT_PUBLIC_GTM_ID=[Container ID]

Install and run the development server:

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Getting Started with Production

Install and run the development server:

```bash
npm install
```

```bash
npm run build
```

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

### Next.js

* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [React](https://react.dev/) - React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.
* [TailwindCSS](https://v2.tailwindcss.com/docs) - A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
* [React-Icons](https://react-icons.github.io/react-icons/) - Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
* [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - The Canvas API provides a means for drawing graphics via JavaScript and the HTML `<canvas>` element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing
* [Chart.js](https://www.chartjs.org/docs/latest/) - Chart.js provides a set of frequently used chart types, plugins, and customization options.
* [react-chartjs-v2](https://github.com/reactchartjs/react-chartjs-2) - React components for Chart.js, the most popular charting library.
* [antd](https://ant.design/docs/spec/introduce) - Help designers/developers building beautiful products more flexible and working with happiness
* [jose](https://github.com/panva/jose) - A JavaScript module for JSON Object Signing and Encryption.
* [zod](https://github.com/colinhacks/zod) - A TypeScript-first schema declaration and validation library.
* [lodash](https://github.com/lodash/lodash) - Lodash makes JavaScript easier by taking the hassle out of working with arrays,
numbers, objects, strings, etc.
* [sharp](https://github.com/lovell/sharp) - The typical use case for this high speed Node-API module is to convert large images in common formats to smaller, web-friendly JPEG, PNG, WebP, GIF and AVIF images of varying dimensions.
