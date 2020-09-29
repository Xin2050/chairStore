import React from 'react';
import {Field} from "redux-form";

import {options_sex} from "../form/StanderRadioGroup";
import CountriesAndStates from "./CountriesAndStates";
import StanderInputText from "../form/StanderInputText";
import StanderRadioGroup from "../form/StanderRadioGroup";
import StanderCheck from "../form/StanderCheck";


const CheckoutFormPersonalInfo = (props) => {
    //console.log(props); //there are nothing
    let country, state;

    if(props.init){
        country = props.init.country;
        state = props.init.state;
    }


    return (
        <>
            <h3 className="form__subtitle">Personal Information</h3>
            <table className="form__table">
                <tbody>
                <tr>
                    <td>
                        <Field name="firstName" label="First Name*" component={StanderInputText}/>
                    </td>
                    <td>
                        <Field name="lastName" label="Last Name*" component={StanderInputText}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Field name="email" label="E-mail*" type="email" component={StanderInputText}/>
                    </td>
                    <td>
                        <Field name="cellphone" label="Cell Phone*" component={StanderInputText}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Field name="birthday" type="date"
                                label="Date of birth*"
                               component={StanderInputText} myclass="form__input__date"/>
                    </td>
                    <td>
                        <Field name="sex" component={StanderRadioGroup} title="Sex" options={options_sex}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <CountriesAndStates country={country} state={state}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Field name="address" label="Street address*" component={StanderInputText}/>
                    </td>
                    <td>
                        <Field name="postcode" label="Post Code*" component={StanderInputText}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <Field name="agree" component={StanderCheck} label="I agree with ......"/>

                        <div className="xxx">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>
        </>
    );
};

export default CheckoutFormPersonalInfo;