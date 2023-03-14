import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CarrierOpportunity from '../CarrierOpportunity/CarrierOpportunity';
import './CarrierOpportunities.css';

const CarrierOpportunities = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/allJobs`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="pb-5">
            <h1 className='text-center mb-3 fw-bold'>Career opportunities</h1>
            {
                data.slice(0, 3).map(data => <CarrierOpportunity data={data} key={data._id} />)
            }
            <div className='text-center'>
                <Link to='/allJob'><button className='btn btn-info px-5 py-3 fs-6 fw-bold'>See More Jobs</button></Link>
            </div>
        </div>
    );
};

export default CarrierOpportunities;