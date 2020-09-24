import {CART_ADD, CART_CHECKOUT, CART_CLEAR, CART_DELETE, CART_LIST, CART_UPDATE} from "../actions/types";
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case CART_LIST:

            return {...state,...action.payload};

        case CART_ADD:
            if (state.data[action.payload.data.id]) {
                return _.chain(state)
                    .cloneDeep()
                    .update(`data.${action.payload.data.id}.quantity`,n=>n+1)
                    .value();
            }else{
                    const newp = _.chain(action.payload.data)
                        .set('quantity',1)
                        .update('price',parseFloat)
                        .value();
                    const newstate = _.chain(state)
                        .cloneDeep()
                        .set(`data.${action.payload.data.id}`,newp)
                        .value();
                    __saveCart(newstate);
                    return newstate;
            }

        case CART_DELETE:
            const deletedstate = _.omit(state, `data.${action.payload.id}`);
            __saveCart(deletedstate);
            return deletedstate;
        case CART_UPDATE:
            const updatedState = _.chain(state)
                .cloneDeep()
                .set(`data.${action.payload.id}.quantity`,Number(action.payload.quantity))
                .value()

            __saveCart(updatedState);
            return updatedState;
        case CART_CHECKOUT:
            const checkoutstate = {...state,...action.payload};
            __saveCart(checkoutstate);
            return checkoutstate;
        case CART_CLEAR:
            return _.omit(state, "data");
        default:
            return state;
    }
}
const __saveCart = async (cart) => {
    window.localStorage.setItem('chairstore_cart', JSON.stringify(cart));
}