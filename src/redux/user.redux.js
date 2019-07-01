import axios from 'axios'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERR_MSG = 'ERR_MSG'

const initState = {
    user: '',
    msg: '',
    isAuth: false
}

// reducer
export function user (state=initState,action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return { ...state, msg: '', isAuth: true, ...action.payload }
            break;
        case ERR_MSG:
            return { ...state, msg: action.msg, isAuth: false }
            break;
        default:
            return state
            break;
    }
}

function errMsg(msg){
    return {msg,type:ERR_MSG}
}
function registerSuccess(data){
    return {type:REGISTER_SUCCESS, payload: data}
}
export function register ({user, pwd, repeatPwd }) {
    if(!user||!pwd||!repeatPwd){
        return errMsg('用户名密码必须输入')
    }
    if(pwd !== repeatPwd){
        return errMsg('输入的密码与确认密码不符')
    }
    return dispatch => {
        axios.post('/user/register',{user,pwd})
        .then(res=>{
            if(res.status == 200 && res.data.code == 0){
                dispatch(registerSuccess({user,pwd}))
            }else{
                dispatch(errMsg(res.data.msg))
            }
        })
    }
}