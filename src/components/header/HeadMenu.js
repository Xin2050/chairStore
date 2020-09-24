import React from 'react';
import {Link} from "react-router-dom";
import {fetchCartList} from "../../actions";
import {connect} from 'react-redux'

class HeadMenu extends React.Component{
    componentDidMount() {
        this.props.fetchCartList();
    }

    getCartCounter=()=>{
        if(!this.props.counter){
            return null;
        }else{

            return <span className="cart__counter">({this.props.counter})</span>
        }
    }

    render() {
        return (
            <div className="headMenu flex_Row_SpaceBetween_Center">
                <div className="headMenu__Items">
                    <Link to="#" className="menuBtn headMenu__Item headMenu__Btn--Selected">Store</Link>
                    <Link to="#" className="menuBtn headMenu__Item">Contract</Link>
                </div>
                <div className="headMenu__centerContext">
                    <Link to="" className="menuBtn headMenu__centerContext__m1">Customer Service</Link>
                    <Link to="" className="menuBtn headMenu__centerContext__m2">888 798 0202</Link>
                </div>
                <div className="headMenu__functions">
                    <Link to="" className="menuBtn headMenu__function">
                        My Account <i className="fas fa-user headMenu__function_icon"></i>
                    </Link>
                    <Link to="/cart" className="menuBtn headMenu__function">
                        Cart <i className="fas fa-shopping-cart headMenu__function_icon"></i>
                        {this.getCartCounter()}
                    </Link>
                </div>
            </div>
        );
    }
};
const mapStateToProps=(state)=>{

    if(!state.cart.data){
       return {counter:"loading..."};
    }
 return {
    counter:Object.values(state.cart.data).reduce((total,item)=>total+item.quantity,0)
 };
}
export default connect(mapStateToProps,{fetchCartList})(HeadMenu);