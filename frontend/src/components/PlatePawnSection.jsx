import React from "react";
import pawnImage from "../assets/slide3.webp"; // ✅ เปลี่ยนเป็น path รูปที่ใช้จริง

const PlatePawnSection = () => {
  return (
    <section className="bg-[#121212] text-white px-3 py-8 flex flex-col lg:flex-row items-center gap-8">
      {/* ✅ ด้านซ้าย: ข้อความ */}
      <div className="lg:w-1/2 bg-[#121212]">
        <p className="text-yellow-500 text-sm uppercase tracking-widest flex items-center">
          ★★★★★ www.muaylintabien.co
        </p>
        <h2 className="text-4xl md:text-5xl font-bold italic mt-2">รับจำนำทะเบียนรถ</h2>
        <p className="mt-4 text-lg">
          หมวยหลิน รับจำนำทะเบียนรถ รับจำนำทะเบียนประมูล รับจำนำทะเบียนรถทุกประเภท
        </p>
        <p className="mt-2 text-lg">
          เราให้บริการรับจำนำทะเบียนรถทุกประเภท ติดต่อสอบถามรายละเอียดทางไลน์ หรือโทรคุยกับเราได้
        </p>
      </div>

      {/* ✅ ด้านขวา: รูปภาพ */}
      <div className="lg:w-1/2 flex justify-start">
          <img src={pawnImage} alt="รับจำนำทะเบียนรถ" className="rounded-lg w-full max-w-md" />
      </div>
    </section>
  );
};

export default PlatePawnSection;