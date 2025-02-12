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
                <li><a href="#">ทะเบียน รถมอเตอร์ไซด์ Vip</a></li>
                <li><a href="#">ป้ายเขียว รถกระบะ Vip</a></li>
                <li><a href="#">รถตู้ VIP ป้ายฟ้า</a></li>
                <li><a href="#">เลขศาสตร์ เลขสวย เลขมงคล</a></li>
                <li><a href="#">ทะเบียนสวย Vip ลักษณะพิเศษ</a></li>
                <li><a href="#">ป้ายประมูล XYXY XXYY</a></li>
                <li><a href="#">ทะเบียน Vip เลขตัวเดียว</a></li>
                <li><a href="#">ทะเบียน Vip เลขคู่</a></li>
                <li><a href="#">ทะเบียน Vip เลขตอง เลข 3 ตัว</a></li>
                <li><a href="#">ทะเบียน Vip เลขโฟร์ XXXX</a></li>
                <li><a href="#">ป้ายทะเบียน Vip หมวดเลขนำ</a></li>
                <li><a href="#">ป้ายสวย หมวดเก่า ไม่ประมูล</a></li>
                <li><a href="#">ทะเบียน Vip ต่างจังหวัด</a></li>
              </ul>
            )}
          </li>
          <li><a href="#" onClick={toggleSidebar}>เบอร์สวย</a></li>
          <li><a href="#" onClick={toggleSidebar}>บริการของเรา</a></li>
          <li><Link to="/order-process" onClick={toggleSidebar}>ขั้นตอนการสั่งซื้อ</Link></li>
          <li><a href="#" onClick={toggleSidebar}>ลูกค้าของเรา</a></li>
          <li><a href="#" onClick={toggleSidebar}>ติดต่อเบอร์หมวยหลินทะเบียน</a></li>
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