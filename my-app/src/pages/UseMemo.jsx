import React from 'react'
import  {use,useMemo, useState } from "react";
const UseMemo=()=>{
    const [counter, setCounter]=React.useState(1);
    console.log("Rerendering use-memo component");
    const [counter2, setCounter2]=useState(2);
    // const result= heavycalculation(counter) ;
     const result= useMemo(()=>heavycalculation(counter),[counter]) ;
    return(
        <div>
            <h1>result:{result}</h1>
            <h1>counter:{counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
            <h1>counter2: {counter2}</h1>
             <button onClick={()=>setCounter2(counter2+1)}>Increment counter2</button>
        </div>
    )
}
const heavycalculation=(num)=>{
     console.log("calculating heavy calculation");
    let output=0;
    for(var i=0; i<1000000000; i++ ){
        output+=i;
    }
    return output+num; 
}
export default UseMemo;