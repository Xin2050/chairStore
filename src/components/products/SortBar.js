import React, {useState} from 'react';
import {sortProducts} from "../../actions";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const SortBar = ({everyPageShow,total,onChangeGridColum,colum,sortProducts}) => {
    const [colums,setColum] = useState(colum)
    const [order_price,setOrder_price]=useState(null);

    const changeOrderPrice = ()=>{
        setOrder_price(!order_price);
        sortProducts("price",order_price);
    }
    const changeColum=(x)=>{
        setColum(x)
        onChangeGridColum(x)
    }
    const unselected_3 = colums===2?' sortBar__gridIcon--unselected':'';
    const unselected_2 = colums===3?' sortBar__gridIcon--unselected':'';
    return (
        <div className="sortBar flex_Row_SpaceBetween_Center">
            <div className="mediaSrc__FilterDiv">
                <div className="mediaSrc__toggle-mobile-filter">
                    Filter By
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
            <div className="sortBar__left">
                <Link to="#" className="menuBtn sortBar__item" onClick={changeOrderPrice}>
                    Price
                    {
                        order_price==null?null:
                        order_price?<i className="fas fa-caret-down sortBar__icon--margin" ></i>:
                        <i className="fas fa-caret-up sortBar__icon--margin" ></i>
                    }

                </Link>
                <Link to="#" className="menuBtn sortBar__item">
                    Material
                    <i className="fas fa-caret-down sortBar__icon--margin" ></i>
                </Link>
                <Link to="#" className="menuBtn sortBar__item">
                    Sort By: Featured Products
                    <i className="fas fa-caret-down sortBar__icon--margin" ></i>
                </Link>
            </div>
            <div className="sortBar__right">
            Showing {everyPageShow} of {total} items
            <div className="sortBar__setGrid">

                <Link to="#" className="menuBtn" onClick={()=>{changeColum(3)}}>
                    <i className={`fas fa-grip-horizontal sortBar__gridIcon--margin${unselected_3}`}></i>
                </Link>
                <Link to="#" className="menuBtn" onClick={()=>{changeColum(2)}}>
                    <i className={`fas fa-th-large sortBar__gridIcon--margin${unselected_2}`}></i>
                </Link>
            </div>
            </div>

        </div>
    );
};

export default connect(null,{sortProducts})(SortBar);