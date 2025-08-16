import React,{memo} from "react";
const ChildrenComponent=({counter})=>{
    console.log("childrencomponent Renndered")
    return(
        <div>Children Text{counter}</div>
    )
}
export default memo(ChildrenComponent);