import React from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
    console.log(props);
    return (
        <div>
            <div className='dashboard-bg'>
                    <div className='brand brand-light pt-3 ml-3'>
                        <Link to='/'>
                            <img src='/bluelogoinvert.png' alt='bluewalls-logo' className='bluelogo' />
                        </Link>
                    </div>
                    <div className='dashboard-main'>
                        <div className='dashboard-survey'>
                            <h1>My Surveys</h1>
                            <div>
                                <div className='dash-card'>
                                {
                                    props.survey ?
                                    props.survey.map(obj => (
                                        <Card  key={obj.id}>
                                            Survey Type: {obj.surveyType}<br />
                                            Location : {obj.location} <br/>
                                            Circle: {obj.circle} <br/>
                                            Rooms: {obj.rooms} <br/>
                                            Area: {obj.area} <br/>
                                            Selected Ammenities: {obj.checked.map((e, index) => (<span className='select' key={index}>{e}</span>))}
                                        </Card>
                                    )) : null
                                }
                                </div>
                                <div className='add-icon'>
                                    <Link to='/presurvey'>
                                        <i className="fas fa-plus-circle"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard-profile'>
                            <h1>My Profile</h1>
                            <div>Name: {props.profile.fname + ' ' + props.profile.lname}</div>
                            <div>Registered Email: {props.auth.email}</div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    const id = state.firebase.auth.uid
    const surveyResponses = state.firestore.ordered.surveyResponses
    const survey = surveyResponses ? surveyResponses.filter(o => o.submittedBy === id) : null
    return {
        auth: state.firebase.auth,
        survey: survey,
        profile: state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'surveyResponses' }
    ])
)(Dashboard)