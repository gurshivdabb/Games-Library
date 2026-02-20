import GameCard from "../components/GameCard";
import { useState, useEffect } from "react";
import { searchGames, getPopularGames } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularGames = async () => {
      try {
        const popularGames = await getPopularGames();
        setGames(popularGames);
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to load popular games. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadPopularGames();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      return;
    }

    setLoading(true);

    if (loading) {
      return
    }

    try {
      const searchResults = await searchGames(searchQuery);
      setGames(searchResults);
      setError(null);
    } catch (err) {
      console.error("Search Error:", err);
      setError("Failed to search games. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search games..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="Loading">Loading...</div>
      ) : (
        <div className="game-grid">
          {games.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
