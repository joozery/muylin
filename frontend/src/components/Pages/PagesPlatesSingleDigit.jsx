import React from "react";
import PlatesSingleDigit from "../Plates/PlatesSingleDigit";
import HeaderPagesPlatesSingleDigit from "../Header/HeaderPagesPlatesSingleDigit"; // ✅ Import Header
import singleDigitImage from "../../assets/ขาวดำเก่า.jpg"; // ✅ ใส่ภาพพื้นหลังของป้ายเลขตัวเดียว

const API_URL = import.meta.env.VITE_API_URL; // ✅ ดึงค่า API URL จาก .env

export default function PagesPlatesSingleDigit() {
  return (
    <>
      {/* ✅ Header สำหรับหน้านี้ */}
      <HeaderPagesPlatesSingleDigit />

      <section className="bg-gradient-to-b from-[#111111] via-[#111111] to-[#000000] text-white py-12 font-tahoma">
        <div className="container mx-auto px-6 lg:px-20">
          {/* ⭐⭐⭐⭐⭐ Title */}
          <div className="text-center mb-6">
            <p className="text-yellow-400 text-xl">★★★★★</p>
            <p className="text-yellow-400 uppercase text-sm font-bold tracking-widest">www.muaylintabien.co</p>
          </div>

          {/* ✅ ส่ง API_URL และ cover ไปที่ PlatesSingleDigit */}
          <PlatesSingleDigit url={API_URL} cover={singleDigitImage} />
        </div>
      </section>
    </>
  );
}