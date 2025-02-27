import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ กำหนดรหัสผ่านแบบง่าย
  const validUser = { username: "admin", password: "123456" };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === validUser.username && password === validUser.password) {
      setIsAuthenticated(true); // ตั้งค่าสถานะล็อกอิน
      localStorage.setItem("isAuthenticated", "true"); // บันทึกสถานะล็อกอิน
      navigate("/dashboard"); // ไปที่ Dashboard
    } else {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">เข้าสู่ระบบ</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">ชื่อผู้ใช้</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">รหัสผ่าน</label>
            <input
              type="password"
              className="w-full border p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;