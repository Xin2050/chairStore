//import Server from "../apis/LocalServer";
import Server from '../apis/Mark2Win';


import {
    CART_ADD,
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
    AUTH_ERROR, SIGN_OUT,
    CREATE_ORDER, ORDER_PAYED, CART_CLEAR
} from "./types";
import _ from 'lodash';
import history from "../base/history";


export const authCheck = (callback) => async dispatch => {
    // Actually should be a API to support this method,
    // for now does not have it. So, I don't know if your token is real
    // or whatever I loaded from the local storage that it is accurate user information.
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
        dispatch({type: AUTH_CHECK, payload: {token, user}})
    } else {
        callback();

    }

}


export const signIn = (formValues, callback) => async dispatch => {
    try {
        const response = await Server.post('/auth/login', formValues);
        setTimeout(() => {
            dispatch({type: AUTH_USER, payload: response.data.data});
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.data.user))
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

//@Deprecated because server not support this
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

export const signOut = () => dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({type: SIGN_OUT});
}

//@Deprecated because server not support this
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
export const createOrder = (token, cart, next,error) => async dispatch => {
    try{
        const response = await Server.post("/order",__prepareCreateOrderData(cart),{
            headers:{
                "Authorization":"bearer ".concat(token)
            }
        })
        dispatch({type: CREATE_ORDER, payload: {rs:true,data:response.data.data,message:""}});
        next();
    }catch (e){
        dispatch({type: CREATE_ORDER, payload:{rs:false,data:null,message:"Create Order Error,Please try again."}})
        error(e.message);
    }
}

const __prepareCreateOrderData = (cart) => {

    return {
        taxRate: 1.13,
        isActive: true,
        isDelete: false,
        orderItems: _.values(cart.data).map((product) => {
            return {
                quantity: product.quantity,
                product: product.id,
                profileItems: _.values(product.options).map(item => item.itemId)
            }
        })
    }

}
export const addToCart = (data) => {
    return {
        type: CART_ADD,
        payload: data
    }
}

export const loadOrder=()=>async dispatch=>{
    dispatch({type:'LOAD_FROM_LOCAL'});
}

export const actPayment  = (res, order, notes) => async dispatch => {

    let data = {};
    console.log('actPayment--->>>>>>>>>', res);
    console.log('res.iddddddd ----->', res.id);

    data.order = order;
    data.gateway = res.payer.payment_method;
    data.transactionId = res.id;
    data.status = res.state;
    data.amount = res.transactions.map(a => a.amount.total);
    data.notes = notes;

    //let result = JSON.stringify(res);

    console.log('order, gateway, transactionId, state, amount, notes  ====>>>>>>', data);

    // dispatch({type: PAYMENT_CREATE, payload: data});

    const token  = localStorage.getItem('token');
    const request = await Server.post('/payment', data, {headers :{'Authorization':`Bear ${token}`}})
    dispatch({type: ORDER_PAYED, payload: request.data});
    dispatch({type:CART_CLEAR})

    history.push('/cart/done');



};