//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import Header from './components/Header';
import {Header}
from './components/Header';

import {Header2} from './components/Header';

function App() {
  return (
    <div className="App">
    <Header name='Anuj'/>
    <Header2 name='Lallu'/>
    <Header name='Raju'/>
    <Header name='Mohit'/>
    </div>
  );
}



export default App;
