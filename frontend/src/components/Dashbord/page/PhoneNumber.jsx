import React, { useState, useEffect } from "react";
import { Trash2, PlusCircle } from "lucide-react";
import toast from "react-hot-toast";
import ModalTel from "../../Modal/ModalTel";
import ClipLoader from "react-spinners/ClipLoader";
import _AlertPopUp from "../../../helper/alertpopup";
import { formatTel, sanitizePhoneNumber } from "../../../helper/helper";

const API_URL = import.meta.env.VITE_API_URL;

const PhoneNumber = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [newPhone, setNewPhone] = useState({
    phone_number: "",
    brand: "",
    total: "",
    price: "",
    status: "มาใหม่",
  });

  const [isAdding, setAdding] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // ✅ ดึงข้อมูลเบอร์โทรศัพท์จาก API
  const fetchPhoneNumbers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/phone_numbers`);
      // const response = await fetch(`${API_URL}/phones/phone_numbers`);
      const data = await response.json();
      setPhoneNumbers(data);
    } catch (error) {
      console.error("❌ Error fetching phone numbers:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhoneNumbers();
  }, []);

  // ✅ ฟังก์ชันคำนวณผลรวมจากเบอร์โทร
  const calculateTotal = (phoneNumber) => {
    const digits = phoneNumber.replace(/\D/g, ""); // เอาเฉพาะตัวเลข
    return digits
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  };

  // ✅ อัปเดตผลรวมอัตโนมัติเมื่อผู้ใช้กรอกเบอร์โทร
  const handlePhoneNumberChange = (e) => {
    let phone_number = sanitizePhoneNumber(e.target.value);

    // เอาเฉพาะตัวเลขเท่านั้น
    phone_number = phone_number.replace(/\D/g, "");

    // จำกัดความยาวไม่เกิน 10 ตัว
    if (phone_number.length > 10) {
      phone_number = phone_number.slice(0, 10);
    }

    setNewPhone({
      ...newPhone,
      phone_number,
      total: phone_number ? calculateTotal(phone_number) : "",
    });
  };

  // ✅ ฟังก์ชันเพิ่มเบอร์โทร
  const handleAddPhone = async (e) => {
    e.preventDefault();
    const phoneData = {
      phone_number: newPhone.phone_number,
      brand: newPhone.brand,
      price: newPhone.price.replace(/,/g, ""),
      status: newPhone.status,
    };
    console.log(phoneData);
    // return
    setAdding(true);
    try {
      // const response = await fetch(`${API_URL}/phones/addPhoneNumber`, {
      const response = await fetch(`${API_URL}/addPhoneNumber`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(phoneData),
      });

      if (!response.ok) throw new Error("เพิ่มเบอร์ไม่สำเร็จ");

      const addedPhone = await response.json();
      setPhoneNumbers([...phoneNumbers, addedPhone]);
      setNewPhone({
        phone_number: "",
        brand: "",
        total: "",
        price: "",
        status: "มาใหม่",
      });
      // toast.success("เพิ่มเบอร์เรียบร้อย!");
      _AlertPopUp().Success("เพิ่มเบอร์เรียบร้อย!");
      fetchPhoneNumbers();
    } catch (error) {
      console.error("❌ Error adding phone number:", error);
      // toast.error("เพิ่มเบอร์ไม่สำเร็จ!");
      _AlertPopUp().Error("เพิ่มเบอร์ไม่สำเร็จ!");
    } finally {
      setAdding(false);
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

      // toast.success("อัปเดตสถานะเรียบร้อย!");
      _AlertPopUp().Success("อัปเดตสถานะเรียบร้อย!");
      fetchPhoneNumbers();
    } catch (error) {
      console.error("❌ Error updating status:", error);
      // toast.error("อัปเดตสถานะไม่สำเร็จ!");
      _AlertPopUp().Error("อัปเดตสถานะไม่สำเร็จ!");
    }
  };

  // ✅ ฟังก์ชันลบเบอร์โทร
  const handleDeletePhone = async (id) => {
    try {
      const response = await fetch(
        // `${API_URL}/phones/deletePhoneNumber/${id}`,
        `${API_URL}/deletePhoneNumber/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) throw new Error("Error deleting phone number");

      // toast.success("ลบเบอร์เรียบร้อย!");
      _AlertPopUp().Success("ลบข้อมูลสำเร็จ !");
      fetchPhoneNumbers();
    } catch (error) {
      console.error("❌ Error deleting phone number:", error);
      _AlertPopUp().Error("ลบเบอร์ไม่สำเร็จ!");
    }
  };
  const formatNumber = (value) => {
    const numeric = value.replace(/,/g, "").replace(/\D/g, "");
    return numeric.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  //ModalEdit
  const [formModal, setFormModal] = useState({}); // ข้อมูลใน modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = (plate) => {
    // console.log(plate);
    setFormModal(plate);
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setFormModal({});
    setIsModalOpen(false);
  };

  // อัปเดตข้อมูล
  const handleEdit = async (formModal) => {
    if (
      formModal.phone_number === "" ||
      formModal.brand === "" ||
      formModal.price === ""
    ) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    const bodyData = {
      phone_number: formModal.phone_number,
      // total: String(calculateTotal(formModal.plate.replace(/\s/g, ""))),
      brand: formModal.brand,
      price: formModal.price,
      status: formModal.status,
    };

    try {
      const response = await fetch(
        // `${API_URL}/phones/updatePhoneNumber/${formModal.id}`,
        `${API_URL}/updatePhoneNumber/${formModal.id}`,
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
        // alert("แก้ไขข้อมูลสำเร็จ");
        _AlertPopUp().Success("แก้ไขข้อมูลสำเร็จ!");
        fetchPhoneNumbers(); // โหลดข้อมูลใหม่
        setIsModalOpen(false); // ✅ ปิด Modal เมื่อสำเร็จ
      } else {
        // alert("แก้ไขข้อมูลไม่สำเร็จ");
        _AlertPopUp().Error("แก้ไขข้อมูลไม่สำเร็จ!");
      }
      if (!response.ok) throw new Error("Error updating status");
    } catch (error) {
      console.error("❌ Error updating status:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        📞 จัดการเบอร์โทรศัพท์
      </h1>

      {/* ✅ ฟอร์มเพิ่มเบอร์โทรศัพท์ */}
      <form
        onSubmit={handleAddPhone}
        className="bg-white p-6 shadow rounded-lg mb-6"
      >
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <PlusCircle className="mr-2" /> เพิ่มเบอร์ใหม่
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="เบอร์โทร"
            value={formatTel(newPhone.phone_number)}
            onChange={handlePhoneNumberChange}
            required
            className="w-full p-2 border rounded-lg"
          />
          {/* <input
            type="text"
            placeholder="เครือข่าย"
            value={newPhone.brand}
            onChange={(e) =>
              setNewPhone({ ...newPhone, brand: e.target.value })
            }
            required
            className="w-full p-2 border rounded-lg"
          /> */}
          <select
            value={newPhone.brand}
            onChange={(e) =>
              setNewPhone({ ...newPhone, brand: e.target.value })
            }
            required
            className="w-full p-2 border rounded-lg"
          >
            <option value="">เลือกเครือข่าย</option>
            <option value="AIS">AIS</option>
            <option value="DTAC">DTAC</option>
            <option value="TRUE">TRUE</option>
            <option value="NT">NT</option>
            <option value="อื่นๆ">อื่นๆ</option>
          </select>
          <input
            type="text"
            placeholder="ราคา"
            maxLength={10}
            value={newPhone.price}
            onChange={(e) =>
              setNewPhone({ ...newPhone, price: formatNumber(e.target.value) })
            }
            required
            className="w-full p-2 border rounded-lg"
          />
          <select
            value={newPhone.status}
            onChange={(e) =>
              setNewPhone({ ...newPhone, status: e.target.value })
            }
            required
            className="w-full p-2 border rounded-lg"
          >
            <option value="มาใหม่">มาใหม่</option>
            <option value="ขายแล้ว">ขายแล้ว</option>
            <option value="จองแล้ว">จองแล้ว</option>
          </select>
          <input
            type="text"
            placeholder="ผลรวม"
            value={newPhone.total}
            readOnly
            className="w-full p-2 border bg-gray-200 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
        >
          <PlusCircle size={18} className="mr-2" />
          {isAdding ? "กําลังเพิ่ม..." : "เพิ่มเบอร์"}
        </button>
      </form>

      {/* ✅ ตารางแสดงเบอร์โทร */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">📋 รายการเบอร์โทร</h2>

        {isLoading === true ? (
          <div className="flex justify-center items-center">
            <ClipLoader />
          </div>
        ) : (
          <>
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
                      <td className="border p-2">
                        {formatTel(phone.phone_number)}
                      </td>
                      <td className="border p-2">{phone.brand}</td>
                      <td className="border p-2">{phone.total}</td>
                      <td className="border p-2 text-red-600 font-semibold">
                        {parseFloat(phone.price).toLocaleString()} บาท
                      </td>
                      <td className="border p-2">
                        <select
                          className="border p-1 rounded-lg"
                          value={phone.status}
                          onChange={(e) =>
                            handleUpdateStatus(phone.id, e.target.value)
                          }
                        >
                          <option value="มาใหม่">มาใหม่</option>
                          <option value="ขายแล้ว">ขายแล้ว</option>
                          <option value="จองแล้ว">จองแล้ว</option>
                        </select>
                      </td>
                      <td className="flex gap-1 p-2">
                        <button
                          className="bg-blue-600 text-white px-2 py-1 rounded"
                          onClick={() => handleOpenModal(phone)}
                        >
                          แก้ไข
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800 flex items-center gap-1"
                          onClick={() => handleDeletePhone(phone.id)}
                        >
                          <Trash2 size={18} /> ลบ
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </>
        )}
      </div>
      {isModalOpen && (
        <ModalTel
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

export default PhoneNumber;
