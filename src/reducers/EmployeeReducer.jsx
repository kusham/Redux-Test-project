import { BUTTON_CLICKED } from "../actions/ActionTypes";

const EmployeeReducer = (state = null, action) => {
  switch (action.type) {
    case BUTTON_CLICKED:
      return action.payload;

    default:
      return state;
  }
};
export default EmployeeReducer;
