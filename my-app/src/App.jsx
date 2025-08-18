import { useState, useEffect } from 'react';
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
import { CartProvider } from "./context/CartContext";
import UseMemo from './pages/UseMemo';
import UseCallback from './pages/UseCallback';
import UseRef from './pages/UseRef';
import UseReducer from "./pages/UseReducer";

// for react assessment (fixed order)
import Step1 from "./pages/assignment/Step1";
import Step2 from "./pages/assignment/Step2";
import Step3 from "./pages/assignment/Step3";

function App() {
  const [users, setUsers] = useState(["Dhoni", "Rohit", "Virat"]);
  const [cart, setCart] = useState([]); // ✅ cart state

  // ✅ Form data state for assignment
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  // ✅ Load from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("registrationData", JSON.stringify(formData));
  }, [formData]);

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Final submit
  const handleSubmit = () => {
    console.log("Final Submitted Data:", formData);
    alert(" Registration Successful!");
    localStorage.removeItem("registrationData");
  };

  // Function to add product to cart
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
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
          <Route
            path="/product-example/:productID"
            element={<Product users={users} setUsers={setUsers} />}
          />
          <Route path="/styled-component" element={<StyledComponent />} />
          <Route path="/create-fruit" element={<CreatFruit />} />
          <Route
            path="/greeting"
            element={<Greeting name="Awdiz" isLoggedIn={false} />}
          />
          <Route path="/to-do-list" element={<TooDoList />} />
          <Route path="/dynamic-styles" element={<DynamicStyles />} />
          <Route path="/fakestore" element={<FakeStore />} />

          {/* Fake Store product details */}
          <Route path="/single-product/:productId" element={<SingleProduct />} />

          {/* Cart page */}
          <Route path="/cart" element={<Cart />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/use-callback" element={<UseCallback />} />
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="/use-reducer" element={<UseReducer />} />

          {/* for assessment 3 */}
          <Route
            path="/step-1"
            element={<Step1 formData={formData} handleChange={handleChange} />}
          />
          <Route
            path="/step-2"
            element={<Step2 formData={formData} handleChange={handleChange} />}
          />
          <Route
            path="/step-3"
            element={<Step3 formData={formData} handleSubmit={handleSubmit} />}
          />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
