import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectEmployee } from "../actions/EmployeeAction";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SingleEmployeeComponent from "./SingleEmployeeComponent";

class EmployeeComponent extends Component {
  state = {
    open: false,
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  render() {
    if (!this.props.allEmployees) {
      return <h2>Click the Button first!</h2>;
    }

    
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">employee ID</TableCell>
                <TableCell align="right">employee Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">NIC</TableCell>
                <TableCell align="right">Birthday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.allEmployees.data.map((employee) => (
                <TableRow
                  key={employee._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => {
                    this.props.selectEmployee(employee);
                    this.handleOpen();
                   
                  }}
                >
                  <TableCell align="right">{employee.employeeID}</TableCell>
                  <TableCell align="right">
                    {employee.employeeFirstName}
                  </TableCell>
                  <TableCell align="right">{employee.companyEmail}</TableCell>
                  <TableCell align="right">{employee.NIC}</TableCell>
                  <TableCell align="right">{employee.birthday}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <SingleEmployeeComponent handleClose={this.handleClose} open={this.state.open} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    allEmployees: state.allEmployees,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectEmployee: selectEmployee }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(EmployeeComponent);
