# Alto Accounting

## Overview

Alto Accounting is a professional accounting services website built as a full-stack TypeScript application. The project presents bookkeeping, tax preparation, and advisory services with an elegant corporate design featuring navy, white, and gold color schemes. It's structured as a monorepo with a React frontend and Express backend, designed for deployment on Replit.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui component library (new-york style) built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state and caching
- **Animations**: Framer Motion for page transitions and interactive elements
- **Typography**: Libre Baskerville (serif) and Plus Jakarta Sans (sans-serif) from Google Fonts

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript compiled with tsx for development, esbuild for production
- **API Pattern**: RESTful API with `/api` prefix convention
- **Static Serving**: Express static middleware serves built frontend assets in production

### Build System
- **Frontend Build**: Vite with React plugin, outputs to `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.cjs`
- **Development**: Vite dev server with HMR proxied through Express

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Validation**: Zod schemas generated via drizzle-zod for type-safe validation
- **Migrations**: Drizzle Kit manages database migrations in `./migrations` directory
- **Current Storage**: In-memory storage implementation exists as fallback; PostgreSQL connection expected via `DATABASE_URL`

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Route page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer interface
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle database schema
└── script/           # Build scripts
```

### Path Aliases
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets` → `./attached_assets`

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connected via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage for Express sessions (available but not currently configured)

### Core Libraries
- **drizzle-orm**: Type-safe ORM for database operations
- **express**: HTTP server framework
- **@tanstack/react-query**: Async state management for API calls
- **zod**: Runtime type validation

### UI Framework
- **Radix UI**: Headless accessible component primitives (accordion, dialog, dropdown, etc.)
- **class-variance-authority**: Component variant styling
- **tailwind-merge**: Tailwind class conflict resolution
- **lucide-react**: Icon library
- **embla-carousel-react**: Carousel component

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling (dev only)
- **@replit/vite-plugin-dev-banner**: Development banner (dev only)