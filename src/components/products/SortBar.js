import React, {useState} from 'react';

const SortBar = ({everyPageShow,total,onChangeGridColum,colum}) => {
    const [colums,setColum] = useState(colum)
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
                <a href="#" className="menuBtn sortBar__item">
                    Price
                    <i className="fas fa-caret-down sortBar__icon--margin" ></i>
                </a>
                <a href="#" className="menuBtn sortBar__item">
                    Material
                    <i className="fas fa-caret-down sortBar__icon--margin" ></i>
                </a>
                <a href="#" className="menuBtn sortBar__item">
                    Sort By: Featured Products
                    <i className="fas fa-caret-down sortBar__icon--margin" ></i>
                </a>
            </div>
            <div className="sortBar__right">
            Showing {everyPageShow} of {total} items
            <div className="sortBar__setGrid">

                <a href="#" className="menuBtn" onClick={()=>{changeColum(3)}}>
                    <i className={`fas fa-grip-horizontal sortBar__gridIcon--margin${unselected_3}`}></i>
                </a>
                <a href="#" className="menuBtn" onClick={()=>{changeColum(2)}}>
                    <i className={`fas fa-th-large sortBar__gridIcon--margin${unselected_2}`}></i>
                </a>
            </div>
            </div>

        </div>
    );
};

export default SortBar;