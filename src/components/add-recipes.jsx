import React, { Component } from "react";
import { Hero, Loading } from "./basic-page";
import {
  SubmitButton,
  TextInputField,
  InputAndListField,
  SingleInputAndListField,
  TextBox,
} from "./base-form";
import callAPI from "../methods/api";
import {
  post,
  getCategoriesParams,
  addRecipeTitle,
  addRecipeSubtitle,
} from "../constants/constants";

class AddRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      method_type: post,
      recipe: "",
      type: "",
      cuisine: "",
      main_ingredient: "",
      uploader: "",
      source: "",
      page: "",
      link: "",
      notes: "",
      loading: true,
      recipe_error: "",
      type_error: "",
      source_error: "",
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

  validateCheck = (value, field, fieldDisplay) => {
    if (!value) {
      this.setState({ [field]: `${fieldDisplay} cannot be left blank.` });
      return false;
    }
    return true;
  };

  // form validation for recipe name, meal type, and source
  handleValidation = (event) => {
    let recipe = this.state.recipe.trim();
    let meal = this.state.type.trim();
    let source = this.state.source.trim();

    const recipeIsValid = this.validateCheck(
      recipe,
      "recipe_error",
      "Recipe Name"
    );
    const mealIsValid = this.validateCheck(meal, "type_error", "Meal Type");
    const sourceIsValid = this.validateCheck(source, "source_error", "Source");

    if (recipeIsValid && sourceIsValid && mealIsValid) {
      this.setState({
        recipe_error: "",
        type_error: "",
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
      let submit = this.state;
      delete submit.recipe_error;
      delete submit.type_error;
      delete submit.source_error;
      delete submit.loading;
      delete submit.categories;

      this.setState({ loading: true });

      callAPI(submit).then((response) => {
        console.log(response);
        this.setState({ message: response.message, loading: false });
      });

      event.preventDefault();
    }
  };

  render() {
    const {
      recipe,
      type,
      cuisine,
      main_ingredient,
      uploader,
      source,
      page,
      link,
      notes,
      loading,
      recipe_error,
      type_error,
      source_error,
      message,
      categories,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (message) {
      console.log(this.state);
      return (
        <div className="container">
          <Hero title={message} />
        </div>
      );
    }

    return (
      <div className="container">
        <Hero title={addRecipeTitle} subtitle={addRecipeSubtitle} />

        <form onSubmit={this.handleSubmit}>
          <TextInputField
            fieldName="Recipe Name"
            name="recipe"
            defaultValue={recipe}
            handleChange={this.handleChange}
            formError={recipe_error}
          />
          <InputAndListField
            firstFieldName="Meal Type"
            firstName="type"
            firstField={type}
            handleFirstField={this.handleChange}
            formErrorOne={type_error}
            secondFieldName="Cuisine"
            secondName="cuisine"
            secondField={cuisine}
            handleSecondField={this.handleChange}
            catOne={categories.Type}
            catTwo={categories.Cuisine}
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
            catOne={categories.Main_Ingredient}
            catTwo={categories.Source}
          />
          <SingleInputAndListField
            fieldName="Uploader"
            name="uploader"
            field={uploader}
            handleField={this.handleChange}
            cat={categories.Uploader}
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
          <TextBox
            fieldName="Notes"
            name="notes"
            defaultValue={notes}
            handleChange={this.handleChange}
          />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default AddRecipes;
