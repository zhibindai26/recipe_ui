import React, { Component } from "react";
import {
  SubmitButton,
  EmailAddress,
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

  handleChange = event => {
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
      page,
      link,
    } = this.state;

    const mt = ["A", "B"];

    return (
      <div className="container">
        <Hero title="Add a New Recipe to the Recipe Database" />

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
          <Page page={page} handleChange={this.handleChange} />
          <Link link={link} handleChange={this.handleChange} />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default AddRecipeForm;
