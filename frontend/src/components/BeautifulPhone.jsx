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
      <section className="py-16 px-6 bg-black text-white text-center">
        {/* ⭐⭐⭐⭐⭐ Title */}
        <div className="mb-6">
          <p className="text-yellow-400 text-xl">★★★★★</p>
          <p className="text-yellow-400 uppercase text-sm font-bold tracking-widest">www.muaylintabien.co</p>
          <h2 className="text-4xl font-bold italic mt-2">เบอร์สวย</h2>
        </div>

        {/* 🔹 เบอร์สวย Grid (2 คอลัมน์ในมือถือ, 3 คอลัมน์ในหน้าจอใหญ่) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
          {phoneNumbers.map((phone) => (
            <div key={phone.id} className="border-4 border-[#FFD700] rounded-lg bg-white text-black shadow-lg relative">
              {/* Tag สถานะ */}
              <span
                className={`absolute top-2 right-2 px-3 py-1 text-sm rounded-lg text-white ${
                  phone.status === "มาใหม่" ? "bg-blue-600" :
                  phone.status === "ขายแล้ว" ? "bg-red-600" :
                  "bg-gray-500"
                }`}
              >
                {phone.status}
              </span>

              {/* ข้อมูลเบอร์ */}
              <h2 className="text-2xl font-bold">{phone.phone_number}</h2>
              <span className="text-sm text-gray-500">
                {phone.brand} {phone.total && `(${phone.total})`}
              </span>
              <span className="text-xl text-red-500 font-bold">
                {Number(phone.price).toLocaleString()} บาท
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BeautifulPhone;