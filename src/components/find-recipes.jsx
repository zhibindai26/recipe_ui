import React, { Component } from "react";
import {
  SubmitButton,
  TextInputField,
  InputAndListFieldReadOnly,
  Sample,
} from "./base-form";
import Hero from "./header";
import { initialState } from "../constants/constants";

class FindRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

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
      recipe_name,
      meal_type,
      cuisine,
      main_ingredient,
      source,
      sample,
    } = this.state;

    const mt = ["", "A Test Value", "B Test Value"];

    return (
      <div className="container">
        <Hero title="Find Existing Recipes" />

        <form onSubmit={this.handleSubmit}>
          <TextInputField
            fieldName="Recipe Name"
            name="recipe_name"
            defaultValue={recipe_name}
            handleChange={this.handleChange}
          />
          <InputAndListFieldReadOnly
            firstFieldName="Meal Type"
            firstName="meal_type"
            firstField={meal_type}
            handleFirstField={this.handleChange}
            secondFieldName="Cuisine"
            secondName="cuisine"
            secondField={cuisine}
            handleSecondField={this.handleChange}
            mt={mt}
          />
          <InputAndListFieldReadOnly
            firstFieldName="Main Ingredient"
            firstName="main_ingredient"
            firstField={main_ingredient}
            handleFirstField={this.handleChange}
            secondFieldName="Source"
            secondName="source"
            secondField={source}
            handleSecondField={this.handleChange}
            mt={mt}
          />
          <Sample sample={sample} handleSample={this.handleChange} />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default FindRecipes;
