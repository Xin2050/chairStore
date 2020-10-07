import React, {useEffect} from 'react';
import {fetchCartListAndProducts} from "../../actions";
import {connect} from "react-redux";

import {NumberFormatted} from "../../apis/NumberFormat";
import FixedCartImage from "./FixedCartImage";
import FixedCartNameAndOptions from "./FixedCartNameAndOptions";


const FixedCartLayer = (props) => {
    const load = () => {
        props.fetchCartListAndProducts();
    }
    useEffect(load, []);


    const renderedCartList = () => {
        return props.cart.data.map((item, index) => {
            return (
                <tr key={index}>
                    <td className="fixedCart__td--image">
                        <FixedCartImage id={item.id}/>
                    </td>
                    <td className="fixedCart__td--desc">
                        <FixedCartNameAndOptions id={item.id}
                                                 options={item.options}
                        />
                        <div className="fixedCart__td--desc__qty">Qty:{item.quantity}</div>
                    </td>
                    <td className="fixedCart__td--subtotal">
                        {NumberFormatted(item.subtotal)}
                    </td>

                </tr>
            )
        })
    }

    const res = (
        <div className="fixedCart" onMouseEnter={props.onMouseHover} onMouseLeave={props.onMouseLeave}>
            <div className="fixedCart__title">Added to Cart</div>
            <table>
                <tbody>
                {renderedCartList()}
                </tbody>
            </table>
            <div className="fixedCart__summary">
                <div className="fixedCart__summary__items">
                    Estimated Total for {props.cart.data.reduce((total, item) => total + item.quantity, 0)} item(s)
                </div>
                <div className="fixedCart__summary__total">{NumberFormatted(props.cart.subtotal)}</div>
            </div>
            <div className="fixedCart__checkout">
                <div className="fixedCart__checkout__firstline flex_Row_SpaceBetween_Center">
                    <div>
                        <button className="form__PrimaryBtn form__PrimaryBtn--gary">Review Cart</button>
                    </div>
                    <div>
                        <button className="form__PrimaryBtn">Check Out</button>
                    </div>
                </div>
                <div className="fixedCart__checkout__secondline">OR</div>
                <div className="fixedCart__checkout__thirdline">
                    <button className="form__PrimaryBtn form__PrimaryBtn--gary fixedCart__checkout__paypalbutton">
                        <span>Checkout</span>
                    </button>
                </div>
            </div>

        </div>
    );

    return res;
};
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
}
export default connect(mapStateToProps, {fetchCartListAndProducts})(FixedCartLayer);