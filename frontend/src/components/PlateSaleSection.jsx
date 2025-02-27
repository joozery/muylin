import React from "react";
import saleImage from "../assets/tabian.webp"; // ✅ อัปโหลดรูปภาพแล้วเปลี่ยน path

const PlateSaleSection = () => {
  return (
    <section className="bg-[#121212] text-white py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-8">
      {/* ✅ ด้านซ้าย: ข้อความ */}
      <div className="lg:w-1/2">
        <p className="text-yellow-500 text-sm uppercase tracking-widest flex items-center">
          ★★★★★ www.muaylintabien.co
        </p>
        <h2 className="text-4xl md:text-5xl font-bold italic mt-2">ขายทะเบียนสวย</h2>
        <p className="mt-4 text-lg">
          หมวยหลิน ขายทะเบียนสวย ขายทะเบียนประมูล ขายทะเบียนรถทุกประเภท
        </p>
        <p className="mt-2 text-lg">
          เราให้บริการจัดการ จัดจองทะเบียนรถตามที่ลูกค้าต้องการ หากลูกค้าต้องการทะเบียนสวย 
          สามารถแจ้งให้เราจัดหาให้ได้
        </p>
      </div>

      {/* ✅ ด้านขวา: รูปภาพ */}
      <div className="lg:w-1/2 flex justify-end">
        <img src={saleImage} alt="ขายทะเบียนสวย" className="rounded-lg shadow-lg w-full max-w-md" />
      </div>
    </section>
  );
};

export default PlateSaleSection;