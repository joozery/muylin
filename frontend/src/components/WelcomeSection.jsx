import React from "react";
import welcomeImage1 from "../assets/better1.jpg"; // ✅ เปลี่ยนเป็น path รูปที่ใช้จริง
import welcomeImage2 from "../assets/better2.jpg"; // ✅ เปลี่ยนเป็น path รูปที่ใช้จริง

const WelcomeSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#0d0a0f] to-[#121212] text-white py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-8">
      {/* ✅ ข้อความด้านซ้าย */}
      <div className="lg:w-1/2">
        <p className="text-yellow-500 text-sm uppercase tracking-widest flex items-center">
          ★★★★★ MUAYLINTABIEN.CO
        </p>
        <h2 className="text-4xl md:text-5xl font-bold italic mt-2">หมวยหลินเบอร์สวยและทะเบียนสวย</h2>
        <p className="mt-4 text-lg">
          หมวยหลิน รับจัดหา เบอร์สวย ทะเบียนสวย 
        </p>
        <p className="mt-2 text-lg">
          เลข VVIP เลข VIP เลขโฟร์ เลขตอง เลขมงคล เลขมังกร เลขหงส์ เลขศ่าสตร์  
        </p>
        <p className="mt-2 text-lg">
          หมวยหลินเบอร์สวยทะเบียนสวยมีเบอร์มือถือให้เลือกว่า 1,000 เบอร์
        </p>
        <p className="mt-2 text-lg">
          มีทะเบียนให้เลือกมากว่า 3,000 ใบ
        </p>
        <p className="mt-2 text-lg">
          ทะเบียนทุกป้ายทะเบียนจาก muaylintabien.co เป็นทะเบียนที่ออกจากกรมการขนส่งทางบอก ถูกต้องตามกฏหมาย100%
        </p>
      </div>

      {/* ✅ รูปภาพด้านขวา */}
      <div className="lg:w-1/2 flex justify-start gap-4">
        <img src={welcomeImage1} alt="ทะเบียนสวย" className="rounded-lg shadow-lg w-1/2 max-w-sm" />
        <img src={welcomeImage2} alt="ทะเบียนรถหรู" className="rounded-lg shadow-lg w-1/2 max-w-sm" />
      </div>
    </section>
  );
};

export default WelcomeSection;