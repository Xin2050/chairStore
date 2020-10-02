import React, {useEffect, useState} from 'react';
import {optionsChange} from "../../../actions";
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from "react-router-dom";

const ProductBaseOption = ({productId, data, optionsChange}) => {
    const {profileItems} = data; //this is first profileItems for Frame/Base

    const [index,setIndex] = useState(0);


    const loadIndex = ()=>{
        const system_defult = _.findIndex(profileItems, {"checked": true});

        if(-1!==system_defult){
            setIndex(system_defult)
        }
        optionsChange(productId, data.id, profileItems[system_defult].id, profileItems[system_defult].price)
    }

    useEffect(loadIndex,[]);


    const renderList = () => {
        return profileItems.map((item, i) => {
            const css = index === i ? " productOptions__context__base__imagelist__imgbox__img--selected" : "";
            return (
                <div key={`img_${i}`} className="productOptions__context__base__imagelist__imgbox"
                     onClick={() => {
                         setIndex(i);
                         optionsChange(productId, data.id, item.id, item.price);//productid,profileCategoryId,itemid,price
                     }}
                >
                    <img src={item.media} alt={item.name} key={i}
                         className={`productOptions__context__base__imagelist__imgbox__img${css}`}/>
                </div>
            )
        })

    }
    return (
        <div className="productOptions">
            <div className="productOptions__title">
                {data.name}
            </div>
            <div className="productOptions__context">
                <div
                    className="productOptions__context__base__subname">{profileItems[index].name} (+{profileItems[index].price})
                </div>
                <div className="productOptions__context__base__imagelist">
                    {renderList()}
                </div>
                <div>
                    <Link to='#' className="form__PrimaryBtn productOptions__context__base__btn">Request Free Swatches</Link>
                </div>
            </div>
        </div>

    );
};
const mapStateToProps = (state, ownProps) => {
    return {
        options: state.options[ownProps.productId]
    };
}
export default connect(mapStateToProps, {optionsChange})(ProductBaseOption);