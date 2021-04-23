import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PreSurvey = (props) => {

    const { auth } = props;

    if (!auth.uid) return <Redirect to='/signin' />

    return (
        <div className='bg-pre'>
            <Container>
                <Link to='/'>
                    <div className='brand brand-light pt-3'>
                        {/* <h1>Bluewalls</h1> */}
                        <img src='/bluelogoinvert.jpg' alt='bluewalls-logo' className='bluelogo' />
                    </div>
                </Link>
                <div className='d-flex flex-column justify-content-center text-center align-items-center option-main'>
                    <h1>Please click on any one from below options.</h1>
                    <div className='option-wrap option-disabled'>
                        <Link to='/presurvey' className='d-flex flex-row justify-content-around align-items-center'>
                            <div><i className="fas fa-user-tie"></i></div>
                            <div>Investor</div>
                        </Link>
                    </div>
                    <div className='option-wrap option-disabled'>
                        <Link to='/presurvey' className='d-flex flex-row justify-content-around align-items-center'>
                            <div><i className="fas fa-building"></i></div>
                            <div className='mr-1 mr-sm-1'>Builder</div>
                        </Link>
                    </div>
                    <div className='option-wrap'>
                        <Link to='/customersurvey' className='d-flex flex-row justify-content-around align-items-center'>
                            <div><i className="fas fa-smile ml-2 ml-sm-0"></i></div>
                            <div>Customer</div>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(PreSurvey)
