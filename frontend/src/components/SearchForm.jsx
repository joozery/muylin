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
        "ทะเบียนรถมอเตอร์ไซด์",
        "ทะเบียนรถกะบะป้ายเขียว",
        "ทะเบียนรถตู้ป้ายฟ้า",
        "ทะเบียนรถตู้กราฟฟิค",
        "ทะเบียนรถคิดเอง (ลักษณะพิเศษ)",
        "ทะเบียนรถเลขตัวเดียว",
        "ทะเบียนรถเลขคู่",
        "ทะเบียนเลขตอง",
        "ทะเบียนเลขโฟร์",
        "ทะเบียนรถขาวดำหมวดใหม่ (ไม่ประมูล)",
        "ทะเบียนรถประมูลหมวดใหม่",
        "ทะเบียนรถขาวดำหมวดเก่า (ไม่ประมูล)",
        "ทะเบียนรถประมูลหมวดเก่า",
        "ทะเบียนรถระฆังทอง (กราฟฟิคสีทอง)"
    ];

    const sumOptions = ["ทุกผลรวม", 9, 10, 14, 15, 16, 18, 19, 20, 23, 24, 25, 26, 28, 29, 32];

    // ✅ ฟังก์ชันกดค้นหา (ส่งค่าผ่าน window)
    const handleSearch = () => {
        console.log(keyword, number, sumOption, priceRange, category);
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
                    placeholder="ใส่ตัวอักษร เช่น กก"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    // onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
                
                <input
                    type="text"
                    placeholder="ใส่ตัวเลข เช่น 8, 88, 888, 8888"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    // onKeyPress={(e) => e.key === "Enter" && handleSearch()}
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
                {/* <button>ดูดวงทะเบียนรถ</button> */}
                <button>ดูเบอร์ทั้งหมด</button>
                <button>ดูทะเบียนทั้งหมด</button>
            </div>
        </div>
    );
}

export default SearchForm;