import React, { useEffect, useState } from 'react';
import SpecificNews from './SpecificNews';
import Header from '../components/Header';

const AllNews = () => {
    const [data, setData] = useState([])
    console.log('🚀 AllNews-6-> data =>', data);

    useEffect(() => {
        fetch(`http://localhost:4000/allNews`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <>
            <Header />
            <div className='container my-5'>
                {
                    data.map(data => <SpecificNews key={data._id} data={data} />)
                }
            </div>
        </>
    );
};

export default AllNews;