import {LOGIN,LOGOUT} from "../actions/loginAction";

const authReducer = (state={},action)=>{

    switch(action.type){
        case LOGIN:
            return {
                uid:action.uid,
                token:action.token
            }
        case LOGOUT:
            return {}

        default:
            return state
    }
}

export default authReducer;
