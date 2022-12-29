import React ,{useState,useEffect}from 'react'

export default function HookCounter() {

const [channelname,setname]= useState('AdarshMitr');
const [count,setcount]= useState('Subscriber');
const [counter,setcounter]= useState(0);
const [counter1,setcounter1]= useState(0);
//  const name= channelname[0];
//  const setname=channelname[1];
const stateHandler=()=>{
    setname('It  \'s  a youtube channel')
    setcount('108000 Subscribers')
}

const Increment=()=>{
setcounter(counter +1)
}

const Decrement=()=>{
    setcounter1(counter1 -1)
}

const Incremented=()=>{
    for (let i=0;i<10;i++){
        setcounter(preCount =>preCount+1)
    }
}

useEffect(()=>{
    console.log("Adarsh Kumar Patel");
}    )

  return (
    <div>
{channelname}
<br></br>
{count}
<br></br>
<button onClick={stateHandler}> Click Here</button>

<button onClick={Increment}> Increment {counter}</button>
<button onClick={Decrement}> Decrement {counter1}</button>
<button onClick={Incremented}> Incremented by 10- {counter}</button>
    </div>
  )
}
