import React, {useState} from 'react';
import _ from 'lodash';

const ProductBaseOption = ({data}) => {
    const {profileItems} = data;
    let index = _.findIndex(profileItems, {"checked":true});
    if(index===-1){
        index =0;
    }
    const [sel,setSel] = useState(index);



    const renderList = ()=>{
        return profileItems.map((item,index)=>{
            const css = index===sel?" productOptions__context__base__imagelist__imgbox__img--selected":"";
            return(
                <div key={`img_${index}`} className="productOptions__context__base__imagelist__imgbox"
                     onClick={()=>{
                         setSel(index);
                     }}
                >
                <img src={item.media} alt={item.name} key={index}
                     className={`productOptions__context__base__imagelist__imgbox__img${css}`} />
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
                <div className="productOptions__context__base__subname">{profileItems[sel].name} (+{profileItems[sel].price})</div>
                <div className="productOptions__context__base__imagelist">
                    {renderList()}
                </div>
            </div>
        </div>

    );
};

export default ProductBaseOption;