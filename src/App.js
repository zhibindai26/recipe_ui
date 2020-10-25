import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/Home";
import FindRecipes from "./pages/find-recipes";
import AddRecipe from "./pages/add-recipe";
import RecipeList from "./pages/recipe-list";
import GetCategories from './pages/get-recipe-categories';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/email" component={GetCategories} />
          <Route path="/find" component={FindRecipes} />
          <Route path="/add" component={AddRecipe} />
          <Route path="/recipes" component={RecipeList} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
