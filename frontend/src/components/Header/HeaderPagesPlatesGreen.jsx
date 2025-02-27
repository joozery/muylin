import React from "react";
import greenPlateBanner from "../../assets/cover.webp"; 

export default function HeaderPagesPlatesGreen() {
  return (
    <section className="relative h-[300px] md:h-[400px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${greenPlateBanner})` }} 
      ></div>
      <div className="absolute inset-0 bg-[#260c35] bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 lg:px-20 text-white">
        <p className="text-sm uppercase tracking-widest opacity-75">GREEN PLATE</p>
        <h1 className="text-4xl md:text-5xl font-bold italic">ทะเบียนรถกะบะป้ายเขียว</h1>
      </div>
    </section>
  );
}