import React, {useState} from 'react';
import {signIn} from "../../actions";

import {connect} from "react-redux";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";



const SignIn = (props) => {


    const [lasturl] = useState(()=>{
        if(props.location?.state?.lasturl){
            return props.location.state.lasturl;
        }else{
            return "/";
        }
    });


    return (
        <div className="mainContext">
            <div className="mainContext__h1">Sign In or Register</div>
            <div className="account__content">
                <div className="account__content__signInOrRegisterModel">
                    <SignInForm backurl={lasturl}/>
                </div>
                <div className="account__content__signInOrRegisterModel">
                    <RegisterForm />
                </div>
            </div>

        </div>


    );
};

const mapStateToProps=(state)=>{
    return {};
}

export default connect(mapStateToProps,{signIn})(SignIn);