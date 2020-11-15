import React, { Component } from "react";
import {
  SubmitButton,
  TextInputField,
  InputAndListFieldReadOnly,
  SingleInputAndListFieldReadOnly,
  Sample,
  RecipeDisplay,
} from "./base-form";
import { Hero, Loading } from "./basic-page";
import callAPI from "../methods/api";
import { getCategoriesParams } from "../constants/constants";

class FindRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      method_type: "GET",
      recipe_name: "",
      meal_type: "",
      cuisine: "",
      main_ingredient: "",
      uploader: "",
      source: "",
      loading: true,
      sample: 1,
      email_address: this.props.email_address,
    };
  }

  componentDidMount() {
    let submit = getCategoriesParams;
    submit.email_address = this.props.email_address;

    callAPI(submit).then((response) => {
      this.setState({
        categories: response.body,
        loading: false,
      });
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    let submit = this.state;
    delete submit.loading;

    callAPI(submit).then((recipes) => {
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
      uploader,
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
              Uploader={e.Uploader}
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
          <SingleInputAndListFieldReadOnly
            fieldName="Uploader"
            name="uploader"
            field={uploader}
            handleField={this.handleChange}
            cat={categories.Uploader}
          />
          <Sample sample={sample} handleSample={this.handleChange} />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default FindRecipes;
