import React, { Component } from "react";
import { Login } from "./base-form";
import Hero from "../components/header";

class GetAllRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email_address: "",
      login: false,
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
    const { login, email_address } = this.state;
    if (login) {
      return (
        <div>
          <Hero title="All Recipes" />
        </div>
      );
    }

    return (
      <Login
        handleLogin={this.handleLogin}
        defaultValue={email_address}
        handleChange={this.handleChange}
      />
    );
  }
}

export default GetAllRecipes;
