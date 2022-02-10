import React from "react";
import { fetchEmployees } from "../actions/EmployeeAction";
import {  useDispatch } from "react-redux";

const ButtonComponents = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(fetchEmployees())}>Click Me</button>
    </div>
  );
};

export default ButtonComponents

// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchEmployees: fetchEmployees }, dispatch);
// }

// export default connect(null, matchDispatchToProps)(ButtonComponents);
