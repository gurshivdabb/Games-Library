# Games Library

A full-stack web application for browsing and managing your favorite video games. Built with React and Express, this app fetches game data from the RAWG Video Games Database API. The main **purpose** is to learn REACT.

## Author

**Gurshiv Singh Dabb**

## Purpose

This project was created as a learning exercise to master **React frontend development**. The focus is on understanding React fundamentals including:
- Component architecture and composition
- React Context API for state management
- React Router for navigation
- React Hooks (useState, useEffect, useContext)
- API integration and data fetching
- Local storage for data persistence

---

## Features

- **Browse Popular Games**: View a curated list of popular video games
- **Search Functionality**: Search for games by name
- **Favorites Management**: Add/remove games to your favorites list with a heart toggle
- **Persistent Storage**: Favorites are saved to browser's local storage
- **Responsive Design**: Works seamlessly across different screen sizes
- **Game Cards**: Display game information with poster images and interactive elements

---

## Tech Stack

### Frontend
- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### External API
- **RAWG Video Games Database API** - Game data source

---

## Project Structure

```
Games-Library/
├── backend/           # Express API server
│   ├── server.js      # Main server file (Written by GitHub Copilot)
│   ├── package.json   # Backend dependencies
│   └── README.md      # Backend documentation
│
└── frontend/          # React application (Written by Gurshiv Singh Dabb)
    ├── src/           # Source files
    │   ├── components/
    │   ├── contexts/
    │   ├── pages/
    │   ├── css/       # CSS styling files
    │   └── services/
    ├── package.json   # Frontend dependencies
    └── README.md      # Frontend documentation
```

---

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- A **RAWG API key** (get one free at [https://rawg.io/apidocs](https://rawg.io/apidocs))

---

## Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Games-Library
```

### 2. Setup Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env and add your RAWG API key
npm run dev
```

The backend server will start on `http://localhost:5000`

See [backend/README.md](backend/README.md) for detailed backend documentation.

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

The frontend will start on `http://localhost:5173` (or another available port)

See [frontend/README.md](frontend/README.md) for detailed frontend documentation.

### 4. Access the Application

Open your browser and navigate to the URL displayed by Vite (typically `http://localhost:5173`)

---

## Documentation

- **[Backend Documentation](backend/README.md)** - Express server setup, API endpoints, and configuration
- **[Frontend Documentation](frontend/README.md)** - React app structure, components, and features

---

## Code Attribution

### Frontend
- **Author**: Gurshiv Singh Dabb

### Backend
- **Author**: GitHub Copilot

### CSS Styling
- **Credits**: Tech with Tim
- Special thanks for guidance through his YouTube video and for letting use his files for CSS

---

## Acknowledgments

- **Tech with Tim** - For helping with code implementation and providing excellent CSS styling files
- **GitHub Copilot** - For generating the backend server code
- **RAWG Video Games Database** - For providing the comprehensive game data API
- **React & Vite Documentation** - For excellent learning resources
- **Open Source Community** - For tools and inspiration

---

## Learning Outcomes

Through this project, I gained hands-on experience with:
- Building a full React application from scratch
- Managing global state with React Context
- Implementing client-side routing with React Router
- Working with external APIs and handling asynchronous data
- Persisting data using browser localStorage
- Creating reusable React components
- Understanding the full-stack development workflow

---

## Contributing

This is a personal learning project. Feedback and suggestions are welcome!

---

## License

This project is open source and available for educational purposes.

---

**Happy Gaming!**