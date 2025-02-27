import React from "react";
import PlatesSpecial from "../Plates/PlatesSpecial";
import HeaderPagesPlatesSpecial from "../Header/HeaderPagesPlatesSpecial"; // ✅ Import Header
import gold from "../../assets/gold.jpg"; // ✅ ใส่ภาพพื้นหลังของป้ายคิดเอง (ลักษณะพิเศษ)

const API_URL = import.meta.env.VITE_API_URL; // ✅ ดึงค่า API URL จาก .env

export default function PagesPlatesSpecial() {
  return (
    <>
      {/* ✅ Header สำหรับหน้านี้ */}
      <HeaderPagesPlatesSpecial />

      <section className="bg-gradient-to-b from-[#111111] via-[#111111] to-[#000000] text-white py-12 font-tahoma">
        <div className="container mx-auto px-6 lg:px-20">
          {/* ⭐⭐⭐⭐⭐ Title */}
          <div className="text-center mb-6">
            <p className="text-yellow-400 text-xl">★★★★★</p>
            <p className="text-yellow-400 uppercase text-sm font-bold tracking-widest">www.muaylintabien.co</p>
          </div>

          {/* ✅ ส่ง API_URL และ cover ไปที่ PlatesSpecial */}
          <PlatesSpecial url={API_URL} cover={gold} />
        </div>
      </section>
    </>
  );
}