import React, {useEffect, useState} from 'react';
import {NumberFormatted} from "../../../apis/NumberFormat";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {fetchOptions} from "../../../actions";

const AddtoCartBar = ({data,fetchOptions,total}) => {
    const loadOptions =()=>{
      fetchOptions();
    }
    useEffect(loadOptions,[])

    const [q,setQ] = useState(1);
    return (
        <div className="addCartBar">
            <div className="addCartBar__left">
                <div className="addCartBar__left__namebox">
                    {data.name}
                </div>
                <div className="addCartBar__left__pic">
                    <img src="" alt="" className="addCartBar__left__pic__img"/>
                </div>
            </div>
            <div className="addCartBar__right">
                <div className="addCartBar__right__shipping">
                    <i className="fas fa-shipping-fast addCartBar__right__shipping__icon"/>
                    Ready to ship in 7 weeks
                </div>
                <div className="addCartBar__right__price">
                    C{NumberFormatted(total)}
                </div>
                <div className="addCartBar__right__quantity">
                    <input type="text" className="form__input addCartBar__right__quantity--only"
                           value={q} onChange={e=>{setQ(e.target.value)}}/>
                </div>
                <div className="addCartBar__BtnBox">
                    <Link to="#" className="form__PrimaryBtn ">
                        Add To Cart
                    </Link>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps=(state,ownProps)=>{
    if(!state.options[ownProps.data.id]){
        return {total:"loading..."}
    }
 return {
    total:state.options[ownProps.data.id].total
 };
}
export default connect(mapStateToProps,{fetchOptions})(AddtoCartBar);