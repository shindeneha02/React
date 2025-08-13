import { useNavigate } from "react-router-dom";

const Navbar= () =>{
    const router = useNavigate();
    function redirecttoLogin() {
        router("/login");
    }
    return (
    <div style={{display :"flex",justifyContent:"center"}}>
        <button onClick={()=>router("/profile")}>Profile</button>
        <button onClick={()=>router("/")}>Home</button>
        <button onClick={()=>router("/register")}>Register</button>
        <button onClick={redirecttoLogin}>Login</button>
         <button onClick={()=>router("/Cart")}>MyCart</button>
         <button onClick={()=>router("/FakeStore")}>Store</button>
        
               
    </div>
    );
};

export default Navbar;