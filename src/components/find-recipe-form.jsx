import React, { Component } from "react";

class FindRecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api_key: "",
    };
  }

  handleAPIKeyChange = (event) => {
    this.setState({ api_key: event.target.value });
  };

  render() {
    const { api_key } = this.state;
    return (
      <div>
        <h1 className="title is-3">Search for Recipes Using This Form</h1>
        <form>
          <div className="field">
            <label className="label">API Key</label>
            <input
              type="text"
              value={api_key}
              onChange={this.handleAPIKeyChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default FindRecipeForm;
