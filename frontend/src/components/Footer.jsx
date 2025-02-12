import { FiPhone, FiMail, FiGlobe } from "react-icons/fi"; // ✅ Import React Icons

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#260c35] to-[#111111] text-white py-10 font-[Prompt]">
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
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">ลิงค์แนะนำ</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white no-underline hover:text-yellow-300 transition duration-300">ทะเบียนสวย</a></li>
                            <li><a href="#" className="text-white no-underline hover:text-yellow-300 transition duration-300">เบอร์สวย</a></li>
                            <li><a href="#" className="text-white no-underline hover:text-yellow-300 transition duration-300">บริการของเรา</a></li>
                            <li><a href="#" className="text-white no-underline hover:text-yellow-300 transition duration-300">ขั้นตอนการสั่งซื้อ</a></li>
                            <li><a href="#" className="text-white no-underline hover:text-yellow-300 transition duration-300">ลูกค้าของเรา</a></li>
                            <li><a href="#" className="text-white no-underline hover:text-yellow-300 transition duration-300">ติดต่อพี่เบอร์เทพ</a></li>
                        </ul>
                    </div>

                    {/* คอลัมน์ 3 - ติดต่อพี่เบอร์เทพ */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">ติดต่อพี่เบอร์เทพ</h3>
                        <p>ลูกค้าสามารถโทรติดต่อ หรือไลน์ติดต่อ พี่เบอร์เทพ ได้ตลอดเวลา</p>
                        <div className="mt-4 space-y-3">
                            <p className="flex items-center space-x-2">
                                <FiPhone className="text-yellow-300 text-xl" />
                                <span className="text-lg">096-396-2888</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <FiMail className="text-yellow-300 text-xl" />
                                <span className="text-lg">@muaydata</span>
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