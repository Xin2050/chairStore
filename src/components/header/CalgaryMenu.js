import React from 'react';

const CalgaryMenu = () => {
    return (
        <div className="calgaryMenu flex_Row_SpaceBetween_Center">
            <div className="mediaSrc__mainMenu">
                <i className="fas fa-bars"></i>
            </div>
            <div className="logoBox">
                <img src="./images/logo-small.svg" className="logo" alt="Logo"/>
                <div className="mediaSrc__CompanyName">HermanMiller</div>
            </div>
            <div className="calgaryMenu__Items flex_Row_Middle_Center">
                <a href="#" className="menuBtn--redLine calgaryMenu__Item">New</a>
                <a href="#" className="menuBtn--redLine calgaryMenu__Item calgaryMenu__Item--selected">Office</a>
                <a href="#" className="menuBtn--redLine calgaryMenu__Item">Living</a>
                <a href="#" className="menuBtn--redLine calgaryMenu__Item">Dining</a>
                <a href="#" className="menuBtn--redLine calgaryMenu__Item">Bedroom</a>
                <a href="#" className="menuBtn--redLine calgaryMenu__Item">Outdoor</a>
                <a href="#" className="menuBtn--redLine calgaryMenu__Item">Lighting</a>
                <a href="#" className="menuBtn--redLine calgaryMenu__Item">Accessories</a>
                <a href="#" className="menuBtn--redLine calgaryMenu__Item">Gaming</a>
            </div>
            <div className="menuBtn calgaryMenu__search">
                <i className="fas fa-search"></i>
                <i className="fas fa-shopping-cart mediaSrc__cartIcon"/>
            </div>
        </div>
    );
};

export default CalgaryMenu;