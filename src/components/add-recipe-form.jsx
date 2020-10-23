import React, { Component } from "react";
import {
  Hero,
  APIKeyForm,
  RecipeName,
  MealType,
  MainIngredient,
  Source,
  Cuisine,
} from "./base-form";

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
          <MealType
            meal_type={meal_type}
            handleMeal={this.handleMeal}
            mt={mt}
          />
          <Cuisine
            cuisine={cuisine}
            handleCuisine={this.handleCuisine}
            mt={mt}
          />
          <MainIngredient
            main_ingredient={main_ingredient}
            handleMainIngredient={this.handleMainIngredient}
            mt={mt}
          />
          <Source source={source} handleSource={this.handleSource} mt={mt} />

          <div className="field">
            <label className="label is-medium">Page</label>
            <div className="control">
              <input
                class="input is-medium"
                type="text"
                value={page}
                onChange={this.handlePage}
              />
            </div>
          </div>

          <div className="field">
            <label className="label is-medium">Link</label>
            <div className="control">
              <input
                class="input is-medium"
                type="text"
                value={link}
                onChange={this.handleLink}
              />
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link is-medium">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddRecipeForm;
