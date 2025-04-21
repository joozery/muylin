import React, { useEffect, useState } from "react";
import { formatTel, sanitizePhoneNumber } from "../../helper/helper";

const ModalTel = ({ isOpen, onClose, onSubmit, formModal, setFormModal }) => {
  if (!isOpen) return null;
  // console.log(formModal);
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (field, value) => {
    // ตัดค่าที่เกิน 10 ตัวอักษรออก
    if (value.length > 10) {
      value = value.slice(0, 10);
    }

    setFormModal((prev) => ({ ...prev, [field]: value }));
  };
  const formatNumber = (value) => {
    if (!value) return "";
  
    // ลบคอมม่าเดิม + แปลงเป็น string
    const numeric = value.toString().replace(/,/g, "");
  
    // แยกส่วนเต็มกับทศนิยม
    const [intPart, decimalPart] = numeric.split(".");
  
    // แปลงส่วนเต็มให้ใส่ comma
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    // ถ้ามีทศนิยม และไม่ใช่ "00" → แสดงทศนิยม
    if (decimalPart && decimalPart !== "00") {
      return `${formattedInt}.${decimalPart}`;
    }
  
    // ❌ ไม่แสดง .00
    return formattedInt;
  };
  
  

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await onSubmit(); // รอให้ onSubmit ทำงานเสร็จ
    } finally {
      setIsLoading(false);
      onClose(); // ปิด Modal หลังอัพเดทเสร็จ
    }
  };

  useEffect(() => {
    console.log("formModal", formModal);
  }, [formModal]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg px-10 py-12 w-1/3 transform transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-2xl font-medium">แก้ไข</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-20 mt-14">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-500 mb-2">
                เบอร์โทร
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formatTel(formModal.phone_number)}
                onChange={(e) =>
                  handleInputChange("phone_number", sanitizePhoneNumber(e.target.value))
                }
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-500 mb-2">
                เครือข่าย
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formModal.brand}
                onChange={(e) => handleInputChange("brand", e.target.value)}
              >
                <option value="">เลือกเครือข่าย</option>
                <option value="AIS">AIS</option>
                <option value="TRUE">TRUE</option>
                <option value="DTAC">DTAC</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-500 mb-2">
                ราคา
              </label>
              {/* <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formatNumber(formModal.price)}
                onChange={(e) => handleInputChange("price", formatNumber(e.target.value))}
              /> */}
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formatNumber(formModal.price)}
                onChange={(e) => {
                  const input = e.target;
                  const raw = input.value.replace(/,/g, "").replace(/\D/g, "");

                  // คำนวณ caret position
                  const caret = input.selectionStart;
                  const before = input.value
                    .slice(0, caret)
                    .replace(/,/g, "").length;

                  // อัปเดต raw value
                  handleInputChange("price", raw);

                  // ใช้ setTimeout เพื่อรอให้ค่าใหม่ set แล้วค่อยเลื่อน caret
                  setTimeout(() => {
                    const formatted = formatNumber(raw);
                    let newCaret = 0;
                    let digitsSeen = 0;

                    for (let i = 0; i < formatted.length; i++) {
                      if (/\d/.test(formatted[i])) {
                        digitsSeen++;
                      }
                      if (digitsSeen === before) {
                        newCaret = i + 1;
                        break;
                      }
                    }

                    input.setSelectionRange(newCaret, newCaret);
                  }, 0);
                }}
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="w-full px-2 py-2 bg-gray-400 hover:bg-gray-500 text-white shadow-md rounded-full"
              onClick={onClose}
              disabled={isLoading}
            >
              ยกเลิก
            </button>
            <button
              type="button"
              className="w-full px-2 py-2 bg-blue-400 hover:bg-blue-500 text-white shadow-md rounded-full "
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "กำลังอัพเดท..." : "อัพเดท"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalTel;
