import React, { Component } from "react";
import Persons from "./Persons.js";
import { Link } from "react-router-dom";
// import Showingdetail from "./ShowingDetail.js";
import CompletedTask from "./CompletedTask";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    width: "10%",
    maxWidth: "20px",
    backgroundColor: theme.palette.background.paper
  }
});

class Addingdetail extends Component {
  state = {
    NameArray: [],
    Name: "",
    Show: false,
    AddButton: true,
    CompletedTaskArray: []
  };

  NameEntered = e => {
    new Promise((resolve, reject) => {
      resolve(this.setState({ [e.target.name]: e.target.value }));
    }).then(res => {
      if (this.state.Name.trim().length) {
        // console.log("Button Disability is", this.state.Name.trim().length);
        this.setState({ AddButton: false });
      } else {
        // console.log("Button Disability is", this.state.Name.trim().length);
        this.setState({ AddButton: true });
      }
    });
  };

  entered = event => {
    if (this.state.Name.trim().length > 0) {
      if (event.keyCode === 13) {
        this.setState({ AddButton: true });
        this.AddingDetail();
      }
    }
  };

  AddingDetail = () => {
    new Promise((resolve, reject) => {
      resolve(this.state.NameArray.push(this.state.Name));
    }).then(result => {
      this.setState({ Show: true });
      this.setState({ Name: "" });
    });
  };

  SpliceFromArray = arrayIndex => {
    // console.log("Sliced Occures Here");
    new Promise((resolve, reject) => {
      resolve(this.state.NameArray.splice(arrayIndex, 1));
    }).then(result => {
      let newResult = this.state.NameArray;
      // console.log("New Array is:", newResult);
      this.setState({ NameArray: newResult });
    });
  };

  ChangeNameInAddingdetails = (index, name) => {
    // console.log("Adding Change Name is Running in AddingDetails");
    new Promise((resolve, reject) => {
      resolve(this.state.NameArray.splice(index, 1, name));
    }).then(() => {
      let nameresult = this.state.NameArray;
      // console.log("New Name Array is", this.state.NameArray);
      this.setState({ Namearray: nameresult });
    });
  };

  MyCompletedTask = completedindex => {
    var completeditem = this.state.NameArray.splice(completedindex, 1);
    console.log("Completed Item is:", completeditem);
    this.setState({ NameArray: this.state.NameArray });
    this.state.CompletedTaskArray.push(completeditem);
  };

  render() {
    // const { classes } = props;
    return (
      <React.Fragment>
        {/* <div className="Routing-list1">
          <Link to="/converter">
            <div className="converter-list-addingdetail">Converter</div>
          </Link>
          <Link to="/todolist" className="link-class ">
            <div>TodoList</div>
          </Link>
        </div> */}
        <div className="nav">
          <List>
            <Link to="/todolist" className="nav-list">
              <ListItem button>
                <ListItemText primary="Todo List" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/converter" className="nav-list">
              <ListItem button divider>
                <ListItemText primary=" Temp. Converter" />
              </ListItem>
            </Link>
          </List>
        </div>
        <div className="App">
          <div className="App-header1">
            <h2>My Task List</h2>
          </div>
          <div class="Product-manager">
            {/* <input
              id="inputTask"
              type="text"
              name="Name"
              value={this.state.Name}
              placeholder="Add Your Task"
              onChange={this.NameEntered}
              size="54"
              onKeyDown={this.entered}
            />{" "} */}
            <TextField
              id="with-placeholder"
              label="What you Want to Do?"
              placeholder="Enter List"
              margin="normal"
              type="text"
              name="Name"
              value={this.state.Name}
              placeholder="Add Your Task"
              onChange={this.NameEntered}
              size="54"
              onKeyDown={this.entered}
            />
            &nbsp;&nbsp;
            {console.log("Hiw=====>>>>>>.", this.state.AddButton)}
            <button onClick={this.AddingDetail} disabled={this.state.AddButton}>
              ADD
            </button>
            <div>
              {this.state.NameArray.length ? (
                <Persons
                  Data={this.state.NameArray}
                  SpliceFromArray={this.SpliceFromArray}
                  ChangeNameInAddingdetails={this.ChangeNameInAddingdetails}
                  MyCompletedTask={this.MyCompletedTask}
                />
              ) : (
                ""
              )}
            </div>
            <CompletedTask CompletedTaskArray={this.state.CompletedTaskArray} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// AddingDetail.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default Addingdetail;
