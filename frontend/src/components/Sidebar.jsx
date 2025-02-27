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

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="menu">
          <li><Link to="/" onClick={toggleSidebar}>ทะเบียนสวย</Link></li>
          <li>
            <a href="#" onClick={toggleDropdown}>ทะเบียนตามหมวดหมู่</a>
            {isDropdownOpen && (
              <ul className="dropdown">
                <li><a href="#">ทะเบียนรถมอเตอร์ไซด์</a></li>
                <li><a href="#">ทะเบียนรถกะบะป้ายเขียว</a></li>
                <li><a href="#">ทะเบียนรถตู้ป้ายฟ้า</a></li>
                <li><a href="#">ทะเบียนรถตู้กราฟฟิค</a></li>
                <li><a href="#">ทะเบียนรถคิดเอง (ลักษณะพิเศษ)</a></li>
                <li><a href="#">ทะเบียนรถเลขตัวเดียว</a></li>
                <li><a href="#">ทะเบียนรถเลขคู่</a></li>
                <li><a href="#">ทะเบียนเลขตอง</a></li>
                <li><a href="#">ทะเบียนเลขโฟร์</a></li>
                <li><a href="#">ทะเบียนรถขาวดำหมวดใหม่</a></li>
                <li><a href="#">ทะเบียนรถประมูลหมวดใหม่</a></li>
                <li><a href="#">ทะเบียนรถขาวดำหมวดเก่า</a></li>
                <li><a href="#">ทะเบียนรถประมูลหมวดเก่า</a></li>
                <li><a href="#">ทะเบียนรถระฆังทอง (กราฟฟิคสีทอง)</a></li>
              </ul>
            )}
          </li>
          <li><Link to="/beautiful-phone">เบอร์สวย</Link></li>
          <li><Link to="/our-service" onClick={toggleSidebar}> บริการของเรา</Link></li>
          <li><Link to="/order-process" onClick={toggleSidebar}>ขั้นตอนการสั่งซื้อ</Link></li>
          <li><Link to="/customers" onClick={toggleSidebar}>ลูกค้าของเรา</Link></li>
          <li><Link to="/contact">ติดต่อเบอร์หมวยหลินทะเบียน</Link></li>
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