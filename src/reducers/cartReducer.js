import {CART_ADD, CART_CHECKOUT, CART_CLEAR, CART_DELETE, CART_LIST, CART_UPDATE} from "../actions/types";
import _ from 'lodash';

export default (state = {}, action) => {
    let newstate;
    switch (action.type) {
        case CART_LIST:

            return {...state, ...action.payload};

        case CART_ADD: //ok
            newstate = {...state};
            if(_.isEmpty(newstate.data)){
                newstate={data:[],subtotal:0}
                __addProduct(newstate,action.payload);
            }else{
                const index = __findIndex(newstate,action.payload)
                if (index>-1) {
                    newstate.data[index].quantity +=1;
                    newstate.data[index].subtotal = newstate.data[index].quantity * newstate.data[index].price;
                }else {
                    __addProduct(newstate,action.payload);
                }
            }
            __updateTotal(newstate);
            __saveCart(newstate);
            return newstate;
        case CART_DELETE:

            const deletedstate = {...state};
            deletedstate.data.splice(action.payload.index,1);
            __updateTotal(deletedstate);
            __saveCart(deletedstate);
            return deletedstate;
        case CART_UPDATE:
            const updatedState = _.chain(state)
                .cloneDeep()
                .set(`data[${action.payload.index}].quantity`, Number(action.payload.quantity))
                .set(['data',action.payload.index,'subtotal'],
                    Number(action.payload.quantity)*state.data[action.payload.index].price)
                .value()
            __updateTotal(updatedState);
            __saveCart(updatedState);
            return updatedState;
        case CART_CHECKOUT://todo have to fix
            const checkoutstate = {...state, ...action.payload};
            __saveCart(checkoutstate);
            return checkoutstate;
        case CART_CLEAR:
            newstate  = {data:[],subtotal:0};
            __saveCart(newstate);
            return
        default:
            return state;
    }
}
const __saveCart = async (cart) => {
    window.localStorage.setItem('chairstore_cart', JSON.stringify(cart));
}
const __updateTotal = (newstate)=>{

    newstate.subtotal = newstate.data.reduce((n,m)=>{
       return n + m.subtotal
    },0);

}
const __findIndex = (state,payload)=>{
    return _.findIndex(state.data, {
        'id': payload.id,
        'options': payload.options
    });
}
const __addProduct = (newstate,payload)=>{
    const newp ={
        id:payload.id,
        options:payload.options,
        price:payload.total,
        quantity:1,
        subtotal:payload.total
    }
    newstate.data.push(newp);
}