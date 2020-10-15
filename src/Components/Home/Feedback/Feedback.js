import React, { useEffect, useState } from 'react';
import FeedbackDetail from '../FeedbackDetail/FeedbackDetail';
import loding from '../../images/Loding.gif';


const Feedback = () => {

    const [feedbacksData, setFeedbacksData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setFeedbacksData(data))
    }, [])

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h1 style={{ color: 'black' }}>Clients Feedback</h1>
            </div>
            <div className="d-flex justify-content-center">
                {feedbacksData.length === 0 ?
                    <img src={loding} alt=""/>
                    :
                    <div className="w-75 row mt-5 pt-5">
                        {
                            feedbacksData.map(Feedback => <FeedbackDetail Feedback={Feedback} key={Feedback.name}></FeedbackDetail>)
                        }
                    </div>
                }

            </div>
        </section>
    );
};

export default Feedback;