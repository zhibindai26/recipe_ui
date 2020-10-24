import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <Link to="/">
        <a class="navbar-item">Home</a>
      </Link>
      <Link to="/find">
        <a class="navbar-item">Find Recipes</a>
      </Link>
      <Link to="/add">
        <a class="navbar-item">Add Recipe</a>
      </Link>
    </nav>
  );
}
