import React from 'react';
import customer1 from '../../images/customer-1.png'
import customer2 from '../../images/customer-2.png'
import customer3 from '../../images/customer-3.png'
import FeedbackDetail from '../FeedbackDetail/FeedbackDetail';

const feedbacksData = [
    {
        name: 'Nash Patrik',
        title: 'CEO,Manpol',
        img: customer1,
        Description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        name: 'Miriam BArron',
        title: 'CEO,Manpol',
        img: customer2,
        Description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        name: 'Bria Malone',
        title: 'CEO,Manpol',
        img: customer3,
        Description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
]

const Feedback = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h1 style={{color: 'black'}}>Clients Feedback</h1>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    feedbacksData.map(Feedback => <FeedbackDetail Feedback={Feedback} key={Feedback.name}></FeedbackDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Feedback;