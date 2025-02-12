import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import OrderProcess from "./components/OrderProcess";
import Footer from "./components/Footer";
import Contact from "./components/Contact"; // ✅ นำเข้า Contact
import ScrollToTop from "./components/ScrollToTop";
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
            <Route path="/contact" element={<Contact />} /> {/* ✅ กำหนด Route */}
          </Routes>
          <Footer />
          <ScrollToTop /> {/* ✅ เพิ่มปุ่มนี้ */}
        </div>
      </div>
    </Router>
  );
}

export default App;