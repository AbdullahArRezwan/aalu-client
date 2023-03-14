import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AlumniSpecificNews from './components/AlumniSpecificNews';
import AddNews from './components/AddNews';
import AddEvent from './components/AddEvent';
import AllEvents from './components/AllEvents';
import AddJob from './components/AddJob/AddJob';
import AllJobs from './components/AllJobs';
import ApplyJob from './components/ApplyJob/ApplyJob';
import Dashboard from './components/Dashboard';
import { createContext, useState } from 'react';
import Gallery from './components/Gallery';
import AlumniDirectories from './components/AlumniDirectories';
import AddDirectory from './components/AddDirectory';
import AllNews from './components/AllNews';
import Donate from './components/Donate';
import AddPhoto from './components/AddPhoto';
import ManageNews from './components/ManageNews';
import ManageEvents from './components/ManageEvents';
import ManageJobs from './components/ManageJobs';
import ManageDirectory from './components/ManageDirectory';
import ManageGallery from './components/ManageGallery';
import AllAlumni from './components/AllAlumni';
import AddMagazine from './components/AddMagazine';
import Magazines from './components/Magazines';
import PrivateRoute from './components/PrivateRoute';
import SpecificMagazine from './components/SpecificMagazine';
import ManageMagazine from './components/ManageMagazine';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/news/:newsId" element={<AlumniSpecificNews />} />
          <Route path="/magazine/:magazineId" element={<SpecificMagazine />} />
          <Route path="/addNews" element={<AddNews />} />
          <Route path="/addEvent" element={<AddEvent />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<AllEvents />} />
          <Route path="/jobs" element={<AddJob />} />
          <Route path="/allJob" element={<AllJobs />} />
          <Route path="/job/:jobId" element={<ApplyJob />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/directory" element={<AlumniDirectories />} />
          <Route path="/addDirectory" element={<AddDirectory />} />
          <Route path="/allNews" element={<AllNews />} />
          <Route path="/donate" element={<PrivateRoute><Donate /></PrivateRoute>} />
          <Route path="/addPhoto" element={<AddPhoto />} />
          <Route path="/addMagazine" element={<AddMagazine />} />
          <Route path="/magazines" element={<Magazines />} />
          <Route path="/manageMagazines" element={<ManageMagazine />} />
          <Route path="/manageNews" element={<ManageNews />} />
          <Route path="/manageEvents" element={<ManageEvents />} />
          <Route path="/manageJobs" element={<ManageJobs />} />
          <Route path="/manageDirectory" element={<ManageDirectory />} />
          <Route path="/manageGallery" element={<ManageGallery />} />
          <Route path="/manageGallery" element={<ManageGallery />} />
          <Route path="/allAlumni" element={<AllAlumni />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
