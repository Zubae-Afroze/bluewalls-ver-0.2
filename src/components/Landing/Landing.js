import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Landing = (props) => {

    console.log(props)
    return (
        <React.Fragment>
            <div className='landing-bg'>
                <Navbar />
                <div className='w-100 d-lg-flex justify-content-lg-center'>
                    <div className='landing-section mt-5'>
                        <div className=' px-3 px-sm-0 mb-2 mb-sm-0 d-flex flex-lg-row flex-column-reverse justify-content-around  align-items-center page-height'>
                            <div className='video-div landing-col-one '>
                                <video controls className="px-2 px-lg-2" autoPlay="1">
                                    <source src='/video/arch_vid.mp4' type='video/mp4' />
                                </video>
                            </div>
                            <div className='text-div landing-col-two  my-sm-0 d-flex flex-column justify-content-around align-items-center my-md-3'>
                                <h5 className='text-center pt-2'>Easy and economical means to find your dream home</h5>
                                <h5>Welcome to</h5>
                                <h1>Bluewalls</h1>
                                <Link to='/signup'><Button variant='secondary'>Get Started</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Landing)
