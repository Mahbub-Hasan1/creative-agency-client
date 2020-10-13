import React from 'react';
import slack from '../../images/logos/slack.png'
import google from '../../images/logos/google.png'
import uber from '../../images/logos/uber.png'
import netflix from '../../images/logos/netflix.png'
import airbnb from '../../images/logos/airbnb.png'

const BusinessLogo = () => {
    return (
        <section className="d-flex justify-content-center">
            {/* <img src={google} className="img-fluid" style={{ width: '50%' }} alt="" />
            <img src={uber} className="img-fluid" style={{ width: '50%' }} alt="" />
            <img src={netflix} className="img-fluid" style={{ width: '50%' }} alt="" />
            <img src={airbnb} className="img-fluid" style={{ width: '50%' }} alt="" /> */}
            <div className="w-75 row">
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={slack} className="card-img" style={{ width: '50%',height:'50%' }} alt="" />
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={google} className="img-fluid" style={{ width: '50%',height:'50%' }} alt="" />
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={uber} className="img-fluid" style={{ width: '50%',height:'50%' }} alt="" />
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={netflix} className="img-fluid" style={{ width: '50%',height:'50%' }} alt="" />
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={airbnb} className="img-fluid" style={{ width: '50%',height:'50%' }} alt="" />
                </div>
            </div>
        </section>
    );
};

export default BusinessLogo;