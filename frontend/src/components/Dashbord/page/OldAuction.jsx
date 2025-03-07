import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import _AlertPopUp from "../../../helper/alertpopup";
import ModalEdit from "../../Modal";
const API_URL = import.meta.env.VITE_API_URL;
const charValueMap = {
  ก: 1,
  ด: 1,
  ถ: 1,
  ท: 1,
  ภ: 1,
  ข: 2,
  บ: 2,
  ป: 2,
  ง: 2,
  ช: 2,
  ต: 3,
  ฑ: 3,
  ฒ: 3,
  ฆ: 3,
  ค: 4,
  ธ: 4,
  ร: 4,
  ญ: 4,
  ษ: 4,
  ฉ: 5,
  ณ: 5,
  ฌ: 5,
  น: 5,
  ม: 5,
  ห: 5,
  ฮ: 5,
  ฎ: 5,
  ฬ: 5,
  จ: 6,
  ล: 6,
  ว: 6,
  อ: 6,
  ซ: 7,
  ศ: 7,
  ส: 7,
  ย: 8,
  ผ: 8,
  ฝ: 8,
  พ: 8,
  ฟ: 8,
  ฏ: 9,
  ฐ: 9,
};

const calculateTotal = (plate) => {
  return plate.split("").reduce((sum, char) => {
    if (charValueMap[char]) return sum + charValueMap[char];
    if (!isNaN(char)) return sum + parseInt(char, 10);
    return sum;
  }, 0);
};

