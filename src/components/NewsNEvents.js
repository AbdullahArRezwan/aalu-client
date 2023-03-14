import React from 'react';
import AlumniNews from '../components/AlumniNews'
import AlumniEvents from './AlumniEvents';

const NewsNEvents = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-8">
                    <AlumniNews />
                </div>
                <div className="col-md-4">
                    <AlumniEvents />
                </div>
            </div>
        </div>
    );
};

export default NewsNEvents;