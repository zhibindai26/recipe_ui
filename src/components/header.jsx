import React from "react";

export default function Hero(props) {
  return (
    <section class="hero hero is-info is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{props.title}</h1>
        </div>
      </div>
    </section>
  );
}
