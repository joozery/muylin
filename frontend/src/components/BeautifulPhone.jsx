import React, { useState, useEffect } from "react";
import BeautifulPhoneHeader from "../components/BeautifulPhoneHeader.jsx";
import bgImage from "../assets/ขาวดำเก่า.jpg"; // ✅ นำเข้าพื้นหลัง

const API_URL = import.meta.env.VITE_API_URL || "https://tabian-d0c5a982b10e.herokuapp.com/api";

const BeautifulPhone = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);

  useEffect(() => {
    const fetchPhoneNumbers = async () => {
      try {
        const response = await fetch(`${API_URL}/phone_numbers`);
        const data = await response.json();
        setPhoneNumbers(data);
      } catch (error) {
        console.error("❌ Error fetching phone numbers:", error);
      }
    };
    fetchPhoneNumbers();
  }, []);

  return (
    <div
      className="min-h-screen bg-black"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* 🔹 Header Section */}
      <BeautifulPhoneHeader />

      {/* 🔹 Section: เบอร์สวย Super VIP */}
      <section className="px-2 py-3 bg-black text-white text-center">
        {/* ⭐⭐⭐⭐⭐ Title */}
        <div className="mb-6">
          <p className="text-yellow-400 text-xl">★★★★★</p>
          <p className="text-yellow-400 uppercase text-sm font-bold tracking-widest">www.muaylintabien.co</p>
          <h2 className="text-4xl font-bold italic mt-2">เบอร์สวย</h2>
        </div>

        {/* 🔹 เบอร์สวย Grid (2 คอลัมน์ในมือถือ, 3 คอลัมน์ในหน้าจอใหญ่) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
          {phoneNumbers.map((phone) => (
            <div key={phone.id} className="border-3 border-blue-600 py-1 rounded-lg bg-white text-black shadow-lg relative">
              {/* Tag สถานะ */}
              <div
                className={`absolute top-0 right-0 px-[4px] py-[3px] text-[10px] rounded-l-md rounded-t-none text-white ${
                  phone.status === "มาใหม่" ? "bg-blue-600" :
                  phone.status === "ขายแล้ว" ? "bg-red-600" :
                  "bg-gray-500"
                }`}
              >
                {phone.status}
              </div>

              {/* ข้อมูลเบอร์ */}
              <div className="text-lg font-bold">{phone.phone_number}</div>
              <div className="text-sm text-gray-500">
                {phone.brand} {phone.total && `(${phone.total})`}
              </div>
              <div className="text-lg text-black font-bold">
                {Number(phone.price).toLocaleString()} บาท
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BeautifulPhone;