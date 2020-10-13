import React from 'react';
import webDesigned from '../../images/icons/service1.png'
import graphicDesigned from '../../images/icons/service2.png'
import webDevelopment from '../../images/icons/service3.png'
import service4 from '../../images/icons/service4.png'
import service5 from '../../images/icons/service5.png'
import ServicesDetail from '../ServicesDetail/ServicesDetail';


const serviceData = [
    {
        name: 'Web & Mobile design',
        img: webDesigned,
        Description:'we craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    },
    {
        name: 'Graphic design',
        img: graphicDesigned,
        Description:'Amazing flyers. social media posts and brand representations that would make your brand stand out.'
    },
    {
        name: 'Web development',
        img: webDevelopment,
        Description:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    },
    {
        name: 'service4',
        img: service4,
        Description: 'Md Mahbub Ahmed'
    },
    {
        name: 'service5',
        img: service5,
        Description:'Md Hasan Ahmed'
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h1 style={{color: 'black'}}>Provide awesome services</h1>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServicesDetail service={service} key={service.name}></ServicesDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;