import React, { useState } from 'react';
import { FaPhoneAlt, FaRegCommentDots, FaBars, FaTimes } from 'react-icons/fa'; // ✅ นำเข้าไอคอน
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../assets/logo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // ✅ เปิด/ปิด Sidebar
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // ✅ เปิด/ปิด Dropdown

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // ✅ สลับสถานะเปิด/ปิด Sidebar
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // ✅ สลับสถานะเปิด/ปิด Dropdown
  };

  return (
    <>
      {/* Hamburger Icon (เฉพาะบนมือถือ) */}
      <button className="hamburger md:hidden" onClick={toggleSidebar}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* เปลี่ยนไอคอนเมื่อเปิด/ปิด */}
      </button>

      {/* Overlay เมื่อ Sidebar เปิด */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="menu">
          <li><Link to="/" onClick={toggleSidebar}>ทะเบียนสวย</Link></li>

          {/* ✅ Dropdown ทะเบียนตามหมวดหมู่ */}
          <li className="dropdown-menu">
            <button onClick={toggleDropdown} className="dropdown-toggle">
              ทะเบียนตามหมวดหมู่ {isDropdownOpen ? "▲" : "▼"}
            </button>
            {isDropdownOpen && (
              <ul className="dropdown">
                <li><Link to="/plates-motorcycle" onClick={toggleSidebar}>ทะเบียนรถมอเตอร์ไซด์</Link></li>
                <li><Link to="/plates-green" onClick={toggleSidebar}>ทะเบียนรถกะบะป้ายเขียว</Link></li>
                <li><Link to="/plates-graphic-van" onClick={toggleSidebar}>ทะเบียนรถตู้กราฟฟิค</Link></li>
                <li><Link to="/plates-special" onClick={toggleSidebar}>ทะเบียนรถคิดเอง (ลักษณะพิเศษ)</Link></li>
                <li><Link to="/plates-single-digit" onClick={toggleSidebar}>ทะเบียนรถเลขตัวเดียว</Link></li>
                <li><Link to="/plates-double-digit" onClick={toggleSidebar}>ทะเบียนรถเลขคู่</Link></li>
                <li><Link to="/plates-triple-digit" onClick={toggleSidebar}>ทะเบียนเลขตอง</Link></li>
                <li><Link to="/plates-quadruple-digit" onClick={toggleSidebar}>ทะเบียนเลขโฟร์</Link></li>
                <li><Link to="/plates-new" onClick={toggleSidebar}>ทะเบียนรถประมูลหมวดใหม่</Link></li>
                <li><Link to="/plates-new-non-auction" onClick={toggleSidebar}>ทะเบียนรถขาวดำหมวดใหม่</Link></li>
                <li><Link to="/plates-old" onClick={toggleSidebar}>ทะเบียนรถประมูลหมวดเก่า</Link></li>
                <li><Link to="/plates-old-non-auction" onClick={toggleSidebar}>ทะเบียนรถขาวดำหมวดเก่า</Link></li>
                <li><Link to="/plates-gold-graphic" onClick={toggleSidebar}>ทะเบียนรถระฆังทอง (กราฟฟิคสีทอง)</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/beautiful-phone" onClick={toggleSidebar}>เบอร์สวย</Link></li>
          <li><Link to="/our-service" onClick={toggleSidebar}>บริการของเรา</Link></li>
          <li><Link to="/order-process" onClick={toggleSidebar}>ขั้นตอนการสั่งซื้อ</Link></li>
          <li><Link to="/customers" onClick={toggleSidebar}>ลูกค้าของเรา</Link></li>
          <li><Link to="/contact" onClick={toggleSidebar}>ติดต่อเบอร์หมวยหลินทะเบียน</Link></li>
        </ul>

        {/* ข้อมูลติดต่อ */}
        <div className="contact">
          <p><FaPhoneAlt /> โทร: 096-396-2888</p>
          <p><FaRegCommentDots /> Line ID: @muaydata</p>
          <p>ลูกค้าสามารถติดต่อสอบถาม หมวยหลิน ได้ตลอด 24 ชั่วโมง</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;