const OldAuction = () => {
  const [data, setData] = useState([]);
  const [newPlate, setNewPlate] = useState({
    plate: "",
    price: "",
    status: "",
  });
  const [loading, setLoading] = useState(false); // Loading สำหรับ table
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [adding, setAdding] = useState(false); // Loading สำหรับปุ่มเพิ่มทะเบียน

  // ดึงข้อมูลจาก API
  const fetchPlates = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/plates_old`);
      if (!response.ok) throw new Error("Failed to fetch plates");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("❌ Error fetching plates:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlates();
  }, []); // เรียก API ตอนโหลด Component

  // เพิ่มทะเบียน
  const handleAddPlate = async () => {
    if (
      newPlate.plate === "" ||
      newPlate.price === "" ||
      newPlate.status === ""
    ) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    const plateData = {
      plate: newPlate.plate,
      total: calculateTotal(newPlate.plate.replace(/\s/g, "")),
      price: newPlate.price,
      status: newPlate.status,
    };

    try {
      setAdding(true);
      console.log("📤 ส่งข้อมูลไปที่ API:", plateData);
      const response = await fetch(`${API_URL}/addPlate/plates_old`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(plateData),
      });
      const result = await response.json();
      console.log("📥 API ตอบกลับ:", result);
      if (response.ok) {
        setData((prevData) => [...prevData, result]);
        _AlertPopUp().Success("บันทึกข้อมูลสำเร็จ !");
        setNewPlate({ plate: "", price: "", status: "" });
      }
      if (!response.ok) throw new Error("Error adding plate");
    } catch (error) {
      console.error("❌ Error adding plate:", error);
    } finally {
      setAdding(false);
    }
  };

  // อัปเดตสถานะ
  const handleStatusChange = async (id, newStatus) => {
    setUpdatingStatus(id);
    try {
      const response = await fetch(
        `${API_URL}/updateStatus/plates_old/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      if (response.ok) {
        // อัพเดทค่าใน state โดยจับคู่ id และแทนที่ status ด้วย newStatus
        setData((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, status: newStatus } : item
          )
        );
      }
      if (!response.ok) throw new Error("Error updating status");
    } catch (error) {
      console.error("❌ Error updating status:", error);
    } finally {
      setUpdatingStatus(null);
    }
  };

  const handleDeletePlate = async (id, plate) => {
    setDeleteStatus(id);
    if (window.confirm(`คุณแน่ใจหรือไม่ที่จะลบรายการนี้ ${plate}? `)) {
      try {
        const response = await fetch(
          `${API_URL}/deletePlate/plates_old/${id}`,
          { method: "DELETE" }
        );
        if (!response.ok) throw new Error("Error deleting plate");
        // อัพเดท state เพื่อลบรายการที่ถูกลบออกจากตาราง
        setData((prevData) => prevData.filter((item) => item.id !== id));
      } catch (error) {
        console.error("❌ Error deleting plate:", error);
        alert("เกิดข้อผิดพลาดในการลบข้อมูล");
      } finally {
        setDeleteStatus(null);
      }
    }
  };
  //ModalEdit
    const [formModal, setFormModal] = useState({}); // ข้อมูลใน modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = (plate) => {
      console.log(plate);
      setFormModal(plate);
      setIsModalOpen(true);
    };
  
    const onCloseModal = () => {
      setFormModal({});
      setIsModalOpen(false);
    };
  
    // อัปเดตข้อมูล
    const handleEdit = async (formModal) => {
      if (formModal.plate === "" || formModal.price === "") {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
      }
  
      const bodyData = {
        plate: formModal.plate,
        total: String(calculateTotal(formModal.plate.replace(/\s/g, ""))),
        price: formModal.price,
        status: formModal.status,
      };
  
      try {
        const response = await fetch(
          `${API_URL}/updatePlate/plates_old/${formModal.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData),
          }
        );
        const result = await response.json(); // อ่าน response body
        console.log(result);
        // return;
        if (response.ok) {
          // alert(result.message);
          alert("แก้ไขข้อมูลสำเร็จ");
          fetchPlates(); // โหลดข้อมูลใหม่
          setIsModalOpen(false); // ✅ ปิด Modal เมื่อสำเร็จ
        } else {
          alert("แก้ไขข้อมูลไม่สำเร็จ");
        }
        if (!response.ok) throw new Error("Error updating status");
      } catch (error) {
        console.error("❌ Error updating status:", error);
      }
    };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 font-['Prompt']">
      ทะเบียนรถประมูลหมวดเก่า
      </h2>

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
        <select
          className="border rounded px-2 py-1"
          value={newPlate.status}
          onChange={(e) => setNewPlate({ ...newPlate, status: e.target.value })}
        >
          <option value="">เลือกประเภท</option>
          <option value="มาใหม่">มาใหม่</option>
          <option value="จองแล้ว">จองแล้ว</option>
          <option value="ขายแล้ว">ขายแล้ว</option>
        </select>

        <button
          className="bg-blue-600 min-h-8 w-[130px] text-white px-4 py-1 rounded flex items-center justify-center"
          onClick={handleAddPlate}
          disabled={adding}
        >
          {adding ? <ClipLoader size={20} color="#ffffff" /> : "เพิ่มทะเบียน"}
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center">
          <ClipLoader />
        </div>
      ) : (
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
              <tr key={index} className="border-b">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{item.plate}</td>
                <td className="p-2">{item.total}</td>
                <td className="p-2">{parseFloat(item.price).toLocaleString()}</td>
                <td className="p-2">
                  {updatingStatus === item.id ? (
                    <div className="flex justify-start pl-2 items-center">
                      <ClipLoader size={20} color="#000" />
                    </div>
                  ) : (
                    <select
                      className="border rounded px-2 py-1"
                      value={item.status || ""}
                      onChange={(e) =>
                        handleStatusChange(item.id, e.target.value)
                      }
                    >
                      <option value="" disabled>
                        เลือกสถานะ
                      </option>
                      <option value="ขายแล้ว">ขายแล้ว</option>
                      <option value="มาใหม่">มาใหม่</option>
                      <option value="จองแล้ว">จองแล้ว</option>
                    </select>
                  )}
                </td>
                <td className="p-2 text-start space-x-1">
                  <button
                    className="bg-blue-600 text-white px-2 py-1 rounded"
                    onClick={() => handleOpenModal(item)}
                  >
                    แก้ไข
                  </button>
                  {deleteStatus === item.id ? (
                    <div className="flex justify-start pl-2 items-center">
                      <ClipLoader size={20} color="#000" />
                    </div>
                  ) : (
                    <button
                      className="bg-red-600 text-white px-2 py-1 rounded"
                      onClick={() => handleDeletePlate(item.id, item.plate)}
                    >
                      ลบ
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isModalOpen && (
        <ModalEdit
          isOpen={isModalOpen}
          onClose={onCloseModal}
          onSubmit={() => handleEdit(formModal)}
          formModal={formModal}
          // plate={plate}
          setFormModal={setFormModal}
        />
      )}
    </div>
  );
};

export default OldAuction;
