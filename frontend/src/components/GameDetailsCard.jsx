function GameDetailsCard({ game }) {
  return (
    <div className="game-details-card">
      <div className="game-image">
        <img src={game.background_image} alt={game.name} />
      </div>
      <div className="game-details">
        <h2>{game.name}</h2>
        <p><strong>Released:</strong> {game.released}</p>
        <p><strong>Rating:</strong> {game.rating}</p>
        <p><strong>Description:</strong> {game.description_raw}</p>
      </div>
    </div>
  );
}

export default GameDetailsCard;
