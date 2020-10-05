import React, {useEffect} from 'react';
import {fetchProduct} from "../../actions";
import {connect} from 'react-redux'
import $ from 'jquery';

const Popup = props => {


    //const [selected,setSelected] = useState(0);
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
                                 className="popup__right__content__img"/>
                                 )
        }
        return renderList;
    }
    const onClose = (e) => {
        props.onClose(e);
    }
    let current = 0;
    const go=(index,goto)=>{

        if(goto>=0){
            current=goto;
        }else {
            current = current + index;
            current = current >= imageList.length ? 0 : current;
            current = current < 0 ? imageList.length - 1 : current;
        }

        const w = $(".popup__right__content__imgBox__imgList").width();
        $(".popup__right__content__img").each((index,item)=>{
            $(item).css({"transform":`translateX(-${w*current}px)`})
        })
        $(".popup__right__content__page").text(`${current+1} of ${imageList.length}`)
        $(".popup__left__content__imageBox").each((index,item)=>{
            if(index===current){
                $(item).addClass('popup__left__content__imageBox--selected');
            }else{
                $(item).removeClass('popup__left__content__imageBox--selected');
            }

        })
    }


    const renderImgIndexList=()=>{

        const rendedList = [];
        for(let i=0;i<imageList.length;i++){
            if(imageList[i]){
                let css = "";
                if(current===i){
                    css = " popup__left__content__imageBox--selected"
                }
                rendedList.push(
                    <div className={`popup__left__content__imageBox${css}`}

                         key={i} onClick={()=>{
                        go(-1,i);
                    }}
                    >
                        <img src={imageList[i]} alt=""
                             className="popup__left__content__imageBox__img"/>
                    </div>
                )
            }
        }

        return rendedList;
    }

    return (

        <div className="popup"  >
            <div className="popup__left">
                <div className="popup__left__content">
                    {renderImgIndexList()}
                </div>
            </div>
            <div className="popup__right" onClick={onClose}>
                <div onClick={onClose} className="popup__right__content__close">&times;</div>
                <div className="popup__right__content__name">{props.product.name}</div>
                <div className="popup__right__content"  onClick={e=>{e.stopPropagation()}}>
                    <i className="fas fa-chevron-left popup__right__content_GoBtn popup__right__content_GoBtn--left"
                       onClick={()=>{go(-1)}}/>
                    <i className="fas fa-chevron-right popup__right__content_GoBtn popup__right__content_GoBtn--right"
                       onClick={()=>{go(1)}}/>
                    <div className="popup__right__content__imgBox">
                        <div className="popup__right__content__imgBox__imgList">
                            {renderImageList()}
                        </div>
                    </div>
                </div>
                <div className="popup__right__content__page">1 of {renderImageList().length}</div>
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