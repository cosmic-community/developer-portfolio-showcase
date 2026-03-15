# Developer Portfolio Showcase
![App Preview](https://imgix.cosmicjs.com/aec47d60-2019-11f1-9a50-ab66d4c1cf00-photo-1500648767791-00dcc994a43e-1773543009864.jpg?w=1200&h=630&fit=crop&auto=format,compress)

A modern web developer portfolio powered by Cosmic, featuring projects, skills, work experience, and testimonials with a clean, responsive layout.

## Features
- Dynamic project listings with detail pages
- Skills and experience sections with metadata-driven layouts
- Testimonials grid with avatars and quotes
- Server-rendered data fetching for performance and security
- Responsive design optimized for all devices

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69b61e033704c8f1904cb980&clone_repository=69b61f123704c8f1904cb9bc)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials"

### Code Generation Prompt

> "Based on the content model I created for "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK

## Getting Started

### Prerequisites
- Bun installed on your machine
- A Cosmic bucket with the required object types

### Installation
```bash
// terminal
bun install
```

```bash
// terminal
bun run dev
```

## Cosmic SDK Examples
```typescript
// lib/cosmic.ts
import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})
```

## Cosmic CMS Integration
This app uses the Cosmic SDK to fetch projects, skills, work experience, and testimonials from your bucket using server-side data fetching. Learn more in the Cosmic docs: https://www.cosmicjs.com/docs

## Deployment Options
- Vercel (recommended for Next.js)
- Netlify (static export with server adjustments)
- Any Node-compatible hosting platform

<!-- README_END -->