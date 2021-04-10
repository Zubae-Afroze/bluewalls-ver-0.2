import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('submit')
    }

    return (
        <div className='bg-sign'>
            <Link to='/'>
                <div className='brand brand-light pt-4 pl-3'>
                    <h1>Bluewalls</h1>
                </div>
            </Link>
            <div className='container-lg d-md-flex flex-md-column justify-content-md-center signup-sec'>
                <div className='d-flex justify-content-center'>
                    <div className='alt-block'>
                        <div className='alt-wrap'>
                            <h2>Already Have an account?</h2>
                            <Link to='/signin'><Button variant='outline-light'>Sign In</Button></Link>
                        </div>
                        <div className='up-block d-flex   flex-column justify-content-center'>
                            <Form onSubmit={submitHandler} className='d-flex justify-content-center flex-column align-items-center '>
                                <Form.Control type='text' placeholder='Enter your name' className='my-2' />
                                <Form.Control type='email' placeholder='Enter Email' className='my-2' />
                                <Form.Control type='password' placeholder='Enter Password' className='my-2' />
                                <Form.Control type='password' placeholder='Confirm Password' className='my-2' />
                                <Button variant='secondary' className='mt-2 ' type='submit'>Sign Up</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
