import React from "react";
import PlatesNewNonAuction from "../Plates/PlatesNewNonAuction";
import HeaderPagesPlatesNewNonAuction from "../Header/HeaderPagesPlatesNewNonAuction"; // ✅ Import Header
import newNonAuctionImage from "../../assets/ขาวดำเก่า.jpg"; // ✅ ใส่ภาพพื้นหลังของป้ายขาวดำหมวดใหม่

const API_URL = import.meta.env.VITE_API_URL; // ✅ ดึงค่า API URL จาก .env

export default function PagesPlatesNewNonAuction() {
  return (
    <>
      {/* ✅ Header สำหรับหน้านี้ */}
      <HeaderPagesPlatesNewNonAuction />

      <section className="bg-gradient-to-b from-[#111111] via-[#111111] to-[#000000] text-white py-12 font-tahoma">
        <div className="container mx-auto px-6 lg:px-20">
          {/* ⭐⭐⭐⭐⭐ Title */}
          <div className="text-center mb-6">
            <p className="text-yellow-400 text-xl">★★★★★</p>
            <p className="text-yellow-400 uppercase text-sm font-bold tracking-widest">www.muaylintabien.co</p>
          </div>

          {/* ✅ ส่ง API_URL และ cover ไปที่ PlatesNewNonAuction */}
          <PlatesNewNonAuction url={API_URL} cover={newNonAuctionImage} />
        </div>
      </section>
    </>
  );
}