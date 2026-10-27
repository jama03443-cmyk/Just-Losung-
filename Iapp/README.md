# Just Lösung

One-page website built with React, Vite and Tailwind CSS.

## Local development

```sh
npm install
npm run dev
```

## Review the production build

```sh
npm run lint
npm run build
npm run preview
```

## Deploy to Vercel

The website files are in the `Iapp/` repository subdirectory. In Vercel, set **Root Directory** to `Iapp`, then keep the Vite defaults:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

`vercel.json` routes website paths to the single page. No environment variables are currently required.
