import Server from "../apis/LocalServer";
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
    FETCH_OPTIONS, FETCH_REQUEST
} from "./types";
import _ from 'lodash';
import history from "../base/history";


export const fetchProductThenInitOptions = (id) => async dispatch => {

    const response = await fetchOneProduct(id);
    dispatch({type: FETCH_PRODUCT, payload: response.data});
    dispatch({
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