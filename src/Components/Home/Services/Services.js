import React, { useState, useEffect } from 'react';
import ServicesDetail from '../ServicesDetail/ServicesDetail';
import loding from '../../images/Loding.gif'

const Services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h1 style={{ color: 'black' }}>Provide awesome services</h1>
            </div>
            <div className="d-flex justify-content-center">
                {serviceData.length === 0 ?
                    <img src={loding} alt=""/>
                    :
                    <div className="w-75 row mt-5 pt-5">
                        {
                            serviceData.map(service => <ServicesDetail service={service} key={service.name}></ServicesDetail>)
                        }
                    </div>
                }
            </div>
        </section>
    );
};

export default Services;