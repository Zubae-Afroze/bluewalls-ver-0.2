import React, {Component} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../Store/Actions/authActions'

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            match: null
        }
    }

    changeHandler = (e) => {
        e.preventDefault();
        [e.target.id] = e.target.value
    }
 
    submitHandler = (e) => {
        e.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                ...this.state,
                match: true
            })
        } else {
            
        }
    }
    render() {
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
                            <div className='up-block'>
                                <Form onSubmit={this.submitHandler}>
                                    <Form.Control id='name' type='text' onChange={this.changeHandler} placeholder='Enter your name' />
                                    <Form.Control id='email' type='email' onChange={this.changeHandler} placeholder='Enter Email' />
                                    <Form.Control id='password' type='password' onChange={this.changeHandler} placeholder='Enter Password' />
                                    <Form.Control id='confirmPassword' type='password' onChange={this.changeHandler} placeholder='Confirm Password' />
                                    <Button variant='secondary' type='submit'>Sign Up</Button>
                                    { this.match ? 
                                        <div style={{ position: 'absolute', bottom: '0', width: '89%', textAlign: 'center'}}>
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
