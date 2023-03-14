import React from 'react';
import logo from '../assets/WhatsApp Image 2023-03-13 at 6.21.40 PM.jpeg'

const Footer = () => {
    return (
        <div className='p-5 text-white' style={{ background: '#01274B' }}>
            <div className="container-fluid">
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h5>+88098712131212</h5>
                        <h4>lu.alumni.edu</h4>
                        <h4>Kamalbazar, sylhet</h4>
                    </div>
                    <div>
                        <img style={{ width: '250px', height: '100px', marginLeft: '100px' }} src={logo} alt="" />
                    </div>
                </div>
                <hr />
                <p className='text-center'>© LU-Alumni All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;