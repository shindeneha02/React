import React from 'react'
import {useState} from "react";
const UseState = () =>{
    // const counter = 234;
    const [counter,  setCounter] = useState(1)
    const [greeting, setgreeting]= useState("Hello World");
    console.log(counter,"counter");

    //on component load on browser-render
    // when any state changes - render 
    const increment = () => {
        if(counter<10){
        setCounter(counter+1)
        }
    }
    const decrement =() =>{
        if(counter>1){
        setCounter(counter-1);
        }
    }
    const reset =() => {
        setCounter(1)

    }
    return(
    <div>
        <h6></h6>
        <h2>{greeting}</h2>
        <button onClick={()=>setgreeting("welcome.")}>change greeting</button>
        <h1> Counter : {counter}</h1>
        <button onClick={increment}> Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
    )
}
export default UseState;