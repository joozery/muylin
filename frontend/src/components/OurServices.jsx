import React from "react";
import OurServiceHeader from "../components/OurServiceHeader";
import PlateSaleSection from "../components/PlateSaleSection"; // ✅ Section ขายทะเบียน
import PlateBuySection from "../components/PlateBuySection"; // ✅ Section รับซื้อทะเบียน
import PlatePawnSection from "../components/PlatePawnSection"; // ✅ Import Section รับจำนำทะเบียน
import SellBeautifulPhone from "../components/SellBeautifulPhone"; // ✅ Import Section ขายเบอร์สวย
import BuyBeautifulPhone from "../components/BuyBeautifulPhone"; // ✅ Import Section รับซื้อเบอร์สวย
import PawnBeautifulPhone from "../components/PawnBeautifulPhone"; // ✅ Import Section รับจำนำเบอร์สวย


const OurServices = () => {
  return (
    <div>
      {/* 🔹 ส่วนหัว */}
      <OurServiceHeader />

      {/* 🔹 Section ขายทะเบียนสวย */}
      <PlateSaleSection />

      {/* 🔹 Section รับซื้อทะเบียนสวย */}
      <PlateBuySection />

      {/* 🔹 Section: รับจำนำทะเบียนรถ */}
      <PlatePawnSection />

      {/* 🔹 Section: ขายเบอร์สวย */}
      <SellBeautifulPhone />

        {/* 🔹 Section: รับซื้อเบอร์สวย */}
         <BuyBeautifulPhone />
         <PawnBeautifulPhone />
    </div>
  );
};

export default OurServices;