import React from 'react';

export const Header=()=>{

    return <h1>Hello Functional component</h1>
}


 export class Header2 extends React.Component
{
  render(){
    return(
      
        <h1>Hello Class component.</h1>
      
    )
  }
}

//export default Header;