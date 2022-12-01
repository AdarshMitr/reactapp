import React from "react";


class Channel extends React.Component
{
    constructor(){
        super();
        this.state={
            msg:'AdarshMitr is a Youtube Channel'
        }
    }

    subscribe(){
      this.setState({
        msg:'Thanks for subscribing our youtube channel.'
      })  
    }

  render(){
    return(
        <>
        <h1>{this.state.msg}</h1>
        <button onClick={()=>{this.subscribe()}}>Subscribe</button>
        </>
        
    )
  }
}

export default Channel;