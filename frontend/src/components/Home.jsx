import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ เพิ่มการนำเข้า Link จาก react-router-dom
import "./Home.css";
import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.webp";
import SearchForm from "./SearchForm";
import LicensePlates from "./LicensePlates"; // นำเข้า LicensePlates
import WelcomeSection from "../components/WelcomeSection"; // ✅ นำเข้า WelcomeSection

const Home = () => {
  // State สำหรับการแสดงภาพ Slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3]; // รวมภาพทั้งหมดใน Slider

  // ใช้ useEffect สำหรับเปลี่ยนภาพ Slider ทุก 5 วินาที
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#search") {
      const element = document.getElementById("search");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main>
      {/* Section: Hero / Header */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${slides[currentSlide]})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          {/* ✅ เอารูปโลโก้ออก และเปลี่ยนเป็นข้อความ */}
          <h1 className="text-white font-bold text-uppercase mb-0">
            muaylintabien
          </h1>
          <h2 className="text-white text-xl mb-4">
            "หมวยหลิน เบอร์สวย ทะเบียนสวย"
          </h2>

          <span className="text-3xl text-white mb-3">
            รับซื้อ - ขาย - ฝากขาย
          </span>
          <span className="text-xl text-white">เบอร์สวย | ทะเบียนสวย</span>
          {/* <p className="lead text-white">บริการจัดหา เบอร์สวยและทะเบียนสวย</p>
          <p className="lead text-white">รับซื้อ-ขาย-ฝากขาย | เบอร์สวย-ทะเบียนสวย</p>
          <p className="lead text-white">ติดต่อสอบถามเพิ่มเติม</p>
          <p className="lead text-white">LINE: <strong>@muaydata</strong></p>
          <p className="lead text-white">(มีบัญชีเดียวเท่านั้น)</p> */}

          {/* ✅ ปุ่ม "ดูเบอร์ทั้งหมด" และ "ดูทะเบียนทั้งหมด" */}
          <div className="flex flex-col justify-center gap-4 my-16">
            <Link to="/beautiful-phone" className="bg-black px-[25px] hover:scale-105 duration-300 font-bold py-[12px] rounded-lg text-lg text-white no-underline">
              เบอร์มือถือทั้งหมด
            </Link>
            <a href="#" className="bg-black px-[25px] hover:scale-105 duration-300 font-bold py-[12px] rounded-lg text-lg text-white no-underline">
              ทะเบียนทั้งหมด
            </a>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-white text-2xl">ติดต่อสอบถามเพิ่มเติมได้ที่:<br/>
            CALL: 096-396-2888 | LINE: MUAYDATA</p>
          </div>
        </div>
      </section>

      {/* ✅ Section: Welcome */}
      <section className="welcome-section">
        <WelcomeSection />
      </section>

      {/* Section: Search Form */}
      <section className="w-full bg-[#f4edf6">
        <div className="">
          <SearchForm />
        </div>
      </section>

      {/* Section: License Plates */}
    </main>
  );
};

export default Home;
