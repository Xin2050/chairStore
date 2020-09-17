import React from 'react';

const HeadMenu = () => {

    return (
        <div className="headMenu flex_Row_SpaceBetween_Center">
            <div className="headMenu__Items">
                <a href="#" className="menuBtn headMenu__Item headMenu__Btn--Selected">Store</a>
                <a href="#" className="menuBtn headMenu__Item">Contract</a>
            </div>
            <div className="headMenu__centerContext">
                <a href="" className="menuBtn headMenu__centerContext__m1">Customer Service</a>
                <a href="" className="menuBtn headMenu__centerContext__m2">888 798 0202</a>
            </div>
            <div className="headMenu__functions">
                <a href="" className="menuBtn headMenu__function">
                    My Account<i className="fas fa-user headMenu__functions_icon"></i>
                </a>
                <a href="" className="menuBtn headMenu__function">
                    Cart<i className="fas fa-shopping-cart headMenu__functions_icon"></i>
                </a>
            </div>
        </div>
    );
};

export default HeadMenu;