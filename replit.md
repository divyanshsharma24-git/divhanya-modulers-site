# Divhanya Modulers - AI Automations & Technologies

## Overview

A premium marketing and lead-generation website for Divhanya Modulers, an AI automation company targeting small and medium businesses. The site features a futuristic dark theme with neon accents (cyan/purple), interactive animations, and a full lead capture system. It showcases automation services including WhatsApp integrations, CRM systems, n8n workflows, and booking automation for healthcare/service firms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom dark theme and neon accent colors
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for scroll reveals and micro-interactions
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful endpoints defined in shared route contracts
- **Build**: Vite for frontend bundling, esbuild for server bundling

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains all database tables
- **Validation**: Zod schemas auto-generated from Drizzle schemas via drizzle-zod
- **Migrations**: Drizzle Kit with `db:push` command

### Project Structure
```
client/           # React frontend application
  src/
    components/   # UI components including shadcn/ui
    pages/        # Route page components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Database access layer
  db.ts           # Database connection
shared/           # Shared code between client/server
  schema.ts       # Drizzle database schema
  routes.ts       # API contract definitions
attached_assets/  # Static assets (logo, founder image)
```

### Key Design Patterns
- **Shared Type Safety**: API contracts defined in `shared/routes.ts` with Zod schemas used by both client and server
- **Storage Abstraction**: Database operations encapsulated in `storage.ts` with interface pattern
- **Component-First UI**: shadcn/ui components in `client/src/components/ui/` for consistent design system

## External Dependencies

### Database
- **PostgreSQL**: Primary database via `DATABASE_URL` environment variable
- **Connection**: pg Pool with Drizzle ORM

### UI Libraries
- **Radix UI**: Complete set of accessible UI primitives (dialog, dropdown, toast, etc.)
- **Framer Motion**: Animation library for scroll effects and transitions
- **Embla Carousel**: Carousel/slider functionality
- **React Day Picker**: Calendar component

### Development Tools
- **Vite**: Development server with HMR
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner for Replit environment
- **Drizzle Kit**: Database schema management

### Fonts
- **Orbitron**: Display/heading font (futuristic tech aesthetic)
- **Space Grotesk**: Body text font
- **Google Fonts**: Loaded via CDN in index.html