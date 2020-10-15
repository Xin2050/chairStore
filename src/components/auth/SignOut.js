import React, {useEffect} from 'react';
import {signOut} from "../../actions";
import history from "../../base/history";
import {connect} from 'react-redux';

const SignOut = (props) => {

    const sigout = ()=>{
        setTimeout(()=>{
            props.signOut();
            history.push('/')
        },1000);
    }
    useEffect(sigout,[])

    return (
        <div className="mainContext">
            <h1 className="mainContext__h1">Sign Out.....</h1>
        </div>
    );
};

export default connect(null,{signOut})(SignOut);