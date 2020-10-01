import React, {useState} from 'react';
import $ from "jquery";

const MainPictures = ({media,id}) => {

    const [currentPic,setCurrentPic] = useState(media[0])
    $(()=>{
        let Position = $(".productPicFrame").offset().top;

        $(window).scroll(
            ()=>{
                let w = $(".productPicFrame").width();
                //todo check w almost equals to windows width, then disabled function
                if($(document).scrollTop()>=Position){
                    $(".productPicFrame").addClass("productPicFrame--fixed").width(w)
                }else{
                    $(".productPicFrame").removeClass("productPicFrame--fixed").removeAttr("style")
                }
            }
        )
    })
    const renderImgList=()=>{
        const total = media.length;
        const onlyshow = 5;
        const rendedList = [];
        for(let i=0;i<5;i++){
            if(media[i]){
                let css = "";
                if(currentPic===media[i]){
                    css = " productPicFrame__left__side__imgbox--selected"
                }
                rendedList.push(
                    <div className={`productPicFrame__left__side__imgbox${css}`}
                        key={i} onClick={()=>{
                            setCurrentPic(media[i]);
                    }}
                    >
                        <img src={media[i]} alt=""
                             className="productPicFrame__left__side__imgbox__img"/>
                    </div>
                )
            }
        }
        if((total-onlyshow)>0){
            rendedList.push(
                <div key="more" className="productPicFrame__left__side__more" onClick={onClickHandle}>
                    +{total-onlyshow} MORE
                </div>
            )
        }
        return rendedList;
    }
    const onClickHandle = ()=>{
        console.log(id);
        //todo open popup window for show pictures
    }
    return (
        <div className="productPicFrame">
            <div className="productPicFrame__left">
                {renderImgList()}
            </div>
            <div className="productPicFrame__right">
                <div className="productPicFrame__right__main">
                    <img src={currentPic} alt="" className="productPicFrame__right__main__img"/>
                </div>
            </div>
        </div>
    );
};

export default MainPictures;