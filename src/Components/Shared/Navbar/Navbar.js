import React from 'react';
import Logo from '../../images/logos/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light offset-md-1">
            <img style={{ width: '15%'}} class="navbar-brand img-fluid" src={Logo} alt="Logo"/>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5 font-weight-bold" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 font-weight-bold" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 font-weight-bold" href="#">Dental Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 font-weight-bold" href="#">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 font-weight-bold" href="#">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 font-weight-bold" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;