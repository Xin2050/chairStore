import React, {useEffect, useState} from 'react';
import {fetchProduct} from "../actions";
import {connect} from 'react-redux'

const Popup = props => {

    const [popClassName,setPopClassName] =  useState("popup")

    const pid = props.id;

    const getData = ()=>{
        props.fetchProduct(pid);
    }
    useEffect(getData,[])

    const imageList = props.product.media.split('|');

    const renderImageList = () => {
        if (!props.product) {
            return ("loading")
        }
        let renderList = [];
        let i = 0;
        for (let item of imageList) {
            renderList.push(<img src={item} id={`img${i++}`}
                                 key={i++} alt={item.name}
                                 className="popup__content__img"/>
                                 )
        }
        return renderList;
    }
    const onClose = () => {
        setPopClassName("popup__disable");
        props.onClose();
    }
    let current = 0;
    const go=(index)=>{
        current = current + index;
        current = current >= imageList.length ? 0:current;
        current = current< 0 ? imageList.length -1:current;
        let imagelist = document.getElementsByClassName("popup__content__img");
        for(let i=0;i<imagelist.length;i++){
            if(current===i){
                imagelist[i].style.display='block';
            }else{
                imagelist[i].style.display='none';
            }
        }

    }

    return (

        <div className={popClassName} onClick={onClose} >
            <div className="popup__content" onClick={e => {
                e.stopPropagation()
            }}>
                <div onClick={onClose} className="popup__content__close">&times;</div>
                <i className="fas fa-chevron-left popup__content_GoBtn popup__content_GoBtn--left"
                   onClick={()=>{go(-1)}}></i>
                <i className="fas fa-chevron-right popup__content_GoBtn popup__content_GoBtn--right"
                   onClick={()=>{go(1)}}></i>
                <div className="popup__content__imgList">
                    {renderImageList()}
                </div>
            </div>
        </div>
    )


};
const mapStateToProps = (state, oldProps) => {
    return {
        product: state.products[oldProps.id]
    };
}
export default connect(mapStateToProps, {fetchProduct})(Popup);