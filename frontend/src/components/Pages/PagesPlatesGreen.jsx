import React from "react";
import PlatesGreen from "../Plates/PlatesGreen";
import HeaderPagesPlatesGreen from "../Header/HeaderPagesPlatesGreen"; // ✅ Import Header
import greenImage from "../../assets/green.jpg"; // ✅ ใส่ภาพพื้นหลังของป้ายเขียว

const API_URL = import.meta.env.VITE_API_URL; // ✅ ดึงค่า API URL จาก .env

export default function PagesPlatesGreen() {
  return (
    <>
      {/* ✅ Header สำหรับหน้านี้ */}
      <HeaderPagesPlatesGreen />

      <section className="bg-gradient-to-b from-[#111111] via-[#111111] to-[#000000] text-white py-12 font-tahoma">
        <div className="container mx-auto px-6 lg:px-20">
          {/* ⭐⭐⭐⭐⭐ Title */}
          <div className="text-center mb-6">
            <p className="text-yellow-400 text-xl">★★★★★</p>
            <p className="text-yellow-400 uppercase text-sm font-bold tracking-widest">www.muaylintabien.co</p>
          </div>

          {/* ✅ ส่ง API_URL และ cover ไปที่ PlatesGreen */}
          <PlatesGreen url={API_URL} cover={greenImage} />
        </div>
      </section>
    </>
  );
}