import React from "react";

function Hero(props) {
  return (
    <section class="hero hero is-info is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{props.title}</h1>
        </div>
      </div>
    </section>
  );
}

function APIKeyForm(props) {
  return (
    <div className="field">
      <label className="label is-medium">API Key</label>
      <div className="control">
        <input
          class="input is-medium"
          type="text"
          value={props.api_key}
          onChange={props.handleAPIKey}
        />
      </div>
    </div>
  );
}

function RecipeName(props) {
  return (
    <div className="field">
      <label className="label is-medium">Recipe Name</label>
      <div className="control">
        <input
          class="input is-medium"
          type="text"
          value={props.recipe_name}
          onChange={props.handleRecipe}
        />
      </div>
    </div>
  );
}

function MealType(props) {
  return (
    <div className="field">
      <label class="label is-medium">Meal Type</label>
      <div class="control">
        <input
          type="text"
          list="meal_type"
          value={props.meal_type}
          onChange={props.handleMeal}
        />
        <datalist id="meal_type">
          {props.mt.map((meal, index) => (
            <option key={index}>{meal}</option>
          ))}
        </datalist>
      </div>
    </div>
  );
}

function Cuisine(props) {
  return (
    <div className="field">
      <label class="label is-medium">Cuisine</label>
      <div class="control">
        <input
          type="text"
          list="cuisine"
          value={props.cuisine}
          onChange={props.handleCuisine}
        />
        <datalist id="cuisine">
          {props.mt.map((meal, index) => (
            <option key={index}>{meal}</option>
          ))}
        </datalist>
      </div>
    </div>
  );
}

function MainIngredient(props) {
  return (
    <div className="field">
      <label class="label is-medium">Main Ingredient</label>
      <div class="control">
        <input
          type="text"
          list="main_ingredient"
          value={props.main_ingredient}
          onChange={props.handleMainIngredient}
        />
        <datalist id="main_ingredient">
          {props.mt.map((ingredient, index) => (
            <option key={index}>{ingredient}</option>
          ))}
        </datalist>
      </div>
    </div>
  );
}

function Source(props) {
  return (
    <div className="field">
      <label class="label is-medium">Source</label>
      <div class="control">
        <input
          type="text"
          list="source"
          value={props.source}
          onChange={props.handleSource}
        />
        <datalist id="source">
          {props.mt.map((source, index) => (
            <option key={index}>{source}</option>
          ))}
        </datalist>
      </div>
    </div>
  );
}

export {
  Hero,
  APIKeyForm,
  RecipeName,
  MealType,
  Cuisine,
  MainIngredient,
  Source,
};
