import React, {useState} from 'react';

const AdBar = ({context}) => {
    const [showAdBar,setShowAdBar] = useState(true)
    if(!showAdBar){
        return null;
    }
    return (
        <div className="header__ADBar">
            <div className="header__ADBar__context">
                {context}
                <div className="header__ADBar__closeBox">
                    <i className="fas fa-times header__ADBar__closeButton"
                        onClick={()=>{setShowAdBar(false)}}
                    ></i>
                </div>
            </div>


        </div>
    );
};

export default AdBar;