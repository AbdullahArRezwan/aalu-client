import React from 'react';
import AlumniEvents from './AlumniEvents';
import AlumniNews from './AlumniNews';
import Banner from './Banner';
import CarrierOpportunities from './CarrierOpportunities/CarrierOpportunities';
import Footer from './Footer';
import Header from './Header';
import Mission from './Mission';
import NewsNEvents from './NewsNEvents';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <NewsNEvents />
            <Mission />
            <CarrierOpportunities />
            <Footer />
        </div>
    );
};

export default Home;