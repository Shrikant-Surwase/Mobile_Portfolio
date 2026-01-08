# Shrikant's Portfolio

This is a modern, fully refactored portfolio built with [Next.js](https://nextjs.org), featuring a clean component architecture and organized codebase.

## 📋 Project Structure (Recently Refactored!)

The codebase has been refactored from a single 1000+ line component into a modular, maintainable architecture:

```
src/
├── app/page.tsx                    # Main entry (32 lines)
├── components/
│   ├── sections/                   # Feature sections (11 components)
│   └── ui/                         # Reusable UI components
└── constants/                      # Data & configuration (5 files)
```

**Documentation**: See [REFACTORING_SUMMARY.md](REFACTORING_SUMMARY.md), [REFACTORING_GUIDE.md](REFACTORING_GUIDE.md), [ARCHITECTURE.md](ARCHITECTURE.md), and [QUICK_REFERENCE.md](QUICK_REFERENCE.md) for details.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

