import React from 'react';
import {Link} from "react-router-dom";
import {useLocation} from 'react-router';
import {connect} from 'react-redux';
import $ from 'jquery';
import history from "../../base/history";
import SubMenu from "./SubMenu";

const CalgaryMenu = (props) => {
    const url = useLocation().pathname;
    $(()=>{
        if(url!=="/"){
            $(".calgaryMenu").removeClass("calgaryMenu--fixed")
            $(window).off("scroll")
            return;
        }
        let menuPosition = $(".calgaryMenu").offset().top;

        $(window).scroll(
            ()=>{

                if(($(document).scrollTop()>=menuPosition)&&(url==="/")){
                    $(".calgaryMenu").addClass("calgaryMenu--fixed")
                }else{
                    $(".calgaryMenu").removeClass("calgaryMenu--fixed")
                }
            }
        )
        $(window).resize(()=>{
            if($(window).width()>=900){
                $("#menu").removeClass("calgaryMenu__Items--show");
            }
        })
    })

    const toggleMenu=()=>{
        $("#menu").toggleClass("calgaryMenu__Items--show");
    }
    const getCartCounter = () => {
        if (!props.counter) {
            return null;
        } else {

            return <span className="cart__counter cart__counter--media">({props.counter})</span>
        }
    }
    return (
        <div  className="calgaryMenu">
            <div className="mediaSrc__mainMenuIcon menuBtn" onClick={toggleMenu}>
                <i className="fas fa-bars mediaSrc__mainMenuIcon--center"/>
            </div>
            <div className="logoBox">

                    <div className="logo">
                        <img src="/images/logo-small.svg" className="logo__img" alt="Logo"/>
                    </div>
                    <div className="mediaSrc__CompanyName">HermanMiller</div>

            </div>


            <div id="menu" className="calgaryMenu__Items" onClick={()=>{
                toggleMenu();
                $('#account_submenu').removeClass("submenu--show");
            }}>
                <div className="calgaryMenu__Items__list" onClick={e=>{
                    e.stopPropagation();
                }}>
                    <Link to="#" className="menuBtn--redLine calgaryMenu__Item">New</Link>
                    <Link to="#" onClick={()=>{
                        $("#menu").removeClass("calgaryMenu__Items--show");
                        history.push("/");
                    }} className="menuBtn--redLine calgaryMenu__Item calgaryMenu__Item--selected">Office</Link>
                    <Link to="#" className="menuBtn--redLine calgaryMenu__Item">Living</Link>
                    <Link to="#" className="menuBtn--redLine calgaryMenu__Item">Dining</Link>
                    <Link to="#" className="menuBtn--redLine calgaryMenu__Item">Bedroom</Link>
                    <Link to="#" className="menuBtn--redLine calgaryMenu__Item">Outdoor</Link>
                    <Link to="#" className="menuBtn--redLine calgaryMenu__Item">Lighting</Link>
                    <Link to="#" className="menuBtn--redLine calgaryMenu__Item">Accessories</Link>
                    <Link to="#" className="menuBtn--redLine calgaryMenu__Item">Gaming</Link>
                    <Link to="#"
                        onClick={()=>{
                            $('#account_submenu').addClass("submenu--show")
                        }}
                          className="menuBtn--redLine calgaryMenu__Item menuBtn__account">
                        Account
                    </Link>
                    <SubMenu />
                </div>

            </div>


            <div className="calgaryMenu__search">
                <div className="calgaryMenu__search__icongroup">
                    <i className="fas fa-search calgaryMenu__search__icon menuBtn"/>
                    <i className="fas fa-shopping-cart mediaSrc__cartIcon menuBtn" onClick={()=>{
                        history.push('/cart')
                    }}/> {getCartCounter()}
                </div>
            </div>
        </div>
    );

};
const mapStateToProps = (state) => {

    if (!state.cart.data) {
        return {counter: "loading..."};
    }
    const counter = Object.values(state.cart.data).reduce((total, item) => total + item.quantity, 0)
    return {counter};
}
export default connect(mapStateToProps)(CalgaryMenu);