import React, { Component } from "react";
import {
  SubmitButton,
  EmailAddress,
  RecipeName,
  MealAndCuisine,
  MainIngredientAndSource,
} from "./base-form";
import Hero from "./header";

class FindRecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email_address: "",
      recipe_name: "",
      meal_type: "",
      cuisine: "",
      main_ingredient: "",
      source: "",
    };
  }

  handleEmailAddress = (event) => {
    this.setState({ email_address: event.target.value });
  };

  handleRecipe = (event) => {
    this.setState({ recipe_name: event.target.value });
  };

  handleMeal = (event) => {
    this.setState({ meal_type: event.target.value });
  };

  handleCuisine = (event) => {
    this.setState({ cuisine: event.target.value });
  };

  handleMainIngredient = (event) => {
    this.setState({ main_ingredient: event.target.value });
  };

  handleSource = (event) => {
    this.setState({ source: event.target.value });
  };

  handleSubmit = (event) => {
    alert(`${this.state.main_ingredient}`);
    event.preventDefault();
  };

  render() {
    const {
      email_address,
      recipe_name,
      meal_type,
      cuisine,
      main_ingredient,
      source,
    } = this.state;

    const mt = ["A", "B"];

    return (
      <div className="container">
        <Hero title="Find Existing Recipes" />

        <form onSubmit={this.handleSubmit}>
          <EmailAddress email_address={email_address} handleEmailAddress={this.handleEmailAddress} />
          <RecipeName
            recipe_name={recipe_name}
            handleRecipe={this.handleRecipe}
          />
          <MealAndCuisine
            meal_type={meal_type}
            handleMeal={this.handleMeal}
            cuisine={cuisine}
            handleCuisine={this.handleCuisine}
            mt={mt}
          />
          <MainIngredientAndSource
            main_ingredient={main_ingredient}
            handleMainIngredient={this.handleMainIngredient}
            source={source}
            handleSource={this.handleSource}
            mt={mt}
          />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default FindRecipeForm;
