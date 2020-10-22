import { React, Component } from "react";

class Button extends Component {
  state = {
    text: "Find Recipes",
    color: "button is-primary is-light is-large",
  };

  render() {
    return (
      <React.Fragment>
        <button className={this.state.color}>{this.state.text}</button>
      </React.Fragment>
    );
  }
}

export default Button;
