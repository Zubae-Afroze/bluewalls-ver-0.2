import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <Container>
            <div className='d-flex justify-content-between'>
                <Link to='/'>
                    <div className='brand brand-light mt-3'>
                        <h1>Bluewalls</h1>
                    </div>
                </Link>
                <div className='mt-3'>
                    <Button className='mr-3 btn-main'>Login</Button>
                    <Button className='btn-main'>Sign Up</Button>
                </div>
            </div>
        </Container>
    )
}

export default Menubar
