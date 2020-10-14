
import {combineReducers} from 'redux'
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import {reducer as formReducer} from 'redux-form';
import optionsReducer from "./optionsReducer";
import authReducer from "./authReducer";


export default combineReducers({
    products:productsReducer,
    cart:cartReducer,
    form:formReducer,
    options:optionsReducer,
    auth:authReducer

})