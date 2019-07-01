import React from 'react';
import { List, Button, WingBlank, InputItem, WhiteSpace } from 'antd-mobile'
import { connect} from 'react-redux'
import { register } from '../../redux/user.redux'

import Logo from '../../component/logo/logo'
@connect(
    state=> state.user,
    { register }
)
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: '',
            pwd: '',
            repeatPwd: ''
        }
        this.register = this.register.bind(this)
    }
    handleChange(key,value){
        this.setState({
            [key]:value
        })
    }
    register(){
        this.props.register(this.state)
        console.log(this.state)
    }
    render(){
        return <div>
        <Logo />
        <List>
            {this.props.msg?<p>{this.props.msg}</p>:null}
            <InputItem
            onChange={v=>this.handleChange('user',v)}
            >用户名</InputItem>
            <WhiteSpace/>
            <InputItem type='password'
            onChange={v=>this.handleChange('pwd',v)}
            >密码</InputItem>
            <WhiteSpace/>
            <InputItem type='password'
            onChange={v=>this.handleChange('repeatPwd',v)}
            >确认密码</InputItem>
            <WhiteSpace/>
            <Button type="primary" onClick={this.register}>注册</Button>
        </List>
    </div>
    }
}

export default Register