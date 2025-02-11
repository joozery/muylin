import { FaCheck } from "react-icons/fa"; // ✅ ใช้ React Icons

const documents = [
    {
        title: "กรณีรถใหม่ป้ายแดง",
        items: [
            "มีจดรับเอกสาร(ชุดโอน)ได้ที่กรมการขนส่งทางบก (จตุจักร)",
            "หนังสือรับรองการโอนสิทธิ์หมายเลขทะเบียนประมูลได้ (ลงลายมือชื่อในช่องผู้รับโอนสิทธิ์)",
            "สำเนาบัตรประชาชนเจ้าของรถ (ลงลายมือชื่อรับรองสำเนา ถูกต้อง)",
            "นำเอกสารทั้งหมดจดทะเบียนให้รัฐรถยนต์ เพื่อดำเนินการจดทะเบียนต่อไป"
        ],
        note: "หมายเหตุ : ทะเบียนรถสามารถจองลมได้ทันที และดำเนินการกับป้ายไว้ได้นาน 3 ปี"
    },
    {
        title: "กรณีรถทะเบียนผู้อื่นแล้ว",
        items: []
    },
    {
        title: "กรณีรถติดไฟแนนซ์",
        items: [
            "ใช้สมุดทะเบียนรถยนต์ฉบับจริง",
            "สำเนาบัตรประชาชนของผู้ครอบครองพร้อมเซ็นรับรองสำเนาถูกต้อง จำนวน 2 ชุด",
            "สำเนาทะเบียนบ้านของผู้ครอบครองพร้อมเซ็นรับรองสำเนาถูกต้อง จำนวน 2 ชุด",
            "หนังสือสอบถามจาก 2 ชุด (เซ็นชื่อผู้อนุมัติจาก)",
            "ค่าใช้จ่ายในการดำเนินการ รวมค่าธรรมเนียม 3,000 บาท"
        ]
    },
    {
        title: "กรณีที่ไฟแนนซ์ไม่ติดไฟแนนซ์",
        items: [
            "ใช้สมุดทะเบียนรถยนต์ฉบับจริง",
            "สำเนาบัตรประชาชนของผู้ครอบครองพร้อมเซ็นรับรองสำเนาถูกต้อง จำนวน 2 ชุด",
            "สำเนาทะเบียนบ้านของผู้ครอบครองพร้อมเซ็นรับรองสำเนาถูกต้อง จำนวน 2 ชุด",
            "หนังสือสอบถามจาก 2 ชุด (เซ็นชื่อผู้อนุมัติจาก)",
            "ค่าใช้จ่ายในการดำเนินการ รวมค่าธรรมเนียม 3,000 บาท"
        ]
    }
];

export default function DocumentsSection() {
    return (
        <section className="bg-gradient-to-b from-[#1a0d22] to-[#111111] text-white py-12 font-prompt border-t border-gray-800">
            <div className="container mx-auto px-6 lg:px-20">
                {/* หัวข้อ */}
                <div className="text-left max-w-xl mx-0 pl-10">
                    <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
                    <p className="text-yellow-500 tracking-wide uppercase text-sm">MUAYLINTABIEN.CO</p>
                    <h2 className="text-3xl md:text-4xl font-bold italic mt-2">เอกสารประกอบการดำเนินการ</h2>
                </div>

                {/* หมวดหมู่เอกสาร */}
                <div className="mt-8 space-y-8 max-w-xl mx-0 pl-10">
                    {documents.map((doc, index) => (
                        <div key={index}>
                            {/* หัวข้อหมวดหมู่ */}
                            <h3 className="text-xl font-bold text-white">{doc.title}</h3>

                            {/* รายการเอกสาร */}
                            {doc.items.length > 0 ? (
                                <ul className="mt-2 space-y-2">
                                    {doc.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <FaCheck className="text-green-400 flex-shrink-0 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-400 mt-2">ไม่มีข้อมูลเพิ่มเติม</p>
                            )}

                            {/* หมายเหตุ */}
                            {doc.note && <p className="text-sm text-gray-400 mt-2 italic">{doc.note}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}