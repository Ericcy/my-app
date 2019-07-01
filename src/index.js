import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom'

import App from './container/home/app'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import reducer from './reducer'
import './config'

const reduxDevtools = window.devToolsExtension?window.devToolsExtension():()=>{}

const store = createStore(reducer,compose(applyMiddleware(thunk),reduxDevtools))



// function render (){
//     ReactDom.render(<App store={store} addPeople={addPeople} removePeople={removePeople} addPeopleAsync={addPeopleAsync}/>, document.getElementById('root'))
// }

// render()

// store.subscribe(render)


ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <AuthRoute></AuthRoute>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/home" component={App}></Route>
        </BrowserRouter>
</Provider>, document.getElementById('root'))