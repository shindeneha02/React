import React,{useState} from "react";
const CreatFruit=()=>{
    const [ fruits, setFruits]=useState(["Apple","Banana","Cherry"])
    const[newFruit, setNewFruit]=useState("");
    const handleInputChange = (event) => {
        setNewFruit(event.target.value)
    };
    const handleSubmit = () => { 
        if(newFruit.length > 0) {

             setFruits([ ...fruits, newFruit]);
             setNewFruit("");
        }  
        else
        {
            alert("please enter a fruit name before adding")
        }
    }
    return(
        <div>
            <h2>Fruits</h2>
            {fruits.map((fruit,index)=>( 
                <div>
                    {index + 1}. {fruit}
                </div>
                ))}
                <input  value={newFruit} onChange={handleInputChange}/>
                <br/>
                <button onClick={handleSubmit}>Add  {newFruit}</button>
        </div>
    )
}
export default CreatFruit;