import React from 'react';
import requestAuth from "../auth/requestAuth";

const Orders = () => {
    return (
        <div className="mainContext">
            <h1 className="mainContext__h1">My Orders</h1>
        </div>
    );
};

export default requestAuth(Orders);