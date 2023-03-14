import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { signOut, getAuth } from "firebase/auth";
import app from '../../auth/firebase.config';
import { UserContext } from '../../App';
import './sidebar.css';
import logo from '../../assets/WhatsApp Image 2023-03-13 at 6.21.40 PM.jpeg'

const auth = getAuth(app);

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

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
        <div style={{ backgroundColor: '#F1F1F1' }}>
            <div className="sidebar d-flex flex-column justify-content-between " style={{ height: "100vh" }}>

                <ul className="list-unstyled">
                    <Link to="/"><img style={{ width: '180px', height: '70px' }} src={logo} alt="" /></Link>
                    <div className="my-4">

                        <div>
                            <li>
                                <Link to="/dashboard" className="sideBarlink">
                                    <span>Add News</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/addEvent" className="sideBarlink">
                                    <span>Add Event</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/jobs" className="sideBarlink">
                                    <span>Add Job</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/addDirectory" className="sideBarlink">
                                    <span>Add Directory</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/addPhoto" className="sideBarlink">
                                    <span>Add Photo</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/addMagazine" className="sideBarlink">
                                    <span>Add Magazine</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manageNews" className="sideBarlink">
                                    <span>Manage News</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manageEvents" className="sideBarlink">
                                    <span>Manage Events</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manageJobs" className="sideBarlink">
                                    <span>Manage Jobs</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manageDirectory" className="sideBarlink">
                                    <span>Manage Directory</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manageGallery" className="sideBarlink">
                                    <span>Manage Gallery</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manageMagazines" className="sideBarlink">
                                    <span>Manage Magazines</span>
                                </Link>
                            </li>

                            <li>
                                <Link to='/login' className="text-dark" onClick={handleLogout} class="nav-link"><span className="logoutBtn">Logout</span></Link>
                            </li>
                        </div>

                    </div>



                </ul>
                {/* <div className="text-center my-5">
                    <Link to="/" className="text-dark"> <span className="logoutBtn">Logout</span></Link>
                </div> */}
            </div>
        </div>
    );
};

export default Sidebar;