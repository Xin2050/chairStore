import _ from 'lodash';
import {FETCH_PRODUCT, FETCH_PRODUCTS, SORT_PRODUCTS} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {...state, ..._.mapKeys(action.payload.data, 'id')}
        case FETCH_PRODUCT:

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