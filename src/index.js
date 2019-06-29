import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom'

import App from './App'
import List from './List'
import Detail from './Detail'
import { counter } from './index.redux'


const reduxDevtools = window.devToolsExtension?window.devToolsExtension():()=>{}

const store = createStore(counter,compose(applyMiddleware(thunk),reduxDevtools))



// function render (){
//     ReactDom.render(<App store={store} addPeople={addPeople} removePeople={removePeople} addPeopleAsync={addPeopleAsync}/>, document.getElementById('root'))
// }

// render()

// store.subscribe(render)
function test(props){
    console.log(props)
    return (<div>
        <h2>测试组件</h2>
        <p>test:{props.history.location.pathname}</p>
    </div>)
}

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <ul>
                <li>
                    <Link to='/'>首页</Link>
                </li>
                <li>
                    <Link to='/detail'>detail</Link>
                </li>
                <li>
                    <Link to='/list'>list</Link>
                </li>
            </ul>
            <Redirect to='/list'></Redirect>
            <Switch>
                <Route path='/' exact component={App}></Route>
                <Route path='/:pp' component={test}></Route>
                <Route path='/list' component={List}></Route>
                <Route path='/detail' component={Detail}></Route>
            </Switch>
        </BrowserRouter>
</Provider>, document.getElementById('root'))