import React from 'react';
import './Header.css';
import Navbar from '../../Shared/Navbar/Navbar'
import HeaderMain from '../HeaderMain/HeaderMain'

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            
        </div>
    );
};

export default Header;