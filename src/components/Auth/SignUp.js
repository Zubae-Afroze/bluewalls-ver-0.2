import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../Store/Actions/authActions'
class SignUp extends Component {
    /*
    * onChange.
    * form state abstraction
    * state => diabled, loading, error.
    * use name attrib instead of id.
    */
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            confirmPassword: '',
            match: null
        }
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                ...this.state,
                match: true
            })
        } else {
            this.props.signUp(this.state);
        }
    }
    render() {
        const { auth } = this.props;

        if(auth.uid) return <Redirect to='/presurvey' />

        return (
            <div className='bg-sign'>
                <Link to='/'>
                    <div className='brand brand-light pt-3 pl-3'>
                        <img src='/bluelogoinvert.png' alt='bluewalls-logo' className='bluelogo' />
                    </div>
                </Link>
                <div className='container-lg d-md-flex flex-md-column justify-content-md-center signup-sec'>
                    <div className='d-flex justify-content-center'>
                        <div className='alt-block'>
                            <div className='alt-wrap'>
                                <h2>Already Have an account?</h2>
                                <Link to='/signin'><Button variant='outline-light'>Sign In</Button></Link>
                            </div>
                            <div className='up-block d-flex justify-content-center align-items-center'>
                                <Form onSubmit={this.submitHandler} className='d-flex w-100 justify-content-center flex-column align-items-center'>
                                    <Form.Group className='d-flex '>
                                        <Form.Control id='fname' type='text' onChange={this.changeHandler} placeholder='Enter your first name' className='my-2 w-50 pr-1 mr-1' />
                                        <Form.Control id='lname' type='text' onChange={this.changeHandler} placeholder='Enter your last name' className='my-2 w-50 pl-1 ml-1' />
                                    </Form.Group>
                                    <Form.Control id='email' type='email' onChange={this.changeHandler} placeholder='Enter Email' className='my-2' />
                                    <Form.Control id='password' type='password' onChange={this.changeHandler} placeholder='Enter Password' className='my-2' />
                                    <Form.Control id='confirmPassword' type='password' onChange={this.changeHandler} placeholder='Confirm Password' className='my-2' />
                                    <Form.Label className='w-75 px-5 text-center' style={{ fontSize: "0.75rem", height: "fit-content", margin: "0" }}>password must contain letters and numbers and be 8-16 characters</Form.Label>
                                    <Button variant='secondary' type='submit' className='mt-2'>Sign Up</Button>
                                    {this.match ?
                                        <div style={{ position: 'absolute', bottom: '0', width: '89%', textAlign: 'center' }}>
                                            <Alert variant={'danger'}>Please re-enter the password</Alert>
                                        </div>
                                        : null}
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
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (credentials) => dispatch(signUp(credentials))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
