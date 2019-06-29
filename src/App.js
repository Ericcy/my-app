import React from 'react'
import { connect } from 'react-redux'
import {addPeople, removePeople, addPeopleAsync} from './index.redux'
class App extends React.Component{
  render(){
    return <div>
      人数：{this.props.num}
      <button type="button" onClick={this.props.addPeople}>加人</button>
      <button type="button" onClick={this.props.removePeople}>减人</button>
      <button type="button" onClick={this.props.addPeopleAsync}>异步加人</button>
    </div>
  }
}
const mapStatetoProps = (state)=>{
  return {num:state}
}
const actionCreators = { addPeople, removePeople, addPeopleAsync}

App = connect(mapStatetoProps,actionCreators)(App)
export default App