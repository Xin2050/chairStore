import React, {useState} from 'react';
import $ from 'jquery';

const FeaturedImages = ({media}) => {
    const [max,setMax] =useState(2);
    const fixpics = ()=>{
        let fixedHight  =0;
        let fixedWidth = 0;
        $(".FeaturedImages__grid__imgbox").each((index,item)=>{

            if(index===0){
                //fixedHight = $(item).height();
                fixedWidth = $(item).width();
            }else{
                $(item).width(fixedWidth);
            }
            $(item).height(fixedWidth/1.3)
        })
    }
    $(()=>{
        fixpics();
        $(window).resize(fixpics)

    })

    const renderList = ()=>{
        return media.map((item,index)=>{
            if(index>max){
                return null;
            }
            return (
                <div className="FeaturedImages__grid__imgbox" key={index}>
                    <img className="FeaturedImages__grid__imgbox__img"
                         alt="img" src={item}/>
                    {(index===max)&&(media.length>(max+1))?
                        <div className="FeaturedImages__grid__imgbox__img__cover"
                        onClick={()=>{setMax(media.length)}}>
                        <span>+{media.length-max-1}</span>
                        </div>:null}
                </div>
            )
        })
    }

    return (
        <div className="productDescOutSideBox">
            <div className="FeaturedImages">
            <h1>Featured Images</h1>
                <div className="FeaturedImages__grid">
                    {renderList()}
                </div>

            </div>

        </div>
    );
};

export default FeaturedImages;