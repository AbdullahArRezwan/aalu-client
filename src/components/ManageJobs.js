import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';

const ManageJobs = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/allJobs`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:4000/deleteJob/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result) {
                    const newAreaData = data.filter(
                        (specificArea) => specificArea._id !== id
                    );
                    setData(newAreaData);
                }
            });
    };
    return (
        <div className='row w-100'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div class="table-responsive">
                    <table class="table  mt-2">
                        <caption>List of jobs</caption>
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Location</th>
                                <th scope="col">Title</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(d => (
                                    <tr>
                                        <th scope="row">{d._id}</th>
                                        <td>{d.name}</td>
                                        <td>{d.location}</td>
                                        <td>{d.title}</td>
                                        <td>
                                            <i
                                                class="fas fa-trash-alt"
                                                style={{ color: "red", cursor: "pointer" }}
                                                onClick={() => handleDelete(d._id)}
                                            ></i>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageJobs;