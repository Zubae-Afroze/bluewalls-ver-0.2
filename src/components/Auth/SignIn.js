import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SignIn = () => {

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
                            <h2>Don't Have an account?</h2>
                            <Link to='/signup'><Button variant='outline-light'>Sign Up</Button></Link>
                        </div>
                        <div className='main-block'>
                            <Form onSubmit={submitHandler}>
                                <Form.Control type='email' placeholder='Enter Email' />
                                <Form.Control type='password' placeholder='Enter Password' />
                                <Button variant='secondary' type='submit'>Log In</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SignIn
