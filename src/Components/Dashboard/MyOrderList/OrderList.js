import React from 'react';

const OrderList = ({Order}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
        {
            Order.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${Order.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${Order.img}`} alt=""/>
        }
            <p>{Order.name}</p>
            <p>{Order.email}</p>

            
        </div>
    );
};

export default OrderList;