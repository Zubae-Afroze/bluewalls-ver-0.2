import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('submit')
    }

    return (
        <div className='bg-sign'>
            <Container>
                <Link to='/'>
                    <div className='brand brand-light mt-3'>
                        <h1>Bluewalls</h1>
                    </div>
                </Link>
                <div className='d-flex justify-content-center'>
                    <div className='alt-block'>
                        <div className='alt-wrap'>
                            <h2>Already Have an account?</h2>
                            <Link to='/signin'><Button variant='outline-light'>Sign In</Button></Link>
                        </div>
                        <div className='up-block'>
                            <Form onSubmit={submitHandler}>
                                <Form.Control type='text' placeholder='Enter your name' />
                                <Form.Control type='email' placeholder='Enter Email' />
                                <Form.Control type='password' placeholder='Enter Password' />
                                <Form.Control type='password' placeholder='Confirm Password' />
                                <Button variant='secondary' type='submit'>Sign Up</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SignUp
