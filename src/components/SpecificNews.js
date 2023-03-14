import React from 'react';
import { useNavigate } from 'react-router-dom';

const SpecificNews = ({ data }) => {

    const { _id, imageURL, title, description } = data;
    const navigate = useNavigate();
    const handleClick = (newsId) => {
        const url = `/news/${newsId}`;
        navigate(url);
    };

    return (
        <div className='d-flex align-items-center border border-2 p-3 mb-4 rounded'>
            <div className='me-3'>
                <img className='rounded' style={{ width: '450px', height: '250px' }} src={imageURL} alt="" />
            </div>
            <div className=''>
                <h3 className='fw-bold'>{title}</h3>
                <p className='desc opacity-75'>{description}</p>
                <button className='btn btn-info text-light fw-bold' onClick={() => handleClick(_id)}>See Details</button>
            </div>
        </div>
    );
};

export default SpecificNews;