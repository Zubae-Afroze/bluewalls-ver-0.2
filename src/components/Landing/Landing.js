import React from 'react'
import Navbar from '../Navbar/Navbar'

const Landing = () => {
    return (
        <React.Fragment>
            <div className='bg bg-top-negative'>
                <Navbar />            
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center page-height'>
                <div>
                    <h1>Video</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Landing
