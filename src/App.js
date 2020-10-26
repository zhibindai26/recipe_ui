import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/Home";
import AddRecipes from "./components/add-recipes";
import GetAllRecipes from "./components/get-all-recipes";
import FindRecipes from "./components/find-recipes";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/find" component={FindRecipes} />
          <Route path="/add" component={AddRecipes} />
          <Route path="/all_recipes" component={GetAllRecipes} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
