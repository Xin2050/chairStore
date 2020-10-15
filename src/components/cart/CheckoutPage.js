import React, {useRef} from 'react';
import NavBar from "../products/NavBar";
import CartHead from "./CartHead";
import Cart from "./Cart";
import {createOrder,actPayment} from "../../actions";
import {connect} from 'react-redux'

import requestAuth from "../auth/requestAuth";
import history from "../../base/history";




const CheckoutPage = (props) => {
    const submitbtn = useRef();

    const next=()=>{
        submitbtn.current.innerText = "Confirm Order";
        submitbtn.current.disabled = false;
        history.push("/cart/payorder");
    }
    const error=(message)=>{
        submitbtn.current.innerText = "Confirm Order";
        submitbtn.current.disabled = false;
        alert(message);
    }
    const createOrder=()=>{
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