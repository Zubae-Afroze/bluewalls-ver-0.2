import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Dashboard = (props) => {
    console.log(props)
    return (
        <div>
            test
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    const id = state.firebase.auth.uid
    const surveyResponses = state.firestore.ordered.surveyResponses
    const survey = surveyResponses ? surveyResponses.filter(o => o.submittedBy === id) : null
    return {
        auth: state.firebase.auth.uid,
        survey: survey,
        surveyResponses: surveyResponses
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'surveyResponses' }
    ])
)(Dashboard)