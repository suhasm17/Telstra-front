import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing_Phones from "./containers/ProductListing_Phones";
import ProductListing_Watches from "./containers/ProductListing_Watches"
import ProductListing_Headsets from "./containers/ProductListing_Headsets"
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
        <Route path="/phones" exact component={ProductListing_Phones} />
        <Route path="/watches" exact component={ProductListing_Watches} />
        <Route path="/headsets" exact component={ProductListing_Headsets} />
          
          <Route path="/signup" component={Signup} />
          <Route path="/Login" component={Login} />

          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
