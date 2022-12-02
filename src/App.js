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
function App() {
  return (
    <div className="App">
       
    <Header name='Anuj'/>
    <Header2 name='Lallu'/>
   
    <Header name='Raju' last='Patel'>
      <a href='#'>Click Me</a>
      </Header>
    <Header name='Mohit'><p> He is a Gentle person.</p> 
     </Header>
     <Channel/>
     <FunctionClick/>
     <CfunctionClick roll='22'/>
    </div>
  );
}



export default App;
