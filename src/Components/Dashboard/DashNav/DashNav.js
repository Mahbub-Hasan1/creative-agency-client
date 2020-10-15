import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const DashNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light offset-md-1">
            <h5 style={{ width: '15%' }} className="navbar-brand">Order </h5>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/Home" className="nav-link mr-5 font-weight-bold"><img style={{ borderRadius: '50px' }} width="60" src={loggedInUser.img} alt="" /> {loggedInUser.name}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default DashNav;