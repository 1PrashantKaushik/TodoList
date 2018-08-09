import React, { Component } from "react";
import Modal from "react-modal";
import Button from "@material-ui/core/Button";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#eaefef"
  }
};

class Rename extends Component {
  state = {
    changedname: "",
    namelength: true
  };

  ChangeName = e => {
    new Promise((resolve, reject) => {
      resolve(this.setState({ [e.target.name]: e.target.value }));
    }).then(() => {
      // console.log("Running Changing Name", this.state.changedname);
      if (this.state.changedname.trim().length) {
        this.setState({ namelength: false });
      } else {
        this.setState({ namelength: true });
      }
    });
  };

  goAndChange = () => {
    // console.log("Data is Changing when Click");
    this.props.nameChange(this.state.changedname);
  };

  canceled = () => {
    this.props.changed();
  };

  entered = event => {
    console.log(event.keyCode);
    if (event.keyCode == 13) {
      this.goAndChange();
    } else {
      // console.log("NOt triggerd");
    }
  };
  render() {
    const index = this.props.Keycoming;
    const data = this.props.Data[index];
    return (
      <Modal isOpen="true" style={customStyles}>
        <input
          type="text"
          defaultValue={data}
          name="changedname"
          onChange={this.ChangeName}
          onKeyDown={this.entered}
          size="54"
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="outlined" onClick={this.canceled}>
          Cancel
        </Button>&nbsp;&nbsp;
        <Button
          variant="outlined"
          onClick={this.goAndChange}
          disabled={this.state.namelength}
        >
          Change
        </Button>
      </Modal>
    );
  }
}

export default Rename;
