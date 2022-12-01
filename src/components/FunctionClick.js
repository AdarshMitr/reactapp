import React from 'react';

function FunctionClick() {


    function changeEvent(){
        console.log('Hello Event Handling...')
    }
  return (
    <div>
        <button onClick={changeEvent}>Click Me</button>
    </div>
  )
}

export default FunctionClick

//Event Handling should be function, not the function call.