import React from 'react';
import NavBar from "../products/NavBar";
import CartHead from "./CartHead";
import Cart from "./Cart";
import ViewOrderInfo from "./ViewOrderInfo";
import {fetchCartList} from "../../actions";
import {connect} from "react-redux"

const ViewOrderPage = (props) => {
    //useEffect(props.fetchCartList,[])

    return (
        <div className="mainContext">
            <NavBar context="Home > Cart > Preview order"/>
            <CartHead title='Preview order'/>
            <Cart readonly/>
            <ViewOrderInfo formValues={props.order}/>

        </div>
    );
};

const mapStateToProps=(state)=>{
 return {
    order:state.cart.order
 };
}
export default connect(mapStateToProps,{fetchCartList})(ViewOrderPage);