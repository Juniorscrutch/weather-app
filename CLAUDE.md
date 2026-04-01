# CLAUDE.md - Weather App

This project uses AGENTS.md as the source of truth for AI assistant behavior (teaching style, interaction guidelines). See `./AGENTS.md` for those instructions.

This file documents the codebase structure, development workflows, and technical conventions.

## Project Overview

A weather application built as a [Frontend Mentor](https://www.frontendmentor.io) challenge. Users search for a city and view current conditions, a 7-day daily forecast, and an hourly forecast. The challenge requires unit toggling (Imperial/Metric), responsive design, and accessible interactive states.

The README specifies using the [Open-Meteo API](https://open-meteo.com/) (free, no key required), but the current implementation uses the [OpenWeatherMap API](https://openweathermap.org/api) (requires an API key via `VITE_WEATHER_API_KEY`).

## Repository Structure

```
weather-app/                  # Root — contains challenge starter files
├── AGENTS.md                 # AI assistant behavior instructions
├── CLAUDE.md                 # This file
├── README.md                 # Challenge description and user stories
├── style-guide.md            # Design specs: colors, fonts, layout widths
├── index.html                # Original starter HTML (not used by React app)
├── preview.jpg               # Design preview image
├── design/                   # Reference designs (JPG) — mobile, desktop, states
├── assets/                   # Challenge-provided assets
│   ├── fonts/                # DM Sans (300/500/600/600i/700), Bricolage Grotesque (700)
│   └── images/               # SVG/WebP icons, backgrounds, logo
└── weather-App/              # React application (main development directory)
    ├── package.json          # Dependencies and scripts
    ├── vite.config.js        # Vite configuration
    ├── eslint.config.js      # ESLint flat config
    ├── index.html            # Vite entry HTML
    ├── public/               # Static assets (favicon, icons SVG sprite)
    └── src/
        ├── main.jsx          # React entry point (StrictMode + createRoot)
        ├── App.jsx           # Root component — state management, search handler
        ├── style.css         # Global styles (single CSS file)
        ├── assets/           # App-specific images (hero, logos)
        ├── components/       # React components
        │   ├── Header.jsx        # App title + unit toggle button (placeholder)
        │   ├── SearchBar.jsx     # City search input + button
        │   ├── WeatherCard.jsx   # Current weather: city, icon, temperature
        │   ├── WeatherDetails.jsx# Feels like, humidity, wind, pressure
        │   ├── DailyForecast.jsx # 6-day forecast (filtered from 3-hour data)
        │   └── HourlyForecast.jsx# Next 8 intervals (3-hour) for selected day
        └── services/
            └── weatherApi.js # API calls (getWeather, getForecast)
```

## Tech Stack

- **Framework:** React 19 with JSX (no TypeScript)
- **Build tool:** Vite 8
- **Linting:** ESLint 9 (flat config) with react-hooks and react-refresh plugins
- **Styling:** Single global CSS file (`src/style.css`) — no CSS modules or preprocessors
- **API:** OpenWeatherMap (current weather + 5-day/3-hour forecast endpoints)
- **No testing framework** is currently configured
- **No state management library** — uses React `useState` in `App.jsx`

## Development Commands

All commands run from the `weather-App/` directory:

```bash
cd weather-App
npm install          # Install dependencies (must run first)
npm run dev          # Start Vite dev server
npm run build        # Production build to dist/
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Environment Variables

The app requires an OpenWeatherMap API key:

```
VITE_WEATHER_API_KEY=<your-key>
```

Set this in `weather-App/.env` (gitignored). Without it, API calls will fail.

**Note:** The challenge README recommends Open-Meteo (free, no key needed). The current implementation uses OpenWeatherMap instead.

## Architecture and Conventions

### Component Pattern
- Functional components only, no class components
- Props destructuring in function signatures (except `DailyForecast` which has a bug — receives props object but doesn't destructure)
- Components return `null` when data isn't available yet (guard pattern)
- No prop-types or TypeScript types

### State Management
- All state lives in `App.jsx`: `city`, `Weather`, `forecast`
- `handleSearch` in `App.jsx` orchestrates API calls and state updates
- No context, reducers, or external state libraries

### Styling
- Global CSS in `src/style.css` with class-based selectors
- Glassmorphism design: `rgba()` backgrounds, `backdrop-filter: blur()`
- Responsive breakpoints: 992px (tablet), 600px (mobile)
- CSS Grid for dashboard layout (2fr 1fr) and detail cards

### API Layer
- `services/weatherApi.js` exports `getWeather()` and `getForecast()`
- Both accept a city name string and return parsed JSON
- No error handling beyond checking `cod === 404` in `App.jsx`
- API key read from `import.meta.env.VITE_WEATHER_API_KEY`

## Design Reference

- Designs are in `/design/` (JPG format) — desktop, mobile, hover/focus/dropdown/loading/error states
- Style guide (`/style-guide.md`):
  - Layout widths: 375px (mobile), 1440px (desktop)
  - Colors: Neutral scale (hsl 243-based), Orange 500, Blue 500/700
  - Fonts: DM Sans (body, weights 300-700), Bricolage Grotesque (headings, 700)
  - Base font size: 18px
- Asset icons in `/assets/images/`: weather conditions (WebP), UI icons (SVG), backgrounds

## Known Issues and Incomplete Features

1. **API mismatch:** README specifies Open-Meteo API but code uses OpenWeatherMap
2. **Unit toggle not implemented:** Header button is a static placeholder ("°Celsuis" — also has a typo)
3. **DailyForecast prop bug:** Component uses `function DailyForecast(forecast)` instead of `({ forecast })`, causing inconsistent prop access
4. **No error handling UI:** API errors trigger `alert()` — no error/loading/no-results states matching the designs
5. **Missing accessibility:** No ARIA attributes, no keyboard handling for search (no Enter key support), no semantic landmarks
6. **Console.log in production code:** API key and data are logged to console
7. **Design fonts not loaded:** CSS uses "Inter" but style guide specifies DM Sans and Bricolage Grotesque
8. **No day selector** in hourly forecast (required by user stories)
9. **7-day forecast shows 6 days** and lacks high/low temperature display
