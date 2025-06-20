# Portfolio Application Documentation

## Overview

This is a modern portfolio web application for Raj Kumar, a DevOps & Cloud Engineer. The application is built as a full-stack web app with a React frontend and Express.js backend, showcasing professional experience, skills, projects, and providing contact functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight routing library)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Animation**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server-side bundling

### Key Components

#### Client-Side Components
- **Navigation**: Sticky navigation with smooth scroll behavior
- **Hero Section**: Animated landing area with call-to-action buttons
- **About Section**: Professional summary with animated reveals
- **Skills Section**: Technical skills with progress indicators and tool categories
- **Projects Section**: Detailed project showcases with features and technologies
- **Experience Section**: Timeline of work experience and certifications
- **Contact Section**: Contact form with resume download functionality
- **Footer**: Professional links and contact information

#### Server-Side Routes
- **Resume Download**: `/api/download-resume` - Serves resume PDF file
- **Contact Form**: `/api/contact` - Handles contact form submissions
- **Static Assets**: Serves client build files and attached assets

## Data Flow

1. **Client Request**: User navigates to the portfolio website
2. **Static Serving**: Vite dev server (development) or Express static middleware (production) serves the React application
3. **API Interactions**: 
   - Contact form submissions sent to `/api/contact`
   - Resume downloads triggered via `/api/download-resume`
4. **Response Handling**: Client receives API responses and updates UI accordingly

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with Radix UI components
- **Styling**: Tailwind CSS with PostCSS
- **Animation**: Framer Motion for complex animations
- **HTTP Client**: Native fetch API with TanStack Query wrapper
- **Icons**: Font Awesome icons via CDN
- **Fonts**: Google Fonts (Inter family)

### Backend Dependencies
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Driver**: Neon serverless PostgreSQL adapter
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for schema validation with drizzle-zod integration

### Development Tools
- **TypeScript**: Full-stack type safety
- **ESLint/Prettier**: Code formatting and linting
- **PostCSS**: CSS processing with Tailwind
- **Vite Plugins**: Runtime error handling and development enhancements

## Deployment Strategy

### Platform Configuration
- **Environment**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Development**: `npm run dev` - Runs tsx server with hot reload
- **Production Build**: `npm run build` - Vite client build + esbuild server bundle
- **Production Start**: `npm run start` - Runs compiled server from dist directory

### Database Configuration
- **ORM**: Drizzle with PostgreSQL dialect
- **Migrations**: Schema migrations in `./migrations` directory
- **Schema**: Centralized in `./shared/schema.ts` for type sharing
- **Push Command**: `npm run db:push` for schema synchronization

### Environment Variables
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment setting (development/production)
- **REPL_ID**: Replit-specific environment variable for development features

## AWS S3 Production Deployment

### Overview
The portfolio is designed for static hosting on AWS S3 with optional CloudFront CDN. This demonstrates practical cloud infrastructure knowledge relevant to DevOps roles.

### Deployment Process
1. **Build Production Assets**: `npm run build` creates optimized static files in `dist/client`
2. **S3 Bucket Setup**: Create bucket with static website hosting enabled
3. **File Upload**: Sync built files and attached assets to S3
4. **Configuration**: Set proper MIME types and caching headers
5. **Optional CDN**: CloudFront distribution for global performance

### Key Benefits
- **Cost Effective**: S3 hosting costs ~$0.023 per GB/month
- **Scalable**: Automatic scaling with AWS infrastructure
- **Professional**: Demonstrates cloud deployment skills
- **Performance**: Global CDN available with CloudFront

### Security Features
- Public read access for static files only
- HTTPS support with CloudFront and ACM certificates
- IAM roles with minimal required permissions
- CloudTrail logging for access monitoring

Detailed deployment instructions are available in `AWS_S3_HOSTING_GUIDE.md`.

### File Structure
```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # React components and UI library
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions and configurations
├── server/                 # Express.js backend
│   ├── index.ts           # Main server entry point
│   ├── routes.ts          # API route definitions
│   ├── vite.ts            # Vite integration for development
│   └── storage.ts         # Database abstraction layer
├── shared/                # Shared TypeScript types and schemas
│   └── schema.ts          # Database schema and validation
├── attached_assets/       # Static files (resume, etc.)
└── dist/                  # Production build output
```

## Changelog

```
Changelog:
- June 20, 2025. Initial setup
- June 20, 2025. Portfolio enhancement with LinkedIn profile picture integration
- June 20, 2025. Added comprehensive AWS S3 hosting guide and static asset serving
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```