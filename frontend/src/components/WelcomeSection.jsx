import React from "react";
import welcomeImage1 from "../assets/better1.jpg"; // ✅ เปลี่ยนเป็น path รูปที่ใช้จริง
import welcomeImage2 from "../assets/better2.jpg"; // ✅ เปลี่ยนเป็น path รูปที่ใช้จริง

const WelcomeSection = () => {
  return (
    <section className="bg-black h-full grid grid-cols-1 md:grid-cols-2 justify-between text-white py-12 px-6 lg:px-8 items-center gap-10">
      {/* ✅ ข้อความด้านซ้าย */}
      <div className="justify-center text-center">
        {/* <p className="text-yellow-500 text-sm uppercase tracking-widest flex items-center">
          ★★★★★ MUAYLINTABIEN.CO
        </p> */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4">
          หมวยหลินเบอร์สวยทะเบียนสวย
        </p>
        <div className="flex flex-col space-y-6">
          <span className="text-center">
            บริกาจัด หาเบอร์สวย และทะเบียนสวย
            <br />
            เลข VVIP เลขVIP
            <br />
            เลขเดี่ยว เลขคู่ เลขตอง เลขโฟร์
            <br />
            เลขมังกร เลขหงส์ เลขมงคล เลขศาสตร์
          </span>
          <span className="text-center">
            มีเบอร์สวยให้เลือกกว่า 1,000 เบอร์
            <br />
            มีทะเบียนสวยให้เลือกมากกว่า 3,000 ใบ
          </span>
          <span className="text-center">
            ทะเบียนทุกใบจาก muaylintabien.co
            <br />
            เป็นทะเบียนที่ออกจากกรมการขนส่งทางบก
            <br />
            ถูกต้องตามกฏหมาย 100%
          </span>
        </div>
      </div>

      {/* ✅ รูปภาพด้านขวา */}
      <div className="flex justify-center gap-3">
        <img
          src={welcomeImage1}
          alt="ทะเบียนสวย"
          className="rounded-lg shadow-lg w-1/2 max-w-sm"
        />
        <img
          src={welcomeImage2}
          alt="ทะเบียนรถหรู"
          className="rounded-lg shadow-lg w-1/2 max-w-sm"
        />
      </div>

      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">MUAYLINTABIEN</span>
        <span>CALL: 096-396-2888 | LINE: MUAYDATA</span>
      </div>
    </section>
  );
};

export default WelcomeSection;
