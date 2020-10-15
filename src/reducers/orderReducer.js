import _ from 'lodash';
import {CREATE_ORDER} from "../actions/types";

const init_state = {done:false, rs:false,data:null,message:''}

export default(state=init_state, action)=>{
    switch(action.type){
        case CREATE_ORDER:
        return {...state,
            done:true,
            rs:action.payload.rs,
            data:action.payload.data,
            message:action.payload.message
        }
        default:
            return state;
    }

}