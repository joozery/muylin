import React, { useState, useEffect } from "react";
import BeautifulPhoneHeader from "../components/BeautifulPhoneHeader.jsx";
import bgImage from "../assets/ขาวดำเก่า.jpg"; // ✅ นำเข้าพื้นหลัง
import { GridLoader } from "react-spinners";

const API_URL = import.meta.env.VITE_API_URL;

const BeautifulPhone = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPhoneNumbers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}/phones/phone_numbers`);
        const data = await response.json();
        setPhoneNumbers(data);
      } catch (error) {
        console.error("❌ Error fetching phone numbers:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhoneNumbers();
  }, []);

  return (
    <div
      className="h-full bg-black"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔹 Header Section */}
      <BeautifulPhoneHeader />

      {/* 🔹 Section: เบอร์สวย Super VIP */}
      <section className="h-full px-2 py-3 bg-white text-black text-center">
        {/* ⭐⭐⭐⭐⭐ Title */}
        <div className="mb-6">
          <p className="text-yellow-400 text-xl">★★★★★</p>
          <p className="text-yellow-400 uppercase text-sm font-bold tracking-widest">
            www.muaylintabien.co
          </p>
          <h2 className="text-3xl font-bold mt-2">เบอร์สวย</h2>
        </div>

        {/* 🔹 เบอร์สวย Grid (2 คอลัมน์ในมือถือ, 3 คอลัมน์ในหน้าจอใหญ่) */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <GridLoader className="mx-auto" color="#591282" size={20} />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
            {phoneNumbers.map((phone) => (
              <div
                key={phone.id}
                className="border-3 border-blue-600 py-1 rounded-lg bg-white text-black shadow-md relative"
              >
                {/* Tag สถานะ */}
                <div
                  className={`absolute top-0 right-0 px-[4px] py-[3px] text-[10px] rounded-l-md rounded-t-none text-white ${
                    phone.status === "มาใหม่"
                      ? "bg-blue-600"
                      : phone.status === "ขายแล้ว"
                      ? "bg-red-600"
                      : "bg-gray-500"
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
        )}
      </section>
    </div>
  );
};

export default BeautifulPhone;
