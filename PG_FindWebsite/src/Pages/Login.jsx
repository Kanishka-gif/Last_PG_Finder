import React, {useState } from 'react';
import bglogin4 from "../assets/BgLogin4.jpg";
import { Button, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [err, setError] = useState("");

  const onFinish = async (values) => {
    console.log("Sending login data:", values);

    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", values);

      if (res.status === 200) {
        const token = res.data.token; 
        console.log("Token received:", token);
        alert("Login Successful!");
        localStorage.setItem("token", res.data.token);
       localStorage.setItem("user", JSON.stringify(res.data.user));
      // localStorage.setItem("user", JSON.stringify({ username: "kanishka", role: "admin" })); // ✅ Yahi line sahi hai
      
        
        console.log("Saved to localStorage:", res.data.user)
        
        navigate("/"); 
        // window.location.reload();
        window.location.href = "/";
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("Login Failed: " + (err.response?.data?.message || "Server error"));
    }
  };
  // const onFinish = async (values) => {
  //   try {
  //     const res = await axios.post("http://localhost:3000/api/auth/login", values);
  
  //     if (res.status === 200) {
  //       const token = res.data.token; 
  //       alert("Login Successful!");
  
  //       localStorage.setItem("token", token);
  //       localStorage.setItem("user", JSON.stringify(res.data.user)); // ✅ Yahi line sahi hai
  
  //       console.log("Saved to localStorage:", res.data.user);
  //       navigate("/");
  //       window.location.reload();
  //     }
  //   } catch (err) {
  //     console.error("Login Error:", err);
  //     alert("Login Failed: " + (err.response?.data?.message || "Server error"));
  //   }
  // };
  

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error("Please fill all required fields.");
  };

  return (
    <div className='h-[100vh] w-full flex justify-center items-center bg-cover pl-35'
      style={{ backgroundImage: `url(${bglogin4})` }}
    >
      <div className='w-[500px] h-[400px] bg-[#2fa1aa] rounded-3xl flex flex-col justify-center items-center border-2 shadow-2xl shadow-blue-500'>
        <h1 className='font-bold m-10 text-3xl'>Login Page</h1>

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 1000 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email Address"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" className='mr-24 mt-5'>
              Login
            </Button>
          </Form.Item>
        </Form>

        <p>Don't have an account? <Link to="/Register" className='text-red-600 text-center hover:text-blue-700'>Sign up</Link></p>
      </div>
    </div>
  );
};

export default Login;




// import React, { useState } from 'react';
// import { Button, Form, Input, message } from 'antd';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import bglogin4 from "../assets/BgLogin4.jpg";

// const Login = () => {
//   const navigate = useNavigate();
//   const [err, setError] = useState("");

//   const onFinish = async (values) => {
//     try {
//       const res = await axios.post("http://localhost:3000/api/auth/login", values);

//       if (res.status === 200) {
//         localStorage.setItem("token", res.data.token);
//         localStorage.setItem("user", JSON.stringify(res.data.user)); // ✅ saving proper user
//         message.success("Login successful!");
//         navigate("/"); // or wherever your Admin.jsx is routed
//         window.location.reload();
//       }
//     } catch (err) {
//       message.error(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div
//       className='h-screen w-full flex justify-center items-center bg-cover'
//       style={{ backgroundImage: `url(${bglogin4})` }}
//     >
//       <div className='w-[500px] h-[400px] bg-[#2fa1aa] rounded-3xl flex flex-col justify-center items-center border-2 shadow-2xl shadow-blue-500'>
//         <h1 className='font-bold m-10 text-3xl'>Login Page</h1>
//         <Form
//           name="basic"
//           labelCol={{ span: 8 }}
//           wrapperCol={{ span: 16 }}
//           onFinish={onFinish}
//           autoComplete="off"
//         >
//           <Form.Item
//             label="Email"
//             name="email"
//             rules={[{ required: true, message: 'Please input your email!' }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[{ required: true, message: 'Please input your password!' }]}
//           >
//             <Input.Password />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Login
//             </Button>
//           </Form.Item>
//         </Form>
//         <p>Don't have an account? <Link to="/register" className='text-red-600 hover:text-blue-700'>Sign up</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Login;

