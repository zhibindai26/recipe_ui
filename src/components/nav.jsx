import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <Link to="/">
        <a className="navbar-item">Home</a>
      </Link>
      <Link to="/email">
        <a className="navbar-item">Find Recipes</a>
      </Link>
      <Link to="/add">
        <a className="navbar-item">Add Recipe</a>
      </Link>
    </nav>
  );
}
