import React from 'react';
import {reduxForm} from "redux-form";
import history from "../../base/history";
import CheckoutPaymentInformation from "./CheckoutPaymentInformation";
import CheckoutFormPersonalInfo from "./CheckoutFormPersonalInfo";

const CheckoutForm = (props) => {
    //console.log('form p',props); //this is initialValues;
    //console.log(props.initialValuesToPassThru);
    return (
        <React.Fragment>
            <h2 className="form__title">Order Information</h2>

            <div className="form">

                <form onSubmit={props.handleSubmit(props.onSubmit)} >
                    <CheckoutFormPersonalInfo init={props.initialValuesToPassThru}/>
                    <CheckoutPaymentInformation/>
                    <div className="cart__footer__div">
                        <button className="form__btn form__btn__primaryButton">Place your order</button>

                        <button onClick={()=>{history.push('/cart')}}  className="form__btn">
                            Back to cart
                        </button>

                    </div>

                </form>
            </div>

        </React.Fragment>
    )


}
const validate = (formValues)=>{

    const errors = {};
    if(!formValues.firstName){
        errors.firstName="You must enter a First Name!";
    }
    if(!formValues.lastName){
        errors.lastName = "You must enter a List Name!";
    }
    if(!formValues.sex){
        errors.sex = "You must select Sex!";
    }
    if(!formValues.country){
        errors.country = "You must select a country!"
    }
    if(!formValues.state){
        errors.state = "You must select a state!"
    }
    if(!formValues.city){
        errors.city="You must enter a city!"
    }
    if(!formValues.agree){
        errors.agree = "You must agree with this!"
    }
    if(!formValues.birthday){
        errors.birthday = "You must enter a birthday!"
    }

    return errors;
}


export default reduxForm({
    form: 'checkoutForm',
    validate
})(CheckoutForm);