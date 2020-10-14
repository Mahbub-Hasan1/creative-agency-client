import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AddOrder from '../AddOrder/AddOrder';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    <AddOrder></AddOrder>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;