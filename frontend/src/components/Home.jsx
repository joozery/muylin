import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // ✅ เพิ่มการนำเข้า Link จาก react-router-dom
import './Home.css';
import slide1 from '../assets/slide1.webp';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.webp';
import SearchForm from './SearchForm';
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
          <h1 className="display-3 text-white font-bold italic">
            muaylintabien
          </h1>
          <h2 className="text-white text-xl mt-2">
            "หมวยหลิน เบอร์สวย ทะเบียนสวย"
          </h2>
          <p className="lead text-white">บริการจัดหา เบอร์สวยและทะเบียนสวย</p>
          <p className="lead text-white">รับซื้อ-ขาย-ฝากขาย | เบอร์สวย-ทะเบียนสวย</p>
          <p className="lead text-white">ติดต่อสอบถามเพิ่มเติม</p>
          <p className="lead text-white">LINE: <strong>@muaydata</strong></p>
          <p className="lead text-white">(มีบัญชีเดียวเท่านั้น)</p>

          {/* ✅ ปุ่ม "ดูเบอร์ทั้งหมด" และ "ดูทะเบียนทั้งหมด" */}
          <div className="cta-buttons flex justify-center gap-4 mt-4">
            <Link to="/beautiful-phone" className="btn-yellow">
              ดูเบอร์ทั้งหมด
            </Link>
            <a href="#" className="btn-purple">ดูทะเบียนทั้งหมด</a>
          </div>
        </div>
      </section>

      {/* ✅ Section: Welcome */}
      <section className="welcome-section">
          <WelcomeSection />
      </section>

      {/* Section: Search Form */}
      <section className="search-section">
        <div className="container">
          <SearchForm />
        </div>
      </section>

      {/* Section: License Plates */}
      <section className="license-plates-section py-12 bg-[#111111]">
        <div className="container mx-auto px-6 lg:px-20">
          <LicensePlates />
        </div>
      </section>
    </main>
  );
};

export default Home;