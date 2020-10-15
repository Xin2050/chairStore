import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {connect} from 'react-redux';

//import history from "../../base/history";

const AccountMenu = (props) => {
    const {onMouseHover, onMouseLeave} = props;
    const renderItems = (lasturl) => {
        let isLogin = false;
        if(props.auth){
           if(props.auth.user){
               isLogin = true;
           }
        }

        if (isLogin) {
            return (
                <>
                    <div className="floatMenu__Item">
                        <Link to="/signout">Sign Out </Link>
                    </div>
                    <div className="floatMenu__Item">
                        <Link to="/orders">My Orders </Link>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="floatMenu__Item">
                        <Link to={{pathname: "/signin", state: {lasturl}}}>Sign in </Link>
                    </div>
                    <div className="floatMenu__Item">
                        <Link to={{pathname: "/signin", state: {lasturl}}}>Register </Link>
                    </div>
                </>
            )
        }
    }
    return (
        <div className="floatMenu" id="accountMenu"
             onMouseEnter={onMouseHover}
             onMouseLeave={onMouseLeave}
        >
            {renderItems(useLocation().pathname)}

        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
}
export default connect(mapStateToProps)(AccountMenu);