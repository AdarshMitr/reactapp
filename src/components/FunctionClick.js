import React from 'react';

function FunctionClick() {


    function changeEvent(e){
      e.preventDefault();
        console.log('Hello Event Handling...')
    }
    
  return (
   
    <React.Fragment>
    <a href='https://google.com' onClick={changeEvent}>
      Click Me</a>
    
         

         <h1>Hello Brother</h1>
         </React.Fragment>
  )
}

export default FunctionClick

//Event Handling should be function, not the function call.

//Fragment is used to group multiple elements without creating extra node.<React.fragment> ------</React.Fragment> or<>--- </>