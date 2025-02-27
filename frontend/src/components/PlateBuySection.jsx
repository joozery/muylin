import React from "react";
import buyImage from "../assets/pexels-photo-3764984.jpeg"; // ✅ เปลี่ยนเป็น path รูปที่ใช้จริง

const PlateBuySection = () => {
  return (
    <section className="bg-gradient-to-r from-[#0d0a0f] to-[#121212] text-white py-12 px-6 lg:px-20 flex flex-col lg:flex-row-reverse items-center gap-8">
      {/* ✅ ด้านซ้าย: ข้อความ */}
      <div className="lg:w-1/2">
        <p className="text-yellow-500 text-sm uppercase tracking-widest flex items-center">
          ★★★★★ www.muaylintabien.co
        </p>
        <h2 className="text-4xl md:text-5xl font-bold italic mt-2">รับซื้อทะเบียนสวย</h2>
        <p className="mt-4 text-lg">
          หมวยหลิน รับซื้อทะเบียนสวย รับซื้อทะเบียนประมูล รับซื้อทะเบียนรถทุกประเภท
        </p>
        <p className="mt-2 text-lg">
          ลูกค้าที่ต้องการขายทะเบียนสวย เรายินดีรับซื้อทะเบียนสวยของรถทุกประเภท ทุกจังหวัด  
          แอดไลน์ติดต่อสอบถาม หรือโทรคุยกับเราได้
        </p>
      </div>

      {/* ✅ ด้านขวา: รูปภาพ */}
      <div className="lg:w-1/2 flex justify-start">
        <img src={buyImage} alt="รับซื้อทะเบียนสวย" className="rounded-lg shadow-lg w-full max-w-md" />
      </div>
    </section>
  );
};

export default PlateBuySection;