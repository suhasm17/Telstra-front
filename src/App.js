import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import Navbar from "./containers/Navbar";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
   
      <Router>
      
      <Navbar/>
        <Switch>
        <Route path="/products/:productId" component={ProductDetails} />
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={ProductListing} />
          



         
          <Route path="/signup" component={Signup} />
          <Route path="/Login" component={Login} />

          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
