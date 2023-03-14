import React, { useEffect, useState } from 'react'; import Sidebar from './Sidebar/Sidebar';

const ManageEvents = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/allEvents`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:4000/deleteEvent/${id}`, {
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
                        <caption>List of events</caption>
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Type</th>
                                <th scope="col">Title</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(d => (
                                    <tr>
                                        <th scope="row">{d._id}</th>
                                        <td>{d.type}</td>
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

export default ManageEvents;