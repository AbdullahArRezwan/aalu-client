import React, { useEffect, useState } from 'react';
import Header from './Header';
import Magazine from './Magazine';

const Magazines = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/allMagazines`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <>
            <Header />
            <div className='container my-5'>
                {
                    data.map(data => <Magazine key={data._id} data={data} />)
                }
            </div>
        </>
    );
};

export default Magazines;