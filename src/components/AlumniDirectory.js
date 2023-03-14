import React from 'react';

const AlumniDirectory = ({ data }) => {
    const { name, designation, workPlace, imageURL } = data;
    return (
        <div className="col-md-4">
            <div className="cardDirectory p-4 my-3 mx-1" style={{ background: '#F1F1F1', borderRadius: '10px' }}>
                <div className="d-flex align-items-center ">
                    <img className='rounded me-4' style={{ width: '180px', height: '180px' }} src={imageURL} alt="" />
                    <div>
                        <h5>{name}</h5>
                        <p>{designation}</p>
                        <strong><em>{workPlace}</em></strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumniDirectory;