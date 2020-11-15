import React, { Component } from "react";
import { Hero, Loading } from "./basic-page";
import callAPI from "../methods/api";
import RecipesTable from "../components/table";

class GetAllRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      method_type: "GET",
      recipe_name: "",
      meal_type: "",
      cuisine: "",
      main_ingredient: "",
      source: "",
      loading: true,
      sample: 9999,
      email_address: this.props.email_address,
    };
  }

  componentDidMount() {
    let submit = this.state;
    delete submit.loading;

    callAPI(submit).then((recipes) => {
      this.setState({ recipes: recipes.body.Recipes, loading: false });
    });
  }

  render() {
    const { loading, recipes } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (recipes) {
      // need to get table and display it
      return (
        <div className="container">
          <Hero title="All Recipes" />
          {recipes.map((e) => (
            <RecipesTable key={recipes.indexOf(e)} name={e.Recipe} />
          ))}
        </div>
      );
    }
  }
}

export default GetAllRecipes;
