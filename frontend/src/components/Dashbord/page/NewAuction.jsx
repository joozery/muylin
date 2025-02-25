import React, { useState, useEffect } from 'react';

const API_URL = "https://muaylintabien.co/.netlify/functions";

// ฟังก์ชันแปลงตัวอักษรเป็นตัวเลข
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
  let sum = 0;
  plate.split('').forEach(char => {
    if (charValueMap[char]) {
      sum += charValueMap[char];
    } else if (!isNaN(char)) {
      sum += parseInt(char, 10);
    }
  });
  return sum;
};

const NewAuction = () => {
  const [data, setData] = useState([]);
  const [newPlate, setNewPlate] = useState({ plate: '', price: '', status: 'พร้อมขาย' });

  // ดึงข้อมูลจาก API
  useEffect(() => {
    fetch(`${API_URL}/plates`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  // เพิ่มทะเบียนใหม่ไปที่ API
  const handleAddPlate = () => {
    if (newPlate.plate && newPlate.price) {
      const total = calculateTotal(newPlate.plate.replace(/\s/g, ''));
      const newItem = { plate: newPlate.plate, total, price: newPlate.price, status: newPlate.status };

      fetch(`${API_URL}/addPlate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem)
      })
        .then(response => response.json())
        .then(addedItem => setData([...data, addedItem]))
        .catch(error => console.error("Error adding plate:", error));

      setNewPlate({ plate: '', price: '', status: 'พร้อมขาย' });
    }
  };

  // อัปเดตสถานะทะเบียนผ่าน API
  const handleStatusChange = (no, newStatus) => {
    fetch(`${API_URL}/updateStatus/${no}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus })
    })
      .then(() => setData(data.map(item => item.no === no ? { ...item, status: newStatus } : item)))
      .catch(error => console.error("Error updating status:", error));
  };

  // ลบทะเบียนออกจาก API
  const handleDeletePlate = (no) => {
    fetch(`${API_URL}/deletePlate/${no}`, { method: "DELETE" })
      .then(() => setData(data.filter(item => item.no !== no)))
      .catch(error => console.error("Error deleting plate:", error));
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 font-['Prompt'] ">ป้ายประมูลหมวดใหม่</h2>

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
        <button
          className="bg-blue-600 text-white px-4 py-1 rounded"
          onClick={handleAddPlate}
        >
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
            <th className="p-2">สถานะจองแล้ว</th>
            <th className="p-2">ลบ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.no} className="border-b">
              <td className="p-2">{item.no}</td>
              <td className="p-2">{item.plate}</td>
              <td className="p-2">{item.total}</td>
              <td className="p-2">{item.price}</td>
              <td className="p-2">
                <select
                  className="border rounded px-2 py-1"
                  value={item.status}
                  onChange={(e) => handleStatusChange(item.no, e.target.value)}
                >
                  <option>ขายแล้ว</option>
                  <option>พร้อมขาย</option>
                  <option>จองแล้ว</option>
                </select>
              </td>
              <td className="p-2">
                <button
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => handleDeletePlate(item.no)}
                >
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

export default NewAuction;