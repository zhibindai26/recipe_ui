import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import FindRecipes from "./pages/find-recipes";
import AddRecipe from "./pages/add-recipe";

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/find" component={FindRecipes} />
          <Route path="/add" component={AddRecipe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
