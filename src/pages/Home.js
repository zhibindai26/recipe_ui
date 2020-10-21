import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import "bulma/css/bulma.css";
import Button from "../components/button";

export default function Home() {
  return (
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Recipe Finder!</h1>
        </div>
      </div>
    </section>
  );
}
