import React, {useEffect, useRef, useState} from 'react';
import {NumberFormatted} from "../../../apis/NumberFormat";

import {connect} from 'react-redux';
import {fetchOptions,addToCart} from "../../../actions";
import $ from "jquery";
import Spinner from "../../Spinner";




const AddtoCartBar = (props) => {
    const {data,fetchOptions,addToCart,product} = props;
    const [buttonText,setButtonText] = useState("Add To Cart");
    const btnref = useRef();

    const loadOptions =()=>{
      fetchOptions();
    }
    useEffect(loadOptions,[])

    const handleOnClick=()=>{

        new Promise((resolve)=>{
            setButtonText("Adding...");
            btnref.current.disabled = true;
            resolve(addToCart(data));
        }).then(
            (resolve)=>{
                setTimeout(()=>{
                    setButtonText("Add To Cart")
                    btnref.current.disabled = false;
                },1000)
            }
        )
        const top = $(".headMenu").offset().top;

        const currentTop = $(window).scrollTop();


        for(let i=10;i>-1;i--){
            setTimeout(()=>{

                $(window).scrollTop((currentTop-top)/10*i);
            },(10-i)*10)
        }

    }
    const [q,setQ] = useState(1);

    return (
        (!product)?<Spinner message="loading"/>:
        <div className="addCartBar">
            <div>
            <div className="addCartBar__left">
                <div className="addCartBar__left__namebox">
                    {product.name}
                </div>
                <div className="addCartBar__left__pic">
                    <img src={product.media.split("|")[0]} alt="" className="addCartBar__left__pic__img"/>
                </div>
            </div>
            <div className="addCartBar__right">
                <div className="addCartBar__right__shipping">
                    <i className="fas fa-shipping-fast addCartBar__right__shipping__icon"/>
                    Ready to ship in 7 weeks
                </div>
                <div className="addCartBar__right__price">
                    C{NumberFormatted(data.total)}
                </div>
                <div className="addCartBar__right__quantity">
                    <input type="text" className="form__input addCartBar__right__quantity--only"
                           value={q} onChange={e=>{setQ(e.target.value)}}/>
                </div>
                <div className="addCartBar__BtnBox">
                    <button ref={btnref} className="form__PrimaryBtn " onClick={handleOnClick} >
                        {buttonText}
                    </button>
                </div>
            </div>
            </div>
        </div>
    )


};
const mapStateToProps=(state,ownProps)=>{
    if(!state.options[ownProps.data.id]){
        return {total:"loading..."}
    }
 return {
        data:state.options[ownProps.data.id],
        product:state.products[ownProps.data.id]
 };
}
export default connect(mapStateToProps,{fetchOptions,addToCart})(AddtoCartBar);