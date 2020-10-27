import React, { Component } from "react";
import {
  Login,
  SubmitButton,
  TextInputField,
  InputAndListField,
} from "./base-form";
import Hero from "./header";

class AddRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
      email_address: "",
      recipe_name: "",
      meal_type: "",
      cuisine: "",
      main_ingredient: "",
      source: "",
      page: "",
      link: "",
    };
  }

  handleLogin = (event) => {
    let email = this.state.email_address.trim();
    if (email) {
      this.setState({
        login: true,
      });
    }
    event.preventDefault();
  };

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
      login,
      email_address,
      recipe_name,
      meal_type,
      cuisine,
      main_ingredient,
      source,
      page,
      link,
    } = this.state;

    const mt = ["A", "B"];

    if (login) {
      return (
        <div className="container">
          <Hero title="Add a New Recipe to the Recipe Database" />

          <form onSubmit={this.handleSubmit}>
            <TextInputField
              fieldName="Recipe Name"
              name="recipe_name"
              defaultValue={recipe_name}
              handleChange={this.handleChange}
            />
            <InputAndListField
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
            <InputAndListField
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
    return (
      <Login
        handleLogin={this.handleLogin}
        email_address={email_address}
        handleChange={this.handleChange}
      />
    );
  }
}

export default AddRecipes;