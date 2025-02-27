import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx"; // ✅ ใช้ SheetJS สำหรับอ่านไฟล์ Excel

const API_URL = import.meta.env.VITE_API_URL || "https://tabian-d0c5a982b10e.herokuapp.com/api";

// ✅ Mapping ค่าตัวอักษร
const charValueMap = {
  'ก': 1, 'ด': 1, 'ถ': 1, 'ท': 1, 'ภ': 1, 'ข': 2, 'บ': 2, 'ป': 2, 'ง': 2, 'ช': 2,
  'ต': 3, 'ฑ': 3, 'ฒ': 3, 'ฆ': 3, 'ค': 4, 'ธ': 4, 'ร': 4, 'ญ': 4, 'ษ': 4,
  'ฉ': 5, 'ณ': 5, 'ฌ': 5, 'น': 5, 'ม': 5, 'ห': 5, 'ฮ': 5, 'ฎ': 5, 'ฬ': 5,
  'จ': 6, 'ล': 6, 'ว': 6, 'อ': 6, 'ซ': 7, 'ศ': 7, 'ส': 7, 'ย': 8, 'ผ': 8, 'ฝ': 8, 'พ': 8, 'ฟ': 8,
  'ฏ': 9, 'ฐ': 9
};

// ✅ คำนวณผลรวมหมายเลขทะเบียน
const calculateTotal = (plate) => {
  return plate.split('').reduce((sum, char) => {
    if (charValueMap[char]) return sum + charValueMap[char];
    if (!isNaN(char)) return sum + parseInt(char, 10);
    return sum;
  }, 0);
};

const VanPlate = () => {
  const [data, setData] = useState([]);
  const [newPlate, setNewPlate] = useState({ plate: "", price: "", status: "พร้อมขาย" });

  // ✅ ดึงข้อมูลจาก API
  const fetchPlates = async () => {
    try {
      const response = await fetch(`${API_URL}/plates_electric`);
      if (!response.ok) throw new Error("Failed to fetch plates");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("❌ Error fetching plates:", error);
    }
  };

  useEffect(() => {
    fetchPlates();
  }, []);

  // ✅ เพิ่มทะเบียน
  const handleAddPlate = async () => {
    if (!newPlate.plate || !newPlate.price) {
      alert("กรุณากรอกหมายเลขทะเบียนและราคา");
      return;
    }

    const plateData = {
      plate: newPlate.plate,
      total: calculateTotal(newPlate.plate.replace(/\s/g, "")),
      price: newPlate.price,
      status: newPlate.status,
    };

    try {
      const response = await fetch(`${API_URL}/addPlate_electric`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(plateData),
      });

      if (!response.ok) throw new Error("Error adding plate");

      fetchPlates();
      setNewPlate({ plate: "", price: "", status: "พร้อมขาย" });
    } catch (error) {
      console.error("❌ Error adding plate:", error);
    }
  };

  // ✅ อัปเดตสถานะ
  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`${API_URL}/updateStatus_electric/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error("Error updating status");

      fetchPlates();
    } catch (error) {
      console.error("❌ Error updating status:", error);
    }
  };

  // ✅ ลบทะเบียน
  const handleDeletePlate = async (id) => {
    try {
      const response = await fetch(`${API_URL}/deletePlate_electric/${id}`, { method: "DELETE" });

      if (!response.ok) throw new Error("Error deleting plate");

      fetchPlates();
    } catch (error) {
      console.error("❌ Error deleting plate:", error);
    }
  };

  // 📥 ✅ **ฟังก์ชันอัปโหลดไฟล์ Excel**
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(sheet);
      console.log("📄 ข้อมูลจาก Excel:", jsonData);

      jsonData.forEach(async (item) => {
        const plateData = {
          plate: item["ทะเบียน"], 
          total: calculateTotal(item["ทะเบียน"].replace(/\s/g, "")),
          price: item["ราคา"],
          status: item["สถานะ"] || "พร้อมขาย",
        };

        try {
          await fetch(`${API_URL}/addPlate_electric`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(plateData),
          });

          fetchPlates();
        } catch (error) {
          console.error("❌ Error uploading plate:", error);
        }
      });
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">ป้ายรถตู้ป้ายฟ้า</h2>

      {/* 📥 ปุ่มอัปโหลดไฟล์ Excel */}
      <div className="mb-4">
        <input type="file" accept=".xlsx, .csv" onChange={handleFileUpload} className="border p-2 rounded" />
      </div>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="หมายเลขทะเบียน"
          className="border rounded px-2 py-1"
          value={newPlate.plate}
          onChange={(e) => setNewPlate({ ...newPlate, plate: e.target.value })}
        />
        <input
          type="text"
          placeholder="ราคา"
          className="border rounded px-2 py-1"
          value={newPlate.price}
          onChange={(e) => setNewPlate({ ...newPlate, price: e.target.value })}
        />
        <button className="bg-blue-600 text-white px-4 py-1 rounded" onClick={handleAddPlate}>
          เพิ่มทะเบียน
        </button>
      </div>

      {/* ตารางแสดงข้อมูล */}
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">ลำดับ</th>
            <th className="p-2">หมายเลขทะเบียน</th>
            <th className="p-2">เลขผลรวม</th>
            <th className="p-2">ราคา</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="border-b">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{item.plate}</td>
              <td className="p-2">{item.total}</td>
              <td className="p-2">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VanPlate;