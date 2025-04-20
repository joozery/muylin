import React, { useEffect, useState } from "react";

const ModalEdit = ({ isOpen, onClose, onSubmit, formModal, plate, setFormModal}) => {
    if (!isOpen) return null;
    // console.log(formModal);
    const [isLoading, setIsLoading] = useState(false);
    const handleInputChange = (field, value) => {
        setFormModal({ ...formModal, [field]: value });
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

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div
                className={`bg-white rounded-lg shadow-lg px-10 py-12 w-1/3 transform transition-all duration-300 ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
                    }`}
            >
                <h2 className="text-2xl font-medium">
                    แก้ไข
                </h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-20 mt-14">
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-500 mb-2">เลขทะเบียน</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                value={formModal.plate}
                                onChange={(e) => handleInputChange("plate", e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-500 mb-2">ราคา</label>
                            <input
                                type="number"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md [&::-webkit-inner-spin-button]:appearance-none"
                                value={Math.floor(formModal.price)}
                                onChange={(e) => handleInputChange("price", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            className="w-1/4 px-2 py-2 bg-red-400 hover:bg-red-500 text-white shadow-md rounded-full"
                            onClick={onClose}
                            disabled={isLoading}
                        >
                            ยกเลิก
                        </button>
                        <button
                            type="button"
                            className="w-1/4 px-2 py-2 bg-blue-400 hover:bg-blue-500 text-white shadow-md rounded-full "
                            onClick={handleSubmit}
                            disabled={isLoading}
                        >
                            {isLoading ? "กำลังอัพเดท..." : "อัพเดท"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalEdit