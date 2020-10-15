
import {CREATE_ORDER} from "../actions/types";

const init_state = {done: false, rs: false, data: null, message: ''}

export default (state = init_state, action) => {
    switch (action.type) {
        case 'LOAD_FROM_LOCAL':
            action.payload = JSON.parse(localStorage.getItem("order"));
            return {
                ...state,
                done: true,
                rs: action.payload.rs,
                data: action.payload.data,
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

        default:
            return state;
    }

}