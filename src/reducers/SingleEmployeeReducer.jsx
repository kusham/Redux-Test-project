import { SELECT_EMPLOYEE } from "../actions/ActionTypes";

const SingleEmployeeReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_EMPLOYEE:
      return action.payload;

    default:
      return state;
  }
};
export default SingleEmployeeReducer;
