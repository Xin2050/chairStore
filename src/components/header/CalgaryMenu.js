import React from 'react';
import {Link} from "react-router-dom";

const CalgaryMenu = () => {
    return (
        <div className="calgaryMenu flex_Row_SpaceBetween_Center">
            <div className="mediaSrc__mainMenu">
                <i className="fas fa-bars"></i>
            </div>
            <div className="logoBox">
                <img src="/images/logo-small.svg" className="logo" alt="Logo"/>
                <div className="mediaSrc__CompanyName">HermanMiller</div>
            </div>
            <div className="calgaryMenu__Items flex_Row_Middle_Center">
                <Link to="#" className="menuBtn--redLine calgaryMenu__Item">New</Link>
                <Link to="/" className="menuBtn--redLine calgaryMenu__Item calgaryMenu__Item--selected">Office</Link>
                <Link to="#" className="menuBtn--redLine calgaryMenu__Item">Living</Link>
                <Link to="#" className="menuBtn--redLine calgaryMenu__Item">Dining</Link>
                <Link to="#" className="menuBtn--redLine calgaryMenu__Item">Bedroom</Link>
                <Link to="#" className="menuBtn--redLine calgaryMenu__Item">Outdoor</Link>
                <Link to="#" className="menuBtn--redLine calgaryMenu__Item">Lighting</Link>
                <Link to="#" className="menuBtn--redLine calgaryMenu__Item">Accessories</Link>
                <Link to="#" className="menuBtn--redLine calgaryMenu__Item">Gaming</Link>
            </div>
            <div className="menuBtn calgaryMenu__search">
                <i className="fas fa-search"></i>
                <i className="fas fa-shopping-cart mediaSrc__cartIcon"/>
            </div>
        </div>
    );
};

export default CalgaryMenu;