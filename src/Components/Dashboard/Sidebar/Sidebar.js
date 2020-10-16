import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState([])

    useEffect(() => {
        fetch('https://cryptic-anchorage-76136.herokuapp.com/admin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])



    return (
        <>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>

                <ul className="list-unstyled">
                    {admin.length ?
                        <>
                            <li>
                                <Link to="/addService">
                                    <span>Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/serviceList">
                                    <span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addNewAdmin">
                                    <span>Add Admin</span>
                                </Link>
                            </li>

                        </>

                        : <>
                            <li>
                                <Link to="/order">
                                    <span>Add Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/myOrderList">
                                    <span>Your Order List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/review">
                                    <span>Review</span>
                                </Link>
                            </li>

                        </>
                    }



                </ul>
                <div>
                    <Link to="/">{/*<FontAwesomeIcon icon={faSignOutAlt} />*/} <span>Logout</span></Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;