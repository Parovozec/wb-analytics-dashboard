# WB Analytics Dashboard

Real-time sales analytics dashboard for Wildberries marketplace sellers.

## Stack

- **React 18** + **TypeScript** (strict mode)
- **Zustand** — global state management
- **Recharts** — data visualization
- **Vite** — build tool

## Features

- Revenue, orders, AOV, return rate KPIs with growth indicators
- Interactive area chart with 7d / 30d / 90d period filtering
- Top products table with stock and ratings
- Dark theme, responsive layout
- Optimistic loading with cancellable fetch

## Architecture

```
src/
├── api/          # Data fetching layer
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── pages/        # Page-level components
├── store/        # Zustand stores
├── styles/       # Global CSS
└── types/        # TypeScript interfaces
```

## Run

```bash
npm install
npm run dev
```
