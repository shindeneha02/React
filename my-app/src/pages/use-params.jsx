import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const UseParams=()=>{
    const router = useNavigate()
    const [tshirt, setTshirt]= useState([
        {
            id:1,
            name:"T-shirt 1", 
            price:100, 
            image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/66b22a9d56dc0e00b127b6f6/gorgeous-womens-oversized-tshirt-white-640x640.webp"
        },
        {
            id:2,
             name:"T-shirt 2", 
             price:350,
             image: "https://m.media-amazon.com/images/I/61WhEFgSP0L._SX679_.jpg"
        },
        {
            id:3, 
            name:"T-shirt 3", 
            price:475,
            image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id:4,
             name:"T-shirt 4", 
             price:849, 
             image: "https://genietravel.com/cdn/shop/files/27_3c730f45-6bb2-4b02-af90-b498336632dc_1200x1200_crop_center.jpg?v=1720518863"
        },
        {
            id:5, 
            name:"T-shirt 5", 
            price:999, 
            image: "https://azureprints.com/wp-content/uploads/2024/08/sipper-1.png"
        },
    ]);
    console.log(tshirt,"tshirt");
    return (
        
        <div style={{ 
            display: "flex",
            justifyContent: "center", 
            alignItems: "center",                         
         }}>
        {tshirt.map((product)=>( 
            <div 
            key={product.id}
            onClick={()=>router(`/product/${product.id}`)}
            style={{ width:"150", margin:"10px",textAlign:"center", border:" 1px solid black", cursor:"pointer"}}> 
                    <img style={{width : "200px",height:"250px"}} src= {product.image}/>
                <h3>Name: {product.name}</h3>
                 <h3>Price: {product.price}/-</h3>
            </div>
         ))}
         </div>
    ) 
};
export default UseParams; 