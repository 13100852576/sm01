import {createStore} from 'redux';
import reducer from './reducer';
var initialState={
    count:0,
    sum:0
}
const store=createStore(reducer,
initialState);
export default store;