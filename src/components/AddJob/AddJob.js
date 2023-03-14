import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddJob.css';

const AddJob = () => {

    const [property, setProperty] = useState({});

    const handleBlur = (e) => {
        const newData = { ...property };
        newData[e.target.name] = e.target.value;
        setProperty(newData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: property.name,
            location: property.location,
            title: property.title,
            type: property.type,
            salary: property.salary,
            deadline: property.deadline,
        };
        fetch(`http://localhost:4000/addJob`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => !data ? alert('Property Added Successfully') : alert('Oops! Something went wrong'))

        e.target.reset()
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div class="mt-4 mx-auto">
                    <div class="row d-flex w-100">
                        <div class="col-12">
                            <div class="card jobCard">
                                <h5 class="text-center mb-4">Add preferred job</h5>
                                <form class="form-card" onSubmit={handleSubmit}>
                                    <div class="row justify-content-between text-left mb-3">
                                        <div class="form-group col-sm-6 flex-column d-flex text-left"> <label class="form-control-label px-3">Company name<span class="text-danger"> *</span></label> <input className='jobInp' type="text" id="fname" name="name" onblur="validate(1)" onBlur={handleBlur} /> </div>
                                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Company Location<span class="text-danger"> *</span></label> <input className='jobInp' type="text" id="lname" name="location" onblur="validate(2)" onBlur={handleBlur} /> </div>
                                    </div>
                                    <div class="row justify-content-between text-left mb-3">
                                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Job title<span class="text-danger"> *</span></label> <input className='jobInp' type="text" id="job" name="title" placeholder="" onBlur={handleBlur} /> </div>
                                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Job Type<span class="text-danger"> *</span></label> <input className='jobInp' type="text" id="mob" name="type" placeholder="" onBlur={handleBlur} /> </div>
                                    </div>
                                    <div class="row justify-content-between text-left mb-3">
                                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Estimated Salary<span class="text-danger"> *</span></label> <input className='jobInp' type="text" id="job" name="salary" placeholder="" onBlur={handleBlur} /> </div>
                                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Deadline<span class="text-danger"> *</span></label> <input className='jobInp' type="text" id="job" name="deadline" placeholder="" onBlur={handleBlur} /> </div>
                                    </div>
                                    <div class="row justify-content-end mt-3">
                                        <div class="form-group"> <button className='jobBtn' type="submit" class="btn btn-primary text-left">Add a job</button> </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddJob;