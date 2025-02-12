import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import contactImage from "../assets/slide2.jpg"; // ✅ ใช้รูปภาพ
import ContactHeader from "../components/Contactsection"; // ✅ เส้นทางถูกต้อง

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-[#260c35] to-[#111111] text-white font-prompt">
      {/* Header Section */}
      <ContactHeader />

      {/* Main Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* ข้อมูลติดต่อ */}
          <div className="space-y-6">
            <div className="text-left">
              <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
              <p className="text-yellow-500 tracking-wide uppercase text-sm">MUAYLINTABIEN.CO</p>
              <h2 className="text-3xl md:text-4xl font-bold italic mt-2 text-white-400">
                ติดต่อ หมวยหลิน
              </h2>
              <p className="mt-4 text-gray-300">
                ลูกค้าสามารถติดต่อสอบถาม ติดต่อลงทะเบียน หรือเบอร์ได้หลายช่องทาง เราพร้อมให้บริการทุกท่าน
              </p>
            </div>

            <div className="space-y-4">
              <p className="flex items-center space-x-3 text-lg">
                <FaPhoneAlt className="text-purple-400" />
                <span className="font-semibold text-white-400">096-396-2888</span>
              </p>

              <p className="flex items-center space-x-3 text-lg">
                <FaEnvelope className="text-purple-400" />
                <span className="font-semibold text-white-400">@muaydata</span>
              </p>

              <p className="flex items-center space-x-3 text-lg">
                <FaGlobe className="text-purple-400" />
                <span className="font-semibold text-white-400">MUAYLINTABIEN.CO</span>
              </p>
            </div>
          </div>

          {/* รูปภาพ */}
          <div className="flex justify-center">
            <img 
              src={contactImage} 
              alt="ติดต่อหมวยหลิน" 
              className="rounded-lg shadow-lg w-full max-w-md border-4 border-purple-200"
            />
          </div>
        </div>
      </section>
    </div>
  );
}