import {AUTH_ERROR, AUTH_USER, CHECK_EMAIL} from "../actions/types";

const auth_init = {
    authorization:"",
    errorMessage:""
}
export default(state=auth_init,action)=>{

    switch (action.type){
        case AUTH_ERROR:
            return {...state,authorization:'',errorMessage: action.payload}
        case AUTH_USER:
            return {...state,authorization: action.payload}
        case CHECK_EMAIL:
            return {...state,checkEmail:action.payload}
        default:
            return state;
    }
}