import React from 'react';
import { List, Button, WingBlank, InputItem, WhiteSpace } from 'antd-mobile'
import Logo from '../../component/logo/logo'

class Login extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <Logo />
            <List>
                <InputItem>用户名</InputItem>
                {/* <WhiteSpace /> */}
                <InputItem>密码</InputItem>
            </List>
            <Button type="primary">登录</Button>
            <WhiteSpace />
            <Button type="primary" onClick={()=>{this.props.history.push('/register')}}>注册</Button>
        </div>
    }
}

export default Login