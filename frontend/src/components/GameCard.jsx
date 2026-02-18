function GameCard({game}) {

    function onFavClick() {
        alert("Clicked");
    }

    return (
    <div className="game-card">
        <div className="game-image">
            <img src={game.url} alt={game.title} />
            <div className="game-overlay">
                <button className="fav-btn" onClick={onFavClick}>
                    ❤️
                </button>
            </div>
        </div>
        <div className="game-info">
            <h3>{game.title}</h3>
            <p>{game.releaseDate}</p>
        </div>
    </div>
    );
}

export default GameCard;