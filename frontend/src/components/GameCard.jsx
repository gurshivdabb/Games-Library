/**
 * GameCard.jsx
 * Component to display individual game information in a card format.
 */

import '../css/GameCard.css';
import { useGameContext } from "../contexts/GameContext"; // Import the GameContext to manage favorites

function GameCard({game}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useGameContext(); // Access the game context functions
    const favorite = isFavorite(game.id) // Check if the current game is in the favorites list

    function onFavClick(e) {
        e.preventDefault(); // Prevent default button behavior
        if (favorite) {
            removeFromFavorites(game.id); // If the game is already a favorite, remove it from the favorites list
        } else {
            addToFavorites(game); // If the game is not a favorite, add it to the favorites list
        }
    }

    return (
    <div className="game-card">
        <div className="game-poster">
            <img src={game.background_image} alt={game.name} />
            <div className="game-overlay">
                <button className={`fav-btn ${favorite ? "active" : ""}`} onClick={onFavClick}>
                    {favorite ? "❤️" : "🤍"}
                </button>
            </div>
        </div>
        <div className="game-info">
            <h3>{game.name}</h3>
            <p>{game.released}</p>
        </div>
    </div>
    );
}

export default GameCard;