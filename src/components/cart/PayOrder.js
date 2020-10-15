import React from 'react';
import requestAuth from "../auth/requestAuth";
import {connect} from 'react-redux';
import {loadOrder} from "../../actions";
import Spinner from "../Spinner";
import setPaypalData from "../../apis/paypal";


class PayOrder extends React.Component{
    constructor() {

        super();
        this.paymentLog = this.paymentLog.bind(this)
    }

    paymentLog = (res) => {
        this.props.actPayment(res);
    };
    componentDidMount() {
        this.props.loadOrder();
        const paypal = window.paypal;
        paypal.Button
            .render( setPaypalData(paypal, this.props.actPayment)
                , '#paypal-button');

    }



    renderOrderInfo() {
        if(!this.props.order.data){
            return <Spinner message="Loading..."/>
        }
        return (
            <div>
                <h2>Order Information:</h2>
                <h3>ID:{this.props.order.data.id}</h3>
                <h3>........</h3>
            </div>
        )
    }
    render(){
        return (

            <div className="mainContext">
                <h1 className="mainContext__h1">Please pay your order</h1>
                {this.renderOrderInfo()}
                <div className="cart__footer__div">
                    <div id="paypal-button"></div>
                </div>
            </div>


        )
    }

};
const mapStateToProps = (state) => {
    return {
        order: state.order
    }
}
export default connect(mapStateToProps, {loadOrder})(requestAuth(PayOrder));