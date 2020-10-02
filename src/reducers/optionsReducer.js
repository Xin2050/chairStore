import _ from 'lodash'
import {OPTIONS_CHANGE, OPTIONS_INIT} from "../actions/types";


export default (state={},action)=>{

    switch (action.type){
        case OPTIONS_INIT:
            const newoptions = {...state};
            if(_.findIndex(newoptions,{id:action.payload})===-1){
                _.set(newoptions,[action.payload.id],
                    {id:action.payload.id,
                            price:+action.payload.price,
                            options:{},
                            optionsTotal:0,
                            total:+action.payload.price
                            })
            }
            return newoptions;
        case OPTIONS_CHANGE:
            return  _.chain(state)
                .cloneDeep()
                .set([action.payload.id,'options',action.payload.optionsid],
                    {
                        id:action.payload.optionsid,
                        price:action.payload.price
                    })
                .value()
            //return state;

        default:
            return state;
    }
}