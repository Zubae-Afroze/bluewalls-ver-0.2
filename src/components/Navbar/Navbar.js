import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../Store/Actions/authActions';

const Menubar = (props) => {
    const { auth, profile } = props;

    const [drop, setDrop] = useState(false)

    const clickHandler = () => {
        props.signOut();
        setDrop(!drop);
    }

    return (
        <div className='container-fluid pb-2 nav-section'>
            <div className='d-flex justify-content-between py-2 py-sm-0'>
                <Link to='/'>
                    <div className='brand brand-light pt-3'>
                        {/* <h1 className='brand-dark'>Bluewalls</h1> */}
                        <img src='/bluelogo.png' alt='bluewalls-logo' className='bluelogo' />
                    </div>
                </Link>
                {auth.uid ?
                    <div className='d-flex align-items-center justify-content-center logged-in mt-3 mr-3'
                        onClick={() => setDrop(!drop)}
                    >
                        {profile.initials}
                        {
                            drop ? <div className='d-flex flex-column justify-content-center align-items-center mt-3 log-menu'>
                                <p onClick={clickHandler} className='mt-3'>Logout</p>
                                <Link to='/dashboard'><p>Dashboard</p></Link>
                            </div> : null
                        }
                    </div>
                    :
                    <div className='pt-1 flex-column d-flex justify-content-center'>
                        <div className='d-flex my-2 my-sm-0' >
                            <Link to='/signin'><div className='mr-sm-3 mx-1' style={{ color: "black", fontSize: "1.1rem" }}>Login</div></Link>
                            <Link to='/signup'><div className='mr-sm-5   mx-4' style={{ color: "black", fontSize: "1.1rem" }}>Sign Up</div></Link>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menubar)
