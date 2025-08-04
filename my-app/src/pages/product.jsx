import react, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
const Product=()=>{
    const {productID} = useParams()  
    console.log(productID,"productId")
    
    // useEffect(() =>{
    //     if(productId){

    //     }
    // },[productID])
    return(
        <div>Product -{productID}</div>
    )
}
export default Product;