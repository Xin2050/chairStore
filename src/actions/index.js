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

export const fetchProductThenInitOptions=(id)=> async distpatch=>{

    const response = await fetchOneProduct(id);
    distpatch({type: FETCH_PRODUCT, payload: response.data});
    distpatch({type:OPTIONS_INIT,payload:{
            id:response.data.data.id,
            price:response.data.data.price,
            profileCategories:response.data.data.profileCategories
    }});
}




export const optionsChange = (productId,categoryId,option)=>{
    const {id,price} = option;
    return {type:OPTIONS_CHANGE,payload:{productId,categoryId,itemId:id,price}}
}


export const fetchProducts = () => async distpath => {
    const response = await Mark2Win.get('/product');
    distpath({type: FETCH_PRODUCTS, payload: response.data});
}
export const sortProducts = (which, how)=>{
    return {type:SORT_PRODUCTS, payload:{which,how}}
}

const fetchOneProduct= async(id)=>{
    const response = await Mark2Win.get(`/product/${id}`);

    return response;
}

export const fetchProduct = (id) => async distpath => {

    const response = await fetchOneProduct(id)
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