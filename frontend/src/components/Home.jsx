import React, { useState, useEffect } from 'react';
import './Home.css';
import slide1 from '../assets/slide1.webp';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.webp';
import logo from '../assets/logo.png';
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
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="display-3 text-white">
            บริการ รับซื้อ-ขาย เบอร์สวย เบอร์มงคล
          </h1>
          <p className="lead text-white">ติดต่อผ่านไลน์ @muaydata</p>
          <a href="#" className="cta-button btn btn-warning">
            ดูเบอร์ทั้งหมด
          </a>
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