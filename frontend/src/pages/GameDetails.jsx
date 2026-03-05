import GameDetailsCard from "../components/GameDetailsCard";
import { useLocation } from "react-router-dom";

function GameDetails() {
  const location = useLocation();
  const game = location.state?.game;

  if (!game) {
    return <p>Game details not available.</p>;
  }

  return (
    <div>
      <h1>Game Details</h1>
      <GameDetailsCard game={game}/>
    </div>
  );
}

export default GameDetails;
