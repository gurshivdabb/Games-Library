# Backend - Games Library API

Express server that provides API endpoints to fetch game data from the RAWG Video Games Database API.

---

## Tech Stack

- **Node.js** - Runtime environment
- **Express** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

---

## Project Structure

```
backend/
├── server.js        # Express server with API routes
├── package.json     # Dependencies and scripts
├── .env             # Environment variables (not in git)
└── .env.example     # Environment variables template
```

---

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- A **RAWG API key** from [https://rawg.io/apidocs](https://rawg.io/apidocs)

---

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

```bash
# Create .env file from example
cp .env.example .env
```

Edit `.env` and add your configuration:

```env
RAWG_API_KEY=your_api_key_here
RAWG_BASE_URL=https://api.rawg.io/api
PORT=5000
```

### 3. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:5000`

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the production server |
| `npm run dev` | Start the development server with auto-reload |

---

## 🔌 API Endpoints

### Get Popular Games

```http
GET /api/games/popular
```

**Response:**
```json
{
  "results": [
    {
      "id": 1,
      "name": "Game Name",
      "background_image": "https://...",
      "released": "2024-01-01",
      ...
    }
  ]
}
```

### Search Games

```http
GET /api/games/search?query=<search_term>
```

**Parameters:**
- `query` (required) - The search term for game name

**Response:**
```json
{
  "results": [
    {
      "id": 1,
      "name": "Game Name",
      "background_image": "https://...",
      "released": "2024-01-01",
      ...
    }
  ]
}
```

### Health Check

```http
GET /health
```

**Response:**
```json
{
  "status": "Server is running"
}
```

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `RAWG_API_KEY` | Your RAWG API key (required) | - |
| `RAWG_BASE_URL` | RAWG API base URL | `https://api.rawg.io/api` |
| `PORT` | Server port | `5000` |

---

## Testing

You can test the API endpoints using curl or any API client:

```bash
# Health check
curl http://localhost:5000/health

# Get popular games
curl http://localhost:5000/api/games/popular

# Search games
curl http://localhost:5000/api/games/search?query=zelda
```

---

## Troubleshooting

### Server won't start
- Ensure port 5000 is not already in use
- Check that all dependencies are installed (`npm install`)
- Verify your `.env` file exists and has the correct configuration

### API returns errors
- Verify your RAWG API key is valid
- Check your internet connection
- Ensure the RAWG API service is operational

---

## Notes

- The server uses CORS to allow requests from any origin
- All game data is fetched from the RAWG API in real-time
- No database is used; this is a proxy/gateway API

---

[← Back to main README](../README.md)
