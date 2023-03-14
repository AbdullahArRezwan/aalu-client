import React from 'react';
import { useNavigate } from 'react-router-dom';

const Magazine = ({ data }) => {
    const navigate = useNavigate();
    const handleClick = (magazineId) => {
        const url = `/magazine/${magazineId}`;
        navigate(url);
    };
    return (
        <div className='w-75 mx-auto' onClick={() => handleClick(data._id)} style={{ cursor: 'pointer' }}>
            <div className="d-flex align-items-center border border-2 p-3 mb-4 rounded'">
                <div className='me-3'>
                    <img className='' style={{ width: '400px' }} src={data.imageURL} alt="" />
                </div>
                <div className=''>
                    <h4>{data.title}</h4>
                    <br />
                    <p className='desc opacity-75'>{data.pera}</p>
                    <h6>by <em>{data.author}</em></h6>
                </div>
            </div>
        </div>
    );
};

export default Magazine;