import React from 'react';

import CheckoutPaymentInformation from "./CheckoutPaymentInformation";
import history from "../../base/history";



const ViewOrderInfo = (props) => {
    if(!props.formValues){
        return 'loading....'
    }
    return (
        <React.Fragment>
            <h2 className="form__title">Order Information</h2>

            <div className="form">
                <h3 className="form__subtitle">Personal Information</h3>
                <table className="form__view__table">
                    <tbody>
                    <tr>
                        <td>
                            First Name:{props.formValues.firstName}
                        </td>
                        <td>
                            Last Name:{props.formValues.lastName}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email:{props.formValues.email}
                        </td>
                        <td>
                            CellPhone:{props.formValues.cellphone}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            B-Day:{props.formValues.birthday}
                        </td>
                        <td>
                            Sex:{props.formValues.sex}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            Country/State/City:{props.formValues.country},{props.formValues.state},{props.formValues.city}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Address:{props.formValues.address}
                        </td>
                        <td>
                            Postcode:{props.formValues.postcode}
                        </td>
                    </tr>
                    </tbody>
                </table>
                    <CheckoutPaymentInformation/>
                    <div className="cart__footer__div">
                        <button className="form__btn form__btn__primaryButton">Confirm Order</button>

                        <button onClick={()=>{history.push('/cart/checkoutedit')}}  className="form__btn">
                            Edit Order Information
                        </button>

                    </div>


            </div>

        </React.Fragment>
    );
};

export default ViewOrderInfo;