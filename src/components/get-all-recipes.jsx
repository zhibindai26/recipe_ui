import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { Hero, Loading } from "./basic-page";
import callAPI from "../methods/api";

const columns = [
  { name: "Recipe", label: "Recipe" },
  { name: "Type", label: " Meal Type" },
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
        return (
          <a href={value} target="_blank">
            {value}
          </a>
        );
      },
    },
  },
];

const options = {
  filterType: "dropdown",
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
      method_type: "GET",
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

    callAPI(submit).then((recipes) => {
      this.setState({ recipes: recipes.body.Recipes, loading: false });
    });
  }

  render() {
    const { loading, recipes } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (recipes) {
      return (
        <div className="container">
          <Hero title="All Recipes" />
          <MUIDataTable columns={columns} data={recipes} options={options} />
        </div>
      );
    }
  }
}

export default GetAllRecipes;
