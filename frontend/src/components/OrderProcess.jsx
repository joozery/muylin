import { FiClipboard, FiShoppingCart, FiCreditCard, FiTruck, FiCheckCircle } from "react-icons/fi";
import OrderSteps from "./OrderSteps"; // ✅ นำเข้า Section ขั้นตอนการสั่งซื้อป้ายทะเบียน
import OrderHeader from "../components/OrderHeader";
import DocumentsSection from "../components/DocumentsSection";
import DocumentsDownload from '../components/DocumentsDownload'; // ✅ นำเข้า DocumentsDownload component


const steps = [
    { icon: <FiClipboard />, title: "เลือกสินค้า", description: "เลือกเบอร์สวยหรือทะเบียนที่ต้องการ" },
    { icon: <FiShoppingCart />, title: "เพิ่มลงตะกร้า", description: "ตรวจสอบสินค้าและดำเนินการสั่งซื้อ" },
    { icon: <FiCreditCard />, title: "ชำระเงิน", description: "เลือกช่องทางการชำระเงินและยืนยัน" },
    { icon: <FiTruck />, title: "จัดส่งสินค้า", description: "ทีมงานจะดำเนินการส่งให้ตามที่อยู่ของคุณ" },
    { icon: <FiCheckCircle />, title: "เสร็จสมบูรณ์", description: "รับสินค้าพร้อมใช้งานทันที" },
];

export default function OrderProcess() {
    return (
        <>
            <OrderHeader /> {/* ✅ Section ภาพพื้นหลัง */}
            {/* Section: ขั้นตอนการสั่งซื้อเบอร์/ทะเบียน */}
             {/* <div className="bg-gradient-to-br from-[#260c35] to-[#111111] h-auto text-white font-[Prompt] py-12">
                <div className="container mx-auto px-6 lg:px-20">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">ขั้นตอนการสั่งซื้อ</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="bg-yellow-400 text-[#260c35] p-4 rounded-full text-3xl">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mt-4">{step.title}</h3>
                                <p className="text-gray-300 mt-2">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            {/* ✅ Section: ขั้นตอนการสั่งซื้อป้ายทะเบียน */}
            <OrderSteps />
            <DocumentsSection />
            <DocumentsDownload />  {/* ใช้ DocumentsDownload component */}
      
        </>
    );
}