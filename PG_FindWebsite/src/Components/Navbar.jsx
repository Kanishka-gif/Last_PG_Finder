import React from 'react';
import { Link,useLocation } from "react-router";

import { Menu,Avatar } from 'antd';
import logo from "../assets/Logo_PG.webp";




const Navbar = () => {
      const location=useLocation();
      
  return (
    <div>
         <Menu mode='horizontal' theme='dark'
            selectedKeys={[location.pathname]}
          >
         
           
             <Menu.Item key="logo1" className='text-[18px]'>
                 {<Avatar src={logo}/>}
                  Smart PG Finder
             </Menu.Item>
             <div className='ml-auto text-[18px]'>
             <Menu.Item key="1">
                 <Link to="/"  className={`${location.pathname === '/' ? 'text-blue-500' : ''} `}>Home </Link>
             </Menu.Item>
             <Menu.Item key="2">
                   <Link to="/Listings"  className={`${location.pathname === '/Listings' ? 'text-blue-500' : ''}`}>Listings</Link>
             </Menu.Item>
             <Menu.Item key="3">
                   <Link to="/Dashboard"  className={`${location.pathname === '/Dashboard' ? 'text-blue-500' : ''}`}>Dashboard</Link>
             </Menu.Item>
             <Menu.Item key="4">
                   <Link to="/About"  className={`${location.pathname === '/About' ? 'text-blue-500' : ''}`}>About</Link>
             </Menu.Item>
             <Menu.Item key="5">
                  <Link to="/Login"  className={`${location.pathname === '/Login' ? 'text-blue-500' : ''}`}> Login</Link>
             </Menu.Item>
             <Menu.Item key="6">
                   <Link to="/Register"  className={`${location.pathname === '/Register' ? 'text-blue-500' : ''}`}>Register</Link>
             </Menu.Item>
             
             <Menu.Item key="7">
                   <Link to="/Contact_Us"  className={`${location.pathname === '/Contact_Us' ? 'text-blue-500' : ''}`}>Contact-Us</Link>
             </Menu.Item>
             <Menu.Item key="8">
                   <Link to="/Wishlist"  className={`${location.pathname === '/Wishlist' ? 'text-blue-500' : ''}`}>Wishlist</Link>
             </Menu.Item>
             {/* <Menu.Item key="9">
                   <Link to="/VerifyOtp"  className={`${location.pathname === '/VerifyOtp' ? 'text-blue-500' : ''}`}>VerifyOTP</Link>
             </Menu.Item> */}
             </div>
         </Menu>
    </div>
  )
}

export default Navbar
















