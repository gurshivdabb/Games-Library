import "../css/Favorites.css";
import { useGameContext } from "../contexts/GameContext";
import GameCard from "../components/GameCard";

function Favorites() {
  const { favorites } = useGameContext(); // Access the favorites list from the game context

  if (favorites && favorites.length > 0) {
    return (
      <div>
        <h2 className="favorites">Your Favorites</h2>
        <div className="game-grid">
          {favorites.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Games Yet</h2>
      <p>Start adding games to your favorites!</p>
    </div>
  );
}

export default Favorites;
