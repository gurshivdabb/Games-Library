import GameCard from "../components/GameCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const games = [
    { id: 1, title: "Red Dead Redemption 2", releaseDate: "2018-10-26" },
    { id: 2, title: "The Witcher 3: Wild Hunt", releaseDate: "2015-05-19" },
    { id: 3, title: "Cyberpunk 2077", releaseDate: "2020-12-10" },
    { id: 4, title: "God of War", releaseDate: "2018-04-20" },
    { id: 5, title: "Marvel's Spider-Man 2", releaseDate: "2023-10-20" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    setSearchQuery("");
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

      <div className="game-grid">
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
