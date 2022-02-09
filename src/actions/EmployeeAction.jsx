import axios from "axios";
import { BUTTON_CLICKED, SELECT_EMPLOYEE } from "./ActionTypes";

export const fetchEmployees = () => (dispatch) => {
  axios
    .get("http://localhost:8070/employee/")
    .then((res) => {
      dispatch({
        type: BUTTON_CLICKED,
        payload: res.data,
      });
    });
};


export const selectEmployee=(employee)=>{
  return{
    type:SELECT_EMPLOYEE,
    payload:employee
  }
};

