import React, { Component } from "react";
import {
  SubmitButton,
  TextInputField,
  InputAndListFieldReadOnly,
  Sample,
  RecipeDisplay,
} from "./base-form";
import { Hero } from "./basic-page";
import { getData } from "../methods/api";

const initialState = {
  get_categories: "false",
  method_type: "GET",
  recipe_name: "",
  meal_type: "",
  cuisine: "",
  main_ingredient: "",
  source: "",
  sample: 1,
};

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
    let submitState = this.state;
    submitState.email_address = this.props.email_address;
    this.setState({ isSubmitted: true });
    this.setState({ recipes: getData(submitState) });
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
      isSubmitted,
      recipes,
    } = this.state;

    const mt = ["", "A Test Value", "B Test Value"];

    const r = [
      {
        Recipe: "Beef & Barley Stew",
        Type: "Meal",
        Main_Ingredient: "Meat",
        Cuisine: "American",
        Source: "Food Lab",
        Page: "193.0",
        Link: "http://www.wikipedia.org/",
      },
      {
        Recipe: "Sichuan Beef Tendon",
        Type: "Side",
        Main_Ingredient: "Meat",
        Cuisine: "Asian",
        Source: "G Drive - Online",
        Page: "nan",
        Link: null,
      },
    ];

    if (isSubmitted) {
      return (
        <div className="container">
          <Hero title="Recipes Found" />
          {r.map((e) => (
            <RecipeDisplay
              Index={r.indexOf(e) + 1}
              Recipe={e.Recipe}
              Type={e.Type}
              Main_Ingredient={e.Main_Ingredient}
              Cuisine={e.Cuisine}
              Source={e.Source}
              Page={e.Page}
              Link={e.Link}
            />
          ))}
        </div>
      );
    }

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
