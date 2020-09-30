import React, {useState} from 'react';
import {sortProducts} from "../../actions";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import TableIcon from "./TableIcon";

const SortBar = ({everyPageShow,total,onChangeGridColum,colum,sortProducts}) => {
    const [colums,setColums] = useState(colum)
    const [order_price,setOrder_price]=useState(null);

    const changeOrderPrice = ()=>{
        setOrder_price(!order_price);
        sortProducts("price",order_price);
    }
    const changeColum=(x)=>{
        setColums(x)
        onChangeGridColum(x)
    }

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
            <div className="sortBar__icon_group">
                <TableIcon row="2" colum="3" onSelected={colums}  onClickHandle={changeColum}/>
                <TableIcon row="2" colum="4" onSelected={colums}  onClickHandle={changeColum}/>
            </div>
            </div>

        </div>
    );
};

export default connect(null,{sortProducts})(SortBar);