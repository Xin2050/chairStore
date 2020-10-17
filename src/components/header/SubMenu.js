import React from 'react';
import {Link} from "react-router-dom";
import $ from 'jquery';
import {connect} from 'react-redux';
import history from "../../base/history";

const SubMenu = (props) => {
    const handleOnClick = (url)=>{
        $('#account_submenu').removeClass("submenu--show");
        $("#menu").removeClass("calgaryMenu__Items--show");
        history.push(url);
    }
    const renderItems = () => {
        let isLogin = false;
        if (props.auth) {
            if (props.auth.user) {
                isLogin = true;
            }
        }

        if (isLogin) {
            return (
                <>
                    <Link to="#"
                            onClick={()=>{
                             handleOnClick('/signout');
                            }}
                          className="submenu__item">Sign Out </Link>
                    <Link to="#"
                            onClick={()=>{
                             handleOnClick('/orders');
                            }}
                          className="submenu__item">My Orders </Link>
                </>
            )
        } else {
            return (
                <Link to="#"
                        onClick={()=>{
                         handleOnClick('/signin');
                        }}
                      className="submenu__item">Login / Register </Link>
            )
        }
    }
    return (
        <div id="account_submenu" className="submenu">
            <div className="submenu__title"
                 onClick={() => {
                     $('#account_submenu').removeClass("submenu--show");
                 }}
            >
                My Account
            </div>
            {renderItems()}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
}
export default connect(mapStateToProps)(SubMenu);