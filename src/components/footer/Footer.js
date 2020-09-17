import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__list ">

                <div className="footer__list__item">
                    Customer Service<br/>
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
                <div className="footer__list__item">
                    Resources<br/>
                    For Business
                </div>
                <div className="footer__list__item">
                    Locations<br/>
                    Find a Retailer<br/>
                    Our New York Store
                </div>
                <div className="footer__list__item">
                    About Herman Miller<br/>
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
            <div className="footer__followUs">
                <div className="footer__followUs__title">
                    Join our mailing list<p/>
                    <div className="footer__followUs__inputBox">
                        <input className="footer__followUs__input" type="text" placeholder="Enter your email"/>
                        <a href="#" className="btnSignUP">Sign Up</a>
                    </div>

                </div>
                <div className="footer__followUs__title">
                    Follow Us
                    <div className="footer__followUs__Socials__icons">
                        <a href="#" className="menuBtn footer__followUs__Socials__icon">
                            <i className="fab fa-twitter-square"></i>
                        </a>
                        <a href="#" className="menuBtn footer__followUs__Socials__icon">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <a href="#" className="menuBtn footer__followUs__Socials__icon">
                            <i className="fab fa-instagram-square"></i>
                        </a>
                        <a href="#" className="menuBtn footer__followUs__Socials__icon">
                            <i className="fab fa-pinterest-square"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__followUs__lang">
                <div className="footer__followUs__lang__item">
                    <i className="fas fa-flag-usa footer__followUs__lang__icon"></i>
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