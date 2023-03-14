import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../auth/firebase.config';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import axios from 'axios';

const auth = getAuth(app);

const Register = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({});
    const [imageURL, setImageURL] = useState(null);
    const [errorMsg, setErrorMsg] = useState();
    const [isError, setError] = useState(false);

    // const [user, setUser] = useState({
    //     signedIn: false,
    //     email: '',
    //     password: '',
    // })

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const department = e.target.department.value;
        const mail = e.target.mail.value;
        const password = e.target.password.value;
        const mobile = e.target.mobile.value;
        createUserWithEmailAndPassword(auth, mail, password, name, mobile, department)
            .then((result) => {
                const newUser = { mail, displayName: name, mobile, department };
                setUser(newUser)
                saveUser(mail, name, mobile, department, imageURL, 'POST');
                // const user = result.user;
                setLoggedInUser(user);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                verifyEmail()
                navigate('/login');

            })
            .catch((error) => {
                console.log(error);
                setErrorMsg(error.message);
                setError(true);
            });
    }

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "b86c0ab7beeb42c384775d3b62a113c0");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    const saveUser = (email, name, mobile, department, imageURL, method) => {
        const userData = {
            email,
            name,
            mobile,
            department,
            imageURL
        };
        fetch('http://localhost:4000/users', {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then()
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => alert('Please check your email and verify it.'))
    }

    return (
        <div>
            <section class="vh-100">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card text-black shadow-lg p-3 mt-5 mb-5 bg-body-tertiary rounded" style={{ borderRadius: '25px', border: 'none' }}>
                                <div class="card-body p-md-5">
                                    <div class="row justify-content-center">
                                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form onSubmit={handleRegister} class="mx-1 mx-md-4">

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="text" name='name' class="form-control" placeholder='Your Name' required />
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="number" name='studentId' class="form-control" placeholder='Student ID' required />
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="email" name='mail' class="form-control" placeholder='Your Email' required />
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="password" name='password' placeholder='Password' class="form-control" required />
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="text" name='mobile' placeholder='Mobile' class="form-control" required />
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-solid fa-school fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="text" name='department' class="form-control" placeholder='Department & Batch' required />
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-solid fa-school fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="file" class="form-control" onChange={handleImageUpload} required />
                                                    </div>
                                                </div>

                                                {
                                                    isError && <p className='text-warning' style={{ fontWeight: 700 }}>{errorMsg}</p>
                                                }

                                                <div class="form-check d-flex justify-content-center mb-5">
                                                    <label class="form-check-label" for="form2Example3">
                                                        Already have an account? <Link to='/login'>Login</Link>
                                                    </label>
                                                </div>

                                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" class="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                class="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;