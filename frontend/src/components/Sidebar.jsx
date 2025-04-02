import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaRegCommentDots,
  FaBars,
  FaTimes,
  FaLine,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // ✅ เปิด/ปิด Sidebar
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // ✅ เปิด/ปิด Dropdown

  const { pathname } = useLocation(); // ดึง path ปัจจุบัน

  useEffect(() => {
    window.scrollTo(0, 0); // เลื่อนหน้าไปด้านบนสุด
  }, [pathname]); // ทำงานเมื่อ path เปลี่ยน

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* ✅ Hamburger Icon (เฉพาะบนมือถือ) */}
      <button className="hamburger md:hidden" onClick={toggleSidebar}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* ✅ Overlay เมื่อ Sidebar เปิด */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      {/* ✅ Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""} `}>
        <div className="logo flex items-center justify-center">
          {/* <img src={logo} alt="Logo" /> */}
          <Link to="/" className="text-white no-underline text-3xl font-bold" onClick={toggleSidebar}>MUAYLINTABIEN</Link>
          {/* <p className="text-3xl font-bold">MUAYLINTABIEN</p> */}
        </div>

        <ul className="menu font-semibold ps-3 space-y-8 mt-3">
          <li>
            <Link to="/beautiful-phone" onClick={toggleSidebar}>
              เบอร์สวย
            </Link>
          </li>
          <li>
            <Link to="/#search" onClick={toggleSidebar}>
              ทะเบียนสวย
            </Link>
          </li>

          {/* ✅ Dropdown ทะเบียนตามหมวดหมู่ */}
          <li className="dropdown-menu">
            <button onClick={toggleDropdown} className="dropdown-toggle">
              ทะเบียนตามหมวดหมู่ {isDropdownOpen ? "▲" : "▼"}
            </button>
            {isDropdownOpen && (
              <ul className="dropdown">
                <li>
                  <Link to="/plates-motorcycle" onClick={toggleSidebar}>
                    ทะเบียนรถมอเตอร์ไซด์
                  </Link>
                </li>
                <li>
                  <Link to="/plates-green" onClick={toggleSidebar}>
                    ทะเบียนรถกะบะป้ายเขียว
                  </Link>
                </li>
                <li>
                  <Link to="/plates-graphic-van" onClick={toggleSidebar}>
                    ทะเบียนรถตู้กราฟฟิค
                  </Link>
                </li>
                <li>
                  <Link to="/plates-special" onClick={toggleSidebar}>
                    ทะเบียนรถคิดเอง (ลักษณะพิเศษ)
                  </Link>
                </li>
                <li>
                  <Link to="/plates-single-digit" onClick={toggleSidebar}>
                    ทะเบียนรถเลขตัวเดียว
                  </Link>
                </li>
                <li>
                  <Link to="/plates-double-digit" onClick={toggleSidebar}>
                    ทะเบียนรถเลขคู่
                  </Link>
                </li>
                <li>
                  <Link to="/plates-triple-digit" onClick={toggleSidebar}>
                    ทะเบียนเลขตอง
                  </Link>
                </li>
                <li>
                  <Link to="/plates-quadruple-digit" onClick={toggleSidebar}>
                    ทะเบียนเลขโฟร์
                  </Link>
                </li>
                <li>
                  <Link to="/plates-new" onClick={toggleSidebar}>
                    ทะเบียนรถประมูลหมวดใหม่
                  </Link>
                </li>
                <li>
                  <Link to="/plates-new-non-auction" onClick={toggleSidebar}>
                    ทะเบียนรถขาวดำหมวดใหม่
                  </Link>
                </li>
                <li>
                  <Link to="/plates-old" onClick={toggleSidebar}>
                    ทะเบียนรถประมูลหมวดเก่า
                  </Link>
                </li>
                <li>
                  <Link to="/plates-old-non-auction" onClick={toggleSidebar}>
                    ทะเบียนรถขาวดำหมวดเก่า
                  </Link>
                </li>
                <li>
                  <Link to="/plates-gold-graphic" onClick={toggleSidebar}>
                    ทะเบียนรถระฆังทอง (กราฟฟิคสีทอง)
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/our-service" onClick={toggleSidebar}>
              บริการของเรา
            </Link>
          </li>
          <li>
            <Link to="/order-process" onClick={toggleSidebar}>
              ขั้นตอนการสั่งซื้อ
            </Link>
          </li>
          <li>
            <Link to="/customers" onClick={toggleSidebar}>
              ลูกค้าของเรา
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleSidebar}>
              ติดต่อหมวยหลิน
            </Link>
          </li>
        </ul>

        {/* ✅ ข้อมูลติดต่อ */}
        {/* <div className="contact">
          <p>
            <FaPhoneAlt /> CALL: 096-396-2888
          </p>
          <p>
            <FaLine /> LINE: muaydata
          </p>
          <p className="justify-center text-center">
            (ไลน์มีบัญชีเดียวเท่านั้น)
          </p>
          <p className="justify-center text-center">
            ลูกค้าสามารถติดต่อ
            <br /> สอบถามข้อมูลเพิ่มเติมได้
            <br /> (ตลอด24ชั่วโมง)
          </p>
        </div> */}

        <div className="flex flex-col justify-center items-center gap-3 px-3">
          <div className="w-full flex items-center gap-3">
            <FaPhoneAlt className="text-xl md:text-2xl" />
            <div className="flex flex-col justify-center items-start">
              <span className="font-normal text-sm md:text-base">CALL</span>
              <a href="tel:0963962888" className="no-underline text-white">
                <span className="text-lg md:text-xl">096 396 2888</span>
              </a>
            </div>
          </div>
          <div className="w-full flex items-center gap-3">
            <FaLine className="text-xl md:text-2xl" />
            <div className="flex flex-col justify-center items-start">
              <span className="font-normal text-sm md:text-base">LINE</span>
              <a href="#" className="no-underline text-white">
                <span className="text-lg md:text-xl">muaydata</span>
              </a>
            </div>
          </div>

          <div className="mt-4">
            <p className="justify-center text-lg text-center">
              (ไลน์มีบัญชีเดียวเท่านั้น)
            </p>
            <p className="justify-center text-base text-center">
              ลูกค้าสามารถติดต่อ
              <br /> สอบถามข้อมูลเพิ่มเติมได้
              <br /> <span className="text-lg">(ตลอด24ชั่วโมง)</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
