import React from "react";
import { useSelector } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

const SingleEmployeeComponent = ({ open, handleClose }) => {
  const singleEmployee = useSelector((state) => state.singleEmployee);
  if (!singleEmployee) {
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
  } = singleEmployee;
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
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
};

export default SingleEmployeeComponent;

// function mapStateToProps(state) {
//   return {
//     singleEmployee: state.singleEmployee,
//   };
// }

// export default connect(mapStateToProps)(SingleEmployeeComponent);
