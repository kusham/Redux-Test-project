import React, { Component } from "react";
import { fetchEmployees } from "../actions/EmployeeAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ButtonComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.fetchEmployees()}>Click Me</button>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEmployees: fetchEmployees }, dispatch);
}

export default connect(null, matchDispatchToProps)(ButtonComponent);
