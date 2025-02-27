import React from "react";
import PlatesMotorcycle from "../Plates/PlatesMotorcycle";
import HeaderPagesPlatesMotorcycle from "../Header/HeaderPagesPlatesMotorcycle"; // ✅ Import Header
import motorcycleBg from "../../assets/ทะเบียนรถมอเตอร์ไซด์.jpg"; // ✅ ใส่รูปพื้นหลัง

const API_URL = import.meta.env.VITE_API_URL; // ✅ ดึงค่า API URL จาก .env

export default function PagesPlatesMotorcycle() {
  return (
    <>
      {/* ✅ Header สำหรับหน้านี้ */}
      <HeaderPagesPlatesMotorcycle />

      <section className="bg-gradient-to-b from-[#111111] via-[#111111] to-[#000000] text-white py-12 font-tahoma">
        <div className="container mx-auto px-6 lg:px-20">
          {/* ⭐⭐⭐⭐⭐ Title */}
          <div className="text-center mb-6">
            <p className="text-yellow-400 text-xl">★★★★★</p>
            <p className="text-yellow-400 uppercase text-sm font-bold tracking-widest">www.muaylintabien.co</p>
            
          </div>

          {/* ✅ ส่ง API_URL และ cover ไปที่ PlatesMotorcycle */}
          <PlatesMotorcycle url={API_URL} cover={motorcycleBg} />
        </div>
      </section>
    </>
  );
}