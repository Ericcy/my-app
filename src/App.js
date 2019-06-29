import React from 'react';
import { Button, WhiteSpace, List } from 'antd-mobile'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      list: ['kdfsk','坏水电费','是快捷的方式']
    }
  }
  componentWillMount(){
    console.log('组件家在前')
  }
  componentDidMount(){
    console.log('组件加载之后')
  }
  render(){
    console.log('组件加载中....')
    const boss = '你好'
    return <div>react demo{boss}
      <Button type="ghost">default</Button>
      <WhiteSpace></WhiteSpace>
      <List renderHeader={()=>'列表'}>
        {this.state.list.map(v=>{
          return <List.Item key={v}>{v}</List.Item>
        })}
      </List>
    </div>
  }
}

export default App