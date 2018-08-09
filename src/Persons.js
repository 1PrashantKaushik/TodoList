import React, { Component } from "react";
import Showingdetail from "./ShowingDetail.js";
import Rename from "./Rename.js";

class Persons extends Component {
  state = {
    RenameShown: false,
    Keycoming: "",
    length: this.props.Data.length
  };

  removeInPerson = arrayIndex => {
    // console.log(
    //   "Array Index coming from the Children ShowingDetail is",
    //   arrayIndex
    // );

    this.props.SpliceFromArray(arrayIndex);
  };

  GettingIndex = index => {
    // console.log("Rename running in Persons");
    this.setState({ Keycoming: index });
    this.setState({ RenameShown: true });
  };

  NameChanging = changedname => {
    // console.log("Cllicked for changing the name in Person");
    this.setState({ RenameShown: false });
    this.props.ChangeNameInAddingdetails(this.state.Keycoming, changedname);
  };
  changed = () => {
    this.setState({ RenameShown: false });
  };

  completedtask = completedindex => {
    this.props.MyCompletedTask(completedindex);
  };
  render() {
    console.log(this.props.Data);
    return (
      <div>
        <div className="Product-Info">
          {this.props.Data.map((value, index) => {
            return (
              <div key={this.props.arrayIndex}>
                <Showingdetail
                  Data={value}
                  arrayIndex={index}
                  removeInPerson={this.removeInPerson}
                  GettingIndex={this.GettingIndex}
                  completedtask={this.completedtask}
                />
              </div>
            );
          })}
        </div>
        {this.state.RenameShown && this.props.Data.length > 0 ? (
          <Rename
            nameChange={this.NameChanging}
            changed={this.changed}
            Keycoming={this.state.Keycoming}
            Data={this.props.Data}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Persons;
