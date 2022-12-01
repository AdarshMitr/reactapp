import React, { Component } from 'react'

export class CfunctionClick extends Component {

changeEvent(){
    console.log('Hello Adarsh')
}

  render() {
    return (
      <div>
        <button onClick={this.changeEvent}>Click Me too</button>
      </div>
    )
  }
}

export default CfunctionClick