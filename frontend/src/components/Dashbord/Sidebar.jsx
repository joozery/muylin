import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layers, Award, ClipboardList, Sparkles, BusFront, Bike, Truck, Car, Star, Circle, Grid, CheckCircle, Key, Medal, Phone } from 'lucide-react'; // ✅ ใช้ Medal แทน Gold และเพิ่ม Phone

const Sidebar = () => {
  const activeLink = "bg-gray-200 rounded-lg";

  return (
    <div className="w-70 bg-white text-gray-800 h-screen shadow-sm flex flex-col font-['Prompt']">
      <div className="px-6 py-5 border-b border-gray-200 text-center">
        <h2 className="text-xl font-bold text-gray-900">ระบบจัดการ</h2>
        <h2 className="text-xl font-bold text-gray-900">ป้ายทะเบียน</h2>
      </div>
      <nav className="flex-1 px-1 py-6 overflow-auto">
        <ul className="space-y-2 pl-0">
          
          {/* ✅ ทะเบียนรถมอเตอร์ไซด์ */}
          <li>
            <NavLink to="/dashboard/motorcycle-plate" className={({ isActive }) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <Bike className="mr-2 mt-1 flex-shrink-0" />
              ทะเบียนรถมอเตอร์ไซด์
            </NavLink>
          </li>

          {/* ✅ ทะเบียนรถกะบะป้ายเขียว */}
          <li>
            <NavLink to="/dashboard/green-plate" className={({ isActive }) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <Truck className="mr-2 mt-1 flex-shrink-0" />
              ทะเบียนรถกะบะป้ายเขียว
            </NavLink>
          </li>

          {/* ✅ ทะเบียนรถตู้ป้ายฟ้า */}
          <li>
            <NavLink to="/dashboard/van-plate" className={({ isActive }) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <BusFront className="mr-2 mt-1 flex-shrink-0" />
              ทะเบียนรถตู้ป้ายฟ้า
            </NavLink>
          </li>

          {/* ✅ ทะเบียนรถตู้กราฟฟิค */}
          <li>
            <NavLink to="/dashboard/graphic-van-plate" className={({ isActive }) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <Car className="mr-2 mt-1 flex-shrink-0" />
              ทะเบียนรถตู้กราฟฟิค
            </NavLink>
          </li>

          {/* ✅ ทะเบียนรถระฆังทอง (กราฟฟิคสีทอง) */}
          <li>
            <NavLink to="/dashboard/gold-graphic-plate" className={({ isActive }) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <Medal className="mr-2 mt-1 flex-shrink-0" /> {/* ✅ เปลี่ยนเป็น Medal */}
              ทะเบียนรถระฆังทอง (กราฟฟิคสีทอง)
            </NavLink>
          </li>

          {/* ✅ ทะเบียนรถคิดเอง(ลักษณะพิเศษ) */}
          <li>
            <NavLink to="/dashboard/special-plate" className={({ isActive }) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <Layers className="mr-2 mt-1 flex-shrink-0" />
              ทะเบียนรถคิดเอง(ลักษณะพิเศษ)
            </NavLink>
          </li>

          {/* ✅ ทะเบียนรถเลขตัวเดียว */}
          <li>
            <NavLink to="/dashboard/single-digit-plate" className={({ isActive }) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <Star className="mr-2 mt-1 flex-shrink-0" />
              ทะเบียนรถเลขตัวเดียว
            </NavLink>
          </li>

          {/* ✅ ทะเบียนรถเลขคู่ */}
          <li>
            <NavLink to="/dashboard/double-digit-plate" className={({ isActive }) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <Circle className="mr-2 mt-1 flex-shrink-0" />
              ทะเบียนรถเลขคู่
            </NavLink>
          </li>

          {/* ✅ ทะเบียนเลขตอง */}
          <li>
            <NavLink to="/dashboard/triple-digit-plate" className={({ isActive }) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <Grid className="mr-2 mt-1 flex-shrink-0" />
              ทะเบียนเลขตอง / เลข3ตัว
            </NavLink>
          </li>

          {/* ✅ ทะเบียนเลขโฟร์ */}
          <li>
            <NavLink to="/dashboard/quadruple-digit-plate" className={({ isActive }) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <CheckCircle className="mr-2 mt-1 flex-shrink-0" />
              ทะเบียนเลขโฟร์
            </NavLink>
          </li>

          {/* ✅ ทะเบียนรถขาวดำหมวดเก่า */}
          <li>
            <NavLink to="/dashboard/old-non-auction" className={({ isActive }) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <Award className="mr-2 mt-1 flex-shrink-0" />
              ทะเบียนรถขาวดำหมวดเก่า
            </NavLink>
          </li>

          {/* ✅ ทะเบียนรถประมูลหมวดเก่า */}
          <li>
            <NavLink to="/dashboard/old-auction" className={({ isActive }) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <Key className="mr-2 mt-1 flex-shrink-0" />
              ทะเบียนรถประมูลหมวดเก่า
            </NavLink>
          </li>

          {/* ✅ ทะเบียนรถขาวดำหมวดใหม่ */}
          <li>
            <NavLink to="/dashboard/new-non-auction" className={({ isActive }) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <ClipboardList className="mr-2 mt-1 flex-shrink-0" />
              ทะเบียนรถขาวดำหมวดใหม่
            </NavLink>
          </li>

          {/* ✅ ทะเบียนรถประมูลหมวดใหม่ */}
          <li>
            <NavLink to="/dashboard/new-auction" className={({ isActive }) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <Sparkles className="mr-2 mt-1 flex-shrink-0" />
              ทะเบียนรถประมูลหมวดใหม่
            </NavLink>
          </li>

          

          

          {/* ✅ เบอร์โทรศัพท์สวย */}
          <li>
            <NavLink to="/dashboard/phone-number" className={({ isActive }) =>
              `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ""}`
              }>
        <Phone className="mr-2 mt-1 flex-shrink-0" />
        เบอร์โทรศัพท์สวย
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;