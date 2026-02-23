/**
 * NavBar.jsx
 * Component to display the navigation bar at the top of the application.
 * Provides links to the Home and Favorites pages.
 */

import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Games Library</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/favorites" className="navbar-link">Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;