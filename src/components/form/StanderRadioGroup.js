import React from 'react';
import {Field} from "redux-form";



export const options_sex = {
    data:[{option:'Male',value:'Male'},
        {option:'Female',value:'Female'},
        {option:'Other',value:'Other'}],
    selected:"selectedValue"
}

const renderErrorMessage=({error,touched})=>{
    if(error&&touched){
        return <span style={{color:'red'}}>{error}</span>;
    }
    return null;
}

const StanderRadioGroup = (props) => {

    const {input,options,meta,name,title} = props;
    if(!Array.isArray(options.data)){
        return <div>This is a missing arguments</div>;
    }
    const classname = meta.error && meta.touched ? "form__group--radio form__error":"form__group--radio";
    return (
        <div className={classname}>
            {title}
            {
                options.data.map((item)=>{
                    const id = `${item.name}_${item.value}`;
                    return(
                        <div className="form__radio-group" key={item.value}>
                            <label htmlFor={id} className="form__radio-label">
                                <Field id={id} name={name} type="radio" component="input"
                                       className='form__radio-input' {...input}
                                       value={item.value}/>
                                <span className="form__radio-button"></span>
                                {item.option}
                            </label>
                        </div>
                    )
                })
            }
            {renderErrorMessage(meta)}
        </div>
    );
};

export default StanderRadioGroup;