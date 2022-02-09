import {combineReducers} from 'redux';
import EmployeeReducer from './EmployeeReducer';
import SingleEmployeeReducer from './SingleEmployeeReducer';

const rootReducer=combineReducers({
    allEmployees : EmployeeReducer,
    singleEmployee : SingleEmployeeReducer
})

export default rootReducer;