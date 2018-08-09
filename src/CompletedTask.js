import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Moment from "react-moment";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

class CompletedTask extends Component {
  render() {
    const dateToFormat = new Date();

    console.log(this.props.CompletedTaskArray);
    return (
      // <div className="Completed-task">
      //   {this.props.CompletedTaskArray.length ? (
      //     <div>
      //       <p style={{ size: "14px" }}>My Completed Task:</p>
      //       <ol>
      //         {this.props.CompletedTaskArray.map((item, index) => {
      //           return <li>{item}</li>;
      //         })}
      //       </ol>
      //     </div>
      //   ) : (
      //     <p style={{ textAlign: "center" }}>No Completed Task Found</p>
      //   )}
      // </div>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCell>Completed Task</CustomTableCell>
              <CustomTableCell numeric>Date</CustomTableCell>
              <CustomTableCell numeric>Time</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.CompletedTaskArray.map(data => {
              return (
                <TableRow key={data.id}>
                  <CustomTableCell component="th" scope="row">
                    {data}
                  </CustomTableCell>
                  <CustomTableCell numeric>
                    {<Moment format="YYYY/MM/DD">{dateToFormat}</Moment>}
                  </CustomTableCell>
                  <CustomTableCell numeric>
                    {<Moment format="HH:mm:ss">{dateToFormat}</Moment>}
                  </CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default CompletedTask;
