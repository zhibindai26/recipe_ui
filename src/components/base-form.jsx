import React from "react";
import Hero from "./header";

function Login(props) {
  return (
    <div className="container">
      <Hero title="Please Enter Your Email Address" />
      <form onSubmit={props.handleLogin}>
        <EmailAddress
          email_address={props.email_address}
          handleChange={props.handleChange}
        />
        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  return (
    <div className="field is-grouped">
      <div className="control">
        <button className="button is-link is-medium">Submit</button>
      </div>
    </div>
  );
}

function EmailAddress(props) {
  return (
    <div className="field">
      <label className="label is-medium">Email Address*</label>
      <div className="control">
        <input
          className="input is-medium"
          name="email_address"
          type="text"
          defaultValue={props.email_address}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

function TextInputField(props) {
  return (
    <div className="field">
      <label className="label is-medium">{props.fieldName}</label>
      <div className="control">
        <input
          className="input is-medium"
          name={props.name}
          type="text"
          defaultValue={props.defaultValue}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

function MealAndCuisine(props) {
  return (
    <div className="field is-horizontal">
      <div className="field-body">
        <div className="field">
          <label className="label is-medium">Meal Type</label>
          <div className="control">
            <input
              className="input is-medium"
              name="meal_type"
              type="text"
              list="meal_type"
              defaultValue={props.meal_type}
              onChange={props.handleMeal}
            />
            <datalist id="meal_type">
              {props.mt.map((meal, index) => (
                <option key={index}>{meal}</option>
              ))}
            </datalist>
          </div>
        </div>
        <div className="field">
          <label className="label is-medium">Cuisine</label>
          <div className="control">
            <input
              className="input is-medium"
              name="cuisine"
              type="text"
              list="cuisine"
              defaultValue={props.cuisine}
              onChange={props.handleCuisine}
            />
            <datalist id="cuisine">
              {props.mt.map((cuisine, index) => (
                <option key={index}>{cuisine}</option>
              ))}
            </datalist>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainIngredientAndSource(props) {
  return (
    <div className="field is-horizontal">
      <div className="field-body">
        <div className="field">
          <label className="label is-medium">Main Ingredient</label>
          <div className="control">
            <input
              className="input is-medium"
              name="main_ingredient"
              type="text"
              list="main_ingredient"
              defaultValue={props.main_ingredient}
              onChange={props.handleMainIngredient}
            />
            <datalist id="main_ingredient">
              {props.mt.map((ingredient, index) => (
                <option key={index}>{ingredient}</option>
              ))}
            </datalist>
          </div>
        </div>
        <div className="field">
          <label className="label is-medium">Source</label>
          <div className="control">
            <input
              className="input is-medium"
              name="source"
              type="text"
              list="source"
              defaultValue={props.source}
              onChange={props.handleSource}
            />
            <datalist id="source">
              {props.mt.map((source, index) => (
                <option key={index}>{source}</option>
              ))}
            </datalist>
          </div>
        </div>
      </div>
    </div>
  );
}

function MealAndCuisineReadOnly(props) {
  return (
    <div className="field is-horizontal">
      <div className="field-body">
        <div className="field">
          <label className="label is-medium">Meal Type</label>
          <div className="control">
            <div className="select" name="meal_type">
              <select
                name="meal_type"
                defaultValue={props.meal_type}
                onChange={props.handleMeal}
              >
                {props.mt.map((meal, index) => (
                  <option key={index}>{meal}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label is-medium">Cuisine</label>
          <div className="control">
            <div className="select" name="cuisine">
              <select
                name="cuisine"
                defaultValue={props.cuisine}
                onChange={props.handleCuisine}
              >
                {props.mt.map((cuisine, index) => (
                  <option key={index}>{cuisine}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainIngredientAndSourceReadOnly(props) {
  return (
    <div className="field is-horizontal">
      <div className="field-body">
        <div className="field">
          <label className="label is-medium">Main Ingredient</label>
          <div className="control">
            <div className="select" name="main_ingredient">
              <select
                name="main_ingredient"
                defaultValue={props.main_ingredient}
                onChange={props.handleMainIngredient}
              >
                {props.mt.map((ingredient, index) => (
                  <option key={index}>{ingredient}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label is-medium">Source</label>
          <div className="control">
            <div className="select" name="source">
              <select
                name="source"
                defaultValue={props.source}
                onChange={props.handleSource}
              >
                {props.mt.map((source, index) => (
                  <option key={index}>{source}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sample(props) {
  return (
    <div className="field">
      <label className="label is-medium">Number of Recipes to Return</label>
      <div className="control">
        <div className="select" name="sample">
          <select
            name="sample"
            defaultValue={props.sample}
            onChange={props.handleSample}
          >
            {Array.from({ length: 10 }, (value, index) => (
              <option key={index}>{index + 1}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export {
  Login,
  SubmitButton,
  TextInputField,
  MealAndCuisine,
  MainIngredientAndSource,
  MealAndCuisineReadOnly,
  MainIngredientAndSourceReadOnly,
  Sample,
};
