import React from 'react';
import BusinessLogo from '../BusinessLogo/BusinessLogo';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>This is Home component</h1>
            <BusinessLogo></BusinessLogo>
            <Services></Services>
            <Feedback></Feedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;