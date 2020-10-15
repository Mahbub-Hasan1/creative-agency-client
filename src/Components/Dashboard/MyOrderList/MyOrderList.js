import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import OrderList from './OrderList';
import loding from '../../images/Loding.gif';
import Navbar from '../../Shared/Navbar/Navbar';
import DashNav from '../DashNav/DashNav';

const MyOrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <section>
            <DashNav></DashNav>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="services-container mt-5">
                    
                    <div className="d-flex justify-content-center">
                        {orders.length === 0 ?
                            <img src={loding} alt="" />
                            : <div className="row">
                                {
                                    orders.map(Order => <OrderList key={Order._id} Order={Order} />)
                                }

                            </div>
                        }

                    </div>
                </div>
            </div>
        </section>








    );
};

export default MyOrderList;