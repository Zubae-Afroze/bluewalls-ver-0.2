import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { customerSurveySubmit } from '../Store/Actions/customerSurveySubmit';

class CustomerSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question1: '',
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

    
    render(){
        return (
            <div className='bg-customer'>
                <Container>
                    <Link to='/'>
                        <div className='brand brand-light mt-3'>
                            <h1>Bluewalls</h1>
                        </div>
                    </Link>
                    <div className='survey-block'>
                        <div className='back-btn'><Link to='/presurvey'><i className="fas fa-chevron-left"></i>Go Back</Link></div>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Group>
                                <Form.Label>Question 1</Form.Label>
                                <Form.Control type='text' id='question1' onChange={this.changeHandler} placeholder='Answer'/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Question 2</Form.Label>
                                <Form.Control type='text' id='question2' onChange={this.changeHandler} placeholder='Answer'/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Question 3</Form.Label>
                                <Form.Control type='text' id='question3' onChange={this.changeHandler} placeholder='Answer'/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Question 4</Form.Label>
                                <Form.Control type='text' id='question4' onChange={this.changeHandler} placeholder='Answer'/>
                            </Form.Group>
                            <Button variant='secondary' type='submit'>Submit</Button>
                        </Form>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        customerSurveySubmit: (survey) => dispatch(customerSurveySubmit(survey))
    }
}

export default connect(null, mapDispatchToProps)(CustomerSurvey)
