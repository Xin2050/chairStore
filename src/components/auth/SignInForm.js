import React, {useEffect, useRef} from 'react';
import {reduxForm,Field} from "redux-form";
import {connect} from 'react-redux';
import {compose} from 'redux';
import StanderInputText from "../form/StanderInputText";
import {signIn} from "../../actions";
import history from "../../base/history";

const SignInForm = (props) => {
    const { submitting,backurl} = props;

    const btnref = useRef();
    useEffect(()=>{
       btnref.current.innerText = submitting?'Sign In...':'Sign In';
    },[submitting]);

    const onSignInSubmit = (formProps)=>{

        return new Promise(
            (resolve)=>{
                props.signIn(formProps,(rs)=>{
                    resolve(rs)
                })
            }
        ).then((resolve) => { //Actually you don't have to run this way, You could run callback in action.
            if(resolve) {
                history.push(backurl)
                //console.log("I will go to ", props.location.state)
            }else{
                console.log("error, waiting to errorMessage Back")

            }
        })
    }

    function renderErrorMessage(){
        if(!props.auth){
           return null;
        }
        if(props.auth.errorMessage){

            return <div className="form__submitError">{props.auth.errorMessage}</div>
        }
    }
    return (
        <div>
            <div className="flex_Row_SpaceBetween_Center account__content__signInOrRegisterModel__secondaryTitle">
                <div>Sign In</div>
                <div className="account__content__signInOrRegisterModel__required">*Required</div>
            </div>
            {renderErrorMessage()}
            <form onSubmit={props.handleSubmit(onSignInSubmit)} >
                <Field name="email" label="Email*"
                       component={StanderInputText}/>

                <Field name="password" label="Password*"
                       type="password" component={StanderInputText}/>
                <div className="form__group">
                    <button  ref={btnref} className="form__PrimaryBtn form__PrimaryBtn--wide"
                            disabled={submitting}
                    >Sign In</button>
                </div>

            </form>

        </div>
    );
};
const validate = (formValues) => {
    const errors = {};

    if (!formValues.email) {
        errors.email = "You must enter a Email!";
    }
    if (!formValues.password) {
        errors.password = "You must enter a Password!";
    }

    return errors;
}
const mapStateToProps=(state)=>{
 return {
     auth:state.auth,
     initialValues:{
         email:'markxu@mark2win.com',
         password:'Mark2win'
     }
 };
}

export default compose(
    connect(mapStateToProps,{signIn}),
    reduxForm({form:'signInForm',validate})
)(SignInForm)

