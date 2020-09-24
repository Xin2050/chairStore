import React, {useState} from 'react';
import {countries_states as data} from '../../base/countries_and_states'
import {Field} from "redux-form";
import _ from 'lodash'
import StanderInputText from "../form/StanderInputText";
import StanderSelector from "../form/StanderSelector";




const CountriesAndStates = ({country,state}) => {

    const [selectedCountry,setSelectedCountry] = useState(country?country:'');
    const [selectedState,setSelectedState] = useState(state?state:'');


    const renderCountiesSelector = ()=>{
        let options = {
            data,
            firstOption:{
                option:"Please select country",
                value:""
            },
            config:{
                option:'name',
                value:'name'
            }
        }
        return <Field options={options} component={StanderSelector} name="country"

                        onChange={e=>{
                            setSelectedCountry(e.target.value);
                            setSelectedState(null);
                       }}/>
    }

    const renderStateSelector = ()=>{
        if (!selectedCountry){
            return null;
        }

        let options = {
            data:_.find(data,{'name':selectedCountry}).states,
            firstOption:{
                option:"Select province or state ",
                value:""
            },
            config:{
                option:'name',
                value:'name'
            }
        }
        return <Field options={options} component={StanderSelector} name="state"
                      onChange={e=>setSelectedState(e.target.value)}/>

    }

    return (
        <div className="form__cityGroup">
            {renderCountiesSelector()}
            {renderStateSelector()}
            {selectedState?
                <Field name="city" component={StanderInputText} label="City*"
                       myclass="form__input form__input--city"/>
                :null}
        </div>
    );
};

export default CountriesAndStates;