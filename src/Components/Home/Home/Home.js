import React from 'react';
import BusinessLogo from '../BusinessLogo/BusinessLogo';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';
import SliderImg from '../SliderImg/SliderImg';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BusinessLogo></BusinessLogo>
            <Services></Services>
            <SliderImg></SliderImg>
            <Feedback></Feedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;