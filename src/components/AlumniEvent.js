import React from 'react';
// import '../App.css'

const AlumniEvent = ({ data }) => {
    const { imageURL, title, location, date } = data;
    return (
        <div className='d-flex align-items-center p-3'>
            <div className='me-3'>
                <img style={{ width: '120px', height: '120px' }} src={imageURL} alt="" />
            </div>
            <div>
                <h6 className='fw-bold'>{title}</h6>
                <div className="d-flex">
                    <p className='opacity-75'>at <strong><em>{location}, </em></strong>in <strong><em>{date}</em></strong></p>
                </div>
            </div>
        </div>
    );
};

export default AlumniEvent;