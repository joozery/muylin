import React, { useState, useEffect } from "react";
import newImage from "../assets/หมวดใหม่.jpg";
import gold from "../assets/gold.jpg";
import PlatesSpecial from "./Plates/PlatesSpecial";
import PlatesNew from "./Plates/PlatesNew";

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



            </div>
        </section>
    );
}
