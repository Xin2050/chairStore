import React from 'react';
import {reduxForm, Field} from "redux-form";
import {connect} from 'react-redux';
import {compose} from 'redux';
import StanderCheck from "../form/StanderCheck";
import StanderInputText from "../form/StanderInputText";
import {checkEmail} from "../../actions";
import {CHECK_EMAIL} from "../../actions/types";


const RegisterForm = (props) => {

    const { handleSubmit, pristine, reset, submitting } = props
    const onRegisterSubmit = (formProps)=>{
        console.log(formProps);
        console.log(props.location.state)
    }

    return (
        <div>
            <div className="flex_Row_SpaceBetween_Center account__content__signInOrRegisterModel__secondaryTitle">
                <div>Register</div>
                <div className="account__content__signInOrRegisterModel__required">*Required</div>
            </div>
            <form onSubmit={handleSubmit(onRegisterSubmit)}>
                <Field name="firstName" label="First Name*"
                       component={StanderInputText}/>
                <Field name="lastName" label="Last Name*"
                       component={StanderInputText}/>

                <Field name="email" label="Email*" message={props.auth}
                       component={StanderInputText}/>

                <Field name="password" label="Password*"
                       type="password" component={StanderInputText}/>

                <Field name="confirmPassword" label="Confirm Password*"
                       type="password" component={StanderInputText}/>

                <Field component={StanderCheck}
                       label="Keep me in the loop. I’d like to receive email updates about new products or special offers."
                       name="keepMe"

                />
                <div className="form__group">
                    <button disabled={pristine||submitting}
                        className="form__PrimaryBtn form__PrimaryBtn--wide">
                        Sign Up
                    </button>
                </div>

            </form>

        </div>
    );
};
const mapStateToProps = (state) => {
    return {auth:state.auth};
}
const validate = (formValues) => {
    const errors = {};
    if (!formValues.firstName) {
        errors.firstName = "You must enter a First Name!";
    }
    if (!formValues.lastName) {
        errors.lastName = "You must enter a Last Name!";
    }
    if (!formValues.email) {
        errors.email = "You must enter a Email!";
    }
    if (!formValues.password) {
        errors.password = "You must enter a Password!";
    }
    if (!formValues.confirmPassword) {
        errors.confirmPassword = "You must enter a Confirm Password!";
    }
    if((formValues.password && formValues.confirmPassword) && formValues.password!==formValues.confirmPassword){
        errors.confirmPassword = "Your entered password didn't math your confirm password!"
    }

    return errors;
}
const asyncValidate = (value,dispatch)=>{

    return new Promise((resolve)=>{
        checkEmail(value,resolve);
    }).then((rs)=>{
        if(rs.rs){
            dispatch({type:CHECK_EMAIL,payload:rs.message})
        }else{
            dispatch({type:CHECK_EMAIL,payload:null})
            throw {email:rs.message}
        }
    })
}
export default compose(
    connect(mapStateToProps, {}),
    reduxForm({
        form: 'registerForm',
        validate,
        asyncValidate,
        asyncBlurFields:['email']

    })
)(RegisterForm)

