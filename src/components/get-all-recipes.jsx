import React, { Component } from "react";
import { Hero } from "./basic-page";

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
