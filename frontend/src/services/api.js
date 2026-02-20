const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const CORS_PROXY = "https://api.allorigins.win/raw?url=";

console.log("API_KEY:", API_KEY);
console.log("BASE_URL:", BASE_URL);

export const getPopularGames = async () => {
    const url = `${BASE_URL}/games?key=${API_KEY}`;
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(url)}`);
    const data = await response.json();
    console.log("API Response:", data);
    return data.results || [];
};

export const searchGames = async (query) => {
    const url = `${BASE_URL}/games?search=${encodeURIComponent(query)}&key=${API_KEY}`;
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(url)}`);
    const data = await response.json();
    console.log("Search Response:", data);
    return data.results || [];
}