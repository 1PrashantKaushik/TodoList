import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import CompletedTask from "./CompletedTask";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      converterButton: "ON",
      Fahrenite: 0,
      Celcius: 0
    };
  }

  gotoConverter = e => {
    this.setState({ converterButton: "OFF" });
  };

  handleChange = e => {
    console.log(typeof this.state.Fahrenite);
    new Promise((resolve, reject) => {
      resolve(this.setState({ [e.target.name]: e.target.value }));
    })
      .then(() => {
        if (this.state.Fahrenite != 0) {
          let result = ((this.state.Fahrenite - 32) * 5) / 9;
          result = result.toFixed(2);
          this.setState({ Celcius: result });
        } else this.setState({ Celcius: 0 });
      })
      .then(() => {
        console.log(this.state.Fahrenite);
      });
  };

  render() {
    return (
      <React.Fragment>
        {/* <div className="Routing-list1">
          <Link to="/converter" className="converter-list-addingdetail">
            <div>Temprature Converter</div>
          </Link>
          <Link to="/todolist" className="link-class">
            <div>TodoList</div>
          </Link>
        </div> */}
        <div className="nav">
          <List>
            <NavLink
              to="/todolist"
              className="nav-list"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              <ListItem button>
                <ListItemText primary="Todo List" />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink
              to="/converter"
              className="nav-list"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              <ListItem button divider>
                <ListItemText primary=" Temp. Converter" />
              </ListItem>
            </NavLink>
          </List>
        </div>
        <div className="App">
          <div className="App-header1">
            <h2>Temprature Converter</h2>
          </div>
          {this.state.converterButton === "ON" ? (
            <div className="Converter-Button-div">
              <button onClick={this.gotoConverter}>Converter HERE</button>
            </div>
          ) : (
            <div className="App-Converter ">
              <h2>
                Fahrenite:<input
                  type="text"
                  name="Fahrenite"
                  onChange={this.handleChange}
                />
              </h2>
              <h2>&nbsp; Celcius: {this.state.Celcius}</h2>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
