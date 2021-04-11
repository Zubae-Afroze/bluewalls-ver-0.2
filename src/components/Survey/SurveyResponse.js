import React from 'react';
import { Link } from 'react-router-dom';

const SurveyResponse = () => {
    return (
        <div className='response-bg'>
            <div className='container'>
                <Link to='/'>
                    <div className='brand brand-light pt-3'>
                        <h1>Bluewalls</h1>
                    </div>
                </Link>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                <div className='survey-block p-3 text-center' style={{width: '30vw', height: '20vh'}}>
                    <p>Thank you for taking time to fill the form, we will contact you with an irresistible offer!!</p>
                </div>
            </div>
        </div>
    )
}

export default SurveyResponse
