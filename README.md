# Premium Single Product Showcase

A visually stunning single product showcase page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern UI design
- 📱 Fully responsive layout
- ✨ Smooth animations
- 🖼️ Product image display
- 🎯 Product information showcase
- 📋 Technical specifications
- 🚀 Optimized performance

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library

## Getting Started

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the page.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
single-product/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── ProductInfo.tsx     # Product information component
│   ├── ProductFeatures.tsx # Product features component
│   ├── ProductSpecs.tsx    # Product specifications component
│   └── CTA.tsx             # Call-to-action component
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Customization

You can easily customize:

- Product image: Modify the image URL in `app/page.tsx`
- Product information: Modify content in `components/ProductInfo.tsx`
- Product features: Modify the `features` array in `components/ProductFeatures.tsx`
- Technical specifications: Modify the `specs` array in `components/ProductSpecs.tsx`
- Color theme: Modify color configuration in `tailwind.config.js`

## License

MIT
