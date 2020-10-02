import Mark2Win from "../apis/Mark2Win";
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
    FETCH_OPTIONS
} from "./types";

import history from "../base/history";


export const optionsInit = (id,price)=>{
    return {type:OPTIONS_INIT,payload:{id,price}}
}

export const optionsChange = (productId,categoryId,optionId,price)=>{
    return {type:OPTIONS_CHANGE,payload:{productId,categoryId,optionId,price}}
}


export const fetchProducts = () => async distpath => {
    const response = await Mark2Win.get('/product');
    distpath({type: FETCH_PRODUCTS, payload: response.data});
}
export const sortProducts = (which, how)=>{
    return {type:SORT_PRODUCTS, payload:{which,how}}
}

export const fetchProduct = (id) => async distpath => {
    const response = await Mark2Win.get(`/product/${id}`);
    distpath({type: FETCH_PRODUCT, payload: response.data});
}
export const fetchOptions = ()=>{
    return {type:FETCH_OPTIONS};
}

export const fetchCartList = () => async distpath=>{
    let cart = __loadCart();

    if(!cart){
        cart = {data:{}};
    }
    distpath({type: CART_LIST,
        payload:cart})
}

const __loadCart=()=>{
    return JSON.parse(window.localStorage.getItem('chairstore_cart'));
}

export const deleteFromCart=(id)=>{
    return {type:CART_DELETE,payload:{id}}
}

export const editQuantity = (id,quantity)=>{
    return {type:CART_UPDATE,payload:{id,quantity}}
}
export const cartCheckOut = formValues=>async dispatch=>{

    dispatch({type:CART_CHECKOUT,payload:{order:formValues}});
    history.push('/cart/vieworder')
}
export const addToCart = (id, price) => {
    return {
        type: CART_ADD,
        payload: {
            data:{id, price}
        }
    }
}