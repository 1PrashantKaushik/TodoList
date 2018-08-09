import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Showingdetail extends Component {
  removePerson = () => {
    // console.log("The Data is Removing from the Showing Details");
    this.props.removeInPerson(this.props.arrayIndex);
  };

  ChangeName = () => {
    // console.log("Rename is Running in Showing detail", this.props.arrayIndex);
    this.props.GettingIndex(this.props.arrayIndex);
  };

  Complete = () => {
    this.props.completedtask(this.props.arrayIndex);
  };
  render() {
    // console.log("the data is:", this.props.Data);
    // console.log("Key of this Div is:", this.props.arrayIndex);
    return (
      <p>
        {this.props.Data}&nbsp;&nbsp;&nbsp;
        {/* <button className="btn-1" onClick={this.Complete}>
          Completed
        </button> */}
        <Button
          variant="outlined"
          color="secondary"
          // className="btn-1"
          onClick={this.Complete}
        >
          Completed
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className="btn-1"
          onClick={this.ChangeName}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className="btn-1"
          onClick={this.removePerson}
        >
          X
        </Button>
      </p>
    );
  }
}

export default Showingdetail;
