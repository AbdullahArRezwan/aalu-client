import React from 'react';

const Alumni = ({ data }) => {
    const { name, email, mobile, imageURL, department } = data;
    return (
        <div className=''>
            <div class="card mt-4 mx-auto shadow mb-3 bg-body-tertiary rounded w-75">
                <div class="card-body d-flex align-items-center">
                    <div className='me-3'>
                        <img src={imageURL} style={{ width: '300px' }} alt="" />
                    </div>
                    <div>
                        <h4 class="card-subtitle mb-2" style={{ color: '#952D28' }}>Name: {name || 'undefined'}</h4>
                        <br />
                        <h5>Email: {email}</h5>
                        <h6>Department: {department}</h6>
                        <p><strong><em>Contact: {mobile}</em></strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alumni;