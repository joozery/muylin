import React from "react";
import buyPhoneImage from "../assets/21759_m.jpg"; // ✅ อัปโหลดรูปภาพแล้วเปลี่ยน path

const BuyBeautifulPhone = () => {
  return (
    <section className="bg-[#121212] text-white py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-8">
      {/* ✅ ข้อความด้านซ้าย */}
      <div className="lg:w-1/2">
        <p className="text-yellow-500 text-sm uppercase tracking-widest flex items-center">
          ★★★★★ www.muaylintabien.co
        </p>
        <h2 className="text-4xl md:text-5xl font-bold italic mt-2">รับซื้อเบอร์สวย</h2>
        <p className="mt-4 text-lg">
          หมวยหลิน รับซื้อเบอร์สวย รับซื้อเบอร์วีไอพี
        </p>
        <p className="mt-2 text-lg">
          สำหรับลูกค้าที่ต้องการขายเบอร์สวย หรือเบอร์วีไอพี  
          สามารถติดต่อสอบถามเพื่อประเมินราคากับเราได้
        </p>
      </div>

      {/* ✅ รูปภาพด้านขวา */}
      <div className="lg:w-1/2 flex justify-start">
        <img src={buyPhoneImage} alt="รับซื้อเบอร์สวย" className="rounded-lg  w-full max-w-md" />
      </div>
    </section>
  );
};

export default BuyBeautifulPhone;