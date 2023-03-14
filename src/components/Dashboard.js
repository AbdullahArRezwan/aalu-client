import React from 'react';
import AddNews from './AddNews';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <AddNews />
            </div>
        </div>
    );
};

export default Dashboard;