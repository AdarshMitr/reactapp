import React from 'react';

function FunctionClick() {


    function changeEvent(e){
      e.preventDefault();
        console.log('Hello Event Handling...')
    }
    
  return (
   <div>
         <a href='https://google.com' onClick={changeEvent}>Click Me</a>
    </div>
  )
}

export default FunctionClick

//Event Handling should be function, not the function call.