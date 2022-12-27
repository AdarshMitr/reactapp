import React, { Component } from 'react'

export default class LifeCycleB extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           name:'Adarsh'
        }
        console.log("LifeCycleB: Constructor");
      }
      
      static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB: getDerivedStateFromProps");
        return null;  
      }
      
      componentDidMount(){
          console.log("LifeCycleB: ComponentDidMount");  
      }
      
        render() {
          console.log("LifeCycleB: Render");
          return (
            <div>
      LifeCycleB
            </div>
          )
        }
      }

  

