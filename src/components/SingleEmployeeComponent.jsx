import React, { Component } from "react";
import { connect } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

class SingleEmployeeComponent extends Component {
  render() {
    if (!this.props.singleEmployee) {
      return <h2>click on a employee ....</h2>;
    }
    const {
      employeeID,
      employeeFirstName,
      employeeLastName,
      jobRole,
      NIC,
      companyEmail,
      status,
      jobType,
      candidateID,
      createdAt,
      birthday,
      city,
      phoneNumber,
      streetNo,
      teamID,
    } = this.props.singleEmployee;

    return (
      <>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>Employee Details</DialogTitle>

          <DialogContent>
            <Typography>Employee ID : {employeeID}</Typography>
            <Typography>
              Employee Name : {employeeFirstName + " " + employeeLastName}
            </Typography>
            <Typography>JobRole : {jobRole}</Typography>
            <Typography>NIC : {NIC}</Typography>
            <Typography>Company Email : {companyEmail}</Typography>
            <Typography>Status : {status}</Typography>
            <Typography>JobType : {jobType}</Typography>
            <Typography>CandidateID : {candidateID}</Typography>
            <Typography>Birthday : {birthday}</Typography>
            <Typography>Phone Number : {phoneNumber}</Typography>
            <Typography>Address : {streetNo + "," + city}</Typography>
            <Typography>Team ID : {teamID}</Typography>
            <Typography>CreatedAt : {createdAt}</Typography>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    singleEmployee: state.singleEmployee,
  };
}

export default connect(mapStateToProps)(SingleEmployeeComponent);
