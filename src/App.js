//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import Header from './components/Header';
import {Header}
from './components/Header';

import {Header2} from './components/Header';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CfunctionClick from './components/CfunctionClick';
import Stylesheet from './components/Stylesheet';

function App() {

  const numbers=[3,4,5,6];
  return (
    <div className="App">
       
    {/* <Header name='Anuj'/>
    <Header2 name='Lallu'/>
   
    <Header name='Raju' last='Patel'>
      <a href='https://google.in'>Click Me</a>
      </Header>
    <Header name='Mohit'><p> He is a Gentle person.</p> 
     </Header>
     <Channel/>
     <FunctionClick/>
     <CfunctionClick roll='22' numbers={numbers}/> */}

     <Stylesheet isvalue={false}></Stylesheet>
    </div>
  );
}



export default App;
