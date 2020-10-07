import _ from 'lodash';
import {FETCH_PRODUCT, FETCH_PRODUCTS, FETCH_REQUEST, SORT_PRODUCTS} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {...state}
        case FETCH_PRODUCTS:

            return {...state, data:{..._.mapKeys(action.payload.data, 'id')}}
        case FETCH_PRODUCT:
            if(action.payload.error){
                return {...state,error:action.payload.error};
            }
            return {...state, [action.payload.data.id]: action.payload.data}
        case SORT_PRODUCTS:
            const sortedState = {
                ...state, sort: {
                    which: action.payload.which,
                    how: action.payload.how ? 'asc' : 'desc'
                }
            }
            return sortedState;
        default:
            return state;
    }
}