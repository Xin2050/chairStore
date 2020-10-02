import React from 'react';
import {NumberFormatted} from "../../../apis/NumberFormat";
import {Link} from "react-router-dom";
import ProductBaseOption from "./ProductBaseOption";

const MainInfo = ({data}) => {
    return (
        <div className="productInfo">
            <div className="productInfo__basicInfo">
                <div className="productInfo__basicInfo__name">{data.name}</div>
                <div className="productInfo__basicInfo__description">{data.description}</div>
                <div className="productInfo__basicInfo__price">
                    C{NumberFormatted(data.price)}</div>

                <div className="productInfo__basicInfo__items">
                    <div className="productInfo__basicInfo__items__item">
                        <i className="fas fa-check productInfo__basicInfo__items__item__check"/>
                        <Link to="#" className="productInfo__basicInfo__items__item__link">
                            12-Year Warranty
                        </Link>
                    </div>
                    <div className="productInfo__basicInfo__items__item">
                        <i className="fas fa-check productInfo__basicInfo__items__item__check"/>
                        <Link to="#" className="productInfo__basicInfo__items__item__link">
                            Free Standard Shipping
                        </Link>
                    </div>
                    <div className="productInfo__basicInfo__items__item">
                        <i className="fas fa-check productInfo__basicInfo__items__item__check"/>
                        <Link to="#" className="productInfo__basicInfo__items__item__link">
                            30-Day No Hassle Return
                        </Link>
                    </div>
                </div>
                <div className="productInfo__basicInfo__freeshipping">Free Shipping</div>
            </div>
            <ProductBaseOption data={data.profileCategories[0]} id={data.id}/>
        </div>
    );
};

export default MainInfo;