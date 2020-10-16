import React, { useState } from 'react';
import DashNav from '../DashNav/DashNav';
import Sidebar from '../Sidebar/Sidebar';


const AddOrder = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('serviceName', info.serviceName);
        formData.append('email', info.email);
        formData.append('description', info.description);

        fetch('https://cryptic-anchorage-76136.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert('Your Order add successfully')
                }
            })

            .catch(error => {
                console.error(error)
            });
        e.preventDefault();
    }



    return (
        <section>
            <DashNav></DashNav>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <section className="container-fluid row">
                    <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                        <h5 className="text-brand">Add a Order</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Your Name</label>
                                <input onBlur={handleBlur} type="text" required className="form-control" name="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input onBlur={handleBlur} type="email" required className="form-control" name="email" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">service Name</label>
                                <input onBlur={handleBlur} type="text" required className="form-control" name="serviceName" placeholder="service Name" />
                            </div>
                            <div>
                                <label htmlFor="exampleInputPassword1">Description</label>
                                <textarea onBlur={handleBlur} name="description" className="form-control" cols="20" rows="10" required placeholder="Message *"></textarea><br />

                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Upload a image</label>
                                <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </section>

    );
};

export default AddOrder;