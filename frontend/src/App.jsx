import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import OrderProcess from "./components/OrderProcess";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router> {/* ✅ ใช้ Router เพื่อรองรับการเปลี่ยนหน้า */}
      <div className="App flex">
        <Sidebar />
        <div className="content w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order-process" element={<OrderProcess />} /> {/* ✅ เพิ่ม Route สำหรับ OrderProcess */}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;