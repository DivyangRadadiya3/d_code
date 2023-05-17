import React from 'react';
import fireDb from 'D:/divyang radadiya/desktop/reactcode/Firebase/src/Component/Firebase.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const InfoView = () => {

    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fireDb.child(`Registration/${id}`).get().then((info) => {
            if (info.exists()) {
                setData({ ...info.val() });
            } else {
                setData({});
            }
        });
        return () => {
            setData({});
        };

    }, [id])

    return (
        <>
            <div className="main">
                <div className="card border-primary text-dark bg-light" >
                    <h3 className="card-header  fs-2 text-center">Information</h3>
                    <div className="card-body">
                        <label className="card-title fs-4">Id</label>
                        <p className="card-text  fs-5">{id}</p>
                    </div>
                    <div className="card-body">
                        <label className="card-title fs-4">Email Address</label>
                        <p className="card-text fs-5">{data.email}</p>
                    </div>
                    <div className="card-body">
                        <label className="card-title fs-4">Contact Number</label>
                        <p className="card-text fs-5">{data.contact}</p>
                    </div>
                    <div className="card-body">
                        <label className="card-title fs-4">Password</label>
                        <p className="card-text fs-5">{data.password}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoView;