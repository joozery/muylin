import React from "react";
import CustomerHeader from "../components/CustomerHeader"; // ✅ Import Header
import customer1 from "../assets/customer1.jpg"; // ✅ เพิ่มรูปภาพ
import customer2 from "../assets/customer2.jpg"; // ✅ เพิ่มรูปภาพ

export default function Customers() {
  return (
    <>
      {/* ✅ Header */}
      <CustomerHeader />

      {/* ✅ Section ลูกค้าของเรา */}
      <section className="bg-[#111111] text-white py-12 px-6 lg:px-20">
        <div className="container mx-auto">
          {/* หัวข้อ */}
          <div className="text-left">
            <p className="text-yellow-500 uppercase text-sm tracking-widest">OUR CUSTOMERS</p>
            <h2 className="text-3xl md:text-4xl font-bold italic mt-2">ลูกค้าบางส่วนของเรา</h2>
          </div>

          {/* ✅ แสดงภาพลูกค้า */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <img src={customer1} alt="ลูกค้า 1" className="rounded-lg shadow-lg" />
            <img src={customer2} alt="ลูกค้า 2" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </>
  );
}