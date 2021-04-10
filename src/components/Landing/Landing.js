import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <React.Fragment>
            <div className='landing-bg'>
                <Navbar />
                <div className='w-100 d-lg-flex justify-content-lg-center'>
                    <div className='landing-section px-3 px-sm-0 mb-2 mb-sm-0 d-flex flex-lg-row flex-column-reverse justify-content-lg-around align-items-center page-height'>
                        <div className='video-div landing-col-one'>
                            <video controls className="px-2 px-lg-2" autoplay="1">
                                <source src='/video/arch_vid.mp4' type='video/mp4' />
                            </video>
                        </div>
                        <div className='text-div landing-col-two my-3 my-sm-0 d-flex flex-column justify-content-around align-items-center my-md-3'>
                            <h3>Welcome to</h3>
                            <h1>Bluewalls</h1>
                            <Link to='/signup'><Button variant='secondary'>Get Started</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Landing
