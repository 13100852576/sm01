import React, { Component } from 'react';
import axios from 'axios';
import '../mock/mock'

export default class Home extends Component {
  render() {
    return (
      <div>
          home页
          {/* {this.props.match.params.id} */}
      </div>
    )
  }
  componentDidMount(){
    axios.get('http://www.baidu.com').then((result)=>{
                console.log(result);
  })
  }
}
