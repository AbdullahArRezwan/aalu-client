import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/lu_banner.jpeg'
import AlumniEvent from '../components/AlumniEvent'

const AlumniEvents = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/allEvents`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='border border-2 rounded'>
            <h2 className='fw-bold pt-3 ps-3'>Upcoming Events</h2>
            {
                data.slice(0, 4).map(data => <AlumniEvent data={data} key={data._id} />)
            }
            <div className='p-3 mb-2'>
                <Link to='/events'><button className='btn btn-info w-100 fw-bold'>VIEW MORE EVENTS</button></Link>
            </div>
        </div>
    );
};

export default AlumniEvents;