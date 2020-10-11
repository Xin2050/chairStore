import React from 'react';
import {Link} from "react-router-dom";

const AccountMenu = (props) => {
    const {onMouseHover,onMouseLeave} = props;
    return (
        <div className="floatMenu" id="accountMenu"
             onMouseEnter={onMouseHover}
             onMouseLeave={onMouseLeave}
        >
            <div className="floatMenu__Item">
                <Link to="/signin">Sign in </Link>
            </div>
            <div className="floatMenu__Item">
                <Link to="#">Register </Link>
            </div>
            <div className="floatMenu__Item">
                <Link to="/signout">Sign Out </Link>
            </div>
            <div className="floatMenu__Item">
                <Link to="/orders">My Orders </Link>
            </div>
        </div>
    );
};

export default AccountMenu;