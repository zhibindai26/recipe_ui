import React, { Component } from "react";
import Hero from "../components/header";

class GetAllRecipes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Hero title="All Recipes" />
      </div>
    );
  }
}

export default GetAllRecipes;
