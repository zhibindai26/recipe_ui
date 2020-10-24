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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  handleSubmit = (event) => {
    console.log(this.state);
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
          <EmailAddress email_address={email_address} handleChange={this.handleChange} />
          <RecipeName
            recipe_name={recipe_name}
            handleChange={this.handleChange}
          />
          <MealAndCuisine
            meal_type={meal_type}
            handleMeal={this.handleChange}
            cuisine={cuisine}
            handleCuisine={this.handleChange}
            mt={mt}
          />
          <MainIngredientAndSource
            main_ingredient={main_ingredient}
            handleMainIngredient={this.handleChange}
            source={source}
            handleSource={this.handleChange}
            mt={mt}
          />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default FindRecipeForm;
