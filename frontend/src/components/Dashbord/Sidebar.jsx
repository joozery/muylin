// Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layers, Award, ClipboardList, Sparkles, BusFront, LogOut } from 'lucide-react';

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
          <li>
            <NavLink to="/dashboard/old-auction" className={({isActive}) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <Award className="mr-2 mt-1 flex-shrink-0" />
              ป้ายประมูลหมวดเก่า
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/new-auction" className={({isActive}) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <Sparkles className="mr-2 mt-1 flex-shrink-0" />
              ป้ายประมูลหมวดใหม่
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/non-auction" className={({isActive}) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <ClipboardList className="mr-2 mt-1 flex-shrink-0" />
              ป้ายขาวดำหมวดเก่า/ไม่ประมูล
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/special-plate" className={({isActive}) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <Layers className="mr-2 mt-1 flex-shrink-0" />
              ป้ายคิดเองลักษณะพิเศษ
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/van-plate" className={({isActive}) => `flex items-start p-2 text-black hover:bg-gray-100 transition-colors no-underline ${isActive ? activeLink : ''}`}>
              <BusFront className="mr-2 mt-1 flex-shrink-0" />
              ป้ายรถตู้ป้ายฟ้า
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="px-4 py-4 border-t border-gray-200">
        <button className="flex items-center justify-center w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800 transition-colors">
          <LogOut className="mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;