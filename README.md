# Nipper Repair Services

This is the official website for Nipper Repair Services, a professional diesel and heavy equipment repair business.

## Features

- Landing page with service overview
- Detailed service pages
- Diagnostic software e-commerce
- Technical support forums
- Client portal for equipment management
- Service scheduling and tracking
- Subscription plan management
- Invoicing and payment processing
- Live chat support with SMS integration

## Getting Started

First, install the dependencies:

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

Then, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Copy the `.env.example` file to `.env.local` and fill in the required environment variables:

\`\`\`bash
cp .env.example .env.local
\`\`\`

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure the environment variables
4. Deploy

For other platforms, build the project first:

\`\`\`bash
npm run build
# or
yarn build
# or
pnpm build
\`\`\`

Then start the production server:

\`\`\`bash
npm run start
# or
yarn start
# or
pnpm start
\`\`\`

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components
- `/lib` - Utility functions and API helpers
- `/public` - Static assets
- `/types` - TypeScript type definitions

