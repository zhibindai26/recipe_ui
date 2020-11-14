import React from "react";
import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <section className="hero is-info is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{props.title}</h1>
        </div>
      </div>
    </section>
  );
}

function Navbar() {
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <Link to="/">
        <a className="navbar-item">Home</a>
      </Link>
      <Link to="/find">
        <a className="navbar-item">Find Recipes</a>
      </Link>
      <Link to="/add">
        <a className="navbar-item">Add Recipe</a>
      </Link>
      <Link to="/all_recipes">
        <a className="navbar-item">All Recipes</a>
      </Link>
    </nav>
  );
}

function Footer() {
  return (
    <section className="section">
      <div className="container"></div>
    </section>
  );
}

function Loading() {
  return (
    <div>
      <h1 className="subtitle">Loading...</h1>
    </div>
  );
}

export { Hero, Navbar, Footer, Loading };
