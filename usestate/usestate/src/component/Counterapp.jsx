import React from 'react'
import { useState } from 'react'

const Counterapp = () => {
    const[count , setcount]=useState(0);
    function inc(){
        setcount(count + 1);
    }
    function dec(){
      
        setcount(count+1);
        if(count>10){
            setcount(10);
        }

        setcount(count - 1);
         if(count < 0)
            console.log("count is less than 0");
       
    }
  return (
    <div style={{border: '2px solid red', width: '300px', height: '300px'}}>
      <h2>Counter App</h2>
      <button onClick={inc} > add +</button>
      <br/>
      <span>{count}</span>
      <br/>
      <button onClick={dec} > sub -</button>
    </div>
  )
}

export default Counterapp
