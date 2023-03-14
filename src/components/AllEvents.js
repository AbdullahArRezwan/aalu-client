import React, { useEffect, useState } from 'react';
import AllEvent from './AllEvent';
import Footer from './Footer';
import Header from './Header';

const AllEvents = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/allEvents`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <>
            <Header />
            <div>
                {
                    data.map(data => <AllEvent key={data._id} data={data} />)
                }
            </div>
        </>
    );
};

export default AllEvents;