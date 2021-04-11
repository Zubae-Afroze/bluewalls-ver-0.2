import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { customerSurveySubmit } from '../Store/Actions/customerSurveySubmit';

class CustomerSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            circle: '',
            question2: '',
            question3: '',
            question4: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    submitHandler = (e) => {
        e.preventDefault();
        this.props.customerSurveySubmit(this.state)
    }


    render() {

        const { auth } = this.props;

        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className='bg-customer'>
                <div className='container '>
                    <Link to='/'>
                        <div className='brand brand-light pt-3'>
                            <h1>Bluewalls</h1>
                        </div>
                    </Link>
                    <div className='d-flex justify-content-center mt-4'>
                        <div className='survey-block pt-3'>
                            <div className='back-btn ml-3'><Link to='/presurvey'><i className="fas fa-chevron-left"></i>Go Back</Link></div>
                            <div className='d-flex justify-content-center '>
                                <Form onSubmit={this.submitHandler}>
                                    <Form.Group className="d-flex">
                                        <Form.Label className='mr-2 pt-1'>Location</Form.Label>
                                        <Form.Control className='w-50' type='text' id='location' onChange={this.changeHandler} placeholder='Answer' />
                                        <Form.Label className='mx-2 pt-1'>Circle</Form.Label>
                                        <Form.Control type='text' className='w-50' id='circle' onChange={this.changeHandler} placeholder='Kms' />
                                    </Form.Group>
                                    <Form.Group className="d-flex">
                                        <Form.Label className='mr-3 pt-1'>Rooms</Form.Label>
                                        <Form.Control className='w-50' type='text' id='location' onChange={this.changeHandler} placeholder='Answer' />
                                        <Form.Label className='mx-2 pt-1'>Area</Form.Label>
                                        <Form.Control type='text' className='w-50' id='circle' onChange={this.changeHandler} placeholder='In m2' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Question 2</Form.Label>
                                        <Form.Control type='text' id='question2' onChange={this.changeHandler} placeholder='Answer' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Apartment Type</Form.Label>
                                        <Form.Control type='text' id='question3' onChange={this.changeHandler} placeholder='Answer' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Question 4</Form.Label>
                                        <Form.Control type='text' id='question4' onChange={this.changeHandler} placeholder='Answer' />
                                    </Form.Group>
                                    <Button variant='secondary' type='submit'>Submit</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        customerSurveySubmit: (survey) => dispatch(customerSurveySubmit(survey))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSurvey)
