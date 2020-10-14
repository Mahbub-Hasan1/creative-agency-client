import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';



const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {
        const reviewData = {...data, ...loggedInUser}

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json(reviewData))
            .then(result => {
                if (result) {
                    alert('Your Review add successfully')
                }
            })
    };

    return (
        <section>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    <div style={{ margin: '30px', borderRadius: '20px', backgroundColor: '#FFFFFF', fontWeight: 'bold' }}>

                        <form className="d-flex row" onSubmit={handleSubmit(onSubmit)}>
                            <input name="name" placeholder="Your name" ref={register({ required: true })} /><br />
                            {errors.name && <span>your name is required<br /></span>}

                            <input name="title" placeholder="Company's name. Designation" ref={register({ required: true })} /><br />
                            {errors.title && <span>Company's Name is required<br /></span>}

                            <textarea name="Description" className="form-control" cols="30" rows="10" placeholder="Message *" ref={register({ required: true })}></textarea><br />
                            {errors.Description && <span>Description is required<br /></span>}

                            <input style={{ width: '60%', marginLeft: '15%', backgroundColor: '#029545', padding: '10px', borderBottom: '5px solid #F8EC11' }} className="submitBtn" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Review;