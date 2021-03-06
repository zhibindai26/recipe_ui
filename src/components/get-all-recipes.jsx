import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { Hero, Loading } from "./basic-page";
import callAPI from "../methods/api";
import { get, allRecipeTitle, allRecipeSubtitle } from "../constants/constants";

const columns = [
  { name: "Recipe", label: "Recipe" },
  { name: "Type", label: "Meal Type" },
  { name: "Main_Ingredient", label: "Main Ingredient" },
  { name: "Cuisine", label: "Cuisine" },
  { name: "Uploader", label: "Uploader" },
  { name: "Source", label: "Source" },
  { name: "Page", label: "Page" },
  {
    name: "Link",
    label: "Link",
    options: {
      customBodyRender: (value) => {
        if (value) {
          return (
            <a href={value} target="_blank" rel="noopener noreferrer">
              LINK
            </a>
          );
        }
      },
    },
  },
  { name: "Notes", label: "Notes" },
];

const options = {
  filterType: "multiselect",
  sortOrder: {
    name: "Recipe",
    direction: "asc",
  },
  download: "false",
  print: "false",
  searchOpen: "true",
  rowsPerPageOptions: [10, 25, 50],
  selectableRows: "none",
};

class GetAllRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      method_type: get,
      recipe_name: "",
      meal_type: "",
      cuisine: "",
      main_ingredient: "",
      uploader: "",
      source: "",
      loading: true,
      sample: 9999,
      email_address: this.props.email_address,
    };
  }

  componentDidMount() {
    let submit = this.state;
    delete submit.loading;

    callAPI(submit).then((response) => {
      this.setState({
        recipes: response.body.Recipes,
        responseCode: response.statusCode,
        responseMessage: response.message,
        loading: false,
      });
    });
  }

  render() {
    const { loading, recipes, responseCode, responseMessage } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (responseCode !== 200) {
      return (
        <div className="container">
          <h1>{responseMessage}</h1>
        </div>
      );
    }

    if (recipes) {
      return (
        <div className="container">
          <Hero title={allRecipeTitle} subtitle={allRecipeSubtitle} />
          <MUIDataTable columns={columns} data={recipes} options={options} />
        </div>
      );
    }
  }
}

export default GetAllRecipes;
