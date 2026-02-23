/**
 * GameContext.jsx
 * Context to manage game-related state across the application.
 * Provide state and helper functions related to games and favorites to the entire app.
 * This context allows components to access and modify the list of games and favorites without prop drilling.
 */

import { createContext, useState, useContext, useEffect } from "react";

const GameContext = createContext(); // Create a context for game-related state

export const useGameContext = () => useContext(GameContext); // Custom hook to easily access the GameContext in components

/**
 * GameProvider component that wraps the application and provides the game context value to its children.
 *
 * @param {Object} children - The child components that will have access to the game context
 * @returns {JSX.Element} - The GameContext.Provider component that wraps the children and provides the game context value
 */

export const GameProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  // Save favorites to localStorage whenever the favorites state changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to add a game to the favorites list
  const addToFavorites = (game) => {
    setFavorites((prev) => [...prev, game]);
  };

  // Function to remove a game from the favorites list by its ID
  const removeFromFavorites = (gameId) => {
    setFavorites((prev) => prev.filter((game) => game.id !== gameId));
  };

  // Function to check if a game is in the favorites list by its ID
  const isFavorite = (gameId) => {
    return favorites.some((game) => game.Id === gameId);
  };

  // The value object that will be provided to the context consumers, containing the favorites state and helper functions
  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
