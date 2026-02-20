import '../css/GameCard.css';

function GameCard({game}) {

    function onFavClick() {
        alert("Clicked");
    }

    return (
    <div className="game-card">
        <div className="game-poster">
            <img src={game.background_image} alt={game.name} />
            <div className="game-overlay">
                <button className="fav-btn" onClick={onFavClick}>
                    ❤️
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