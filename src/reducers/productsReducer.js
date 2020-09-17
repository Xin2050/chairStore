import _ from 'lodash';
import {FETCH_PRODUCTS} from "../actions/types";

export default (state={},action)=>{
    switch (action.type){
        case FETCH_PRODUCTS:
            return {...state,..._.mapKeys(action.payload.data,'id')}
        default:
            return state;
    }
}