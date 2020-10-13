import React from 'react';

const FeedbackDetail = ({ Feedback }) => {
    return (
        <div className="col-md-4" >

        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={Feedback.img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{Feedback.name}</h6>
                    <p className="m-0">{Feedback.title}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary mt-4">{Feedback.Description}</p>
            </div>
            
       </div>
        </div>
    );
};

export default FeedbackDetail;