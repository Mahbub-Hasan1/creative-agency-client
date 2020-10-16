import React from 'react';

const OrderList = ({ Order }) => {
    return (
        <>

            <div class="col-md-12" >
                <div className="card p-3 m-5" style={{ borderRadius: '5px', height: '30vh', marginLeft: '20%' }}>
                    <div class="card-body p-3 d-flex">
                        {
                            Order.image ? <img style={{ borderRadius: '50px' }} width="60" src={`data:image/png;base64,${Order.image.img}`} />
                                :
                                <img style={{ borderRadius: '50px' }} width="60" className="img-fluid mb-3" src={`https://cryptic-anchorage-76136.herokuapp.com/${Order.img}`} alt="" />
                        }
                        <div>
                            <h6 className="text-primary">{Order.serviceName} </h6>
                            <input type="button" value={Order.status} />
                            <p>{Order.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderList;