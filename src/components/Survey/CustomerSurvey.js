import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, Redirect, withRouter } from 'react-router-dom';
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
            basement: false,
            goundFloor: false,
            mezzanineFloor: false,
            flat: false,
            loft: false,
            masionette: false,
            terraceApartment: false,
            penthouse: false,
            attic: false,
            other: false,
            floorPreference: '',
            garage: false,
            equipedKitchen: false,
            passengerElevator: false,
            cellar: false,
            guestToilet: false,
            surveyType: 'customer'
        }
    }



    changeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    checkHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.checked
        })
    }


    submitHandler = (e) => {
        e.preventDefault();
        this.props.customerSurveySubmit(this.state);
        this.props.history.push('/surveyresponse');
        console.log(this.state);
    }


    render() {
        const { auth } = this.props;

        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className='bg-customer'>
                <div className='container'>
                    <Link to='/'>
                        <div className='brand brand-light pt-3'>
                            {/* <h1 className='brand-dark'>Bluewalls</h1> */}
                            <img src='/bluelogoinvert.jpg' alt='bluewalls-logo' className='bluelogo' />
                        </div>
                    </Link>
                    <div className='d-flex justify-content-center survey-wrap'>
                        <div className='survey-block pt-3'>
                            <div className='back-btn ml-3'><Link to='/presurvey'><i className="fas fa-chevron-left"></i>Go Back</Link></div>
                            <div className='d-flex justify-content-center '>
                                <Form onSubmit={this.submitHandler}>
                                    <Form.Group className="d-flex justify">
                                        <Form.Label className='mr-2 pt-1' style={{ width: "60px" }}>Location</Form.Label>
                                        <Form.Control className='w-50' type='text' name='location' onChange={this.changeHandler} placeholder='Answer' />
                                        <Form.Label className='mx-2 pt-1' style={{ width: "60px" }}>Circle</Form.Label>
                                        <Form.Control type='text' className='w-50' name='circle' onChange={this.changeHandler} placeholder='Kms' />
                                    </Form.Group>
                                    <Form.Group className="d-flex">
                                        <Form.Label className='mr-20px pt-1' style={{ width: "60px" }}>Rooms</Form.Label>
                                        <Form.Control className='w-50' type='text' name='rooms' onChange={this.changeHandler} placeholder='Answer' />
                                        <Form.Label className='mx-2 pt-1' style={{ width: "60px" }}>Area</Form.Label>
                                        <Form.Control type='text' className='w-50' name='area' onChange={this.changeHandler} placeholder='In m2' />
                                    </Form.Group>
                                    <Form.Group id="apartmentType">
                                        <Form.Label>Apartment Type</Form.Label>
                                        <Form.Group className='d-flex flex-wrap justify-content-between'>
                                            <Form.Check type="checkbox" label="Basement" name="basement" value={this.basement} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Ground Floor" name="goundFloor" value={this.groundFloor} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Mezzanine Floor" name="mezzanineFloor" value={this.mezzanineFloor} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Flat" name="flat" value={this.flat} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Loft" name="loft" value={this.loft} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Maisonette" name="maisonette" value={this.maisonette} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Terrace Apartment" name='terraceAppartment' value={this.terraceApartment} onChange={this.checkHandler} className='m-2' />
                                            <Form.Check type="checkbox" label="Penthouse" name="penthouse" value={this.penthouse} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Attic" name="attic" value={this.attic} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Other" name="other" value={this.other} onChange={this.checkHandler} className='m-2 w-150px' />
                                        </Form.Group>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Floor Preference</Form.Label>
                                        <Form.Control type='text' name='floorPreference' onChange={this.changeHandler} placeholder='Answer' />
                                    </Form.Group>
                                    <Form.Group id="question4">
                                        <Form.Label>Furnishing</Form.Label>
                                        <Form.Group className='d-flex flex-wrap justify-content-between'>
                                            <Form.Check type="checkbox" label="Garage /Parking Space" name='garage' value={this.garage} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Equipped Kitchen" name='equipedKitchen' value={this.equipedKitchen} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Passenger Elevator" name='passengerElevator' value={this.passengerElevator} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Basement / Cellar" name='cellar' value={this.cellar} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Guest Toilet" name='guestToilet' value={this.guestToilet} onChange={this.checkHandler} className='m-2 w-150px' />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CustomerSurvey))
