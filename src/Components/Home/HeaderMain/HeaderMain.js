import React from 'react';
import Frame from '../../images//logos/Frame.png';


const HeaderMain = () => {
    return (
        <main style={{ height: '650px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#111430', fontWeight: 'bold' }}>Let's Grow Your<br />Brand To The <br /> Next Level</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button style={{ width: '40%' }} className="btn btn-dark btn-lg">Hire us</button>
            </div>
            <div className="col-md-5">
                <img src={Frame}  className="img-fluid" alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;