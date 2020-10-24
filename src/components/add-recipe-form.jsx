import React, { Component } from "react";
import {
  SubmitButton,
  APIKeyForm,
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

  handleAPIKey = (event) => {
    this.setState({ api_key: event.target.value });
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

  handlePage = (event) => {
    this.setState({ page: event.target.value });
  };
  handleLink = (event) => {
    this.setState({ link: event.target.value });
  };
  handleSubmit = (event) => {
    alert(`${this.state.cuisine}`);
    event.preventDefault();
  };

  render() {
    const {
      api_key,
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
          <APIKeyForm api_key={api_key} handleAPIKey={this.handleAPIKey} />
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
          <Page page={page} handlePage={this.handlePage} />
          <Link link={link} handleLink={this.handleLink} />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default AddRecipeForm;
