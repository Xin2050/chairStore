import React from 'react';
import NavBar from "../products/NavBar";
import CartHead from "./CartHead";
import Cart from "./Cart";
import {cartCheckOut} from "../../actions";
import {connect} from 'react-redux'
import CheckoutForm from "./CheckoutForm";


const CheckoutPage = ({cartCheckOut}) => {

    const onSubmit=(formValues)=>{
        cartCheckOut(formValues);
    }


    return (
        <div className="mainContext">
            <NavBar context="Home > Cart > Check Out"/>
            <CartHead title="Check Out"/>
            <Cart/>
            <CheckoutForm onSubmit={onSubmit}/>


        </div>
    );
};

export default connect(null,{cartCheckOut})(CheckoutPage);