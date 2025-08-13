import react, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
const Product=({users})=>{
    console.log(users,"kuchbhi")
    const {productID} = useParams()  
    console.log(productID,"productId")
    
    // useEffect(() =>{
    //     if(productId){

    //     }
    // },[productID]);
    return(
        <div>
            Product -{productID}
        
        <div>
            {true ?  (  
                 < div>{false ? <h1> Logged In 1</h1>: <h1>logged In 2</h1>}</div>
            ):(
                <h1>Please login</h1>
            )}
            </div>
        </div>
    );
};
export default Product;