import React, { Component } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { emailAuth } from '../Store/Actions/authActions';

class SignIn extends Component{
    constructor(props){
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

        if(auth.uid) return <Redirect to='/' />

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
                                <Form onSubmit={this.submitHandler}>
                                    <Form.Control id='email' onChange={this.changeHandler} type='email' placeholder='Enter Email' />
                                    <Form.Control id='password' onChange={this.changeHandler} type='password' placeholder='Enter Password' />
                                    <Button variant='secondary' type='submit'>Log In</Button>
                                    { authError ? 
                                        <div style={{ position: 'absolute', bottom: '0', width: '89%', textAlign: 'center'}}>
                                            <Alert variant={'danger'}>Login Failed</Alert>
                                        </div> 
                                    : null}
                                </Form>
                            </div>
                        </div>
                    </div>
                </Container>
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
