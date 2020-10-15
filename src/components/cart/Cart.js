import React from 'react';
import {connect} from 'react-redux';
import {fetchCartListAndProducts, editQuantity, deleteFromCart} from "../../actions";
import {NumberFormatted} from "../../apis/NumberFormat";
import Spinner from "../Spinner";
import FixedCartImage from "./FixedCartImage";
import FixedCartNameAndOptions from "./FixedCartNameAndOptions";
import {Link} from "react-router-dom";

class Cart extends React.Component {


    componentDidMount() {
        this.props.fetchCartListAndProducts();
    }

    renderTableHead() {
        return (
            <div className="cart__table__head">
                <div className="cart__table__head__col">Product Information</div>
                <div className="cart__table__head__col">Availability</div>
                <div className="cart__table__head__col">Price</div>
                <div className="cart__table__head__col">Quantity</div>
                <div className="cart__table__head__col">Total</div>
            </div>
        )
    }

    renderTable() {
        return (
            <React.Fragment>
                <div className="cart__table">
                    {this.renderTableHead()}
                    <div className="cart__table__body">
                        {this.renderList()}
                    </div>
                </div>
                {this.renderTableFooter()}
            </React.Fragment>
        )
    }

    renderTableFooter() {

        const gst = this.props.subtotal * 0.13;
        const delivery = 22;
        const total = this.props.subtotal + delivery + gst;
        return (
            <div className="cart__table__footer">
                <div className="cart__table__footer__left">
                    <div className="cart__table__footer__left__title">
                        100% Satisfaction Guarantee
                    </div>
                    <div className="cart__table__footer__left__text">
                        If you are not 100% satisfied with your purchase from the Herman Miller Store,
                        you can return your order to us for an exchange or a full refund within 30 days of delivery.
                        Yes, a full refund, meaning we'll give you all your money back for the product, shipping,
                        and tax. If for whatever reason you're not happy with your purchase, contact our Customer
                        Engagement team to arrange for your return or exchange.
                    </div>


                </div>
                <div className="cart__table__footer__right">
                    <table className="cart__table__footer__table">
                        <tbody>
                        <tr>
                            <td>Subtotal:</td>
                            <td>{NumberFormatted(this.props.subtotal)}</td>
                        </tr>
                        <tr>
                            <td>Estimated Tax:</td>
                            <td>{NumberFormatted(gst)}</td>
                        </tr>
                        <tr>
                            <td>Delivery:FedEx</td>
                            <td>{NumberFormatted(delivery)}</td>
                        </tr>
                        <tr>
                            <td>Estimated Total:</td>
                            <td>{NumberFormatted(total)}</td>
                        </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }

    onDelete = (index) => {
        this.props.deleteFromCart(index)
    }

    getItem(id,index,options) {


        return (
            <div className="cart__table__body__col__item">
                <div className="cart__table__body__col__item__left">
                    <FixedCartImage id={id}/>
                </div>
                <div className="cart__table__body__col__item__right">
                    <FixedCartNameAndOptions id={id} options={options}/>
                    <div className="cart__table__body__col__item__right__functions">
                    <Link to="#" className="form__textButton">
                        Edit Item
                    </Link>
                    <Link to="#" className="form__textButton" onClick={() => {
                        this.onDelete(index)
                    }}>Remove
                    </Link>
                    <Link to="#" className="form__textButton">Save to Wishlist
                    </Link>
                    </div>
                </div>

            </div>
        )


    }

    handleChange = (index) => {
        const text = document.getElementById(`q_${index}`)

        this.props.editQuantity(index, text.value);

        text.classList.add('cart__table__input__quantity--update');
        setTimeout(() => {
            text.classList.remove('cart__table__input__quantity--update');
        }, 1000)
    }


    renderList() {

        return this.props.cart.map((item, index) => {

            return (

                <div key={index} id={`row_${index}`} className="cart__table__body__row">
                    <div className="cart__table__body__col">
                        {this.getItem(item.id, index,item.options)}
                    </div>
                    <div className="cart__table__body__col">
                        In Stock
                    </div>

                    <div className="cart__table__body__col">
                        {NumberFormatted(item.price)}
                    </div>
                    <div className="cart__table__body__col">

                            <input id={`q_${index}`}
                                   className="cart__table__input cart__table__input__quantity"
                                   type="text"

                                   defaultValue={item.quantity}
                                   />
                                   <button className="cart__button--update"
                                           onClick={()=>{this.handleChange(index)}}
                                   >
                                       Update
                                   </button>

                    </div>
                    <div className="cart__table__body__col">
                        {NumberFormatted(item.quantity * item.price)}
                    </div>
                </div>
            )
        })
    }

    render() {
        if (!this.props.cart) {
            return <Spinner message={"loading..."}/>
        }
        return this.renderTable();
    }
}

function mapStateToProps(state) {
    if (!state.cart.data) {
        return {};
    }
    return {
        cart: state.cart.data,
        subtotal: state.cart.subtotal
    };
}

export default connect(
    mapStateToProps, {fetchCartListAndProducts, editQuantity, deleteFromCart}
)(Cart);