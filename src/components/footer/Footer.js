import React from 'react';
import {Link} from "react-router-dom";
import $ from 'jquery';

const Footer = () => {

    const openMenu= (e) => {
        let d = $(e.currentTarget).next();
        //d.toggle(d.is(':hidden'))
        d.toggleClass('footer__list__item__details--show')
        $(e.currentTarget).toggleClass('footer__list__item__title--select')
    }

    return (
        <div className="footer">
            <div className="footer__list">

                <div className="footer__list__item">
                    <div className="footer__list__item__title" onClick={openMenu}>
                        Customer Service
                    </div>
                    <div className="footer__list__item__details">
                        Catalog Opt Out<br/>
                        Contact Us<br/>
                        FAQ<br/>
                        Returns and Exchanges<br/>
                        Shipping and Delivery<br/>
                        Warranty and Service<br/>
                        Assembly Instructions<br/>
                        Care and Maintenance<br/>
                        Site Feedback<br/>
                        Track Your Order<br/>
                        Nelson Product Recall<br/>
                        Our Response to COVID-19
                    </div>
                </div>
                <div className="footer__list__item">
                    <div className="footer__list__item__title" onClick={openMenu}>
                        Resources
                    </div>
                    <div className="footer__list__item__details">
                    For Business
                    </div>
                </div>
                <div className="footer__list__item">
                    <div className="footer__list__item__title" onClick={openMenu}>
                        Locations
                    </div>
                    <div className="footer__list__item__details" >
                    Find a Retailer<br/>
                    Our New York Store
                    </div>
                </div>
                <div className="footer__list__item">
                    <div className="footer__list__item__title" onClick={openMenu}>
                        About Herman Miller
                    </div>

                    <div className="footer__list__item__details">
                    About Us<br/>
                    HermanMiller.com<br/>
                    Our Designers<br/>
                    Request A Catalog<br/>
                    Careers<br/>
                    Accessibility Statement<br/>
                    Terms of Sale<br/>
                    Privacy Notice<br/>
                    Cookie Notice<br/>
                    Do Not Sell My Personal Information<br/>
                    Site Map
                    </div>
                </div>
            </div>
            <div className="footer__followUs">
                <div className="footer__followUs__title">
                    Join our mailing list<p/>
                    <div className="footer__followUs__inputBox">
                        <input className="footer__followUs__input" type="text" placeholder="Enter your email"/>
                        <Link to="#" className="btnSignUP">Sign Up</Link>
                    </div>

                </div>
                <div className="footer__followUs__title">
                    Follow Us
                    <div className="footer__followUs__Socials__icons">
                        <Link to="#" className="menuBtn footer__followUs__Socials__icon">
                            <i className="fab fa-twitter-square"/>
                        </Link>
                        <Link to="#" className="menuBtn footer__followUs__Socials__icon">
                            <i className="fab fa-facebook-square"/>
                        </Link>
                        <Link to="#" className="menuBtn footer__followUs__Socials__icon">
                            <i className="fab fa-instagram-square"/>
                        </Link>
                        <Link to="#" className="menuBtn footer__followUs__Socials__icon">
                            <i className="fab fa-pinterest-square"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer__followUs__lang">
                <div className="footer__followUs__lang__item">
                    <i className="fas fa-flag-usa footer__followUs__lang__icon"/>
                    United States
                </div>
                <div className="footer__followUs__lang__item">
                    © 2020 Herman Miller, Inc.
                </div>

            </div>
            <div className="footer__last">
                A Herman Miller Group Company
            </div>
        </div>
    );
};

export default Footer;