import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { emailAuth } from '../Store/Actions/authActions';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
        this.props.signIn(this.state);
    }

    render() {
        const { authError } = this.props;

        const { auth } = this.props;

        if(auth.uid) return <Redirect to='/presurvey' />

        return (
            <div className='bg-sign'>
                <>
                    <Link to='/'>
                        <div className='brand brand-light pt-3 pl-3'>
                            <img src='/bluelogoinvert.jpg' alt='bluewalls-logo' className='bluelogo' />
                        </div>
                    </Link>
                    <div className='container-lg d-md-flex flex-md-column justify-content-md-center signup-sec'>

                        <div className='d-flex justify-content-center'>
                            <div className='alt-block'>
                                <div className='alt-wrap'>
                                    <h2>Don't Have an account?</h2>
                                    <Link to='/signup'><Button variant='outline-light'>Sign Up</Button></Link>
                                </div>
                                <div className='main-block d-flex flex-column justify-content-center'>
                                    <Form onSubmit={this.submitHandler} className='d-flex justify-content-center flex-column align-items-center'>
                                        <Form.Control id='email' onChange={this.changeHandler} type='email' placeholder='Enter Email' className='my-2' />
                                        <Form.Control id='password' onChange={this.changeHandler} type='password' placeholder='Enter Password' className='my-2' />
                                        <Button variant='secondary' className='mt-3' type='submit'>Log In</Button>
                                        {authError ?
                                            <div style={{ position: 'absolute', bottom: '0', width: '89%', textAlign: 'center' }}>
                                                <Alert variant={'danger'}>Login Failed</Alert>
                                            </div>
                                            : null}
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
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
        signIn: (credentials) => dispatch(emailAuth(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
