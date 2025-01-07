import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        {/* INSTRUCTION: create a list of links that allows the user to navigate to the Dogs, Cats, and SmallAnimals pages */}

        <Link to="/">Home</Link>
        <Link to="/dogs">Dogs</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/small-animals">SmallAnimals</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
