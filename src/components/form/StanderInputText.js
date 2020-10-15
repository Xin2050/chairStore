import React from 'react';


const StanderInputText = (props) => {

    let {input,label, meta,myclass,type,message} = props;

    const renderErrorMessage=(meta)=>{
        //console.log(meta);
        const {error,touched} = meta;
        if(error&&touched){
            return <div className="form__error__message">{error}</div>;
        }
        return null;
    }
    const renderMessage=()=>{
        return <div className="form__message">{message} </div>
    }
    type = type?type:"text";
    let className = myclass?myclass:"form__group";
    className = className.concat(meta.error&&meta.touched?' form__error':'');
    className = className.concat(meta.asyncValidating?' form__group__asyncValidating':'')
    return (
        <div className={className}>
            <label className="form__label">{label}
                {renderMessage()}
            </label>
            <input type={type} className="form__input" {...input}
                    autoComplete="off"/>
            {renderErrorMessage(meta)}

        </div>
    );
}
export default StanderInputText;