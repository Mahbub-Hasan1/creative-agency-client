import React from 'react';
import slack from '../../images/logos/slack.png'
import google from '../../images/logos/google.png'
import uber from '../../images/logos/uber.png'
import netflix from '../../images/logos/netflix.png'
import airbnb from '../../images/logos/airbnb.png'

const BusinessLogo = () => {
    return (
        <section style={{ marginBottom: '10%' }} className="d-flex justify-content-center">
            {/* <img src={google} className="img-fluid" style={{ width: '50%' }} alt="" />
            <img src={uber} className="img-fluid" style={{ width: '50%' }} alt="" />
            <img src={netflix} className="img-fluid" style={{ width: '50%' }} alt="" />
            <img src={airbnb} className="img-fluid" style={{ width: '50%' }} alt="" /> */}
            <div className="w-75 row d-flex">

                <div style={{ height: '50px' }}>
                    <img src={slack} className="card-img col md-4" style={{ width: '20%', marginRight: '20px' }} alt="" />


                    <img src={google} className="img-fluid md-4" style={{ width: '18%', marginRight: '20px' }} alt="" />

                    <img src={uber} className="img-fluid md-4" style={{ width: '17%', marginRight: '20px' }} alt="" />

                    <img src={netflix} className="img-fluid md-4" style={{ width: '17%', marginRight: '20px' }} alt="" />
                    <img src={airbnb} className="img-fluid md-4" style={{ width: '18%', marginRight: '20px' }} alt="" />

                </div>
            </div>
        </section>
    );
};

export default BusinessLogo;