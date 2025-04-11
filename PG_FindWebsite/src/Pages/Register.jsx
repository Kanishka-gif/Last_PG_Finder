import React, { useState } from 'react';
import axios from 'axios';
import bgregister from "../assets/BgRegister.jpg";
import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router';

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  // const onFinish = async (values) => {
  //   console.log("Received values from:", values);
  //   try {
  //     const res = await axios.post("http://localhost:3000/api/auth/register", values);
  //     if (res.status === 200) {
  //       setData(res.data);
  //       console.log("Register Success:", res.data);
  //       alert("Registration Successful!");
  //       navigate("/Login");
  //     }
  //   } catch (error) {
  //     setError("Register Failed");
  //     console.error("Register error:", error);
  //     if (error.response?.status === 409) {
  //       alert("Email already registered!");
  //     } else {
  //       alert("Registration Failed! Please try again.");
  //     }
  //   }
  // };

  const onFinish = async (values) => {
    console.log("Received values from:", values);
    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", values);
      if (res.status === 200) {
        setData(res.data);
        console.log("Register Success:", res.data);
  
        await axios.post("http://localhost:3000/api/auth/sendMail", {
          email: values.email,
        });
  
        alert("Registration Successful! OTP has been sent to your email.");
        navigate("/VerifyOtp");
      }
    } catch (error) {
      setError("Register Failed");
      console.error("Register error:", error);
      if (error.response?.status === 409) {
        alert("Email already registered!");
      } else {
        alert("Registration Failed! Please try again.");
      }
    }
  };
  

  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    alert("Please fill out the form correctly!");
  };

  return (
    <div className='h-[100vh] w-full flex justify-end items-center pr-22 bg-cover'
      style={{ backgroundImage: `url(${bgregister})` }}
    >
      <div className='w-[500px] h-[600px] bg-[#2fa1aa] rounded-3xl flex flex-col justify-center items-center border-2 shadow-2xl shadow-blue-500'>
        <h1 className='font-bold m-10 text-3xl'>
          Sign-UP Page
        </h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 1000,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Country"
            name="country"
            rules={[
              {
                required: true,
                message: 'Please input your country!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please input your phone!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" className='mr-24 mt-5'>
              Create Account
            </Button>
          </Form.Item>
        </Form>

        <p>Already have an account? <Link to="/Login" className='text-red-600 text-center hover:text-blue-700'>Sign in</Link></p>
      </div>
    </div>
  );
};

export default Register;

