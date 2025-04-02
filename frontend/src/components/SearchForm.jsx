import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import PlatesSearch from "./Plates/SeacrchPlatesAll";
import ClipLoader from "react-spinners/ClipLoader";
import LicensePlates from "./LicensePlates";
import { use } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;
function SearchForm() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [number, setNumber] = useState("");
  const [sumOption, setSumOption] = useState("ทุกผลรวม");
  const [priceRange, setPriceRange] = useState("ทุกช่วงราคา");
  const [category, setCategory] = useState("ทุกหมวดหมู่");

  const categoryOptions = [
    { id: 1, label: "ทุกหมวดทะเบียน", value: "" },
    { id: 2, label: "ทะเบียนรถมอเตอร์ไซค์", value: "plates_motorcycle" },
    { id: 3, label: "ทะเบียนรถกะบะป้ายเขียว", value: "plates_green" },
    { id: 4, label: "ทะเบียนรถตู้ป้ายฟ้า", value: "plates_electric" },
    { id: 5, label: "ทะเบียนรถตู้กราฟฟิค", value: "plates_graphic_van" },
    { id: 6, label: "ทะเบียนรถระฆังทอง (กราฟฟิคสีทอง)", value: "plates_gold_graphic" },
    { id: 7, label: "ทะเบียนรถคิดเอง (ลักษณะพิเศษ)", value: "plates_special" },
    { id: 8, label: "ทะเบียนรถเลขตัวเดียว", value: "plates_single_digit" },
    { id: 9, label: "ทะเบียนรถเลขคู่", value: "plates_double_digit" },
    { id: 10, label: "ทะเบียนเลขตอง / เลข 3 ตัว", value: "plates_triple_digit" },
    { id: 11, label: "ทะเบียนรถเลขโฟร์", value: "plates_quadruple_digit" },
    { id: 12, label: "ทะเบียนรถขาวดำหมวดเก่า", value: "plates_old_non_auction" },
    { id: 13, label: "ทะเบียนรถประมูลหมวดเก่า", value: "plates_old" },
    { id: 14, label: "ทะเบียนรถขาวดำหมวดใหม่", value: "plates_new_non_auction" },
    { id: 15, label: "ทะเบียนรถประมูลหมวดใหม่", value: "plates_new" }
];


  // const categoryOptions = [
  //   { label: "ทุกหมวดทะเบียน", value: "all" },
  //   { label: "ทะเบียนรถมอเตอร์ไซค์", value: "plates_motorcycle" },
  //   { label: "ทะเบียนรถกะบะป้ายเขียว", value: "plates_green" },
  //   { label: "ทะเบียนรถตู้ป้ายฟ้า", value: "plates_electric" },
  //   { label: "ทะเบียนรถตู้กราฟฟิค", value: "plates_graphic_van" },
  //   { label: "ทะเบียนรถคิดเอง (ลักษณะพิเศษ)", value: "plates_special" },
  //   { label: "ทะเบียนรถเลขตัวเดียว", value: "plates_single_digit" },
  //   { label: "ทะเบียนรถเลขคู่", value: "plates_double_digit" },
  //   { label: "ทะเบียนเลขตอง", value: "plates_triple_digit" },
  //   { label: "ทะเบียนเลขโฟร์", value: "plates_quadruple_digit" },
  //   {
  //     label: "ทะเบียนรถขาวดำหมวดใหม่ (ไม่ประมูล)",
  //     value: "plates_new_non_auction",
  //   },
  //   { label: "ทะเบียนรถประมูลหมวดใหม่", value: "plates_new" },
  //   {
  //     label: "ทะเบียนรถขาวดำหมวดเก่า (ไม่ประมูล)",
  //     value: "plates_old_non_auction",
  //   },
  //   { label: "ทะเบียนรถประมูลหมวดเก่า", value: "plates" },
  //   { label: "ทะเบียนรถระฆังทอง (กราฟฟิคสีทอง)", value: "plates_gold_graphic" },
  // ];

  // const sumOptions = [
  //   "ทุกผลรวม",
  //   9,
  //   10,
  //   14,
  //   15,
  //   16,
  //   18,
  //   19,
  //   20,
  //   23,
  //   24,
  //   25,
  //   26,
  //   28,
  //   29,
  //   32,
  // ];

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

  const groupSearchResults = (results) => {
    const grouped = {};
    results.forEach((result) => {
      if (!grouped[result.type]) {
        grouped[result.type] = [];
      }
      grouped[result.type].push(result.data); // แก้ไขตรงนี้
    });
    return Object.entries(grouped).map(([type, data]) => ({ type, data }));
  };

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
      const formattedData = data.map((item) => ({
        type: item.type,
        data: item,
      }));
      const groupedData = groupSearchResults(formattedData);
      setAllPlateData(groupedData);
      // setFilteredPlateData(data);
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

    filtered = filtered.map((item) => ({
      ...item,
      data: item.data.filter((plate) => {
        let match = true; // เริ่มต้นด้วย match = true

        if (text) {
          match =
            match && plate.plate.toLowerCase().includes(text.toLowerCase());
        }
        if (number) {
          match = match && plate.plate.match(/\d+/)?.[0]?.includes(number);
        }
        if (sum_number) {
          match = match && String(plate.total).includes(sum_number);
        }
        if (price && price !== "all") {
          switch (price) {
            case "50000-100000":
              match =
                match &&
                Number(plate.price) >= 50000 &&
                Number(plate.price) <= 100000;
              break;
            case "100001-200000":
              match =
                match &&
                Number(plate.price) >= 100001 &&
                Number(plate.price) <= 200000;
              break;
            case "200001-500000":
              match =
                match &&
                Number(plate.price) >= 200001 &&
                Number(plate.price) <= 500000;
              break;
            case "500001-1000000":
              match =
                match &&
                Number(plate.price) >= 500001 &&
                Number(plate.price) <= 1000000;
              break;
            case "1000001-1500000":
              match =
                match &&
                Number(plate.price) >= 1000001 &&
                Number(plate.price) <= 1500000;
              break;
            case "1500001-2000000":
              match =
                match &&
                Number(plate.price) >= 1500001 &&
                Number(plate.price) <= 2000000;
              break;
            case "2000001-5000000":
              match =
                match &&
                Number(plate.price) >= 2000001 &&
                Number(plate.price) <= 5000000;
              break;
            case "5000001-10000000":
              match =
                match &&
                Number(plate.price) >= 5000001 &&
                Number(plate.price) <= 10000000;
              break;
            case "10000001-20000000":
              match =
                match &&
                Number(plate.price) >= 10000001 &&
                Number(plate.price) <= 20000000;
              break;
            case "20000001-50000000":
              match =
                match &&
                Number(plate.price) >= 20000001 &&
                Number(plate.price) <= 50000000;
              break;
            default:
              break;
          }
        }
        if (type) {
          match = match && item.type.toLowerCase().includes(type.toLowerCase());
        }

        return match; // return true ถ้าผ่านเงื่อนไขทั้งหมด
      }),
    }));
    setFilteredPlateData(filtered);
  };

  useEffect(() => {
    console.log(filteredPlateData);
  }, [filteredPlateData]);

  useEffect(() => {
    filterPlates();
  }, [allPlateData]);

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
      <div className="p-2 py-5 md:p-10 h-full">
        <div className="search-form bg-white md:shadow-md">
          <h2>ค้นหาเลขทะเบียน</h2>
          <div className="search-inputs">
            {/* <input
              type="text"
              placeholder="ใส่ตัวอักษร เช่น กก"
              value={platesNew.text}
              onChange={(e) =>
                setPlatesNew((prev) => ({ ...prev, text: e.target.value }))
              }
              // onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            /> */}

            <input
              type="text"
              placeholder="ค้นหาเลข"
              value={platesNew.number}
              onChange={(e) =>
                setPlatesNew((prev) => ({ ...prev, number: e.target.value }))
              }
              // onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />

            {/* <select
              value={platesNew.sum_number}
              onChange={(e) =>
                setPlatesNew((prev) => ({
                  ...prev,
                  sum_number: e.target.value,
                }))
              }
            >
              {sumOptions.map((sum, index) => (
                <option key={index} value={sum}>
                  {sum}
                </option>
              ))}
            </select> */}

            <input
              type="text"
              placeholder="ค้นหาผลรวม"
              value={platesNew.sum_number}
              onChange={(e) =>
                setPlatesNew((prev) => ({
                  ...prev,
                  sum_number: e.target.value,
                }))
              }
            />

            <select
              value={platesNew.price}
              onChange={(e) =>
                setPlatesNew((prev) => ({ ...prev, price: e.target.value }))
              }
            >
              <option value="all">ทุกช่วงราคา</option>
              <option value="50000-100000">50,000 - 100,000 บาท</option>
              <option value="100001-200000">100,001 - 200,000 บาท</option>
              <option value="200001-500000">200,001 - 500,000 บาท</option>
              <option value="500001-1000000">500,001 - 1,000,000 บาท</option>
              <option value="1000001-1500000">1,000,001 - 1,500,000 บาท</option>
              <option value="1500001-2000000">1,500,001 - 2,000,000 บาท</option>
              <option value="2000001-5000000">2,000,001 - 5,000,000 บาท</option>
              <option value="5000001-10000000">
                5,000,001 - 10,000,000 บาท
              </option>
              <option value="10000001-20000000">
                10,000,001 - 20,000,000 บาท
              </option>
              <option value="20000001-50000000">
                20,000,001 - 50,000,000 บาท
              </option>
              <option value=">=50000000">มากกว่า 50,000,000 บาท</option>
            </select>

            {/* <select
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
            </select> */}

            <div className="search-buttons flex space-x-2 mt-2">
              <button
                className="flex justify-center items-center"
                onClick={handleSearch}
              >
                <FaSearch />
              </button>
              <button
                className="flex justify-center items-center"
                onClick={handleReset}
              >
                <FaDeleteLeft />
              </button>
            </div>
          </div>

          <div className="additional-buttons">
            {/* <button>ดูดวงทะเบียนรถ</button> */}
            <button onClick={() => navigate("/beautiful-phone")}>ดูเบอร์ทั้งหมด</button>
            <button onClick={() => navigate("/#search")}>ดูทะเบียนทั้งหมด</button>
          </div>
        </div>
      </div>

      <section id="search" className="license-plates-section py-4 lg:py-12 bg-[#111111]">
        <div className="container mx-auto px-1 md:px-6 lg:px-20">
          <LicensePlates data={filteredPlateData} loading={loading} />
        </div>
      </section>
      {/* <div>
        {loading ? (
          <div className="flex justify-center items-center mt-10">
            <ClipLoader color="#36d7b7" size={50} />
          </div>
        ) : (
          <PlatesSearch plates={filteredPlateData} />
        )}
      </div> */}
    </>
  );
}

export default SearchForm;
