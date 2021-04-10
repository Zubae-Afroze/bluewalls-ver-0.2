import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';
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
            logger: false
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
                logger: true 
            })
        } else {
            this.props.signUp(this.state)
        }
        console.log(this.state)
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
                            <div className='up-block d-flex   flex-column justify-content-center'>
                                <Form onSubmit={this.submitHandler} className='d-flex justify-content-center flex-column align-items-center '>
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
