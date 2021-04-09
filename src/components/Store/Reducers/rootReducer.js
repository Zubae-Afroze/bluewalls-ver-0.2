import authReducer from './authReducer';
import customerSurveyReducer from './customerSurveyReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    customerSurvey:  customerSurveyReducer
})

export default rootReducer;
