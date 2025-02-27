import React from "react";
import PlatesDoubleDigit from "../Plates/PlatesDoubleDigit";
import doubleDigitImage  from "../../assets/ขาวดำเก่า.jpg"; // ✅ ใส่ภาพพื้นหลังของป้ายเขียว

const API_URL = import.meta.env.VITE_API_URL; // ✅ ดึงค่า API URL จาก .env

export default function PagesPlatesDoubleDigit() {
  return (
    <section className="bg-gradient-to-b from-[#111111] via-[#111111] to-[#000000] text-white py-12 font-tahoma">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold italic">ทะเบียนรถเลขคู่</h2>
        </div>
        <PlatesDoubleDigit url={API_URL} cover={doubleDigitImage} />
      </div>
    </section>
  );
}