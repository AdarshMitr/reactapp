import React ,{useState}from 'react'

export default function HookCounter() {

const [channelname,setname]= useState('AdarshMitr');
const [count,setcount]= useState('Subscriber');

//  const name= channelname[0];
//  const setname=channelname[1];
const stateHandler=()=>{
    setname('It  \'s  a youtube channel')
    setcount('108000 Subscribers')
}
    
  return (
    <div>
{channelname}
<br></br>
{count}
<br></br>
<button onClick={stateHandler}> Click Here</button>
    </div>
  )
}
