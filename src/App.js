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
import Inline from './components/Inline';
 
import './appstyle.css';
import Style from './appstyle.module.css';
import Form from './components/Form';
import Routing from './components/Routing';
import LifeCycleA from './components/LifeCycleA';
import Product from './components/Product';

function App() {

  const numbers=[3,4,5,6];
  return (
    <div className="App">
       {/* <h1 className={Style.success}>Green</h1>
       <h1 className='error'>Error</h1> */}
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

     {/* <Stylesheet isvalue={false}></Stylesheet>
     <Inline></Inline> */}
     {/* <Form></Form> */}
     {/* <Routing> </Routing> */}
     {/* <LifeCycleA></LifeCycleA> */}
     <Product></Product>

     
    </div>
  );
}



export default App;
