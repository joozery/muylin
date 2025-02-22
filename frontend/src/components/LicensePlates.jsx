import React, { useState, useEffect } from "react";
import newImage from "../assets/หมวดใหม่.jpg";

const licensePlates = [
    { name: "4กผ8833", status: "จองแล้ว", price: "59,006" },
    { name: "1ขฬ2000", price: "59,006" },
    { name: "8กก7733", price: "69,006" },
    { name: "8กก3773", price: "69,006" },
    { name: "1กฌ7575", price: "69,006" },
    { name: "2ขฒ9696", price: "69,006" },
    { name: "4กธ4040", price: "79,006" },
    { name: "8กญ9090", price: "89,006" },
    { name: "9กค7000", price: "99,006" },
    { name: "1กจ7117", price: "99,006", badge: "24" },
    { name: "4กด6363", price: "99,006", badge: "24" },
    { name: "2ขศ5995", price: "109,006" },
    { name: "1ขอ5678", price: "119,006" },
    { name: "8กฉ5445", price: "120,006", badge: "32" },
    { name: "8กก5544", price: "125,006" },
    { name: "2ขศ1234", price: "129,006" },
    { name: "2ขศ2345", price: "129,006" },
    { name: "2ขศ5959", price: "129,006" },
    { name: "4กข2424", status: "จองแล้ว", badge: "19" },
    { name: "1ขข3456", price: "250,006", badge: "23" },
    { name: "2ขฒ4", price: "169,006" },
    { name: "3ขฉ2", price: "179,006" },
    { name: "3ขฌ222", price: "179,006" },
    { name: "3ขฌ444", price: "179,006" },
    { name: "2ขศ5", price: "249,006" },
    { name: "2ขย5", price: "249,006" },
    { name: "1กน4", price: "289,006" },
    { name: "2ขฉ99", price: "299,006" },
    { name: "2ขศ1", price: "329,006" },
    { name: "2ขฉ888", price: "399,006" },
    { name: "9กฬ4444", price: "399,006" },
    { name: "2ขฬ22", price: "399,006" },
    { name: "2ขศ2", price: "499,006" },
    { name: "9กค11", price: "499,006" },
    { name: "9กจ11", price: "499,006" },
    { name: "2ขห2222", price: "899,006" },
    { name: "2ขฬ2222", price: "899,006" },
    { name: "3ขฉ9999", price: "899,006", badge: "46" },
    { name: "9กศ9999", price: "6,999,996" },
    { name: "9กส9999", price: "6,999,996" },
    { name: "9กพ9999", price: "11,999,996", badge: "54" }
];

export default function LicensePlates() {
    const [filteredPlates, setFilteredPlates] = useState(licensePlates);

    useEffect(() => {
        const updateSearch = () => {
            const { keyword, sumOption } = window.searchParams || {};
            setFilteredPlates(
                licensePlates.filter(plate =>
                    (!keyword || plate.name.includes(keyword)) &&
                    (sumOption === "ทุกผลรวม" || plate.badge === sumOption)
                )
            );
        };

        window.addEventListener("searchUpdate", updateSearch);
        return () => window.removeEventListener("searchUpdate", updateSearch);
    }, []);

    return (
        <section className="bg-gradient-to-b to-[#111111] text-white py-12 font-tahoma">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {filteredPlates.length > 0 ? (
                        filteredPlates.map((plate, index) => (
                            <div key={index} className="relative text-center p-6 rounded-lg bg-cover bg-center shadow-lg"
                                 style={{ backgroundImage: `url(${newImage})` }}>
                                
                                {/* แสดงป้าย "จองแล้ว" ถ้ามี */}
                                {plate.status && (
                                    <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-3 text-sm rounded-tl-lg">
                                        {plate.status}
                                    </div>
                                )}

                                {/* หมายเลขทะเบียน */}
                                <p className="text-2xl text-black font-semibold">{plate.name}</p>

                                {/* ราคา */}
                                {plate.price && <p className="text-xl mt-2 text-black font-semibold">{plate.price}</p>}

                                {/* แสดง Badge ตัวเลขจากวงเล็บ */}
                                {plate.badge && (
                                    <div className="absolute bottom-2 right-2 text-white bg-yellow-600 px-2 py-1 rounded-full text-xs">
                                        {plate.badge}
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