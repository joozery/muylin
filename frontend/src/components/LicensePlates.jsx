import React, { useState, useEffect } from "react";
import newImage from "../assets/หมวดใหม่.jpg";
import gold from "../assets/gold.jpg";

const API_URL = import.meta.env.VITE_API_URL || "https://tabian-d0c5a982b10e.herokuapp.com/api";

export default function LicensePlates() {
    const [platesNew, setPlatesNew] = useState([]);
    const [filteredPlatesNew, setFilteredPlatesNew] = useState([]);

    const [platesSpecial, setPlatesSpecial] = useState([]);
    const [filteredPlatesSpecial, setFilteredPlatesSpecial] = useState([]);

    // ✅ ดึงข้อมูลป้ายประมูลหมวดใหม่
    useEffect(() => {
        const fetchPlatesNew = async () => {
            try {
                const response = await fetch(`${API_URL}/plates_new`);
                if (!response.ok) throw new Error("Failed to fetch plates");
                const data = await response.json();
                setPlatesNew(data);
                setFilteredPlatesNew(data);
            } catch (error) {
                console.error("❌ Error fetching plates:", error);
            }
        };
        fetchPlatesNew();
    }, []);

    // ✅ ดึงข้อมูลป้ายคิดเองลักษณะพิเศษ
    useEffect(() => {
        const fetchPlatesSpecial = async () => {
            try {
                const response = await fetch(`${API_URL}/plates_special`);
                if (!response.ok) throw new Error("Failed to fetch plates");
                const data = await response.json();
                setPlatesSpecial(data);
                setFilteredPlatesSpecial(data);
            } catch (error) {
                console.error("❌ Error fetching plates:", error);
            }
        };
        fetchPlatesSpecial();
    }, []);

    return (
        <section className="bg-gradient-to-b to-[#111111] text-white py-12 font-tahoma">
            <div className="container mx-auto px-6 lg:px-20">
                
                {/* ⭐⭐⭐⭐⭐ MUAY.LINTABIEN.CO */}
                <div className="text-center mb-6">
                    <p className="text-yellow-400 text-lg">★★★★★</p>
                    <p className="text-yellow-400 font-bold">MUAY.LINTABIEN.CO</p>
                </div>

                {/* ✅ ป้ายประมูลหมวดใหม่ */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold italic">ป้ายประมูลหมวดใหม่</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {filteredPlatesNew.length > 0 ? (
                        filteredPlatesNew.map((plate, index) => (
                            <div key={index} className="relative text-center p-6 rounded-lg bg-cover bg-center shadow-lg"
                                 style={{ backgroundImage: `url(${newImage})` }}>
                                
                                {/* แสดงป้าย "จองแล้ว" ถ้ามี */}
                                {plate.status && (
                                    <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-3 text-sm rounded-tl-lg">
                                        {plate.status}
                                    </div>
                                )}

                                {/* หมายเลขทะเบียน */}
                                <p className="text-2xl text-black font-semibold">{plate.plate}</p>

                                {/* แสดงราคา */}
                                {plate.price && (
                                    <p className="text-lg text-black font-semibold mt-2">{plate.price.toLocaleString()} </p>
                                )}

                                {/* แสดงเลขผลรวม */}
                                {plate.total && (
                                    <div className="absolute bottom-2 right-2 text-white bg-yellow-600 px-2 py-1 rounded-full text-xs">
                                        {plate.total}
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-400 col-span-4">❌ ไม่พบผลลัพธ์ที่ตรงกับการค้นหา</p>
                    )}
                </div>

                {/* ✅ ป้ายคิดเองลักษณะพิเศษ */}
                <div className="text-center mt-12 mb-6">
                    <h2 className="text-2xl font-bold italic">ป้ายคิดเองลักษณะพิเศษ</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {filteredPlatesSpecial.length > 0 ? (
                        filteredPlatesSpecial.map((plate, index) => (
                            <div key={index} className="relative text-center p-6 rounded-lg bg-cover bg-center shadow-lg"
                                 style={{ backgroundImage: `url(${gold})` }}>
                                
                                {/* แสดงป้าย "จองแล้ว" ถ้ามี */}
                                {plate.status && (
                                    <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-3 text-sm rounded-tl-lg">
                                        {plate.status}
                                    </div>
                                )}

                                {/* หมายเลขทะเบียน */}
                                <p className="text-2xl text-black font-semibold">{plate.plate}</p>

                                {/* แสดงราคา */}
                                {plate.price && (
                                    <p className="text-lg text-black font-semibold mt-2">{plate.price.toLocaleString()} </p>
                                )}

                                {/* แสดงเลขผลรวม */}
                                {plate.total && (
                                    <div className="absolute bottom-2 right-2 text-white bg-yellow-600 px-2 py-1 rounded-full text-xs">
                                        {plate.total}
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-400 col-span-4">❌ ไม่พบผลลัพธ์ที่ตรงกับการค้นหา</p>
                    )}
                </div>

            </div>
        </section>
    );
}
