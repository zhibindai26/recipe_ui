import React, { Component } from "react";
import { Login } from "../components/base-form";
import FindRecipes from "../components/find-recipes";
import AddRecipes from "../components/add-recipes";
import GetAllRecipes from "../components/get-all-recipes";

class LoginEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
      email_address: "",
      login_error: "",
    };
  }

  validate = (value) => {
    if (!value) {
      this.setState({ login_error: "Invalid login, please try again." });
      return false;
    }
    return true;
  };

  handleLogin = (event) => {
    let email = this.state.email_address.trim();
    const isValid = this.validate(email);
    if (isValid) {
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

  render() {
    const { login, email_address, login_error } = this.state;

    if (login) {
      // make API call and pass in data to components
      if (this.props.next_page === "find") {
        return <FindRecipes />;
      } else if (this.props.next_page === "add") {
        return <AddRecipes />;
      } else if (this.props.next_page === "all_recipes") {
        return <GetAllRecipes />;
      }
    }

    return (
      <Login
        handleLogin={this.handleLogin}
        defaultValue={email_address}
        handleChange={this.handleChange}
        loginError={login_error}
      />
    );
  }
}

export default LoginEmail;
