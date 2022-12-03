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

    //list in react
    
    const numbers=[3,4,5,6];
    const newNumbers=numbers.map(function(numbers){
      console.log(numbers);
      return <li>{numbers}</li>
    });

    return (
      <>
        <button onClick={this.changeEvent}>Click Me too</button>
        {this.props.roll}

        <ul>{newNumbers}</ul>

      </>

    
    )
  }
}

export default CfunctionClick;