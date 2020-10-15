import React from 'react';

const OrderList = ({ Order }) => {
    return (
        <>

            <div style={{ marginBottom: '15px' }} className="col-md-4" >

                <div className="card shadow-sm">
                    <div className="card-header d-flex  align-items-center">
                        {
                            Order.image ? <img style={{ borderRadius: '50px' }} width="60" src={`data:image/png;base64,${Order.image.img}`} />
                                :
                                <img style={{ borderRadius: '50px' }} width="60" className="img-fluid mb-3" src={`http://localhost:5000/${Order.img}`} alt="" />
                        }
                        <div>
                            <h6 className="text-primary">{Order.name} </h6>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6 className="text-primary">{Order.serviceName} </h6>
                        <p className="card-text text-secondary mt-4">{Order.description}</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default OrderList;