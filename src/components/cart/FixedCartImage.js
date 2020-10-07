import React from 'react';
import {connect} from 'react-redux';

import _ from 'lodash';

const FixedCartImage = (props) => {

    const {product} = props;
    if(!product){
        return null;
    }

    return (
        <div className="fixedCart__td--image__imgbox">
            <img src={product.media.split("|")[0]} alt="img"
                 className="fixedCart__td--image__imgbox__img"/>
        </div>
    );
};
const mapStateToProps=(state,ownProps)=>{
 return {

        product: _.find(state.products,{id:ownProps.id})

 };
}
export default connect(mapStateToProps)(FixedCartImage);