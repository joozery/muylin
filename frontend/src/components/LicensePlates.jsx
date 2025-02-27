import React, { useState, useEffect } from "react";
import newImage from "../assets/หมวดใหม่.jpg";
import gold from "../assets/gold.jpg";
import PlatesSpecial from "./Plates/PlatesSpecial";
import PlatesNew from "./Plates/PlatesNew";
import PlatesGreen from "./Plates/PlatesGreen"; // ✅ Import ป้ายเขียว
import greenImage from "../assets/green.jpg"; // ✅ ใส่ภาพพื้นหลังของป้ายเขียว
import PlatesGraphicVan from "./Plates/PlatesGraphicVan"; // ✅ เพิ่ม component ป้ายรถตู้กราฟฟิค
import graphicVanCover from "../assets/ทะเบียนเขียว.jpg"; // ✅ รูปทะเบียนรถตู้กราฟฟิค
import PlatesMotorcycle from "./Plates/PlatesMotorcycle";
import motorcycleImage from "../assets/ทะเบียนรถมอเตอร์ไซด์.jpg"; // ✅ ใส่รูปพื้นหลังของป้ายมอเตอร์ไซค์
import PlatesSingleDigit from "./Plates/PlatesSingleDigit"; // ✅ เพิ่มทะเบียนเลขตัวเดียว
import singleDigitImage from "../assets/ขาวดำเก่า.jpg";
import PlatesDoubleDigit from "./Plates/PlatesDoubleDigit"; // ✅ เพิ่มทะเบียนเลขคู่
import doubleDigitImage from "../assets/ขาวดำเก่า.jpg"; // ✅ ใส่รูปพื้นหลังของทะเบียนเลขคู่

const API_URL = import.meta.env.VITE_API_URL;

export default function LicensePlates() {

    return (
        <section className="bg-gradient-to-b to-[#111111] text-white py-12 font-tahoma">
            <div className="container mx-auto px-6 lg:px-20">
                
                {/* ⭐⭐⭐⭐⭐ MUAY.LINTABIEN.CO */}
                <div className="text-center mb-6">
                    <p className="text-yellow-400 text-lg">★★★★★</p>
                    <p className="text-yellow-400 font-bold">MUAYLINTABIEN.CO</p>
                </div>

                {/* ✅ ป้ายประมูลหมวดใหม่ */}
                <PlatesNew cover={newImage} url={API_URL} />
                {/* ✅ ป้ายคิดเองลักษณะพิเศษ */}
                <PlatesSpecial cover={gold} url={API_URL} />
                {/* ✅ ป้ายเขียว */}
                <PlatesGreen cover={greenImage} url={API_URL} />
                 {/* ✅ ทะเบียนรถตู้กราฟฟิค */}
                 <PlatesGraphicVan cover={graphicVanCover} url={API_URL} /> 
                  {/* ✅ ป้ายทะเบียนรถมอเตอร์ไซค์ */}
                 <PlatesMotorcycle cover={motorcycleImage} url={API_URL} />
                 {/* ✅ ป้ายทะเบียนรถเลขตัวเดียว */}
                 <PlatesSingleDigit cover={singleDigitImage} url={API_URL} />
                 {/* ✅ ป้ายทะเบียนรถเลขคู่ */}
                 <PlatesDoubleDigit cover={doubleDigitImage} url={API_URL} />

            </div>
        </section>
    );
}
