import React, { useState } from 'react';
import '../App.css';
import Footer from './Footer';
import Header from './Header';
import img from '../assets/pexels-branimir-balogović-3959485.jpg';

const Donate = () => {

    const [property, setProperty] = useState({});

    const handleBlur = (e) => {
        const newData = { ...property };
        newData[e.target.name] = e.target.value;
        setProperty(newData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            fName: property.fName,
            lName: property.lName,
            email: property.email,
            donate: property.donate,
            local: property.local,
            state: property.state,
            city: property.city,
            zip: property.zip,
            pin: property.pin
        };
        fetch(`http://localhost:4000/donate`, {
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
        <>
            <Header />
            <section class="h-100">
                <div class="container h-100">
                    <div class='mt-2'>
                        <h1>Donate</h1>
                        <p class='fs-3'>The LUMUNA Federation provides valuable resources for the alumni, students, faculty, and the university.</p>
                    </div>
                    <div style={{ background: '#01274B', height: '3px', width: '100%', marginTop: '20px', marginBottom: '10px' }}></div>
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col">
                            <div class="card card-registration my-4">
                                <div class="row g-0">
                                    <div class="col-xl-6 d-none d-xl-block">
                                        <img src={img}
                                            alt="Sample photo" class="img-fluid h-100"
                                            style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                                    </div>
                                    <div class="col-xl-6">
                                        <form onSubmit={handleSubmit}>
                                            <div class="card-body p-md-5 text-black">
                                                <h3 class="mb-5 text-uppercase">Make Your Donation Here:</h3>

                                                <div class="row">
                                                    <div class="col-md-6 mb-4">
                                                        <div class="form-outline">
                                                            <input type="text" name='fName' id="form3Example1m" class="form-control form-control-lg" placeholder='First name' onBlur={handleBlur} />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mb-4">
                                                        <div class="form-outline">
                                                            <input type="text" name='lName' id="form3Example1n" class="form-control form-control-lg" placeholder='Last name' onBlur={handleBlur} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />

                                                <div class="form-outline mb-4">
                                                    <input type="text" name='email' id="form3Example97" class="form-control form-control-lg" placeholder='Email ID' onBlur={handleBlur} />
                                                </div>
                                                <br />

                                                <div class="form-outline mb-4">
                                                    <input type="text" name='donate' id="form3Example8" class="form-control form-control-lg" placeholder='Donation Amount' onBlur={handleBlur} />
                                                </div>
                                                <br />

                                                <div class="form-outline mb-4">
                                                    <input type="text" name='local' id="form3Example8" class="form-control form-control-lg" placeholder='Local Address' onBlur={handleBlur} />
                                                </div>
                                                <br />

                                                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                                                    <h6 class="mb-0 me-4">Gender: </h6>

                                                    <div class="form-check form-check-inline mb-0 me-4">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                            value="option1" />
                                                        <label class="form-check-label" for="femaleGender">Female</label>
                                                    </div>

                                                    <div class="form-check form-check-inline mb-0 me-4">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                            value="option2" />
                                                        <label class="form-check-label" for="maleGender">Male</label>
                                                    </div>

                                                    <div class="form-check form-check-inline mb-0">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                            value="option3" />
                                                        <label class="form-check-label" for="otherGender">Other</label>
                                                    </div>

                                                </div>
                                                <br />

                                                <div class="form-outline mb-4">
                                                    <input type="text" name='state' id="form3Example9" class="form-control form-control-lg" placeholder='State' onBlur={handleBlur} />
                                                </div>
                                                <br />

                                                <div class="form-outline mb-4">
                                                    <input type="text" name='city' id="form3Example9" class="form-control form-control-lg" placeholder='City' onBlur={handleBlur} />
                                                </div>
                                                <br />

                                                <div class="form-outline mb-4">
                                                    <input type="text" name='zip' id="form3Example9" class="form-control form-control-lg" placeholder='Zip code' onBlur={handleBlur} />
                                                </div>
                                                <br />

                                                <div class="form-outline mb-4">
                                                    <input type="text" name='pin' id="form3Example90" class="form-control form-control-lg" placeholder='Pincode' onBlur={handleBlur} />
                                                </div>
                                                <br />

                                                <div class="d-flex justify-content-end pt-3">
                                                    <button type="submit" class="btn btn-warning btn-lg ms-2">Submit form</button>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Donate;