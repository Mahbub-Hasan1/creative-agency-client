import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import OrderList from './OrderList';

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
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">

                    <h1>Your Order List || hello {loggedInUser.name}</h1>

                    <section className="doctors">
                        <div className="container">
                            <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                            {orders.length === 0 ? <h3>Loding.....</h3>
                                : <div className="row">
                                    {
                                        orders.map(Order => <OrderList key={Order._id} Order={Order} />)
                                    }

                                </div>
                            }
                        </div>
                    </section>


                </div>
            </div>
        </section>

    );
};

export default MyOrderList;