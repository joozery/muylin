import React from "react";
import serviceBanner from "../assets/cover.webp"; // ✅ ใช้รูปปกที่ต้องการ

export default function OurServiceHeader() {
  return (
    <section className="relative h-[300px] md:h-[400px] w-full">
      {/* รูปพื้นหลัง */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${serviceBanner})` }} 
      ></div>

      {/* Overlay สีดำโปร่งแสง */}
      <div className="absolute inset-0 bg-[#260c35] bg-opacity-50"></div>

      {/* ข้อความ */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 lg:px-20 text-white"
           style={{ fontFamily: "Tahoma, sans-serif" }}> {/* ✅ ใช้ Tahoma */}
        <p className="text-sm uppercase tracking-widest opacity-75">OUR SERVICES</p>
        <h1 className="text-4xl md:text-5xl font-bold italic">บริการของเรา</h1>
      </div>
    </section>
  );
}