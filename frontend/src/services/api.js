const BACKEND_URL = "http://localhost:5000/api";

console.log("Using backend URL:", BACKEND_URL);

export const getPopularGames = async () => {
    try {
        const response = await fetch(`${BACKEND_URL}/games/popular`);
        
        if (!response.ok) {
            throw new Error(`Backend error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("API Response:", data);
        return data.results || [];
    } catch (error) {
        console.error("Error fetching popular games:", error);
        throw error;
    }
};

export const searchGames = async (query) => {
    try {
        const response = await fetch(`${BACKEND_URL}/games/search?query=${encodeURIComponent(query)}`);
        
        if (!response.ok) {
            throw new Error(`Backend error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Search Response:", data);
        return data.results || [];
    } catch (error) {
        console.error("Error searching games:", error);
        throw error;
    }
}