import React from 'react';

//---functional component---

export const Header=(props)=>{
   
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

  state={
    users:[
      {id:1,name:'ullu',class:"A"},
      {id:2,name:'lallu',class:"B"},   
      {id:3,name:'halla',class:"C"},
    ]
  }
  render(){
   
const users= this.state.users.map(user=>{
  return(
<h3>{user.id}:
  {user.name}  from class-
  {user.class}</h3>
  )
  
})

    return(
      <div><h1>Hello (Class component) {this.props.name}.</h1>
<h2>{users}</h2>
      </div>
        
    )
  }
}



//export default Header;