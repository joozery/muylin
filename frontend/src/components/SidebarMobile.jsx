import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; // ใช้ไอคอนปิด Sidebar
import "./SidebarMobile.css"; // ✅ ไฟล์ CSS สำหรับ Sidebar มือถือ

const SidebarMobile = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar-mobile ${isOpen ? "open" : ""}`}>
      {/* ปุ่มปิด Sidebar */}
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes size={24} />
      </button>

      {/* เมนู */}
      <ul className="menu">
        <li><Link to="/" onClick={toggleSidebar}>ทะเบียนสวย</Link></li>
        <li><Link to="/beautiful-phone" onClick={toggleSidebar}>เบอร์สวย</Link></li>
        <li><Link to="/our-service" onClick={toggleSidebar}>บริการของเรา</Link></li>
        <li><Link to="/order-process" onClick={toggleSidebar}>ขั้นตอนการสั่งซื้อ</Link></li>
        <li><Link to="/customers" onClick={toggleSidebar}>ลูกค้าของเรา</Link></li>
        <li><Link to="/contact" onClick={toggleSidebar}>ติดต่อเรา</Link></li>
      </ul>
    </div>
  );
};

export default SidebarMobile;