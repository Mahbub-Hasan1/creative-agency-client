import React from 'react';

const Contact = () => {
    return (
        <div style={{ height: '750px', backgroundColor: '#FBD062', marginTop:"10%" }} className="row d-flex">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#111430', fontWeight: 'bold' }}>Let's Grow Your<br />Brand To The <br /> Next Level</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>

            </div>
            <div className="col-md-6">
                <section className="contact my-5 py-5">
                    <div className="">

                        <div className="col-md-9 mx-auto">
                            <form action="">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email Address *" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject *" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                                </div>
                                <div className="form-group text-center">
                                    <button type="button" className="btn btn-brand"> Submit </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;