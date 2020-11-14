import React, { Component } from "react";
import {
  SubmitButton,
  TextInputField,
  InputAndListFieldReadOnly,
  Sample,
  RecipeDisplay,
} from "./base-form";
import { Hero, Loading } from "./basic-page";
import callAPI from "../methods/api";

class FindRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      method_type: "GET",
      recipe_name: "",
      meal_type: "",
      cuisine: "",
      main_ingredient: "",
      source: "",
      sample: 1,
      loading: true,
      email_address: this.props.email_address,
    };
  }

  componentDidMount() {
    let submit = this.state;
    submit.get_categories = "true";
    delete submit.loading;

    callAPI(submit).then((response) => {
      this.setState({
        categories: response.body,
        loading: false,
        get_categories: false,
      });
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    callAPI(this.state).then((recipes) => {
      this.setState({ recipes: recipes.body.Recipes });
      this.setState({ isSubmitted: true, loading: false });
    });

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
      loading,
      categories,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (isSubmitted) {
      const recipeSearchTitle = `${recipes.length} ${recipe_name} Recipes Found`;
      return (
        <div className="container">
          <Hero title={recipeSearchTitle} />
          {recipes.map((e) => (
            <RecipeDisplay
              key={recipes.indexOf(e)}
              Index={recipes.indexOf(e) + 1}
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
            catOne={categories.Type}
            catTwo={categories.Cuisine}
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
            catOne={categories.Main_Ingredient}
            catTwo={categories.Source}
          />
          <Sample sample={sample} handleSample={this.handleChange} />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default FindRecipes;
