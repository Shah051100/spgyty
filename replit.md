# Peerzada Saadat Portfolio Website

## Overview

This is a modern cyberpunk-themed portfolio website for Peerzada Saadat, a Food Technology researcher from Kashmir, India. The application is built as a full-stack web application showcasing research work, experience, and providing contact functionality.

## System Architecture

### Frontend Architecture
- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS with custom cyberpunk theme using CSS variables
- **UI Components:** Shadcn/ui component library with Radix UI primitives
- **Routing:** Wouter for client-side routing
- **State Management:** TanStack Query for server state management
- **Forms:** React Hook Form with Zod validation
- **Fonts:** Orbitron and Roboto Mono for cyberpunk aesthetic

### Backend Architecture
- **Runtime:** Node.js with Express.js server
- **Development:** tsx for TypeScript execution in development
- **Build System:** esbuild for server bundling, Vite for client bundling
- **API Design:** RESTful API endpoints with structured error handling
- **Session Management:** Ready for connect-pg-simple session storage

### Database Layer
- **ORM:** Drizzle ORM with PostgreSQL dialect
- **Database:** PostgreSQL (configured for Neon serverless)
- **Schema Management:** Drizzle Kit for migrations
- **Development Storage:** In-memory storage class for development/testing

## Key Components

### Database Schema
Two main tables:
- `users`: User authentication with username/password
- `contact_submissions`: Contact form submissions with timestamp

### API Endpoints
- `POST /api/contact`: Submit contact form with validation
- `GET /api/contact-submissions`: Retrieve all contact submissions (admin)

### Frontend Sections
- Hero section with animated particles and cyberpunk styling
- About section with education timeline and certifications
- Research section showcasing food technology projects
- Experience section with professional timeline
- Skills section with technical competencies
- Publications section with research outputs
- Contact section with functional form submission

## Data Flow

1. **Contact Form Submission:**
   - User fills form → React Hook Form validation → Zod schema validation
   - API call via TanStack Query → Express route handler → Storage layer
   - Success/error feedback via toast notifications

2. **Static Content Rendering:**
   - React components render portfolio sections
   - CSS animations and transitions for cyberpunk effects
   - Responsive design with mobile-first approach

## External Dependencies

### Core Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- TanStack Query for data fetching
- Wouter for routing
- Zod for schema validation

### UI Dependencies
- Radix UI primitives for accessible components
- Tailwind CSS for styling
- Lucide React for icons
- Font Awesome (via CDN) for additional icons

### Backend Dependencies
- Express.js for server framework
- Drizzle ORM for database operations
- @neondatabase/serverless for PostgreSQL connection

### Development Dependencies
- Vite for frontend development and building
- tsx for TypeScript execution
- esbuild for backend bundling
- PostCSS and Autoprefixer for CSS processing

## Deployment Strategy

The application is configured for Replit deployment with:
- **Development:** `npm run dev` runs both frontend and backend
- **Production Build:** Vite builds frontend, esbuild bundles backend
- **Production Start:** `npm run start` serves the built application
- **Database:** Drizzle migrations via `npm run db:push`
- **Port Configuration:** Server runs on port 5000, proxied to port 80

The deployment uses Replit's autoscale target with proper build and run commands configured in `.replit` file.

## Changelog
- June 27, 2025. Initial setup
- June 27, 2025. Prepared portfolio for GitHub Pages deployment with static build configuration

## Recent Changes
- Created GitHub Actions workflow for automated deployment to GitHub Pages
- Built static version that works without backend server (contact form uses mailto)
- Generated production build with all assets optimized (1.5MB total)
- All authentic images and CV properly included in deployment package
- Ready for upload to GitHub repository and automatic deployment

## User Preferences

Preferred communication style: Simple, everyday language.