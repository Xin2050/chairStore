import React from 'react';
import Header from "./header/Header";
import '../css/chairstore.css'
import ProductsList from "./products/ProductsList";
import Footer from "./footer/Footer";
import {Switch,Router, Route} from "react-router-dom";
import history from "../base/history";
import {fetchCartList} from "../actions";
import {connect} from "react-redux";
import CartPage from "./cart/CartPage";
import CheckoutPage from "./cart/CheckoutPage";
import Detail from "./products/Detail";
import ViewOrderPage from "./cart/ViewOrderPage";
import EditOrderPage from "./cart/EditOrderPage";


class App extends React.Component{


    updateCartCounter=()=>{
        this.props.fetchCartList()
    }
    render() {
        return (
            <div>
                <Router history={history}>
                    <Header/>
                    <Switch>
                        <Route path="/" exact
                               render={()=><ProductsList updateCounter={this.updateCartCounter} />}/>
                        <Route path="/detail/:id" exact component={Detail}/>
                        <Route path="/cart" exact component={CartPage}/>
                        <Route path="/cart/checkout" exact component={CheckoutPage}/>
                        <Route path="/cart/vieworder" exact component={ViewOrderPage}/>
                        <Route path="/cart/checkoutedit" exact component={EditOrderPage}/>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        );
    }

};

export default connect(null,{fetchCartList})(App);