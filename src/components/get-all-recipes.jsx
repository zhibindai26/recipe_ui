import React, { Component } from "react";
import { Hero, Loading } from "./basic-page";
import callAPI from "../methods/api";

class GetAllRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      method_type: "GET",
      email_address: this.props.email_address,
      recipe_name: "",
      meal_type: "",
      cuisine: "",
      main_ingredient: "",
      source: "",
      sample: 2,
      loading: true,
    };
  }

  componentDidMount() {
    let submitState = this.state;
    delete submitState.loading;

    callAPI(submitState).then((recipes) => {
      this.setState({ recipes: recipes.body.Recipes, loading: false });
    });
  }

  render() {
    const { loading, recipes } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (recipes) {
      return (
        <div className="container">
          <Hero title="All Recipes" />
          <div>{recipes[0].Recipe}</div>
        </div>
      );
    }
  }
}

export default GetAllRecipes;
