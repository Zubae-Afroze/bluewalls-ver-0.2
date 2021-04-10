import authReducer from './authReducer';
import customerSurveyReducer from './customerSurveyReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    customerSurvey:  customerSurveyReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer;
