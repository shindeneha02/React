import React from "react"
const UseRef=()=>{
    const inputref=React.useRef(1);
    const Increment=()=>{
        inputref.current=inputref.current+1;
        console.log(inputref.current,"inputRef.current")
    }
    console.log("rerendering...")
    return(
        <div>
            <h1>{inputref.current}</h1>
            <button onClick={Increment}>+</button>
        </div>
    )
}
export default UseRef;