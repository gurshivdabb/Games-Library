# Frontend - Games Library

React application for browsing and managing your favorite video games.

---

## Tech Stack

- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling

---

## Project Structure

```
frontend/
├── public/            # Static assets
├── src/
│   ├── assets/        # Images and media
│   ├── components/    # Reusable React components
│   │   ├── GameCard.jsx
│   │   └── NavBar.jsx
│   ├── contexts/      # React Context providers
│   │   └── GameContext.jsx
│   ├── css/           # Component styles
│   │   ├── App.css
│   │   ├── Favorites.css
│   │   ├── GameCard.css
│   │   ├── Home.css
│   │   ├── index.css
│   │   └── NavBar.css
│   ├── pages/         # Page components
│   │   ├── Home.jsx
│   │   └── Favorites.jsx
│   ├── services/      # API service functions
│   │   └── api.js
│   ├── App.jsx        # Main app component
│   └── main.jsx       # App entry point
├── package.json       # Dependencies
├── vite.config.js     # Vite configuration
└── .env.example       # Environment variables template
```

---

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- Backend server running on `http://localhost:5000`

---

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment (Optional)

```bash
# Create .env file from example if needed
cp .env.example .env
```

### 3. Start Development Server

```bash
npm run dev
```

The app will start on `http://localhost:5173` (or another port if 5173 is busy)

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server with hot reload |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🎨 Features & Components

### Pages

#### Home (`/`)
- Displays popular games on initial load
- Search bar for finding games by name
- Grid layout of game cards
- Loading and error states

#### Favorites (`/favorites`)
- Displays all favorited games
- Empty state when no favorites exist
- Persistent across browser sessions

### Components

#### GameCard
- Reusable card component for displaying game information
- Shows game poster image, name, and release date
- Heart icon toggle for adding/removing favorites
- Hover overlay with interactive elements

#### NavBar
- Navigation links to Home and Favorites pages
- Responsive design
- Active route highlighting

### Context & State Management

#### GameContext
- Manages global favorites state using React Context API
- Provides functions:
  - `addToFavorites(game)` - Add game to favorites
  - `removeFromFavorites(gameId)` - Remove game by ID
  - `isFavorite(gameId)` - Check if game is favorited
- Persists favorites to localStorage
- Automatically syncs with localStorage on changes

### Services

#### API Service (`api.js`)
- `getPopularGames()` - Fetches popular games from backend
- `searchGames(query)` - Searches games by name
- Includes error handling and logging

---

## 🎯 Key React Concepts Used

- **Functional Components** - Modern React component syntax
- **React Hooks**:
  - `useState` - Component state management
  - `useEffect` - Side effects and lifecycle
  - `useContext` - Accessing context data
- **React Router** - Client-side routing and navigation
- **Context API** - Global state management for favorites
- **Component Composition** - Reusable, modular components
- **Conditional Rendering** - Loading states, empty states
- **Event Handling** - User interactions and form submissions

---

## 🔧 Configuration

### Vite Config
The project uses Vite's React plugin for fast HMR (Hot Module Replacement) and optimized builds.

### ESLint
Configured with React-specific rules for code quality and best practices.

---

## Troubleshooting

### Development server won't start
- Ensure Node.js is installed (v18+)
- Delete `node_modules` and run `npm install` again
- Check if port 5173 is already in use

### Games not loading
- Ensure the backend server is running on `http://localhost:5000`
- Check browser console for API errors
- Verify backend has valid RAWG API key configured

### Favorites not persisting
- Check browser localStorage is enabled
- Open DevTools → Application → Local Storage
- Look for `favorites` key

---

## Notes

- This app requires the backend server to be running to fetch game data
- Favorites are stored locally in the browser
- The app uses the backend as a proxy to the RAWG API

---

[← Back to main README](../README.md)