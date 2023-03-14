import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import './ApplyJob.css'

const ApplyJob = () => {

    const { jobId } = useParams();

    const [jobData, setJobData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/job/${jobId}`)
            .then((res) => res.json())
            .then((data) => {
                setJobData(data);
            });
    }, [jobId]);

    const handleSubmit = () => {
        alert('Applied Successfully')
    }

    return (
        <>
            <Header />
            <div class="container-fluid my-5">
                <div class="row">
                    <div class="col-lg-10 mx-auto">
                        <div class="card applyCard mt-2 mx-auto p-4 bg-light">
                            <div class="card-body bg-light">

                                <div class="container">
                                    <form className='applyForm' onSubmit={handleSubmit}>
                                        <div class="controls">

                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <div class="form-group">
                                                        <label for="form_name">Name *</label>
                                                        <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your name *" required="required" data-error="Firstname is required." />

                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <div class="form-group">
                                                        <label for="form_lastname">Email *</label>
                                                        <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your email *" required="required" data-error="Lastname is required." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <div class="form-group">
                                                        <label for="">Job Title *</label>
                                                        <input id="" type="text" name="text" class="form-control" value={jobData.title} required="required" data-error="Valid email is required." />

                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <div class="form-group">
                                                        <label for="">Company Name *</label>
                                                        <input id="" type="text" name="name" class="form-control" value={jobData.name} required="required" data-error="Valid email is required." />

                                                    </div>
                                                </div>

                                                <div class="col-md-6 mb-3">
                                                    <div class="form-group">
                                                        <label for="">Location *</label>
                                                        <input id="" type="text" name="text" class="form-control" value={jobData.location} required="required" data-error="Valid email is required." />

                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <div class="form-group">
                                                        <label for="form_email">Job Type *</label>
                                                        <input id="form_email" type="text" name="email" class="form-control" value={jobData.type} required="required" data-error="Valid email is required." />

                                                    </div>
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 mb-3">
                                                    <div class="form-group">
                                                        <label for="form_message">Resume *</label>
                                                        <input id="form_email" type="file" class="form-control" placeholder="Provide your resume *" required="required" data-error="Valid email is required." />
                                                    </div>
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <div class="form-group">
                                                        <label for="form_message">Message *</label>
                                                        <textarea id="form_message" name="message" class="form-control" placeholder="Tell us, why are you interested for this role?" rows="4" required="required" data-error="Please, leave us a message."></textarea
                                                        >
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <input type="submit" class="btn btn-success btn-send  pt-2 fw-bold" value="Apply for the role" />
                                                </div>

                                            </div>


                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </>

    );
};

export default ApplyJob;