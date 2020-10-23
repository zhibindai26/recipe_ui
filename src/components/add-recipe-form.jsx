import React, { Component } from "react";

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
    alert(`${this.state.page}`);
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
        <section class="hero hero is-info is-primary is-bold">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Add a New Recipe to the Recipe Database</h1>
            </div>
          </div>
        </section>

        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label is-medium">API Key</label>
            <div className="control">
              <input
                class="input is-medium"
                type="text"
                value={api_key}
                onChange={this.handleAPIKey}
              />
            </div>
          </div>

          <div className="field">
            <label className="label is-medium">Recipe Name</label>
            <div className="control">
              <input
                class="input is-medium"
                type="text"
                value={recipe_name}
                onChange={this.handleRecipe}
              />
            </div>
          </div>

          <div className="field">
            <label class="label is-medium">Meal Type</label>
            <div class="control">
              <input
                type="text"
                list="meal_type"
                value={meal_type}
                onChange={this.handleMeal}
              />
              <datalist id="meal_type">
                {mt.map((meal, index) => (
                  <option key={index}>{meal}</option>
                ))}
              </datalist>
            </div>
          </div>

          <div className="field">
            <label class="label is-medium">Cuisine</label>
            <div class="control">
              <input
                type="text"
                list="cuisine"
                value={cuisine}
                onChange={this.handleCuisine}
              />
              <datalist id="cuisine">
                {mt.map((meal, index) => (
                  <option key={index}>{meal}</option>
                ))}
              </datalist>
            </div>
          </div>

          <div className="field">
            <label class="label is-medium">Main Ingredient</label>
            <div class="control">
              <input
                type="text"
                list="main_ingredient"
                value={main_ingredient}
                onChange={this.handleMainIngredient}
              />
              <datalist id="main_ingredient">
                {mt.map((ingredient, index) => (
                  <option key={index}>{ingredient}</option>
                ))}
              </datalist>
            </div>
          </div>

          <div className="field">
            <label class="label is-medium">Source</label>
            <div class="control">
              <input
                type="text"
                list="source"
                value={source}
                onChange={this.handleSource}
              />
              <datalist id="source">
                {mt.map((source, index) => (
                  <option key={index}>{source}</option>
                ))}
              </datalist>
            </div>
          </div>
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
