import React from 'react';

//---functional component---

export const Header=(props)=>{
    console.log(props);

return (
<> <h1>Hello {props.name} 
{props.last}</h1>
{props.children}
</>
)
 }   

//----Class Component----

 export class Header2 extends React.Component
{
  render(){
    return(
        <h1>Hello (Class component) {this.props.name}.</h1>
    )
  }
}



//export default Header;