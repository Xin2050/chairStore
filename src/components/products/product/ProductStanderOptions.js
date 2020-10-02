import React, {useEffect, useState} from 'react';
import {optionsChange,fetchOptions} from "../../../actions";
import {connect} from 'react-redux';
import _ from 'lodash';

import {NumberFormatted} from "../../../apis/NumberFormat";

const ProductStanderOption = ({productId,data,options,fetchOptions,optionsChange})=> {
    const [index,setIndex] = useState({})
    const loadOption = ()=>{
        fetchOptions();
    }
    useEffect(loadOption,[]);
    useEffect(()=>{
        if(options){

            const myindexs = {}
            _.values(options.options).forEach(item=>{
                myindexs[item.categoryId] = item.itemId
            })

            setIndex(myindexs)
        }
    },[options]);

    const setMyIndex = (categoryId,selId)=>{
        const newstate = {...index};
        newstate[categoryId] = selId;
        setIndex(newstate);
    }
    const handleOnClick = (categoryId,item)=>{
        setMyIndex(categoryId, item.id);
        optionsChange(productId, categoryId,item); //1 is categoryId
    }


    const renderList = (categoryId,profileItems) => {
        if (_.isEmpty(index)){
            return "loading..."
        }

        const selectedPrice = Number(_.find(profileItems,{'id':index[categoryId]}).price)

        return profileItems.map((item, i) => {
            let price = Number(item.price) - selectedPrice;

            if(price===0){
                price = "&nbsp;"
            }else{
                price = price>0?`+${NumberFormatted(price)}`: NumberFormatted(price)
            }


            const css = index[categoryId] === item.id ? " productOptions__context__stand--selected" : "";
            return (
                <div key={`options_${i}`} className={`productOptions__context__stand${css}`}
                     onClick={() => {
                         handleOnClick(categoryId,item);
                         }}
                >
                    <div className="productOptions__context__stand__name">{item.name}</div>
                    <div className="productOptions__context__stand__price"
                    dangerouslySetInnerHTML={{__html:price}}/>





                </div>
            )
        })

    }



    const renderOptionsList=()=>{
        const [,...restProfileCategories] = data;
        return restProfileCategories.map(ProfileCategory=>{
            //const i = getIndexFromID(index[ProfileCategory.id]);
            return(
                <div className="productOptions" key={ProfileCategory.id}>
                    <div className="productOptions__title">
                        {ProfileCategory.name}
                    </div>
                    <div className="productOptions__context">
                      {renderList(ProfileCategory.id,ProfileCategory.profileItems)}
                    </div>
                </div>
            )
        })
    }

    return renderOptionsList();


};
const mapStateToProps = (state, ownProps) => {
    return {
        options: state.options[ownProps.productId]
    };
}
export default connect(mapStateToProps, {optionsChange,fetchOptions})(ProductStanderOption);