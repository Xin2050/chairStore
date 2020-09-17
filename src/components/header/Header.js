import React from 'react';
import AdBar from "./ADBar";
import HeadMenu from "./HeadMenu";
import CalgaryMenu from "./CalgaryMenu";


const Header = () => {
    return (
        <div>
            <AdBar context='Free Shipping on Office Chairs + 0% Financing Available'/>
            <HeadMenu />
            <CalgaryMenu/>

        </div>
    );
};

export default Header;