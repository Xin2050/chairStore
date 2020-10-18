import React, {useRef, useState} from 'react';
import NavBar from "../products/NavBar";
import CartHead from "./CartHead";
import Cart from "./Cart";
import {createOrder} from "../../actions";
import {connect} from 'react-redux'

import requestAuth from "../auth/requestAuth";
import history from "../../base/history";
import Spinner from "../Spinner";
import $ from 'jquery';




const CheckoutPage = (props) => {
    const submitbtn = useRef();
    const [loading,setLoading] = useState(null);

    const next=()=>{
        submitbtn.current.innerText = "Confirm Order";
        submitbtn.current.disabled = false;
        setLoading(null);
        history.push("/cart/payorder");
    }
    const error=(message)=>{
        submitbtn.current.innerText = "Confirm Order";
        submitbtn.current.disabled = false;
        alert(message);
    }
    const createOrder=()=>{
        setLoading(<Spinner message={"Order is being processed, please wait."} top={$(document).scrollTop()}/> );


        submitbtn.current.innerText = "Create Order...";
        submitbtn.current.disabled = true;
        props.createOrder(props.auth.authorization,props.cart,next,error);
    }


    return (
        <div className="mainContext">
            <NavBar context="Home > Cart > Check Out"/>
            <CartHead title="Check Out"/>
            <Cart/>
            <div className="cart__footer__div">
                <button onClick={createOrder} ref={submitbtn}
                        className="form__PrimaryBtn form__PrimaryBtn--wide">
                    Confirm Order
                </button>
            </div>
            {loading}
        </div>

    );
};
const mapStateToProps=(state)=>{
 return {
    cart:state.cart,
     auth:state.auth
 };
}
export default connect(mapStateToProps,{createOrder})(requestAuth(CheckoutPage));