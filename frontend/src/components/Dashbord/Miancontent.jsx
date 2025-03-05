import React from "react";
import { useLocation } from "react-router-dom";
import AdminHeader from "./AdminHeader"; // ✅ นำเข้า Header

import OldAuction from "./page/OldAuction";
import NewAuction from "./page/NewAuction";
import NonAuction from "./page/NonAuction";
import SpecialPlate from "./page/SpecialPlate";
import VanPlate from "./page/VanPlate";
import MotorcyclePlate from "./page/MotorcyclePlate";
import GreenPlate from "./page/GreenPlate";
import GraphicVanPlate from "./page/GraphicVanPlate";
import SingleDigitPlate from "./page/SingleDigitPlate";
import DoubleDigitPlate from "./page/DoubleDigitPlate";
import TripleDigitPlate from "./page/TripleDigitPlate";
import QuadrupleDigitPlate from "./page/QuadrupleDigitPlate";
import NewNonAuctionPlate from "./page/NewNonAuctionPlate";
import OldNonAuctionPlate from "./page/OldNonAuctionPlate";
import GoldGraphicPlate from "./page/GoldGraphicPlate";
import PhoneNumber from "./page/PhoneNumber"; // ✅ เพิ่มหน้าเบอร์โทรศัพท์สวย

const Maincontent = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // ✅ ฟังก์ชัน Logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // ลบ Token
    alert("ออกจากระบบเรียบร้อย!");
    window.location.href = "/login"; // กลับไปหน้า Login
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen flex flex-col">
      {/* ✅ Header Admin */}
      <AdminHeader onLogout={handleLogout} />

      {/* ✅ Content */}
      <div className="p-8 overflow-auto flex-grow">
        {currentPath === "/dashboard/old-auction" && <OldAuction />}
        {currentPath === "/dashboard/new-auction" && <NewAuction />}
        {currentPath === "/dashboard/non-auction" && <NonAuction />}
        {currentPath === "/dashboard/special-plate" && <SpecialPlate />}
        {currentPath === "/dashboard/van-plate" && <VanPlate />}
        {currentPath === "/dashboard/motorcycle-plate" && <MotorcyclePlate />}
        {currentPath === "/dashboard/green-plate" && <GreenPlate />}
        {currentPath === "/dashboard/graphic-van-plate" && <GraphicVanPlate />}
        {currentPath === "/dashboard/single-digit-plate" && <SingleDigitPlate />}
        {currentPath === "/dashboard/double-digit-plate" && <DoubleDigitPlate />}
        {currentPath === "/dashboard/triple-digit-plate" && <TripleDigitPlate />}
        {currentPath === "/dashboard/quadruple-digit-plate" && <QuadrupleDigitPlate />}
        {currentPath === "/dashboard/new-non-auction" && <NewNonAuctionPlate />}
        {currentPath === "/dashboard/old-non-auction" && <OldNonAuctionPlate />}
        {currentPath === "/dashboard/gold-graphic-plate" && <GoldGraphicPlate />}
        {currentPath === "/dashboard/phone-number" && <PhoneNumber />}
        {currentPath === "/dashboard" && (
          <>
            <h1 className="text-3xl font-bold">ยินดีต้อนรับสู่ Dashboard</h1>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded shadow">ข้อมูลสถิติที่ 1</div>
              <div className="bg-white p-4 rounded shadow">ข้อมูลสถิติที่ 2</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Maincontent;