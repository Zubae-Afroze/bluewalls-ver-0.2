import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Button } from 'react-bootstrap';

const Landing = () => {
    return (
        <React.Fragment>
            <div className='bg bg-top-negative'>
                <Navbar />            
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center page-height'>
                <div className='video-div'>
                    <video controls>
                        <source src='/video/arch_vid.mp4' type='video/mp4' />
                    </video>
                </div>
                <div className='text-div d-flex flex-column justify-content-around align-items-center ml-md-5'> 
                    <h3>Welcome to</h3>
                    <h1>Bluewalls</h1>
                    <Button variant='secondary'>Get Started</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Landing
