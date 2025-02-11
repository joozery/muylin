import React from "react";
import newImage from "../assets/หมวดใหม่.jpg"; // นำเข้าภาพ

const licensePlates = [
    { name: "4กผ8833", status: "ติดจอง", price: "1ขฬ2000" },
    { name: "59,006", price: "69,006" },
    { name: "8กก7733", price: "69,006" },
    { name: "8กก3773", price: "69,006" },
    { name: "1กฌ7575", price: "69,006" },
    { name: "2ขฒ9696", price: "69,006" },
    { name: "4กธ4040", price: "79,006" },
    { name: "8กญ9090", price: "89,006" },
    { name: "9กค7000", price: "99,006" },
    { name: "1กจ7117 (24)", price: "99,006" },
    { name: "4กด6363(24)", price: "99,006" },
    { name: "2ขศ5995", price: "109,006" },
    { name: "1ขอ5678", price: "119,006" },
    { name: "8กฉ5445(32)", price: "120,006" },
    { name: "8กก5544", price: "125,006" },
    { name: "2ขศ1234", price: "129,006" },
    { name: "2ขศ2345", price: "129,006" },
    { name: "2ขศ5959", price: "129,006" },
    { name: "4กข2424(19)", status: "ติดจอง", price: "1ขข3456(23)" },
    { name: "250,006", price: "169,006" },
    { name: "3ขฉ2", price: "179,006" },
    { name: "3ขฌ222", price: "179,006" },
    { name: "3ขฌ444", price: "179,006" },
    { name: "2ขศ5", price: "249,006" },
    { name: "2ขย5", price: "249,006" },
    { name: "1กน4", price: "289,006" },
    { name: "2ขฉ99", price: "299,006" },
    { name: "2ขศ1", price: "329,006" },
    { name: "2ขฉ888", price: "399,006" },
    { name: "9กฬ4444", price: "399,006" },
    { name: "2ขฬ22", price: "399,006" },
    { name: "2ขศ2", price: "499,006" },
    { name: "9กค11", price: "499,006" },
    { name: "9กจ11", price: "499,006" },
    { name: "2ขห2222", price: "899,006" },
    { name: "2ขฬ2222", price: "899,006" },
    { name: "3ขฉ9999(46)", price: "899,006" },
    { name: "9กศ9999", price: "6,999,996" },
    { name: "9กส9999", price: "6,999,996" },
    { name: "9กพ9999 (54)", price: "11,999,996" }
];

export default function LicensePlates() {
  return (
    <section className="from-[#1a0d22] to-[#111111] text-white py-12 font-prompt">
      <div className="container mx-auto px-6 lg:px-20">
        {/* หัวข้อ */}
        <div className="text-left max-w-3xl mx-0 pl-10">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-yellow-500 tracking-wide uppercase text-sm">muaylintabien.co</p>
          <h2 className="text-3xl md:text-4xl font-bold italic mt-2">ทะเบียนสวย หมวดใหม่</h2>
        </div>

        {/* รายการทะเบียน */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {licensePlates.map((plate, index) => (
            <div
              key={index}
              className="relative text-center p-6 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${newImage})` }} // ใช้ภาพที่นี่
            >
              {/* ป้าย NEW */}
              <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-3 text-sm rounded-tl-lg">
                จองแล้ว
              </div>
              <p className="text-4xl text-black font-semibold">{plate.name}</p>
              <p className="text-2xl mt-2 text-gray-700 font-semibold">{plate.location}</p>
              <p className="text-xl mt-2 text-black font-semibold">{plate.price}</p>
              <div className="absolute bottom-2 right-2 text-white bg-yellow-600 px-2 py-1 rounded-full text-xs">
                29
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}