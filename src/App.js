import React from 'react'
class App extends React.Component{
  // constructor(){
  //   super()
  // }

  render(){
    const store = this.props.store
    const num = store.getState()
    const addPeople = this.props.addPeople
    const removePeople = this.props.removePeople
    const addPeopleAsync = this.props.addPeopleAsync
    return <div>
      人数：{num}
      <button type="button" onClick={()=> store.dispatch(addPeople())}>加人</button>
      <button type="button" onClick={()=> store.dispatch(removePeople())}>减人</button>
      <button type="button" onClick={()=> store.dispatch(addPeopleAsync())}>异步加人</button>
    </div>
  }
}

export default App