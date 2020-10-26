import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/Home";
import FindRecipes from "./pages/find-recipes";
import AddRecipe from "./pages/add-recipe";
import GetAllRecipes from "./pages/get-all-recipes";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/find" component={FindRecipes} />
          <Route path="/add" component={AddRecipe} />
          <Route path="/all_recipes" component={GetAllRecipes} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
