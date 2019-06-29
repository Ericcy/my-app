// 新建 store
import { createStore } from 'redux'

// reducer 简介
// 根据老的state和action , 生成新的state
function counter (state=0,action){
    switch(action.type){
        case '加人':
            return state+1;
        case '减人':
            return state-1;
        default:
            return 10;
    }
}

const store = createStore(counter)

const initStore = store.getState()
console.log(initStore)
function listener(){
    const current = store.getState()
    console.log(`当前有${current}人`)
}
store.subscribe(listener)

// 派发事件
store.dispatch({type:'加人'})
console.log(store.getState())