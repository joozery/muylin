import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import PlatesSearch from "./Plates/SeacrchPlatesAll";
import ClipLoader from "react-spinners/ClipLoader";
const API_URL = import.meta.env.VITE_API_URL;
function SearchForm() {
  const [keyword, setKeyword] = useState("");
  const [number, setNumber] = useState("");
  const [sumOption, setSumOption] = useState("ทุกผลรวม");
  const [priceRange, setPriceRange] = useState("ทุกช่วงราคา");
  const [category, setCategory] = useState("ทุกหมวดหมู่");

  const categoryOptions = [
    { label: "ทุกหมวดทะเบียน", value: "all" },
    { label: "ทะเบียนรถมอเตอร์ไซค์", value: "plates_motorcycle" },
    { label: "ทะเบียนรถกะบะป้ายเขียว", value: "plates_green" },
    { label: "ทะเบียนรถตู้ป้ายฟ้า", value: "plates_electric" },
    { label: "ทะเบียนรถตู้กราฟฟิค", value: "plates_graphic_van" },
    { label: "ทะเบียนรถคิดเอง (ลักษณะพิเศษ)", value: "plates_special" },
    { label: "ทะเบียนรถเลขตัวเดียว", value: "plates_single_digit" },
    { label: "ทะเบียนรถเลขคู่", value: "plates_double_digit" },
    { label: "ทะเบียนเลขตอง", value: "plates_triple_digit" },
    { label: "ทะเบียนเลขโฟร์", value: "plates_quadruple_digit" },
    { label: "ทะเบียนรถขาวดำหมวดใหม่ (ไม่ประมูล)", value: "plates_new_non_auction" },
    { label: "ทะเบียนรถประมูลหมวดใหม่", value: "plates_new" },
    { label: "ทะเบียนรถขาวดำหมวดเก่า (ไม่ประมูล)", value: "plates_old_non_auction" },
    { label: "ทะเบียนรถประมูลหมวดเก่า", value: "plates" },
    { label: "ทะเบียนรถระฆังทอง (กราฟฟิคสีทอง)", value: "plates_gold_graphic" },
  ];
  

  const sumOptions = [
    "ทุกผลรวม",
    9,
    10,
    14,
    15,
    16,
    18,
    19,
    20,
    23,
    24,
    25,
    26,
    28,
    29,
    32,
  ];

  // ✅ ฟังก์ชันกดค้นหา (ส่งค่าผ่าน window)
  const handleSearch = () => {
    filterPlates();
  };
  const [loading, setLoading] = useState(false);
  //   const [plateData, setPlateData] = useState([]);

  // state สำหรับข้อมูลทั้งหมดที่โหลดมาจาก API
  const [allPlateData, setAllPlateData] = useState([]);
  // state สำหรับข้อมูลที่แสดงผลหลังจาก filter
  const [filteredPlateData, setFilteredPlateData] = useState([]);

  const [platesNew, setPlatesNew] = useState({
    text: "",
    number: "",
    sum_number: "",
    price: "",
    type: "",
  });
  // ✅ ดึงข้อมูลป้ายประมูลหมวดใหม่

  const fetchPlatesNew = async () => {
    setLoading(true);
    const plateData = {
      //   ...platesNew,
      text: "",
      number: "",
      sum_number: "",
      price: "",
      type: "",
    };
    try {
      // const response = await fetch(`${API_URL}/searchPlatesAll`);
      const response = await fetch(`${API_URL}/searchPlatesAll`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(plateData),
      });
      if (!response.ok) throw new Error("Failed to fetch plates");
      const data = await response.json();
      //   setPlateData(data);
      setAllPlateData(data);
      setFilteredPlateData(data);
    } catch (error) {
      console.error("❌ Error fetching plates:", error);
    } finally {
      setLoading(false);
    }
  };

  // ทำการ filter แบบ client-side เมื่อค่าใน platesNew เปลี่ยนแปลง
  const filterPlates = () => {
    let filtered = allPlateData;
    const { text, number, sum_number, price, type } = platesNew;
  
    if (text) {
      filtered = filtered.filter((item) =>
        item.plate.toLowerCase().includes(text.toLowerCase())
      );
    }
    if (number) {
      filtered = filtered.filter((item) =>
        item.plate.match(/\d+/)?.[0]?.includes(number)
      );
    }
    if (sum_number) {
      filtered = filtered.filter((item) =>
        String(item.total).includes(sum_number)
      );
    }
    if (price && price !== "all") {
      switch (price) {
        case "<=1000":
          filtered = filtered.filter((item) => Number(item.price) <= 1000);
          break;
        case "1000-10000":
          filtered = filtered.filter(
            (item) =>
              Number(item.price) >= 1000 && Number(item.price) <= 10000
          );
          break;
        case ">=10000":
          filtered = filtered.filter((item) => Number(item.price) >= 10000);
          break;
        default:
          break;
      }
    }
    if (type) {
      filtered = filtered.filter((item) =>
        item.type && item.type.toLowerCase().includes(type.toLowerCase())
      );
    }
    setFilteredPlateData(filtered);
  };
  

  // ใช้ useEffect เพื่อทำ filter ทุกครั้งที่ platesNew เปลี่ยนแปลง
//   useEffect(() => {
//     filterPlates();
//   }, [platesNew, allPlateData]);

  useEffect(() => {
    fetchPlatesNew();
  }, []);

  // ✅ ฟังก์ชันล้างค่าทั้งหมด
  const handleReset = () => {
    setPlatesNew({
      text: "",
      number: "",
      sum_number: "",
      price: "",
      type: "",
    });
  };

//   useEffect(() => {
//     console.log(plateData);
//   }, [plateData]);

  return (
    <>
      <div className="search-form">
        <h2>ค้นหาเลขทะเบียน</h2>
        <div className="search-inputs">
          <input
            type="text"
            placeholder="ใส่ตัวอักษร เช่น กก"
            value={platesNew.text}
            onChange={(e) =>
              setPlatesNew((prev) => ({ ...prev, text: e.target.value }))
            }
            // onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />

          <input
            type="text"
            placeholder="ใส่ตัวเลข เช่น 8, 88, 888, 8888"
            value={platesNew.number}
            onChange={(e) =>
              setPlatesNew((prev) => ({ ...prev, number: e.target.value }))
            }
            // onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />

          <select
            value={platesNew.sum_number}
            onChange={(e) =>
              setPlatesNew((prev) => ({ ...prev, sum_number: e.target.value }))
            }
          >
            {sumOptions.map((sum, index) => (
              <option key={index} value={sum}>
                {sum}
              </option>
            ))}
          </select>

          <select
            value={platesNew.price}
            onChange={(e) =>
              setPlatesNew((prev) => ({ ...prev, price: e.target.value }))
            }
          >
            <option value="all">ทุกช่วงราคา</option>
            <option value="<=1000">ต่ำกว่า 1,000 บาท</option>
            <option value="1000-10000">1,000 - 10,000 บาท</option>
            <option value=">=10000">มากกว่า 10,000 บาท</option>
          </select>

          <select
            value={platesNew.type}
            onChange={(e) =>
              setPlatesNew((prev) => ({ ...prev, type: e.target.value }))
            }
          >
            {categoryOptions.map((cat, index) => (
              <option key={index} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>

          <div className="search-buttons flex space-x-2">
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
      <div>
        {loading ? (
          <div className="flex justify-center items-center mt-10">
            <ClipLoader color="#36d7b7" size={50} />
          </div>
        ) : (
          <PlatesSearch plates={filteredPlateData} />
        )}
      </div>
    </>
  );
}

export default SearchForm;
