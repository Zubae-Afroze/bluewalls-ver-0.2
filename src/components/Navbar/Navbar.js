import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../Store/Actions/authActions';

const Menubar = (props) => {
    const { auth } = props;

    const [drop, setDrop] = useState(false)

    const clickHandler = () => {
        props.signOut();
        setDrop(!drop);
    }

    return (
        <Container>
            <div className='d-flex justify-content-between'>
                <Link to='/'>
                    <div className='brand brand-light mt-3'>
                        <h1>Bluewalls</h1>
                    </div>
                </Link>
                { auth.uid ?
                <div className='d-flex align-items-center justify-content-center logged-in mt-3 mr-3' 
                    onClick={() => setDrop(!drop)}
                >
                    TU 
                </div>
                :
                <div className='mt-3'>
                    <Link to='/signin'><Button className='mr-3 btn-main'>Login</Button></Link>
                    <Link to='/signup'><Button className='btn-main'>Sign Up</Button></Link>
                </div>
                }
                {
                    drop ? <div className='d-flex flex-column justify-content-center align-items-center mt-3 log-menu'>
                            <p onClick={clickHandler} className='mt-3'>Logout</p>
                            <p>Dashboard</p>
                            </div> : null
                }
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menubar)
