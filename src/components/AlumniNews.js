import React, { useEffect, useState } from 'react';
import AlumniIndividualNews from './AlumniIndividualNews';
const AlumniNews = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/allNews`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='mx-auto'>
            <div className=''>
                {
                    data.slice(0, 3).map(data => <AlumniIndividualNews data={data} key={data._id} />)
                }
            </div>
        </div>
    );
};

export default AlumniNews;