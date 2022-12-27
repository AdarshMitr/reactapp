import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export default class LifeCycleA extends Component {
constructor(props) {
  super(props)

  this.state = {
     name:'Adarsh'
  }
  console.log("LifeCycleA: Constructor");
}

static getDerivedStateFromProps(props,state){
  console.log("LifeCycleA: getDerivedStateFromProps");
  return null;  
}

componentDidMount(){
    console.log("LifeCycleA: ComponentDidMount");  
}

  render() {
    console.log("LifeCycleA: Render");
    return (
      <div>
LifeCycleA

<LifeCycleB></LifeCycleB>
      </div>
    )
  }
}
