import { FiPhone, FiMail, FiGlobe } from "react-icons/fi"; // ✅ Import React Icons
import { Link } from "react-router-dom"; // ✅ นำเข้า Link

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#260c35] to-[#111111] text-white py-10 font-tahoma">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-300">
                    {/* คอลัมน์ 1 - Muaykin */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Muaylin</h3>
                        <p className="leading-relaxed">
                            หมวยหลิน ยินดีต้อนรับลูกค้าทุกท่านและขอบพระคุณที่ให้ความไว้วางใจในสินค้าของเรา
                        </p>
                        <p className="mt-2 leading-relaxed">
                            รับซื้อ-ขาย แลกเปลี่ยนทะเบียนสวย ทะเบียนประมูล ทะเบียนรถทุกประเภท รับจัดหาทะเบียน
                            และรับจองทะเบียน ตามที่ลูกค้าต้องการ
                        </p>
                    </div>

                    {/* คอลัมน์ 2 - ลิงค์แนะนำ */}
                    {/* คอลัมน์ 2 - ลิงค์แนะนำ */}
<div>
    
    <ul className="space-y-2">
        <li><Link to="/" className="text-white no-underline hover:text-yellow-300 transition duration-300">ทะเบียนสวย</Link></li>
        <li><Link to="/beautiful-phone" className="text-white no-underline hover:text-yellow-300 transition duration-300">เบอร์สวย</Link></li>
        <li><Link to="/our-service" className="text-white no-underline hover:text-yellow-300 transition duration-300">บริการของเรา</Link></li>
        <li><Link to="/order-process" className="text-white no-underline hover:text-yellow-300 transition duration-300">ขั้นตอนการสั่งซื้อ</Link></li>
        <li><Link to="/customers" className="text-white no-underline hover:text-yellow-300 transition duration-300">ลูกค้าของเรา</Link></li>
        <li><Link to="/contact" className="text-white no-underline hover:text-yellow-300 transition duration-300">ติดต่อหมวยหลิน</Link></li>
    </ul>
</div>

                    {/* คอลัมน์ 3 - ติดต่อพี่เบอร์เทพ */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">ติดต่อหมวยหลิน</h3>
                        <p>ลูกค้าสามารถโทรติดต่อ หรือไลน์ติดต่อ หมวยหลิน ได้ตลอดเวลา</p>
                        <div className="mt-4 space-y-3">
                            <p className="flex items-center space-x-2">
                                <FiPhone className="text-yellow-300 text-xl" />
                                <span className="text-lg">096-396-2888</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <FiMail className="text-yellow-300 text-xl" />
                                <span className="text-lg">muaydata</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <FiGlobe className="text-yellow-300 text-xl" />
                                <a href="#" className="text-white no-underline hover:text-yellow-300 transition duration-300">
                                    www.muaylintabien.co
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
                    © Copyright 2025 by <a href="#" className="text-white no-underline hover:text-yellow-300 transition duration-300">muaylintabien.co</a>
                </div>
            </div>
        </footer>
    );
}