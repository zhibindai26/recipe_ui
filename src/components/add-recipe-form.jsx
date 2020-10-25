import React, { Component } from "react";
import {
  Login,
  SubmitButton,
  RecipeName,
  MealAndCuisine,
  MainIngredientAndSource,
  Page,
  Link,
} from "./base-form";
import Hero from "./header";

class AddRecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
      email_address: "",
      api_key: "",
      recipe_name: "",
      meal_type: "",
      cuisine: "",
      main_ingredient: "",
      source: "",
      page: "",
      link: "",
    };
  }

  handleLogin = (event) => {
    this.setState({
      login: true,
    });
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
      page,
      link,
    } = this.state;

    const mt = ["A", "B"];

    if (login) {
      return (
        <div className="container">
          <Hero title="Add a New Recipe to the Recipe Database" />

          <form onSubmit={this.handleSubmit}>
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
            <Page page={page} handleChange={this.handleChange} />
            <Link link={link} handleChange={this.handleChange} />
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

export default AddRecipeForm;
