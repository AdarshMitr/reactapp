import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter:0
      }
    }

    buttonHandler=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }


  render() {
    return (
      <div>
        <button onClick={this.buttonHandler}>Counter{this.state.counter}</button>
      </div>
    )
  }
}
