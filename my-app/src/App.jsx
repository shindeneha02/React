import React from 'react'
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar"
import Home from "./pages/home"
import Profile from "./pages/profile";
import Register from "./pages/register";
import Login from './pages/login';
import UseState from "./pages/use-state";
import UseEffect from "./pages/use-effect";
import UseParams from "./pages/use-params";
import Product from './pages/product';
import { useState } from 'react';
import StyledComponent from './pages/StyledComponent';
import CreatFruit from './pages/CreateFruit';
import Greeting from './pages/Greeting';
import TooDoList from './pages/TooDoList';
function App() {
  const [users,setUsers]=useState(["Dhoni","Rohit","Virat"])
  return(
    <div>
      {/* <Home/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/use-state" element={<UseState/>}/>
        <Route path="/use-effect" element={<UseEffect/>}/>
        <Route path="/use-params" element={<UseParams/>}/>
        <Route path="/product/:productID" element={<Product users={users} setUsers={setUsers}/>}/>    
          <Route path="/styled-component" element={<StyledComponent/>}/>        
           <Route path="/create-fruit" element={<CreatFruit/>}/>
           <Route path="/greeting" element={<Greeting name="Awdiz" isLoggedIn={false}/>}/>
             <Route path="To-do-List" element={<TooDoList/>}/>
      </Routes>
    </div>
  );
}
export default App;
