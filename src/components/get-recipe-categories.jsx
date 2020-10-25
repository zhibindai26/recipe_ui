import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { EmailAddress, SubmitButton } from "./base-form";
import Hero from "./header";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email_address: "",
      login: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.setState({
      login: true,
    });
    event.preventDefault();
  };

  render() {
    const { email_address, login } = this.state;

    if (login) {
      return <Redirect to="/find" />;
    }

    return (
      <div className="container">
        <Hero title="Please Enter Your Email Address" />
        <form onSubmit={this.handleSubmit}>
          <EmailAddress
            email_address={email_address}
            handleChange={this.handleChange}
          />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default Categories;
