import React from 'react';

const ProductDescription = () => {
    return (
        <div className="productDescOutSideBox">
        <div className="productDesc">
            <h1>Description</h1>
            <div className="productDesc__content">
                <div className="productDesc__content__left">
                    A balance of sculptural form and effortless function, the Mid-Back Cosm gives you instant comfort—anywhere you work. It was designed to be as ergonomically innovative as it is beautiful and provide a universal solution for homes and offices.
                </div>
                <div className="productDesc__content__right">
                    <div className="productDesc__content__right__subtitle">Key Features</div>
                    <ul>
                        <li>12-year warranty</li>
                        <li>Named 100 Best Inventions by Time Magazine in 2019</li>
                        <li>Auto-Harmonic™ tilt mechanism automatically adjusts</li>
                        <li>Flexible frame</li>
                        <li>Continuous and breathable seat and back</li>
                        <li>One adjustment for height</li>
                        <li>Available in three arm styles: Fixed, Fully Adjustable, and Leaf</li>
                        <li>Dipped-in-Color option</li>
                        <li>Made in Michigan at a 100% green-energy facility</li>
                        <li>For questions about lead times, in-stock options or delivery please give us a call at 888.798.0202.</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductDescription;