import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

@withRouter
class AuthRoute extends React.Component{
    componentDidMount() {
        // 获取用户信息
        axios.get('/user/info').then((res)=>{
            if(res.status == 200){
                console.log(res.data)
                if(res.data.code == 0){
                    // 登陆成功的
                }else{
                    this.props.history.push('/login')
                }
            }
        })

    }
    render(){
        return null
    }
}

export default AuthRoute