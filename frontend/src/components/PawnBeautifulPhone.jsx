import React from "react";
import pawnPhoneImage from "../assets/Average Weight Of A Car.webp"; // ✅ เปลี่ยนเป็น path รูปจริง

const PawnBeautifulPhone = () => {
  return (
    <section className="bg-gradient-to-r from-[#0d0a0f] to-[#121212] text-white py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-8">
      {/* ✅ รูปภาพด้านซ้าย */}
      <div className="lg:w-1/2 flex justify-start">
        <img src={pawnPhoneImage} alt="รับจำนำเบอร์สวย" className="rounded-lg shadow-lg w-full max-w-md" />
      </div>

      {/* ✅ ข้อความด้านขวา */}
      <div className="lg:w-1/2">
        <p className="text-yellow-500 text-sm uppercase tracking-widest flex items-center">
          ★★★★★  www.muaylintabien.co
        </p>
        <h2 className="text-4xl md:text-5xl font-bold italic mt-2">รับจำนำเบอร์สวย</h2>
        <p className="mt-4 text-lg">
          หมวยหลิน รับจำนำเบอร์สวย รับจำนำเบอร์วีไอพี ให้ราคาสูง
        </p>
        <p className="mt-2 text-lg">
          เรารับจำนำเบอร์สวย รับจำนำเบอร์วีไอพี ให้ราคาสูง สนใจติดต่อทางไลน์ หรือโทรติดต่อได้
        </p>
      </div>
    </section>
  );
};

export default PawnBeautifulPhone;