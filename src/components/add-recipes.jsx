import React, { Component } from "react";
import { Hero, Loading } from "./basic-page";
import { SubmitButton, TextInputField, InputAndListField } from "./base-form";
import callAPI from "../methods/api";
import { getCategoriesParams } from "../constants/constants";

class AddRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      method_type: "POST",
      recipe_name: "",
      meal_type: "",
      cuisine: "",
      main_ingredient: "",
      source: "",
      page: "",
      link: "",
      loading: true,
      recipe_error: "",
      meal_type_error: "",
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

  // form validation for recipe name, meal type, source
  handleValidation = (event) => {
    let recipe = this.state.recipe_name.trim();
    let meal = this.state.meal_type.trim();
    let source = this.state.source.trim();

    const recipeIsValid = this.validateCheck(
      recipe,
      "recipe_error",
      "Recipe Name"
    );
    const mealIsValid = this.validateCheck(
      meal,
      "meal_type_error",
      "Meal Type"
    );
    const sourceIsValid = this.validateCheck(source, "source_error", "Source");

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
      let submit = this.state;
      delete submit.recipe_error;
      delete submit.meal_type_error;
      delete submit.source_error;
      delete submit.loading;

      callAPI(submit).then((response) => {
        this.setState({ message: response.message });
        this.setState({ isSubmitted: true, loading: false });
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
      loading,
      recipe_error,
      meal_type_error,
      source_error,
      isSubmitted,
      message,
      categories,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

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
