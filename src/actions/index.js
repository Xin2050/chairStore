import Server from "../apis/LocalServer";
//import Server from '../apis/Mark2Win';


import {
    CART_ADD,
    CART_CHECKOUT,
    CART_DELETE,
    CART_LIST,
    CART_UPDATE,
    FETCH_PRODUCT,
    FETCH_PRODUCTS,
    SORT_PRODUCTS,
    OPTIONS_CHANGE,
    OPTIONS_INIT,
    FETCH_OPTIONS, FETCH_REQUEST,
    AUTH_USER,
    AUTH_CHECK,
    AUTH_ERROR,SIGN_OUT
} from "./types";
import _ from 'lodash';
import history from "../base/history";

export const authCheck = (token,callback) => async dispatch => {
    if(!token.token){
        //console.log("empty");
        token.token = localStorage.getItem('token');
        if(!token.token){
            callback();
            dispatch({type:AUTH_CHECK,payload:null})
        }
    }
    try{
        const response = await Server.post('/authCheck', token);
        dispatch({type:AUTH_CHECK,payload:{token:token.token,user:response.data.user}})
    }catch (e){
        callback();
        dispatch({type:AUTH_CHECK,payload:null})
    }
}

export const signIn = (formValues, callback) => async dispatch => {
    try {
        const response = await Server.post('/signin', formValues);
        setTimeout(() => {
            dispatch({type: AUTH_USER, payload: response.data});
            localStorage.setItem('token', response.data.token);
            callback(true);
        }, 1000) ///this is for testing only
    } catch (e) {
        setTimeout(() => {
            console.log("Login Error!");
            callback(false);
            dispatch({
                type: AUTH_ERROR,
                payload: "Sorry, this does not match our records. Check your spelling and try again."
            })
        }, 1000);
    }
}

export const checkEmail = async (email, callback) => {

    try {

        const response = await Server.post('/check/email', email);
        setTimeout(() => {
            callback(response.data);
        }, 1000)
    } catch (e) {
        setTimeout(() => {
            callback({rs: false, message: e.message});
        }, 1000)
    }
}

export const signOut = () =>dispatch=>{
    localStorage.removeItem('token');
    dispatch ({type: SIGN_OUT});
}

export const signup = (formValues, callback) => async dispatch => {
    try {
        const response = await Server.post('/signup', formValues);
        setTimeout(() => {
            dispatch({type: AUTH_USER, payload: response.data});
            localStorage.setItem('token', response.data.token);
            callback({rs: true, message: "ok"});
        }, 1000) ///this is for testing only
    } catch (e) {
        setTimeout(() => {
            callback({rs: false, message: "Email is in Use. Please try another one!"});
            dispatch({
                type: AUTH_ERROR,
                payload: "Email is in Use. Please try another one!"
            })
        }, 1000);
    }


}

export const fetchProductThenInitOptions = (id) => async distpatch => {

    const response = await fetchOneProduct(id);
    distpatch({type: FETCH_PRODUCT, payload: response.data});
    distpatch({
        type: OPTIONS_INIT, payload: {
            id: response.data.data.id,
            price: response.data.data.price,
            profileCategories: response.data.data.profileCategories
        }
    });
}


export const optionsChange = (productId, categoryId, option) => {
    const {id, price} = option;
    return {type: OPTIONS_CHANGE, payload: {productId, categoryId, itemId: id, price}}
}


export const fetchProducts = () => async dispatch => {
    dispatch({type: FETCH_REQUEST});
    const response = await Server.get('/product');
    dispatch({type: FETCH_PRODUCTS, payload: response.data});
}


export const sortProducts = (which, how) => {
    return {type: SORT_PRODUCTS, payload: {which, how}}
}

const fetchOneProduct = async (id) => {
    const response = await Server.get(`/product/${id}`);
    return response;

}

export const fetchProduct = (id) => async dispatch => {

    const response = await fetchOneProduct(id)
    dispatch({type: FETCH_PRODUCT, payload: response.data});
}


export const fetchOptions = () => {
    return {type: FETCH_OPTIONS};
}

export const fetchCartListAndProducts = () => async (dispatch, getState) => {

    new Promise(
        (resolve) => {
            dispatch(fetchCartList())
            resolve("ok")
        }
    ).then((r) => {
        _.chain(getState().cart.data)
            .map("id")
            .uniq()
            .forEach(id => dispatch(fetchProduct(id)))
            .value();
    })

}
export const fetchCartList = () => async dispatch => {

    let cart = __loadCart();
    if (!cart) {
        cart = {data: [], subtotal: 0};
    }
    dispatch({type: CART_LIST, payload: cart})

}

const __loadCart = () => {
    return JSON.parse(window.localStorage.getItem('chairstore_cart'));
}

export const deleteFromCart = (index) => {
    return {type: CART_DELETE, payload: {index}}
}

export const editQuantity = (index, quantity) => {
    return {type: CART_UPDATE, payload: {index, quantity}}
}
export const cartCheckOut = formValues => async dispatch => {

    dispatch({type: CART_CHECKOUT, payload: {order: formValues}});
    history.push('/cart/vieworder')
}
export const addToCart = (data) => {
    return {
        type: CART_ADD,
        payload: data
    }
}