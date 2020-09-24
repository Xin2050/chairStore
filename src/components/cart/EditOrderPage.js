import React, {useEffect} from 'react';
import NavBar from "../products/NavBar";
import CartHead from "./CartHead";
import Cart from "./Cart";
import {cartCheckOut,fetchCartList} from "../../actions";
import {connect} from 'react-redux'
import CheckoutForm from "./CheckoutForm";


const CheckoutPage = ({cart,cartCheckOut,fetchCartList}) => {
    const getData = ()=>{
        fetchCartList();
    }
    useEffect(getData,[]);

    const onSubmit=(formValues)=>{
        cartCheckOut(formValues);
    }


    return (
        <div className="mainContext">
            <NavBar context="Home > Cart > Check Out"/>
            <CartHead title="Check Out"/>
            <Cart/>
            <CheckoutForm onSubmit={onSubmit}
                          initialValues={cart.order}
                          initialValuesToPassThru={cart.order}

            />


        </div>
    );
};

const mapStateToProps=(state)=>{
 return {
    cart:state.cart
 };
}

export default connect(mapStateToProps,{
    cartCheckOut,fetchCartList
})(CheckoutPage);