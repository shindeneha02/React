import  { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Login from './pages/login';
import UseStatePage from "./pages/use-state";
import UseEffectPage from "./pages/use-effect";
import UseParamsPage from "./pages/use-params";
import Product from './pages/product';
import StyledComponent from './pages/StyledComponent';
import CreatFruit from './pages/CreateFruit';
import Greeting from './pages/Greeting';
import TooDoList from './pages/TooDoList';
import DynamicStyles from './pages/DynamicStyles';
import NotFound from './pages/NotFound';
import FakeStore from './pages/FakeStore';
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import {CartProvider} from "./context/CartContext"

function App() {
  const [users, setUsers] = useState(["Dhoni", "Rohit", "Virat"]);
  const [cart, setCart] = useState([]); // ✅ cart state

  // Function to add product to cart
const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      // check if product already in cart
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
         }
      return [...prevCart, { ...product, quantity }];
    });
  };

  return (
    <CartProvider>
    <div>
      {/* Navbar with cart count */}
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/use-state" element={<UseStatePage />} />
        <Route path="/use-effect" element={<UseEffectPage />} />
        <Route path="/use-params" element={<UseParamsPage />} />
        <Route path="/product-example/:productID" element={<Product users={users} setUsers={setUsers} />} />    
        <Route path="/styled-component" element={<StyledComponent />} />        
        <Route path="/create-fruit" element={<CreatFruit />} />
        <Route path="/greeting" element={<Greeting name="Awdiz" isLoggedIn={false} />} />
        <Route path="/to-do-list" element={<TooDoList />} />
        <Route path="/dynamic-styles" element={<DynamicStyles />} />
        <Route path="/fakestore" element={<FakeStore />} />
       
        
        {/* Fake Store product details */}
        <Route path="/single-product/:productId" element={<SingleProduct/>} />

        {/* Cart page */}
        <Route path="/cart" element={<Cart />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </CartProvider>
  );
}

export default App;
