import React from 'react';

const AllEvent = ({ data }) => {
    const { type, title, location, date, description } = data

    return (
        <>
            <div className='container'>
                <div>
                    <div class="card mx-auto w-75 my-5 shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div class="card-body">
                            <h6 class="card-subtitle mb-2" style={{ color: '#952D28' }}>{type || 'undefined'}</h6>
                            <h5 class="card-title fs-3">{title}</h5>
                            <div className='d-flex'>
                                <p>{date}</p>
                                <p className='mx-2'>|</p>
                                <p>{location}</p>
                            </div>
                            <p class="card-text opacity-75">{description || 'undefined'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllEvent;