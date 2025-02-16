import React, { useState } from "react";
import './SearchForm.css';

function SearchForm() {
    const [keyword, setKeyword] = useState("");
    const [number, setNumber] = useState("");
    const [sumOption, setSumOption] = useState("ทุกผลรวม");
    const [priceRange, setPriceRange] = useState("ทุกช่วงราคา");
    const [category, setCategory] = useState("ทุกหมวดหมู่");

    const categoryOptions = [
        "ทุกหมวดทะเบียน",
        "โปรโมชั่น รถกระบะตอนเดียว หรือแค็บ (รย.3)",
        "โปรโมชั่น รถเก๋ง SUV กระบะ 4 ประตู",
        "โปรโมชั่น รถตู้ ป้ายฟ้า 11 ที่นั่ง (รย.2)",
        "ผลรวม สุดปัง",
        "แนะนำ ประจำเดือน กุมภาพันธ์ 2025",
        "Rare item",
        "Super VIP",
        "VIP",
        "หมวดพิเศษ คัดเอง",
        "หมวดเก่าแนะนำ",
        "เลข 8/9",
        "เลขเรียง",
        "เลขพัน",
        "สวย ไม่มีประมูล",
        "เลขสลับ",
        "เลขหาม",
        "เลขคู่",
        "รถตู้ ป้ายฟ้า 11 ที่นั่ง VIP (รย.2)",
        "รถตู้ ป้ายฟ้า 11 ที่นั่ง (รย.2)",
        "กระบะ VIP ตอนเดียว & แค็บ (รย.3)",
        "กระบะตอนเดียว & แค็บ เลข 8/9 (รย.3)",
        "กระบะตอนเดียว & แค็บ เรียง (รย.3)",
        "กระบะตอนเดียว & แค็บ เลขพัน (รย.3)",
        "กระบะตอนเดียว & แค็บ เลขสลับ (รย.3)",
        "กระบะตอนเดียว & แค็บ เลขหาม (รย.3)",
        "กระบะตอนเดียว & แค็บ เลขคู่ (รย.3)",
        "ต่างจังหวัด",
        "มอเตอร์ไซค์"
    ];

    const sumOptions = ["ทุกผลรวม", 9, 10, 14, 15, 16, 18, 19, 20, 23, 24, 25, 26, 28, 29, 32];

    // ✅ ฟังก์ชันกดค้นหา (ส่งค่าผ่าน window)
    const handleSearch = () => {
        window.searchParams = { keyword, number, sumOption, priceRange, category };
        window.dispatchEvent(new Event("searchUpdate")); // แจ้งเตือน `LicensePlates.jsx`
    };

    // ✅ ฟังก์ชันล้างค่าทั้งหมด
    const handleReset = () => {
        setKeyword("");
        setNumber("");
        setSumOption("ทุกผลรวม");
        setPriceRange("ทุกช่วงราคา");
        setCategory("ทุกหมวดหมู่");

        window.searchParams = { keyword: "", number: "", sumOption: "ทุกผลรวม", priceRange: "ทุกช่วงราคา", category: "ทุกหมวดหมู่" };
        window.dispatchEvent(new Event("searchUpdate")); // แจ้งเตือน `LicensePlates.jsx`
    };

    return (
        <div className="search-form">
            <h2>ค้นหาเลขทะเบียน</h2>
            <div className="search-inputs">
                <input
                    type="text"
                    placeholder="ใส่ตัวเลข หรือ อักษร เช่น 1กข หรือ มท"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
                
                <input
                    type="text"
                    placeholder="ใส่ตัวเลข เช่น 8, 88, 888, 8888"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />

                <select value={sumOption} onChange={(e) => setSumOption(e.target.value)}>
                    {sumOptions.map((sum, index) => (
                        <option key={index} value={sum}>{sum}</option>
                    ))}
                </select>

                <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                    <option value="ทุกช่วงราคา">ทุกช่วงราคา</option>
                    <option value="ต่ำกว่า 1,000 บาท">ต่ำกว่า 1,000 บาท</option>
                    <option value="1,000 - 10,000 บาท">1,000 - 10,000 บาท</option>
                    <option value="มากกว่า 10,000 บาท">มากกว่า 10,000 บาท</option>
                </select>

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    {categoryOptions.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>

                <div className="search-buttons">
                    <button onClick={handleSearch}>🔍 ค้นหา</button>
                    <button onClick={handleReset}>❌ ล้างค่า</button>
                </div>
            </div>

            <div className="additional-buttons">
                <button>ดูดวงทะเบียนรถ</button>
                <button>เบอร์โทรเลขสวย</button>
            </div>
        </div>
    );
}

export default SearchForm;