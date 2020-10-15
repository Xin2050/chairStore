import {AUTH_CHECK, AUTH_ERROR, AUTH_USER, CHECK_EMAIL, SIGN_OUT} from "../actions/types";

const auth_init = {
    authorization:"",
    errorMessage:""
}
export default(state=auth_init,action)=>{

    switch (action.type){
        case AUTH_ERROR:
            return {...state,authorization:'',errorMessage: action.payload}
        case AUTH_USER:
            return {...state,authorization: action.payload.token,user:action.payload.user,checkEmail: ''}
        case CHECK_EMAIL:
            return {...state,checkEmail:action.payload}
        case AUTH_CHECK:
            if(action.payload) {
                return {...state, user: action.payload.user, authorization: action.payload.token}
            }else{
                return {...state}
            }
        case SIGN_OUT:
            return auth_init;
        default:
            return state;
    }
}