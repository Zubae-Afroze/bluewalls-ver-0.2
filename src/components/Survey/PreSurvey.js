import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PreSurvey = () => {
    return (
        <div className='bg-pre'>
            <Container>
                <Link to='/'>
                    <div className='brand brand-light mt-3'>
                        <h1>Bluewalls</h1>
                    </div>
                </Link>
                <div className='d-flex flex-column justify-content-center align-items-center option-main'>
                    <h1>Please click on any one from below options.</h1>
                    <div className='option-wrap option-disabled'>
                        <Link to='/presurvey' className='d-flex flex-row justify-content-around align-items-center'>
                            <div><i class="fas fa-user-tie"></i></div>
                            <div>Investor</div>
                        </Link>
                    </div>
                    <div className='option-wrap option-disabled'>
                        <Link to='/presurvey' className='d-flex flex-row justify-content-around align-items-center'>
                            <div><i class="fas fa-building"></i></div>
                            <div>Builder</div>
                        </Link>
                    </div>
                    <div className='option-wrap'>
                        <Link to='/customersurvey' className='d-flex flex-row justify-content-around align-items-center'>
                            <div><i class="fas fa-smile"></i></div>
                            <div>Customer</div>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PreSurvey
