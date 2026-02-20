const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getPopularGames = async () => {
    const response = await fetch(`${BASE_URL}/games/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchGames = async (query) => {
    const response = await fetch(`${BASE_URL}/games/search?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}