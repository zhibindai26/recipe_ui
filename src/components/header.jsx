import React from "react";

export default function Hero(props) {
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
