import React from 'react';
import $ from "jquery";

const Specification = ({name}) => {

    const openMenu = (e)=>{
        let d = $(e.currentTarget).next();
        d.toggleClass('spe__content__left__items__item__details--show')
        $(e.currentTarget).toggleClass('spe__content__left__items__item__title--select')
    }
    return (
        <div className="spe">
            <div className="spe__name">{name}</div>
            <h3>Specification</h3>

                <img
                    src="https://store.hermanmiller.com/on/demandware.static/-/Sites-herman-miller-Library/default/dw1d88a398/pdp-content/specs/aeron_chair_spec_01.svg"
                    alt="spec"/>
            <div className="spe__content">
                <div className="spe__content__left">
                    <div className="spe__content__left__items">
                        <div className="spe__content__left__items__item">
                            <div className="spe__content__left__items__item__title" onClick={openMenu}>
                                Shipping Options
                            </div>
                            <div className="spe__content__left__items__item__details">
                                Your cart will reflect the shipping options available for your order. Visit our Shipping and Delivery page to learn more.
                            </div>
                        </div>
                        <div className="spe__content__left__items__item">
                            <div className="spe__content__left__items__item__title" onClick={openMenu}>
                                Packaging
                            </div>
                            <div className="spe__content__left__items__item__details">
                                <h4>Packaging Type:</h4>
                                <p>Box</p>
                                <h4>Packaging Dimensions:</h4>
                                <p>41" x 28" x 27"</p>
                                <h4>Package Weight:</h4>
                                <p>Size A: 40 lbs.</p>
                                <p>Size B: 41 lbs</p>
                                <p>Size C: 43 lbs.</p>
                            </div>
                        </div>
                        <div className="spe__content__left__items__item">
                            <div className="spe__content__left__items__item__title" onClick={openMenu}>
                                Care and Maintenance
                            </div>
                            <div className="spe__content__left__items__item__details">
                                <p>With regular care and maintenance, your Herman Miller product will provide many years of superior performance and satisfaction. To maintain quality, please follow the cleaning procedures outlined here.</p>

                                <p>The instructions for the care and maintenance of Herman Miller products are provided to you as a service. No warranty is implied since results may vary.</p>
                            </div>
                        </div>
                        <div className="spe__content__left__items__item">
                            <div className="spe__content__left__items__item__title" onClick={openMenu}>
                                User Adjustments
                            </div>
                            <div className="spe__content__left__items__item__details">
                                <p>User Adjustments Document</p>
                                <p>User Adjustments Video</p>
                            </div>
                        </div>
                        <div className="spe__content__left__items__item">
                            <div className="spe__content__left__items__item__title" onClick={openMenu}>
                                Size and Fit
                            </div>
                            <div className="spe__content__left__items__item__details">
                                <p>User Adjustments Document</p>
                                <p>User Adjustments Video</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spe__content__right">
                    <table>
                        <thead>
                        <tr>
                            <td>{name}</td>
                            <td>Small (A)</td>
                            <td>Medium (B)</td>
                            <td>Large (C)</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="row-title">Total Height</td>
                            <td>38.5"</td>
                            <td>41"</td>
                            <td>43"</td>
                        </tr>
                        <tr>
                            <td className="row-title">Seat Height</td>
                            <td>14.75-19"</td>
                            <td>16-20.5"</td>
                            <td>16-20.5"</td>
                        </tr>
                        <tr>
                            <td className="row-title">Width</td>
                            <td>25.75"</td>
                            <td>27"</td>
                            <td>28.25"</td>
                        </tr>
                        <tr>
                            <td className="row-title">Depth</td>
                            <td>16"</td>
                            <td>16.75"</td>
                            <td>18.5"</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        </tfoot>
                    </table>
                </div>
            </div>

        </div>

    );
};

export default Specification;