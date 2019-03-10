import {combineReducers} from 'redux';
// reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
let count = (state=5,action) =>{
    console.log('1111',state,action);
    switch (action.type){
        case 'ADD':
            return state + action.num;
        default:
            return state;
    }
};
let sum=(state=2,action)=>{
    console.log('2222',state,action);
    switch(action.type){
        case 'ADD1':
        return state+action.num;
        default:
        return state;
    }
}


export default combineReducers({
    count,sum
});

