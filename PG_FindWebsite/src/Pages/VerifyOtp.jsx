
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Input, Button, message } from "antd";
import axios from "axios";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
        console.log("Sending:", { email, otp });
      const res = await axios.post("http://localhost:3000/api/auth/verifyOtp", {
        email,
        otp,
      });

      if (res.data.success) {
        alert("OTP verified successfully!");
        navigate("/Login");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Verification failed. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
        <Input
          placeholder="Enter your registered email"
          className="mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Enter OTP"
          className="mb-4"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <Button type="primary" onClick={handleVerify}>
          Verify
        </Button>
      </div>
    </div>
  );
};

export default VerifyOtp;
