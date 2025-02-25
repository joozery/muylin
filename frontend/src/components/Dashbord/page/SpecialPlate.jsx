import React, { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL || "https://tabian-d0c5a982b10e.herokuapp.com/api";

const charValueMap = {
  'ก': 1, 'ด': 1, 'ถ': 1, 'ท': 1, 'ภ': 1,
  'ข': 2, 'บ': 2, 'ป': 2, 'ง': 2, 'ช': 2,
  'ต': 3, 'ฑ': 3, 'ฒ': 3, 'ฆ': 3,
  'ค': 4, 'ธ': 4, 'ร': 4, 'ญ': 4, 'ษ': 4,
  'ฉ': 5, 'ณ': 5, 'ฌ': 5, 'น': 5, 'ม': 5, 'ห': 5, 'ฮ': 5, 'ฎ': 5, 'ฬ': 5,
  'จ': 6, 'ล': 6, 'ว': 6, 'อ': 6,
  'ซ': 7, 'ศ': 7, 'ส': 7,
  'ย': 8, 'ผ': 8, 'ฝ': 8, 'พ': 8, 'ฟ': 8,
  'ฏ': 9, 'ฐ': 9
};

const calculateTotal = (plate) => {
  return plate.split('').reduce((sum, char) => {
    if (charValueMap[char]) return sum + charValueMap[char];
    if (!isNaN(char)) return sum + parseInt(char, 10);
    return sum;
  }, 0);
};

const SpecialPlate = () => {
  const [data, setData] = useState([]);
  const [newPlate, setNewPlate] = useState({ plate: "", price: "", status: "พร้อมขาย" });

  // ✅ ดึงข้อมูลจาก API
  const fetchPlates = async () => {
    try {
      const response = await fetch(`${API_URL}/plates_special`);
      if (!response.ok) throw new Error("Failed to fetch plates");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("❌ Error fetching plates:", error);
    }
  };

  useEffect(() => {
    fetchPlates();
  }, []); // ✅ เรียก API แค่ครั้งเดียวตอนโหลด Component

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
      console.log("📤 ส่งข้อมูลไปที่ API:", plateData);
      const response = await fetch(`${API_URL}/addPlate_special`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(plateData),
      });

      const result = await response.json();
      console.log("📥 API ตอบกลับ:", result);

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
      const response = await fetch(`${API_URL}/updateStatus_special/${id}`, {
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
      const response = await fetch(`${API_URL}/deletePlate_special/${id}`, { method: "DELETE" });

      if (!response.ok) throw new Error("Error deleting plate");

      fetchPlates();
    } catch (error) {
      console.error("❌ Error deleting plate:", error);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 font-['Prompt']">ป้ายคิดเองลักษณะพิเศษ</h2>

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

      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">ลำดับ</th>
            <th className="p-2">หมายเลขทะเบียน</th>
            <th className="p-2">เลขผลรวม</th>
            <th className="p-2">ราคา</th>
            <th className="p-2">สถานะ</th>
            <th className="p-2">จัดการ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="border-b">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{item.plate}</td>
              <td className="p-2">{item.total}</td>
              <td className="p-2">{item.price}</td>
              <td className="p-2">
                <select className="border rounded px-2 py-1" value={item.status} onChange={(e) => handleStatusChange(item.id, e.target.value)}>
                  <option>ขายแล้ว</option>
                  <option>พร้อมขาย</option>
                  <option>จองแล้ว</option>
                </select>
              </td>
              <td className="p-2">
                <button className="bg-red-600 text-white px-2 py-1 rounded" onClick={() => handleDeletePlate(item.id)}>
                  ลบ
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecialPlate;
