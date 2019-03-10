import React, { Component } from 'react';
import Home from './components/Home.js';
import A    from './components/A.js';
import B from './components/B.js';
import C from './components/C.js';
import D from './components/D.js';

import { BrowserRouter as Router, Route, Link,Switch,Redirect} from 'react-router-dom';

class App extends Component{
  constructor(params){
    super(params);
    this.state={

    }
  }
  render(){
    return(
    <div>
        <Router>
        <div>
          <Link to='/'>主页</Link> |
          <Link to='/a/1'>A</Link> |
          <Link to='/b'>B</Link> |
          <Link to='/c'>C</Link> |
          <Link to='/d'>D</Link> |

        <Route  exact path='/' component={Home}></Route>
        <Route path='/a/:id' component={A}></Route>
        <Route path='/b' component={B}></Route>
        <Route path='/c' component={C}></Route>
        <Route path='/d' children={D}></Route>

        {/* <Switch>

        <Route path='/' component={Home}></Route>
        <Route path='/a' component={A}></Route>
        <Route path='/b' component={B}></Route>
        <Route path='/c' component={C}></Route>
        <Route path='/d' children={D}></Route>



        </Switch> */}



      </div>    
      </Router>
      </div>)
  }

}



export default App;
