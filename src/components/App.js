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
import ViewOrderPage from "./cart/ViewOrderPage";
import EditOrderPage from "./cart/EditOrderPage";
import ProductDetails from "./products/product/ProductDetails";
import SignIn from "./auth/SignIn";
import SignOut from "./auth/SignOut";
import Orders from "./orders/Orders";


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
                        <Route path="/cart/vieworder" exact component={ViewOrderPage}/>
                        <Route path="/cart/checkoutedit" exact component={EditOrderPage}/>
                        <Route path="/signin" exact component={SignIn}/>
                        <Route path="/signout" exact component={SignOut}/>
                        <Route path="/orders" exact component={Orders}/>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        );
    }

};

export default connect(null,{fetchCartList})(App);