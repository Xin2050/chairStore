import React from 'react';
import {reduxForm,Field} from "redux-form";
import {connect} from 'react-redux';
import {compose} from 'redux';


const SignInForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit(props.handleSignIn)}>
                <fieldset >
                    <label>Email</label>
                    <Field name="email" autoComplete="off"
                           type="text" component="input"/>
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field name="password" autoComplete="off"
                           type="password" component="input"/>
                </fieldset>

                <button >Sign In</button>
            </form>

        </div>
    );
};
const mapStateToProps=(state)=>{
 return {
     initialValues:{
         email:'markxu@mark2win.com',
         password:'Mark2win'
     }
 };
}

export default compose(
    connect(mapStateToProps,{}),
    reduxForm({form:'signInForm'})
)(SignInForm)

