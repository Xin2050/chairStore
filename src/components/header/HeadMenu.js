import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {fetchCartListAndProducts} from "../../actions";
import {connect} from 'react-redux'
import FixedCartLayer from "../cart/FixedCartLayer";
import AccountMenu from "../menu/AccountMenu";
import loadToken from "../auth/loadToken";
import $ from 'jquery';

const HeadMenu = (props) => {

    const [isFirst, setIsFirst] = useState(true);
    const [fixedCart, setFixedCart] = useState(null);
    const [isClose, setIsClose] = useState(false);

    const [debouncedShow,setDebouncedShow] = useState(false);

    const accountRef = useRef();



    const keepShow=()=>{

        setIsClose(false);
    }
    const prepareClosing = ()=>{

        setIsClose(true);
    }

    const componentDidMount = () => {
        props.fetchCartListAndProducts();
    }


    const showFixedCart = (delay=0) => {

        if(window.location.pathname.includes("/cart")){
            return;
        }
        if (props.counter === "loading...") {
            return;
        }

        if ((props.counter >= 0) && (!isFirst)) {

            setTimeout(()=>{
                setFixedCart(<FixedCartLayer onMouseHover={keepShow}
                                             onMouseLeave={prepareClosing}
                                             closeNow={closeCartImmediately}
                />);
            },delay);

            setDebouncedShow(false);
        } else {
            setIsFirst(false);
        }
    }
    const closeCartImmediately = ()=>{
        prepareClosing();
        closeFixedCart(0);
    }
    const closeFixedCart = (delay=500) => {
        if (!isClose) {
            return;
        }
        const timeid = setTimeout(() => {
            setFixedCart(null);
            setIsClose(false);

        }, delay)
        return () => {
            clearTimeout(timeid);
        }
    }

    const prepareShow=()=>{

        if(window.location.pathname==="/cart"){
            return;
        }
        if(!debouncedShow){
            return;
        }
        const timeid = setTimeout(()=>{
            showFixedCart();
            //setIsShow(true);
        },500);
        return ()=>{
            clearTimeout(timeid);
        }

    }
    useEffect(componentDidMount, []);
    useEffect(showFixedCart, [props.counter]);
    useEffect(prepareShow,[debouncedShow]);
    useEffect(closeFixedCart, [isClose]);




    const getCartCounter = () => {
        if (!props.counter) {
            return null;
        } else {

            return <span className="cart__counter">({props.counter})</span>
        }
    }

    $(()=>{
        const setAccountMenu = ()=>{
            const boundingBox = accountRef.current.getBoundingClientRect()
            $('#accountMenu').css({"left":(boundingBox.right-$('#accountMenu').outerWidth()),
                                    "top":boundingBox.bottom})
        }
        setAccountMenu();
        $(window).resize(()=>{
            setAccountMenu()
        });
    })
    const toggleAccountMenu=()=>{
        $('#accountMenu').toggleClass("floatMenu--show");
    }
    const keepMenu = ()=>{
        $('#accountMenu').addClass("floatMenu--show");
    }
    const closeMenu = ()=>{
        $('#accountMenu').removeClass("floatMenu--show");
    }
    const renderMyName = ()=>{
        if(!props.auth){
            return;
        }
        if(props.auth.user){
            return `(${props.auth.user.firstName})`
        }
    }
    return (
        <>
            <div className="headMenu">
                <div className="headMenu__Items">
                    <div className="headMenu__Item headMenu__Btn--Selected">
                        <Link to="/" className="menuBtn headMenu__Item--middle">Store</Link>
                    </div>
                    <div className="headMenu__Item">
                        <Link to='#' className="menuBtn headMenu__Item--middle">Contract</Link>
                    </div>
                </div>
                <div className="headMenu__centerContext">
                    <Link to="#" className="menuBtn headMenu__centerContext__m1">Customer Service</Link>
                    <Link to="#" className="menuBtn headMenu__centerContext__m2">888 798 0202</Link>
                </div>
                <div className="headMenu__functions">
                    <div ref={accountRef} className="headMenu__function"
                         onMouseEnter={()=>{toggleAccountMenu()}}
                         onMouseLeave={()=>{toggleAccountMenu()}}
                    >
                        <Link to="#" className="menuBtn headMenu__Item--middle headMenu__function--color--gray">
                            My Account
                            {renderMyName()}
                            <i className="fas fa-user headMenu__function_icon"/>

                        </Link>
                    </div>
                    <div className="headMenu__function">
                        <Link to="/cart"
                              className="menuBtn headMenu__Item--middle headMenu__function--color--gray"
                              onMouseLeave={()=>{
                                  setDebouncedShow(false);
                                  prepareClosing();
                              }}
                              onMouseOver ={() => {
                                  setDebouncedShow(true);
                                  keepShow();
                              }}>
                            Cart <i className="fas fa-shopping-cart headMenu__function_icon"/>
                            {getCartCounter()}
                        </Link>
                    </div>
                </div>

            </div>
            {fixedCart}

            <AccountMenu onMouseHover={keepMenu} onMouseLeave={closeMenu} />
        </>
    );

};
const mapStateToProps = (state) => {

    if (!state.cart.data) {
        return {counter: "loading..."};
    }
    const counter = Object.values(state.cart.data).reduce((total, item) => total + item.quantity, 0)
    return {counter,auth:state.auth};
}
export default connect(mapStateToProps, {fetchCartListAndProducts})(loadToken(HeadMenu));