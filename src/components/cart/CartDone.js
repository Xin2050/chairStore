import React, {useEffect} from 'react';
import Spinner from "../Spinner";
import {connect} from 'react-redux';
import {loadOrder} from "../../actions";
import requestAuth from "../auth/requestAuth";



const CartDone = (props) => {
    const loadData = ()=>{
        props.loadOrder();
    }

    useEffect(loadData,[]);


    const renderOrderInfo = () => {
        if (!props.order.data) {
            return <Spinner message="Loading..."/>
        }
        const order = props.order.data;
        const payment = props.order.payment
        return (
            <div>
                <h2>Order Information:</h2>
                <h2>ID:{order.id}</h2>
                <h2>Total:0.36 USD</h2>
                <h2>Payment Result: {payment.data[0].target.status}</h2>
                <h2>Transaction Id: {payment.data[0].target.transactionId}</h2>
            </div>
        )
    }

    return (

        <div className="mainContext">
            <h1 className="mainContext__h1">Thank You!</h1>
            {renderOrderInfo()}

        </div>


    )

};
const mapStateToProps=(state)=>{
 return {
    order:state.order
 };
}
export default connect(mapStateToProps,{loadOrder})(requestAuth(CartDone));