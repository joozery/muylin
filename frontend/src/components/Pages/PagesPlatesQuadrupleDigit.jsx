import React from "react";
import PlatesQuadrupleDigit from "../Plates/PlatesQuadrupleDigit";
import HeaderPagesPlatesQuadrupleDigit from "../Header/HeaderPagesPlatesQuadrupleDigit"; // ✅ Import Header
import quadrupleDigitImage from "../../assets/หมวดใหม่.jpg"; // ✅ ใส่ภาพพื้นหลังของป้ายเลขโฟร์

const API_URL = import.meta.env.VITE_API_URL; // ✅ ดึงค่า API URL จาก .env

export default function PagesPlatesQuadrupleDigit() {
  return (
    <>
      {/* ✅ Header สำหรับหน้านี้ */}
      <HeaderPagesPlatesQuadrupleDigit />

      <section className="bg-gradient-to-b from-[#111111] via-[#111111] to-[#000000] text-white py-12 font-tahoma">
        <div className="container mx-auto px-6 lg:px-20">
          {/* ⭐⭐⭐⭐⭐ Title */}
          <div className="text-center mb-6">
            <p className="text-yellow-400 text-xl">★★★★★</p>
            <p className="text-yellow-400 uppercase text-sm font-bold tracking-widest">www.muaylintabien.co</p>
          </div>

          {/* ✅ ส่ง API_URL และ cover ไปที่ PlatesQuadrupleDigit */}
          <PlatesQuadrupleDigit url={API_URL} cover={quadrupleDigitImage} />
        </div>
      </section>
    </>
  );
}