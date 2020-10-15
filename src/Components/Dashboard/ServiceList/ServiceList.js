import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import loding from '../../images/Loding.gif'
import DashNav from '../DashNav/DashNav';

const ServiceList = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allServiceList')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <div>
                <DashNav />
            </div>
            <div className="d-flex">
                <div style={{ width: "22%" }}>
                    <Sidebar></Sidebar>
                </div>
                <div style={{ backgroundColor: '#A2C9FD' }}>
                    <div style={{ margin: '30px', borderRadius: '20px', backgroundColor: '#FFFFFF', fontWeight: 'bold' }}>
                        <table className="table" style={{ marginTop: '20px' }}>
                            <thead style={{ backgroundColor: '#4D9FF2', borderRadius: '20px' }}>
                                <tr style={{ margin: '20px' }}>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Projcct Dctails</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>

                            {orders.length === 0 ?<img src={loding} alt=""/>
                                : 

                                <tbody>
                                {orders.map(Lists =>

                                    <tr key={Lists._id}>
                                        <th scope="row">{Lists.itemId}</th>
                                        <td>{Lists.name}</td>
                                        <td>{Lists.email}</td>
                                        <td>{Lists.serviceName}</td>
                                        <td>{Lists.VolunteerName}</td>
                                        <td><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></td>
                                        <td>
                                            <select>
                                                <option> pending</option>
                                                <option className="text-color" > Done</option>
                                                <option> Ongoing</option>
                                            </select>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                            }
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;