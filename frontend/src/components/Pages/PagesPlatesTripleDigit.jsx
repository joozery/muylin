import React from "react";
import PlatesTripleDigit from "../Plates/PlatesTripleDigit"; // ✅ Import ไฟล์จากโฟลเดอร์ Plates
import HeaderPagesPlatesTripleDigit from "../Header/HeaderPagesPlatesTripleDigit"; // ✅ Import Header
import tripleDigitImage from "../../assets/ขาวดำเก่า.jpg"; // ✅ ใส่ภาพพื้นหลังของป้ายเลขตอง

const API_URL = import.meta.env.VITE_API_URL; // ✅ ดึงค่า API URL จาก .env

export default function PagesPlatesTripleDigit() {
  return (
    <>
      {/* ✅ Header สำหรับหน้านี้ */}
      <HeaderPagesPlatesTripleDigit />

      <section className="bg-gradient-to-b from-[#111111] via-[#111111] to-[#000000] text-white py-12 font-tahoma">
        <div className="container mx-auto px-6 lg:px-20">
          {/* ⭐⭐⭐⭐⭐ Title */}
          <div className="text-center mb-6">
            <p className="text-yellow-400 text-xl">★★★★★</p>
            <p className="text-yellow-400 uppercase text-sm font-bold tracking-widest">www.muaylintabien.co</p>
          </div>

          {/* ✅ ส่ง API_URL และ cover ไปที่ PlatesTripleDigit */}
          <PlatesTripleDigit url={API_URL} cover={tripleDigitImage} />
        </div>
      </section>
    </>
  );
}