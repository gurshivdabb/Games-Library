/**
 * Backend server for the Games Library application.
 * 
 * Code by: GitHub Copilot
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const RAWG_API_KEY = process.env.RAWG_API_KEY;
const RAWG_BASE_URL = process.env.RAWG_BASE_URL;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/games/popular', async (req, res) => {
  try {
    const url = `${RAWG_BASE_URL}/games?key=${RAWG_API_KEY}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`RAWG API error: ${response.status}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching popular games:', error);
    res.status(500).json({ error: 'Failed to fetch games' });
  }
});

app.get('/api/games/search', async (req, res) => {
  try {
    const { query } = req.query;
    
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    
    const url = `${RAWG_BASE_URL}/games?search=${encodeURIComponent(query)}&key=${RAWG_API_KEY}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`RAWG API error: ${response.status}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error searching games:', error);
    res.status(500).json({ error: 'Failed to search games' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
