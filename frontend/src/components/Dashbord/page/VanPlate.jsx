import React, { useState } from 'react';

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

const VanPlate = () => {
  const initialData = [
    { no: 1, plate: 'ตู้ 1234', total: calculateTotal('ตู้1234'), price: '300,000 บาท', status: 'พร้อมขาย' },
    { no: 2, plate: 'ตู้ 5678', total: calculateTotal('ตู้5678'), price: '280,000 บาท', status: 'ขายแล้ว' },
    { no: 3, plate: 'ตู้ 9101', total: calculateTotal('ตู้9101'), price: '250,000 บาท', status: 'จองแล้ว' },
  ];

  const [data, setData] = useState(initialData);
  const [newPlate, setNewPlate] = useState({ plate: '', price: '', status: 'พร้อมขาย' });

  const handleStatusChange = (no, newStatus) => {
    setData(data.map(item => item.no === no ? { ...item, status: newStatus } : item));
  };

  const handleAddPlate = () => {
    if (newPlate.plate && newPlate.price) {
      const nextNo = data.length + 1;
      const total = calculateTotal(newPlate.plate.replace(/\s/g, ''));
      setData([...data, { no: nextNo, ...newPlate, total }]);
      setNewPlate({ plate: '', price: '', status: 'พร้อมขาย' });
    }
  };

  const handleDeletePlate = (no) => {
    setData(data.filter(item => item.no !== no));
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 font-['Prompt']">ป้ายรถตู้ป้ายฟ้า</h2>

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

export default VanPlate;
