import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import DashNav from '../DashNav/DashNav';
import Sidebar from '../Sidebar/Sidebar';

const Addmin = () => {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your Add Admin successfully')
                }
            })
    };

    return (

        <section>
            <DashNav></DashNav>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    <div style={{ margin: '30px', borderRadius: '20px', backgroundColor: '#FFFFFF', fontWeight: 'bold' }}>

                        <div className="registerForm">
                            <h4>New Admin email</h4>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input name="email" placeholder="New Admin Email" ref={register({ required: true })} /><br />
                                {errors.email && <span>your email is required<br /></span>}

                                <input className="submitBtn" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Addmin;