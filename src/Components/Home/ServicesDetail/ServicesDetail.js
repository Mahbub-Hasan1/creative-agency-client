import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesDetail.css';


const ServicesDetail = ({ service }) => {
    return (

        <div className="col-md-4 text-center service">
            <Link to={`/service/item/${service._id}`} style={{textDecoration:'none'}}>
                <img style={{ height: '50px' }} src={service.img} alt="" />
                {
                    service.image ? <img style={{ height: '50px' }} src={`data:image/png;base64,${service.image.img}`} />
                        :
                        <img style={{ height: '50px' }} className="img-fluid mb-3" src={`http://localhost:5000/${service.img}`} alt="" />
                }
                <h5 className="mt-3 mb-3">{service.name}</h5>
                <p className="text-secondary">${service.Description}</p>
            </Link>
        </div>

    );
};

export default ServicesDetail;