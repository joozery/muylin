// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { FaPhoneAlt, FaRegCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // ✅ นำเข้า Link จาก react-router-dom
import './Sidebar.css';
import logo from '../assets/logo.png';  // ใช้ import รูปภาพจาก src/assets/

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);  // สร้าง state สำหรับการเปิด/ปิด dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen);  // สลับสถานะของ dropdown
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" /> {/* ใช้ logo ที่นำเข้ามา */}
      </div>
      <ul className="menu">
      <li><Link to="/">ทะเบียนสวย</Link></li> {/* ✅ ลิงก์ไปหน้า Home */}
        <li>
          <a href="#" onClick={toggleDropdown}>ทะเบียนตามหมวดหมู่</a>
          {isOpen && (
            <ul className="dropdown">
              <li><a href="#">ทะเบียน รถมอเตอร์ไซด์ Vip</a></li>
              <li><a href="#">ป้ายเขียว รถกระบะ Vip</a></li>
              <li><a href="#">รถตู้ VIP ป้ายฟ้า</a></li>
              <li><a href="#">เลขศาตร์ เลขสวย เลขมงคล</a></li>
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
        <li><a href="#">เบอร์สวย</a></li>
        <li><a href="#">บริการของเรา</a></li>
        <li><Link to="/order-process">ขั้นตอนการสั่งซื้อ</Link></li> {/* ✅ ใช้ Link ไปยัง OrderProcess */}
        <li><a href="#">ลูกค้าของเรา</a></li>
        <li><a href="#">ติดต่อเบอร์เทพ</a></li>
      </ul>
      <div className="contact">
        <p><FaPhoneAlt /> โทร: 096-396-2888</p> {/* ใช้ไอคอนโทรศัพท์ */}
        <p><FaRegCommentDots /> Line ID: @muaydata</p> {/* ใช้ไอคอนแชท */}
        <p>ลูกค้าสามารถติดต่อสอบถาม หมวยหลิน ได้ตลอด 24 ชั่วโมง</p>
      </div>
    </div>
  );
};

export default Sidebar;
