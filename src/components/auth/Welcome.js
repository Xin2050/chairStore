import React from 'react';
import requestAuth from "./requestAuth";


const Welcome = (props) => {


    const renderUser=()=>{
        if(!props.auth.user){

            return null;
        }else{
            return(
            <div className="account__content__welcome">
                <div>Name:{props.auth.user.name}</div>
                <div>Email:{props.auth.user.email}</div>
            </div>
            )
        }
    }

    return (

        <div className="mainContext">

            <h1 className="mainContext__h1">Welcome</h1>
            {renderUser()}
        </div>
    );
};

export default requestAuth(Welcome);