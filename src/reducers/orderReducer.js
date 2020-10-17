
import {CREATE_ORDER, ORDER_PAYED} from "../actions/types";

const init_state = {done: false, rs: false, data: null, message: ''}

export default (state = init_state, action) => {
    switch (action.type) {
        case 'LOAD_FROM_LOCAL':
            action.payload = JSON.parse(localStorage.getItem("order"));
            const pay = JSON.parse(localStorage.getItem("pay"));

            return {
                ...state,
                done: true,
                rs: action.payload.rs,
                data: action.payload.data,
                payment:pay,
                message: action.payload.message
            }

        case CREATE_ORDER:
            localStorage.setItem("order", JSON.stringify(action.payload));
            return {
                ...state,
                done: true,
                rs: action.payload.rs,
                data: action.payload.data,
                message: action.payload.message
            }
        case ORDER_PAYED:
            localStorage.setItem("pay", JSON.stringify(action.payload));
            return {
                ...state,payment:action.payload
            }
        default:
            return state;
    }

}