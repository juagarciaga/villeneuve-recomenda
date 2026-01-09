# Villeneuve Recomenda

Services recommended by residents on Residential Villeneuve neighborhoods

## Overview

This is a static website built with Next.js that serves as a community platform for residents of Residential Villeneuve neighborhoods to share and discover trusted local services and recommendations.

## Technology Stack

- **Next.js 16** - React framework for static site generation
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **React 19** - UI library

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
# Build the static site
npm run build
```

The static files will be generated in the `out` directory.

## Project Structure

```
villeneuve-recomenda/
├── app/                  # Next.js App Router
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles with Tailwind
├── out/                 # Static export output (generated)
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Static Export

This project is configured to export as a static site using Next.js's `output: "export"` feature. This means:

- All pages are pre-rendered at build time
- No server required for hosting
- Can be deployed to any static hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Deployment

The static site in the `out` directory can be deployed to any static hosting service:

### GitHub Pages

```bash
# Build the site
npm run build

# Deploy the out directory to GitHub Pages
```

### Other Platforms

Simply upload the contents of the `out` directory to your hosting provider.

## License

See [LICENSE](LICENSE) file for details.
