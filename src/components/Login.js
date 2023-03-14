import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../auth/firebase.config';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const auth = getAuth(app);

const Login = () => {

    const [errorMsg, setErrorMsg] = useState();
    const [isError, setError] = useState(false);

    const navigate = useNavigate();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    console.log('🚀 Login-19-> loggedInUser =>', loggedInUser);

    const [success, setSuccess] = useState(false);


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setSuccess(true);
                setLoggedInUser(user);
                if (user.emailVerified) {
                    alert('Logged in successfully')
                    navigate('/');
                }
                else alert('Please verify your email to login');
            })
            .catch((error) => {
                // console.log(error)
                setErrorMsg(error.message);
                setError(true);
            });
    }
    return (
        <div>
            <section class="vh-100">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-xl-10">
                            <div class="card shadow-lg bg-body-tertiary rounded" style={{ borderRadius: '1rem', border: 'none' }}>
                                <div class="row g-0">
                                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://www.gnkckarnal.ac.in/wp-content/uploads/2020/06/785event_Pharma-960X960_v2.jpg"
                                            alt="login form" class="img-fluid" style={{ borderRadius: '1rem 0 0 1rem', height: '100%' }} />
                                    </div>
                                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div class="card-body p-4 p-lg-5 text-black">

                                            <form onSubmit={handleLogin}>

                                                <div class="d-flex align-items-center mb-3 pb-1">
                                                    <i class="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                    <span class="h1 fw-bold mb-0">Alumni</span>
                                                </div>

                                                <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                                                <div class="form-outline mb-4">
                                                    <input type="email" name='email' id="form2Example17" class="form-control form-control-lg" />
                                                    <label class="form-label" for="form2Example17">Email address</label>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <input type="password" name='password' id="form2Example27" class="form-control form-control-lg" />
                                                    <label class="form-label" for="form2Example27">Password</label>
                                                </div>

                                                <div class="pt-1 mb-4">
                                                    <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                                                </div>
                                                {
                                                    isError && <p className='text-warning' style={{ fontWeight: 700 }}>{errorMsg}</p>
                                                }
                                                <p class="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to='/register'
                                                    style={{ color: '#393f81' }}>Register here</Link></p>
                                            </form>
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

export default Login;