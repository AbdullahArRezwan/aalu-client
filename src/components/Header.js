import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut, getAuth } from "firebase/auth";
import { UserContext } from '../App';
import app from '../auth/firebase.config';
import logo from '../assets/WhatsApp Image 2023-03-13 at 6.21.40 PM.jpeg';

const auth = getAuth(app);

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isLoggedIn, setLog] = useState(false);
    const [adminData, setAdminData] = useState([]);
    const [adminProps, setAdmin] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);

    console.log('🚀 Header-16-> isAdmin =>', isAdmin);

    useMemo(() => {
        const data = Array.from(adminData)
        const admin = data.map(d => setAdmin(d.admin))
        return admin;
    }, [adminData])

    useEffect(() => {
        fetch('http://localhost:4000/admin')
            .then(res => res.json())
            .then(data => setAdminData(data))

        if (loggedInUser.email !== undefined) {
            setLog(true)
        }

        if (adminProps === loggedInUser.email) {
            setIsAdmin(true);
        }

    }, [adminProps, loggedInUser])

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setLoggedInUser({});
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <>
            <nav class="navbar navbar-expand-lg sticky-top" style={{ background: '#01274B', height: '70px' }}>
                <div class="container-fluid ">
                    <Link to='/' class="navbar-brand text-white fw-bold" href="#"><img style={{ width: '180px', height: '70px' }} src={logo} alt="" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <Link to='/' class="nav-link active text-white fw-bold" aria-current="page" href="#">Home</Link>
                            <Link to='/gallery' class="nav-link text-white fw-bold" href="#">Gallery</Link>
                            {
                                isAdmin && <Link to='/dashboard' class="nav-link text-white fw-bold">Dashboard</Link>
                            }
                            <Link to='/allNews' class="nav-link text-white fw-bold">News</Link>
                            <Link to='/events' class="nav-link text-white fw-bold">Events</Link>
                            <Link to='/directory' class="nav-link text-white fw-bold">Directory</Link>
                            <Link to='/magazines' class="nav-link text-white fw-bold">Magazines</Link>
                            <Link to='/allAlumni' class="nav-link text-white fw-bold">Contact</Link>
                            <Link to='/donate' class="nav-link text-white fw-bold">Donate</Link>
                            {
                                isLoggedIn ? <Link to='/login' onClick={handleLogout} class="nav-link text-white fw-bold">Logout</Link> : <Link to='/login' class="nav-link text-white fw-bold">Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;