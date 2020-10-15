import React from 'react';
import NavBar from "../products/NavBar";
import CartHead from "./CartHead";
import Cart from "./Cart";
//import {Link} from "react-router-dom";
import history from "../../base/history";

const CartPage = () => {
    return (
        <div>
            <div className="mainContext">
                <NavBar context="Home > Cart"/>
                <CartHead title='My Cart'/>
                <Cart/>
                <div className="cart__footer__div">
                    <button onClick={() => {
                        history.push('/cart/checkout')
                    }}
                            className="form__PrimaryBtn form__PrimaryBtn--wide">

                        Checkout
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CartPage;