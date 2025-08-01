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

function App() {
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
      </Routes>
    </div>
  );
}
export default App;
