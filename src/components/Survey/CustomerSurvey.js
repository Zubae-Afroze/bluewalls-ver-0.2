import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomerSurvey = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('submit')
    }

    return (
        <div className='bg-customer'>
            <Container>
                <Link to='/'>
                    <div className='brand brand-light mt-3'>
                        <h1>Bluewalls</h1>
                    </div>
                </Link>
                <div className='survey-block'>
                    <Link to='/presurvey'><Button variant='secondary'>Go Back</Button></Link>
                    <Form onSubmit={submitHandler}>
                        <Form.Group>
                            <Form.Label>Question 1</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Question 2</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Question 3</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Question 4</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Button variant='secondary'>Submit</Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default CustomerSurvey
