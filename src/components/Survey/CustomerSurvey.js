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
            rooms: '',
            area: '',
            apartmentType: {
                
            },
            floorPreference: '',
            furnishing: {
                
            }
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
                                    <Form.Group id="apartmentType">
                                        <Form.Label>Apartment Type</Form.Label>
                                        <Form.Group className='d-flex flex-wrap justify-content-start'>
                                            <Form.Check type="checkbox" label="Basement" className='m-2' />
                                            <Form.Check type="checkbox" label="Ground Floor" className='m-2' />
                                            <Form.Check type="checkbox" label="Mezzanine Floor" className='m-2' />
                                            <Form.Check type="checkbox" label="Flat" className='m-2' />
                                            <Form.Check type="checkbox" label="Loft" className='m-2' />
                                            <Form.Check type="checkbox" label="Maisonette" className='m-2' />
                                            <Form.Check type="checkbox" label="Terrace Apartment" className='m-2' />
                                            <Form.Check type="checkbox" label="Penthouse" className='m-2' />
                                            <Form.Check type="checkbox" label="Attic" className='m-2' />
                                            <Form.Check type="checkbox" label="Other" className='m-2' />
                                        </Form.Group>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Floor Preference</Form.Label>
                                        <Form.Control type='text' id='question3' onChange={this.changeHandler} placeholder='Answer' />
                                    </Form.Group>
                                    <Form.Group id="question4">
                                        <Form.Label>Furnishing</Form.Label>
                                        <Form.Group className='d-flex flex-wrap justify-content-start'>
                                            <Form.Check type="checkbox" label="Garage /Parking Space" className='m-2' />
                                            <Form.Check type="checkbox" label="Equipped Kitchen" className='m-2' />
                                            <Form.Check type="checkbox" label="Passenger Elevator" className='m-2' />
                                            <Form.Check type="checkbox" label="Basement,Cellar" className='m-2' />
                                            <Form.Check type="checkbox" label="Guest Toilet" className='m-2' />
                                        </Form.Group>
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
