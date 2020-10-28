import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/Home";
import LoginEmail from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/find"
            render={(props) => <LoginEmail {...props} next_page="find" />}
          />
          <Route
            path="/add"
            render={(props) => <LoginEmail {...props} next_page="add" />}
          />
          <Route
            path="/all_recipes"
            render={(props) => (
              <LoginEmail {...props} next_page="all_recipes" />
            )}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
