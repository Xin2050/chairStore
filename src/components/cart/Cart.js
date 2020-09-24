import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCartList, fetchProducts, editQuantity} from "../../actions";

import {NumberFormatted} from "../../apis/NumberFormat";
import Item from "./Item";


class Cart extends Component {

    componentDidMount() {
        this.props.fetchProducts();
        //this.props.fetchCartList();
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
        const subtotal = this.props.cart.reduce((total, item) => {
            return total + (item.quantity * Number(item.price))
        }, 0);
        const gst = subtotal * 0.18;
        const delivery = 22;
        const total = subtotal + delivery + gst;
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
                            <td>{NumberFormatted(subtotal)}</td>
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

    getItem(id) {
        if (this.props.products[id]) {
            if(this.props.readonly){
                return <Item product={this.props.products[id]} readonly/>
            }else{
                return <Item product={this.props.products[id]} />
            }

        } else {
            return "Loading..."
        }
    }

    handleChange = (id, val) => {

        this.props.editQuantity(id,val);
        const text = document.getElementById(`q_${id}`)
        text.classList.add('cart__table__input__quantity--update');
        setTimeout(()=>{
            text.classList.remove('cart__table__input__quantity--update');
        },1000)
    }


    renderList() {

        return this.props.cart.map((item, index) => {

            return (

                <div key={item.id} id={`row_${item.id}`} className="cart__table__body__row">
                    <div className="cart__table__body__col">
                        {this.getItem(item.id)}
                    </div>
                    <div className="cart__table__body__col">
                        In Stock
                    </div>

                    <div className="cart__table__body__col">
                        {NumberFormatted(item.price)}
                    </div>
                    <div className="cart__table__body__col">
                        {this.props.readonly?item.quantity:
                        <input id={`q_${item.id}`}
                               className="cart__table__input cart__table__input__quantity"
                               type="number"
                               min={0}
                               //value={this.state.quantity[item.id]}
                                value={item.quantity}
                               onChange={e => {
                                   this.handleChange(item.id, e.target.value)
                               }}/>}

                    </div>
                    <div className="cart__table__body__col">
                        {NumberFormatted(item.quantity * item.price)}
                    </div>
                </div>
            )
        })
    }

    render() {
        return this.renderTable();
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.data?Object.values(state.cart.data):[],
        products: state.products
    };
}

export default connect(
    mapStateToProps, {fetchCartList, fetchProducts, editQuantity}
)(Cart);