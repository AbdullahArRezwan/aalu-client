import React, { useEffect, useState } from 'react';
import AlumniDirectory from './AlumniDirectory';
import Footer from './Footer';
import Header from './Header';

const AlumniDirectories = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/allDirectories`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log('🚀 AlumniDirectories-13-> data =>', data);
    return (
        <div>
            <Header />
            <div className="container mt-3 mb-5 mx-auto">
                <div className="row w-100">
                    <h1 className='text-center mb-3 fw-bold'>Alumni Directory</h1>
                    {
                        data.map(data => <AlumniDirectory key={data._id} data={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AlumniDirectories;