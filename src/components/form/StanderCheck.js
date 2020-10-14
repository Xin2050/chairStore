import React from 'react';
import {Field} from "redux-form";



//todo expand this function can handle array arguments to make a checkbox group.

const StanderCheck = (props) => {

    let {input,label, meta,name} = props;

    const renderErrorMessage=(meta)=>{
        //console.log(meta);
        const {error,touched} = meta;
        if(error&&touched){

            return <span className="form__error__message">{error}</span>;
        }
        return null;
    }


    const className = meta.error&&meta.touched?'form__input__checkbox__label form__error':'form__input__checkbox__label';

    return (
        <div className="form__group">
            <label htmlFor={name}
                   className={className}>
                <Field type="checkbox" id={name} component="input" {...input}
                       className="form__input__checkbox"
                       />
                <div>{label}</div>
                <span className="form__input__checkbox__button"></span>
            </label>
            {renderErrorMessage(meta)}
        </div>
    );
}
export default StanderCheck;

// <div className="form__group">
//
//     <label htmlFor="agree"
//            className="form__input__checkbox__label">
//         <Field name="agree" id="agree" component="input"
//                className="form__input__checkbox"
//                type="checkbox"/>
//
//         <span className="form__input__checkbox__button"></span>
//     </label>
// </div>