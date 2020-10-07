import React from 'react';
import {connect} from 'react-redux';

import _ from 'lodash';

const FixedCartNameAndOptions = (props) => {
    const {options,product} = props;


    if(!product){
        return null;
    }
    const categories = _.mapKeys(product.profileCategories,"id")

    const renderOptions =()=>{

         return Object.values(options).map((item,index)=>{
             const catname = categories[item.categoryId].name
             const itemname =  _.find(categories[item.categoryId].profileItems,{"id":item.itemId}).name
             return <div key={index}>{catname}:{itemname}</div>;
         })
    }
    return (
        <>
            <div className="fixedCart__td--desc__name">
                {product.name}
            </div>
            <div className="fixedCart__td--desc__options">
                {renderOptions()}
            </div>

        </>
    );
};
const mapStateToProps=(state,ownProps)=>{
    return {

        product: _.find(state.products,{id:ownProps.id})

    };
}
export default connect(mapStateToProps)(FixedCartNameAndOptions);