import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/nav";
import Home from "./pages/Home";
import FindRecipes from "./pages/find-recipes";
import AddRecipe from "./pages/add-recipe";
import RecipeList from "./pages/recipe-list";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/find" component={FindRecipes} />
          <Route path="/add" component={AddRecipe} />
          <Route path="/recipes" component={RecipeList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
