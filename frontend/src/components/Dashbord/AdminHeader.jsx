import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ ใช้ Animation

const AdminHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ✅ ฟังก์ชัน Logout
  const handleLogout = () => {
    alert("ออกจากระบบเรียบร้อย ✅");
    // สามารถเพิ่มโค้ดล้าง session หรือ redirect ไปหน้า Login ที่นี่
  };

  return (
    <header className="bg-white shadow-md px-8 py-4 flex justify-end items-center relative">
      {/* ✅ ชื่อ Admin พร้อม Dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-gray-800 font-semibold text-lg flex items-center hover:text-blue-600 transition"
        >
          Admin Name ▼
        </button>

        {/* ✅ Dropdown เมนู (ใช้ Animation) */}
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-3 w-44 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
            >
              <button
                onClick={handleLogout}
                className="w-full px-4 py-3 text-left text-red-600 font-semibold hover:bg-red-50 transition"
              >
                🚪 ออกจากระบบ
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default AdminHeader;