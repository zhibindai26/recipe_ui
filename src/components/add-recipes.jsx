import React, { Component } from "react";
import { SubmitButton, TextInputField, InputAndListField } from "./base-form";
import { Hero } from "./basic-page";
import { callAPI } from "../methods/api";

const initialState = {
  method_type: "POST",
  recipe_name: "",
  meal_type: "",
  cuisine: "",
  main_ingredient: "",
  source: "",
  page: "",
  link: "",
  recipe_error: "",
  meal_type_error: "",
  source_error: "",
};

class AddRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  validate = (value, field, fieldDisplay) => {
    if (!value) {
      this.setState({ [field]: `${fieldDisplay} cannot be left blank.` });
      return false;
    }
    return true;
  };

  // form validation for recipe name, meal type, source
  handleValidation = (event) => {
    let recipe = this.state.recipe_name.trim();
    let meal = this.state.meal_type.trim();
    let source = this.state.source.trim();

    const recipeIsValid = this.validate(recipe, "recipe_error", "Recipe Name");
    const mealIsValid = this.validate(meal, "meal_type_error", "Meal Type");
    const sourceIsValid = this.validate(source, "source_error", "Source");

    if (recipeIsValid && sourceIsValid && mealIsValid) {
      this.setState({
        recipe_error: "",
        meal_type_error: "",
        source_error: "",
      });
      return true;
    }
    event.preventDefault();
    return false;
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    let readyToSubmit = this.handleValidation(event);

    if (readyToSubmit) {
      let submitState = this.state;
      submitState.email_address = this.props.email_address;
      delete submitState.recipe_error;
      delete submitState.meal_type_error;
      delete submitState.source_error;

      callAPI(submitState)
        .then((res) => res.message)
        .then((res) => {
          this.setState({ message: res });
          this.setState({ isSubmitted: true });
        });

      event.preventDefault();
    }
  };

  render() {
    const {
      recipe_name,
      meal_type,
      cuisine,
      main_ingredient,
      source,
      page,
      link,
      recipe_error,
      meal_type_error,
      source_error,
      isSubmitted,
      message,
    } = this.state;

    const mt = ["A", "B"];

    if (isSubmitted) {
      return (
        <div className="container">
          <Hero title={message} />
        </div>
      );
    }

    return (
      <div className="container">
        <Hero title="Add a New Recipe to the Recipe Database" />

        <form onSubmit={this.handleSubmit}>
          <TextInputField
            fieldName="Recipe Name"
            name="recipe_name"
            defaultValue={recipe_name}
            handleChange={this.handleChange}
            formError={recipe_error}
          />
          <InputAndListField
            firstFieldName="Meal Type"
            firstName="meal_type"
            firstField={meal_type}
            handleFirstField={this.handleChange}
            formErrorOne={meal_type_error}
            secondFieldName="Cuisine"
            secondName="cuisine"
            secondField={cuisine}
            handleSecondField={this.handleChange}
            mt={mt}
          />
          <InputAndListField
            firstFieldName="Main Ingredient"
            firstName="main_ingredient"
            firstField={main_ingredient}
            handleFirstField={this.handleChange}
            secondFieldName="Source"
            secondName="source"
            secondField={source}
            handleSecondField={this.handleChange}
            formErrorTwo={source_error}
            mt={mt}
          />
          <TextInputField
            fieldName="Page"
            name="page"
            defaultValue={page}
            handleChange={this.handleChange}
          />
          <TextInputField
            fieldName="Link"
            name="link"
            defaultValue={link}
            handleChange={this.handleChange}
          />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default AddRecipes;
