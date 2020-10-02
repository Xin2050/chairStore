import React, {useEffect, useState} from 'react';
import {optionsChange,fetchOptions} from "../../../actions";
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from "react-router-dom";

const ProductBaseOption = ({productId,data,options,fetchOptions,optionsChange})=> {
    const {profileItems} = data;
    const [index,setIndex] = useState(1)
    const loadOption = ()=>{
        fetchOptions();
    }
    useEffect(loadOption,[]);
    useEffect(()=>{
        if(options){
            setIndex(options.options[1].itemId)
        }

        //
    },[options]);

    const handleOnClick = (item)=>{
        setIndex(item.id);
        optionsChange(productId, 1,item); //1 is categoryId

    }


    const renderList = () => {
        if(!options){
            return "loading..."
        }
        return profileItems.map((item, i) => {
            const css = index === item.id ? " productOptions__context__base__imagelist__imgbox__img--selected" : "";
            return (
                <div key={`img_${i}`} className="productOptions__context__base__imagelist__imgbox"
                     onClick={() => {
                         handleOnClick(item);
                         }}
                >
                    <img src={item.media} alt={item.name} key={i}
                         className={`productOptions__context__base__imagelist__imgbox__img${css}`}/>
                </div>
            )
        })

    }

    const getIndexFromID = (id)=>{
        return _.findIndex(profileItems,{id});
    }

    return (
            <div className="productOptions">
                <div className="productOptions__title">
                    {data.name}
                </div>
                <div className="productOptions__context">
                    <div className="productOptions__context__base__subname">
                        {profileItems[getIndexFromID(index)].name}
                    </div>
                    <div className="productOptions__context__base__imagelist">
                        {renderList()}
                    </div>
                    <div>
                        <Link to='#' className="form__PrimaryBtn productOptions__context__base__btn">
                            Request Free Swatches
                        </Link>
                    </div>
                </div>
            </div>

        )


};
const mapStateToProps = (state, ownProps) => {
    return {
        options: state.options[ownProps.productId]
    };
}
export default connect(mapStateToProps, {optionsChange,fetchOptions})(ProductBaseOption);