import React from 'react';
import {Link} from "react-router-dom";

const CalgaryMenu = () => {
    return (
        <div className="calgaryMenu">
            <div className="mediaSrc__mainMenuIcon">
                <i className="fas fa-bars mediaSrc__mainMenuIcon--center"></i>
            </div>
            <div className="logoBox">

                    <div className="logo">
                        <img src="/images/logo-small.svg" className="logo__img" alt="Logo"/>
                    </div>
                    <div className="mediaSrc__CompanyName">HermanMiller</div>

            </div>


            <div className="calgaryMenu__Items">
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
                <div className="calgaryMenu__search__icongroup">
                    <i className="fas fa-search calgaryMenu__search__icon"></i>
                    <i className="fas fa-shopping-cart mediaSrc__cartIcon"/>
                </div>
            </div>
        </div>
    );
};

export default CalgaryMenu;