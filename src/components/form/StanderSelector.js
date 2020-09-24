import React from 'react';
import {Field} from "redux-form";






const StanderSelector = ({input,options,meta,title}) => {

    if(!Array.isArray(options.data)){
        return <div>This is a missing arguments</div>;
    }
    let [value,option] = ["value","option"];

    if(options.config){
        value = options.config.value;
        option = options.config.option;
    }


    const classname = meta.error && meta.touched ?
        "form__input form__input__selector form__input__selector__error":"form__input form__input__selector";
    return (
        <>

        {title||""}
        <Field {...input} className={classname} component="select">
            {options.firstOption?
                <option key={options.firstOption.value} value={options.firstOption.value}>{options.firstOption.option}</option>
                :null
            }
            {
                options.data.map((item)=>{
                    return(
                        <option key={item[value]} value={item[value]}>{item[option]}</option>
                    )
                })
            }

        </Field>

        </>
    );
};

export default StanderSelector;