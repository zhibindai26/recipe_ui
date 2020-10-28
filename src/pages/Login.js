import React, { Component } from "react";
import "bulma/css/bulma.css";
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
      loginError: "",
    };
  }

  validate = (value) => {
    if (!value) {
      this.setState({ loginError: "Invalid login, please try again." });
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
      console.log(this.state);
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
    const { login, email_address, loginError } = this.state;

    if (login) {
      console.log(this.props.next_page);
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
        loginError={loginError}
      />
    );
  }
}

export default LoginEmail;
