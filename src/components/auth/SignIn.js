import React from 'react';

import {compose} from 'redux';
import {connect} from "react-redux";
import SignInForm from "./SignInForm";


const SignIn = (props) => {
    const onSignInSubmit = (formProps)=>{
        console.log(formProps);
        console.log(props.location.state)
    }
    return (
        <div className="mainContext">
            <div className="">Sign In or Register</div>
            <div>
                <div>
                    <SignInForm handleSignIn={onSignInSubmit}/>
                </div>
                <div>
                    //regmodel
                </div>
            </div>

        </div>


    );
};

const mapStateToProps=(state)=>{
    return {};
}

export default compose(
    connect(mapStateToProps,{})
)(SignIn);