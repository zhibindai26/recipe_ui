import React, { Component } from "react";
import {
  Login,
  SubmitButton,
  RecipeName,
  MealAndCuisineReadOnly,
  MainIngredientAndSourceReadOnly,
  Sample,
} from "./base-form";
import Hero from "./header";

class FindRecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email_address: "",
      login: false,
      recipe_name: "",
      meal_type: "",
      cuisine: "",
      main_ingredient: "",
      source: "",
      sample: 1,
    };
  }

  handleLogin = (event) => {
    let email = this.state.email_address.trim();
    if (email) {
      this.setState({
        login: true,
      });
    }
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    const {
      login,
      email_address,
      recipe_name,
      meal_type,
      cuisine,
      main_ingredient,
      source,
      sample,
    } = this.state;

    const mt = ["", "A Test Value", "B Test Value"];

    if (login) {
      return (
        <div className="container">
          <Hero title="Find Existing Recipes" />

          <form onSubmit={this.handleSubmit}>
            <RecipeName
              recipe_name={recipe_name}
              handleChange={this.handleChange}
            />
            <MealAndCuisineReadOnly
              meal_type={meal_type}
              handleMeal={this.handleChange}
              cuisine={cuisine}
              handleCuisine={this.handleChange}
              mt={mt}
            />
            <MainIngredientAndSourceReadOnly
              main_ingredient={main_ingredient}
              handleMainIngredient={this.handleChange}
              source={source}
              handleSource={this.handleChange}
              mt={mt}
            />
            <Sample sample={sample} handleSample={this.handleChange} />
            <SubmitButton />
          </form>
        </div>
      );
    }

    return (
      <Login
        handleLogin={this.handleLogin}
        email_address={email_address}
        handleChange={this.handleChange}
      />
    );
  }
}

export default FindRecipeForm;
