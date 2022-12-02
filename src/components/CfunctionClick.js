import React, { Component } from 'react'

export class CfunctionClick extends Component {

    constructor(props){
        super(props);

       // this.changeEvent=this.changeEvent.bind(this);
//we can simply use arrow function  instead of 'bind' in 'changeEvent function' in order to access 'this'.

        this.state={
            course:'B.Tech',
            roll: this.props.roll
        }
    }

changeEvent=()=>{

    this.setState({
        course:'M.Tech'
    })
    console.log('Hello Adarsh',this.props.roll)
}

  render() {
    return (
      <div>
        <button onClick={this.changeEvent}>Click Me too</button>
        {this.props.roll}
      </div>
    )
  }
}

export default CfunctionClick