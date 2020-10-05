import React, {useState} from 'react';
import $ from "jquery";
import Popup from "../Popup";


const MainPictures = ({media,id}) => {

    const [currentPic,setCurrentPic] = useState(media[0])
    const max = 5;
    const [popup,setPopup]  = useState(null);
    $(()=>{
        const picBox = $(".productPicFrame");
        const topBorder = picBox.offset().top;
        const bottomBorder  = $(".productFrame").height()+$(".productFrame").offset().top;

        //console.log(bottomBorder);

        $(window).scroll(
            ()=>{
                let w = picBox.width();
                let h = $(".productPicFrame__right__main").height();
                let changeLine = bottomBorder - h;
                //console.log($(document).scrollTop(),changeLine);

                if($(document).scrollTop()>=topBorder){
                    picBox.addClass("productPicFrame--fixed").width(w)
                    $(".productFrame__left").removeClass("productFrame__sitdown")
                    if($(document).scrollTop()>=changeLine){
                        picBox.removeClass("productPicFrame--fixed");
                        $(".productFrame__left").addClass("productFrame__sitdown")
                    }
                }else{
                    picBox.removeClass("productPicFrame--fixed").removeAttr("style")
                    $(".productFrame__left").removeClass("productFrame__sitdown")
                }
            }
        )
    })
    const renderImgList=()=>{
        const total = media.length;
        const rendedList = [];
        for(let i=0;i<max;i++){
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
        if ((total!==max)&&((total-max)>0)){
            rendedList.push(
                <div key="more" className="productPicFrame__left__side__more" onClick={openPopup}>
                    +{total-max} MORE

                </div>
            )
        }
        return rendedList;
    }
    const openPopup =()=>{
        setPopup(<Popup id={id} onClose={closePopup} />)
    }
    const closePopup =(e)=>{

        setPopup(null);
        e.stopPropagation();
    }
    return (
        <>
        <div className="productPicFrame">
            <div className="productPicFrame__left">
                {renderImgList()}
            </div>
            <div className="productPicFrame__right">
                <div className="productPicFrame__right__main">
                    <img src={currentPic} alt="" className="productPicFrame__right__main__img"/>
                </div>
                <div className="productPicFrame__right__main__dimensions" onClick={()=>{
                    const top = $(".spe").offset().top;
                    for(let i=1;i<=100;i++){
                        setTimeout(()=>{
                            $(window).scrollTop(top/100*i);
                        },i*10)
                    }

                }}>
                    <i className="fas fa-cubes"/> Dimensions
                </div>
            </div>
        </div>
        {popup}
        </>
    );
};

export default MainPictures;