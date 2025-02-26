import React, { useState, useEffect } from "react";
import { Trash2, PlusCircle } from "lucide-react";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL || "https://tabian-d0c5a982b10e.herokuapp.com/api";

const PhoneNumber = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [newPhone, setNewPhone] = useState({ phone_number: "", brand: "", total: "", price: "", status: "มาใหม่" });

  // ✅ ดึงข้อมูลเบอร์โทรศัพท์จาก API
  const fetchPhoneNumbers = async () => {
    try {
      const response = await fetch(`${API_URL}/phone_numbers`);
      const data = await response.json();
      setPhoneNumbers(data);
    } catch (error) {
      console.error("❌ Error fetching phone numbers:", error);
    }
  };

  useEffect(() => {
    fetchPhoneNumbers();
  }, []);

  // ✅ ฟังก์ชันคำนวณผลรวมจากเบอร์โทร
  const calculateTotal = (phoneNumber) => {
    const digits = phoneNumber.replace(/\D/g, ""); // เอาเฉพาะตัวเลข
    return digits.split("").reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  };

  // ✅ อัปเดตผลรวมอัตโนมัติเมื่อผู้ใช้กรอกเบอร์โทร
  const handlePhoneNumberChange = (e) => {
    const phone_number = e.target.value;
    setNewPhone({
      ...newPhone,
      phone_number,
      total: phone_number ? calculateTotal(phone_number) : "",
    });
  };

  // ✅ ฟังก์ชันเพิ่มเบอร์โทร
  const handleAddPhone = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/addPhoneNumber`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPhone),
      });

      if (!response.ok) throw new Error("เพิ่มเบอร์ไม่สำเร็จ");

      const addedPhone = await response.json();
      setPhoneNumbers([...phoneNumbers, addedPhone]);
      setNewPhone({ phone_number: "", brand: "", total: "", price: "", status: "มาใหม่" });
      toast.success("เพิ่มเบอร์เรียบร้อย!");
      fetchPhoneNumbers();
    } catch (error) {
      console.error("❌ Error adding phone number:", error);
      toast.error("เพิ่มเบอร์ไม่สำเร็จ!");
    }
  };

  // ✅ ฟังก์ชันอัปเดตสถานะเบอร์โทร
  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`${API_URL}/updatePhoneStatus/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error("Error updating status");

      toast.success("อัปเดตสถานะเรียบร้อย!");
      fetchPhoneNumbers();
    } catch (error) {
      console.error("❌ Error updating status:", error);
      toast.error("อัปเดตสถานะไม่สำเร็จ!");
    }
  };

  // ✅ ฟังก์ชันลบเบอร์โทร
  const handleDeletePhone = async (id) => {
    try {
      const response = await fetch(`${API_URL}/deletePhoneNumber/${id}`, { method: "DELETE" });

      if (!response.ok) throw new Error("Error deleting phone number");

      toast.success("ลบเบอร์เรียบร้อย!");
      fetchPhoneNumbers();
    } catch (error) {
      console.error("❌ Error deleting phone number:", error);
      toast.error("ลบเบอร์ไม่สำเร็จ!");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📞 จัดการเบอร์โทรศัพท์</h1>

      {/* ✅ ฟอร์มเพิ่มเบอร์โทรศัพท์ */}
      <form onSubmit={handleAddPhone} className="bg-white p-6 shadow rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <PlusCircle className="mr-2" /> เพิ่มเบอร์ใหม่
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="เบอร์โทร"
            value={newPhone.phone_number}
            onChange={handlePhoneNumberChange}
            required
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="เครือข่าย"
            value={newPhone.brand}
            onChange={(e) => setNewPhone({ ...newPhone, brand: e.target.value })}
            required
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="ผลรวม"
            value={newPhone.total}
            readOnly
            className="w-full p-2 border bg-gray-200 rounded-lg"
          />
          <input
            type="number"
            placeholder="ราคา"
            value={newPhone.price}
            onChange={(e) => setNewPhone({ ...newPhone, price: e.target.value })}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center">
          <PlusCircle size={18} className="mr-2" /> เพิ่มเบอร์
        </button>
      </form>

      {/* ✅ ตารางแสดงเบอร์โทร */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">📋 รายการเบอร์โทร</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">เบอร์โทร</th>
              <th className="border p-2">เครือข่าย</th>
              <th className="border p-2">ผลรวม</th>
              <th className="border p-2">ราคา</th>
              <th className="border p-2">สถานะ</th>
              <th className="border p-2">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {phoneNumbers.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  ไม่มีข้อมูลเบอร์โทร
                </td>
              </tr>
            ) : (
              phoneNumbers.map((phone) => (
                <tr key={phone.id} className="text-center border-t">
                  <td className="border p-2">{phone.phone_number}</td>
                  <td className="border p-2">{phone.brand}</td>
                  <td className="border p-2">{phone.total}</td>
                  <td className="border p-2 text-red-600 font-semibold">{parseFloat(phone.price).toLocaleString()} บาท</td>
                  <td className="border p-2">
                    <select
                      className="border p-1 rounded-lg"
                      value={phone.status}
                      onChange={(e) => handleUpdateStatus(phone.id, e.target.value)}
                    >
                      <option value="มาใหม่">มาใหม่</option>
                      <option value="ขายแล้ว">ขายแล้ว</option>
                      <option value="จองแล้ว">จองแล้ว</option>
                    </select>
                  </td>
                  <td className="border p-2">
                    <button className="text-red-600 hover:text-red-800 flex items-center gap-1" onClick={() => handleDeletePhone(phone.id)}>
                      <Trash2 size={18} /> ลบ
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PhoneNumber;