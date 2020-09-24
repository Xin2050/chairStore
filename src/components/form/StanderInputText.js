import React from 'react';


const StanderInputText = (props) => {

    let {input,label, meta,myclass,type} = props;

    const renderErrorMessage=(meta)=>{
        //console.log(meta);
        const {error,touched} = meta;
        if(error&&touched){
            //todo: give submit button a shark and set to disabled.
            return error;
        }
        return null;
    }
    type = type?type:"text";
    let className = myclass?myclass:"form__input";
    className = className.concat(meta.error&&meta.touched?' form__error':'');
    return (
        <div className="form__group">

            <input type={type} className={className} {...input}
                   placeholder={renderErrorMessage(meta)||label} autoComplete="off"/>
            <label className="form__label">{label}</label>

        </div>
    );
}
export default StanderInputText;