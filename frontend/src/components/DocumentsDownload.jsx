import { FiDownload } from "react-icons/fi"; // ✅ ใช้ไอคอนดาวน์โหลด

const documents = [
    { name: "แบบคำร้องทั่วไป", link: "#" },
    { name: "หนังสือมอบอำนาจ (ด้านหน้า)", link: "#" },
    { name: "หนังสือมอบอำนาจ (ด้านหลัง)", link: "#" },
    { name: "หนังสือยินยอม", link: "#" },
    { name: "หนังสือยินยอม (รถติดไฟแนนซ์)", link: "#" },
    { name: "แบบคำขอโอนและรับโอน (ด้านหน้า)", link: "#" },
    { name: "แบบคำขอโอนและรับโอน (ด้านหลัง)", link: "#" },
    { name: "แบบคำขอจดทะเบียนรถ (ด้านหน้า)", link: "#" },
    { name: "แบบคำขอจดทะเบียนรถ (ด้านหลัง)", link: "#" },
    { name: "หนังสือรับรองการโอนสิทธิ์หมายเลขทะเบียนที่ประมูลได้", link: "#" }
];

export default function DocumentsDownload() {
    return (
        <section className="bg-[#111111] text-white py-12 font-prompt">
            <div className="container mx-auto px-6 lg:px-20">
                {/* หัวข้อ */}
                <div className="text-left max-w-3xl mx-0 pl-10">
                    <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
                    <p className="text-yellow-500 tracking-wide uppercase text-sm">MUAYLINTABIEN.CO</p>
                    <h2 className="text-3xl md:text-4xl font-bold italic mt-2">เอกสารและแบบฟอร์ม</h2>
                    <p className="text-gray-400 mt-2">
                        เอกสารและแบบฟอร์มที่ใช้ในการ โอน-สับเปลี่ยน และการจดทะเบียน  
                        <span className="text-red-500 font-semibold"> คลิกหัวข้อด้านล่างเพื่อดาวน์โหลด ได้เลยครับ</span>
                    </p>
                </div>

                {/* รายการดาวน์โหลด */}
                <div className="mt-8 space-y-4 max-w-3xl mx-0 pl-10">
                    {documents.map((doc, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-700 py-3">
                            <p className="text-lg">{doc.name}</p>
                            <a href={doc.link} className="text-yellow-400 hover:text-yellow-300 transition text-xl">
                                <FiDownload />
                            </a>
                        </div>
                    ))}
                </div>

                {/* หมายเหตุ */}
                <p className="text-gray-400 text-left mt-6 italic pl-10">
                    หากมีข้อสงสัย สามารถปรึกษากับทีมงานของเราได้
                </p>
            </div>
        </section>
    );
}