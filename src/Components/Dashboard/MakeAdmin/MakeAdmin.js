import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                <div>
                    <h1>MakeAdmin</h1>
            </div>
                </div>
            </div>
        </section>
        
    );
};

export default MakeAdmin;