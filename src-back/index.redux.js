
const ADD_PEOPLE = '加人'
const REMOVE_PEOPLE = '减人'

// reducer 简介
// 根据老的state和action , 生成新的state
export function counter (state=0,action){
    switch(action.type){
        case ADD_PEOPLE:
            return state+1;
        case REMOVE_PEOPLE:
            return state-1;
        default:
            return 10;
    }
}

export function addPeople(){
    return {type: ADD_PEOPLE}
}
export function removePeople(){
    return {type: REMOVE_PEOPLE}
}
// 异步的方式
export function addPeopleAsync(){
    return dispatch=>{
        setTimeout(function(){
            dispatch(addPeople())
        },2000)
    }
}