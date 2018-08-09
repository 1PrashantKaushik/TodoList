import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Addingdetails from "./Addingdetail.js";
import Converter from "./Converter.js";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route default exact path="/" component={Addingdetails} />
        <Route exact path="/todolist" component={Addingdetails} />
        <Route exact path="/converter" component={Converter} />
      </Switch>
    );
  }
}

export default App;
