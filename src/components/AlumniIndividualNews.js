import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const AlumniIndividualNews = ({ data }) => {
    const { _id, imageURL, title, description } = data;
    const navigate = useNavigate();
    const handleClick = (newsId) => {
        const url = `/news/${newsId}`;
        navigate(url);
    };
    return (
        <div className='d-flex align-items-center border border-2 p-3 mb-4 rounded' style={{ cursor: 'pointer' }} onClick={() => handleClick(_id)}>
            <div className='me-3'>
                <img className='rounded' style={{ width: '350px', height: '200px' }} src={imageURL} alt="" />
            </div>
            <div className=''>
                <h3 className='fw-bold'>{title}</h3>
                <p className='desc opacity-75'>{description}</p>
            </div>
        </div>
    );
};

export default AlumniIndividualNews;