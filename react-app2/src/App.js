import React, { Component } from 'react';
import store from './components/stroe';
import {add,add1} from './components/action';
import {connect} from 'react-redux'

class App extends Component {
  constructor(params){
    super(params);
   
  }


render() {
    return (
      <div >
      首页
      {this.props.num1}
      <button onClick={()=>{
        store.dispatch(add(1));
      }}>+1</button>
      {this.props.num2}
      <button onClick={()=>{
        store.dispatch(add1(2));
      }}>+2</button>
      </div>
      
    );
  }
}
let dos=(state)=>{
return{
  num1:state.count,
  num2:state.sum
}
}
export default connect(dos)(App)
