import { FaCheck } from "react-icons/fa"; // ✅ ใช้ React Icons

const steps = [
    "เลือกป้ายที่ต้องการ แล้วโทรหาเราเพื่อยืนยันการจอง",
    "โอนเงินมัดจำ",
    "นัดวันเวลา เพื่อชำระส่วนที่เหลือ ที่กรมการขนส่งทางบก (จตุจักร) อาคาร 2 ชั้น 5 ในวันและเวลาราชการ",
    "ท่านจะได้รับเอกสารสิทธิ์ของเลขทะเบียน เพื่อนำไปใช้จดทะเบียนกับรัฐ",
    "รอประมาณ 1-2 สัปดาห์ จะได้รับป้ายทะเบียน ไปใช้งาน"
];

export default function OrderSteps() {
    return (
        <section className="bg-[#111111] text-white py-4 md:py-12 font-prompt"> {/* ✅ ใช้ฟอนต์ Prompt */}
            <div className="container mx-auto px-6 lg:px-20 p-3">
                {/* หัวข้อ */}
                <div className="max-w-5xl md:mx-0 mx-auto">
                    {/* <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
                    <p className="text-yellow-500 tracking-wide uppercase text-sm">MUAYLINTABIEN.CO</p> */}
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">ขั้นตอนการสั่งซื้อป้ายจากเรา</h2>
                </div>

                {/* รายการขั้นตอน */}
                <div className="mt-6 space-y-4 max-w-xl mx-0 ps-2">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center gap-3 text-base md:text-lg">
                            <FaCheck className="text-white w-3 min-w-3"/>
                            <span>{step}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}