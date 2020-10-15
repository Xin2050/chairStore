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

import ProductDetails from "./products/product/ProductDetails";
import SignIn from "./auth/SignIn";
import SignOut from "./auth/SignOut";
import Orders from "./orders/Orders";
import Welcome from "./auth/Welcome";


class App extends React.Component{



    render() {
        return (
            <div>
                <Router history={history}>
                    <Header/>
                    <Switch>
                        <Route path="/" exact  component={ProductsList}/>
                        <Route path="/detail/:id" exact component={ProductDetails}/>
                        <Route path="/cart" exact component={CartPage}/>
                        <Route path="/cart/checkout" exact component={CheckoutPage}/>
                        <Route path="/signin" exact component={SignIn}/>
                        <Route path="/signout" exact component={SignOut}/>
                        <Route path="/welcome" exact component={Welcome}/>
                        <Route path="/orders" exact component={Orders}/>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        );
    }

};

export default connect(null,{fetchCartList})(App);