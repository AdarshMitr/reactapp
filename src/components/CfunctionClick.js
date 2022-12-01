import React, { Component } from 'react'

export class CfunctionClick extends Component {

    constructor(){
        super();

       // this.changeEvent=this.changeEvent.bind(this);
//we can simply use arrow function  instead of 'bind' in 'changeEvent function' in order to access 'this'.

        this.state={
            course:'B.Tech'
        }
    }

changeEvent=()=>{

    this.setState({
        course:'M.Tech'
    })
    console.log('Hello Adarsh',this.state.course)
}

  render() {
    return (
      <div>
        <button onClick={this.changeEvent}>Click Me too</button>
        {this.state.course}
      </div>
    )
  }
}

export default CfunctionClick