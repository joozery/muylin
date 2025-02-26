import React from "react";
import sellPhoneImage from "../assets/slide3.webp"; // ✅ เปลี่ยนเป็น path รูปที่ใช้จริง

const SellBeautifulPhone = () => {
  return (
    <section className="bg-gradient-to-r from-[#0d0a0f] to-[#121212] text-white py-12 px-6 lg:px-20 flex flex-col lg:flex-row-reverse items-center gap-8">
      {/* ✅ ข้อความด้านซ้าย */}
      <div className="lg:w-1/2">
        <p className="text-yellow-500 text-sm uppercase tracking-widest flex items-center">
          ★★★★★ www.muaylintabien.co
        </p>
        <h2 className="text-4xl md:text-5xl font-bold italic mt-2">ขายเบอร์สวย</h2>
        <p className="mt-4 text-lg">
          หมวยหลิน ขายเบอร์สวย เบอร์วีไอพี เบอร์มงคล ทุกเครือข่าย
        </p>
        <p className="mt-2 text-lg">
          ลูกค้าที่ต้องการเบอร์สวย เบอร์วีไอพี เบอร์มงคล สามารถติดต่อสอบถามพีเบอร์เทพได้  
          เรายินดีจัดหาเบอร์ที่ต้องการให้ได้
        </p>
      </div>

      {/* ✅ รูปภาพด้านขวา */}
      <div className="lg:w-1/2 flex justify-start">
        <img src={sellPhoneImage} alt="ขายเบอร์สวย" className="rounded-lg shadow-lg w-full max-w-md" />
      </div>
    </section>
  );
};

export default SellBeautifulPhone;