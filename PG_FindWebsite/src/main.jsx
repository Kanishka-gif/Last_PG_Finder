// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )




import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import "./index.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import About from "./Pages/About";
import  Listings from "./Pages/Listings";
import VerifyOtp from "./Pages/VerifyOtp";
import PG_Details from "./Pages/PG_Details";
import Contact_Us from "./Pages/Contact_Us";
import Dashboard from "./Pages/Dashboard";
import Wishlist from "./Pages/Wishlist";
// import { App } from "antd";
// import App from "./App";
import Navbar from "./Components/Navbar";
import FooterApp from "./Components/FooterApp";
import { WishlistProvider } from "./context/WishlistContext";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <WishlistProvider>
    <BrowserRouter>
   <Navbar />
   
    <Routes>


    {/* <Route path="/" element={<App/>} /> */}
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/VerifyOtp" element={<VerifyOtp />} />
      <Route path="Contact_Us" element={<Contact_Us />} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Listings" element={<Listings />} />
      <Route path="/About" element={<About />} />
      <Route path="/pg/:id" element={<PG_Details /> } />
      <Route path="/Wishlist" element={<Wishlist />} />
     
      

    </Routes>
    <FooterApp />
  </BrowserRouter>
  </WishlistProvider>

);


