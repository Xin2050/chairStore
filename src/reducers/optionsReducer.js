import _ from 'lodash'
import {OPTIONS_CHANGE, OPTIONS_INIT} from "../actions/types";


export default (state={},action)=>{

    switch (action.type){
        case OPTIONS_INIT:
            const newoptions = {...state};
            if(_.findIndex({id:action.payload})===-1){
                return _.set(newoptions,[action.payload.id],
                    {id:action.payload.id,
                            price:+action.payload.price,
                            options:[],
                            optionsTotal:0,
                            total:+action.payload.price
                            })
            }
            return newoptions;
        case OPTIONS_CHANGE:
            const newstate = _.cloneDeep(state);

            return state;
        default:
            return state;
    }
}