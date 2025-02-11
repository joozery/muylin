import React, { useState } from "react";
import './SearchForm.css'; // Import ไฟล์ CSS

function SearchForm() {
    const [keyword, setKeyword] = useState("");
    const [priceRange, setPriceRange] = useState("ทุกช่วงราคา");
    const [category, setCategory] = useState("ทุกหมวดหมู่");

    const handleSearch = () => {
        console.log("ค้นหา:", { keyword, priceRange, category });
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
                />
                <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                >
                    <option value="ทุกช่วงราคา">ทุกช่วงราคา</option>
                    <option value="ต่ำกว่า 1,000 บาท">ต่ำกว่า 1,000 บาท</option>
                    <option value="1,000 - 10,000 บาท">1,000 - 10,000 บาท</option>
                    <option value="มากกว่า 10,000 บาท">มากกว่า 10,000 บาท</option>
                </select>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="ทุกหมวดหมู่">ทุกหมวดหมู่</option>
                    <option value="ทะเบียนรถยนต์">ทะเบียนรถยนต์</option>
                    <option value="เบอร์โทรศัพท์สวย">เบอร์โทรศัพท์สวย</option>
                </select>
                <button onClick={handleSearch}>ค้นหา</button>
            </div>
            <div className="additional-buttons">
                <button>ดูดวงทะเบียนรถ</button>
                <button>เบอร์โทรเลขสวย</button>
            </div>
        </div>
    );
}

export default SearchForm;