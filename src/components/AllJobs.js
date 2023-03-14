import React, { useEffect, useState } from 'react';
import CarrierOpportunity from './CarrierOpportunity/CarrierOpportunity';
import Footer from './Footer';
import Header from './Header';

const AllJobs = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/allJobs`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <>
            <Header />
            <div className="mt-3 pb-5">
                <h1 className='text-center mb-3 fw-bold'>Career opportunities</h1>
                {
                    data.map(data => <CarrierOpportunity data={data} key={data._id} />)
                }
            </div>
        </>
    );
};

export default AllJobs;