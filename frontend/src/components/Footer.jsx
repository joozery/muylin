import { FaLine } from "react-icons/fa";
import { FiPhone, FiMail, FiGlobe } from "react-icons/fi"; // ✅ Import React Icons
import { Link } from "react-router-dom"; // ✅ นำเข้า Link

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#260c35] to-[#111111] text-white py-10 font-tahoma">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 text-gray-300 px-2">
          {/* คอลัมน์ 1 - Muaykin */}
          {/* <div>
            <h3 className="text-xl font-bold text-white mb-4">Muaylin</h3>
            <p className="leading-relaxed">
              หมวยหลิน
              ยินดีต้อนรับลูกค้าทุกท่านและขอบพระคุณที่ให้ความไว้วางใจในสินค้าของเรา
            </p>
            <p className="mt-2 leading-relaxed">
              รับซื้อ-ขาย แลกเปลี่ยนทะเบียนสวย ทะเบียนประมูล ทะเบียนรถทุกประเภท
              รับจัดหาทะเบียน และรับจองทะเบียน ตามที่ลูกค้าต้องการ
            </p>
          </div> */}

          {/* คอลัมน์ 2 - ลิงค์แนะนำ */}
          {/* คอลัมน์ 2 - ลิงค์แนะนำ */}
          {/* <div>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white no-underline hover:text-yellow-300 transition duration-300"
                >
                  ทะเบียนสวย
                </Link>
              </li>
              <li>
                <Link
                  to="/beautiful-phone"
                  className="text-white no-underline hover:text-yellow-300 transition duration-300"
                >
                  เบอร์สวย
                </Link>
              </li>
              <li>
                <Link
                  to="/our-service"
                  className="text-white no-underline hover:text-yellow-300 transition duration-300"
                >
                  บริการของเรา
                </Link>
              </li>
              <li>
                <Link
                  to="/order-process"
                  className="text-white no-underline hover:text-yellow-300 transition duration-300"
                >
                  ขั้นตอนการสั่งซื้อ
                </Link>
              </li>
              <li>
                <Link
                  to="/customers"
                  className="text-white no-underline hover:text-yellow-300 transition duration-300"
                >
                  ลูกค้าของเรา
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white no-underline hover:text-yellow-300 transition duration-300"
                >
                  ติดต่อหมวยหลิน
                </Link>
              </li>
            </ul>
          </div> */}

          {/* คอลัมน์ 3 - ติดต่อพี่เบอร์เทพ */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              ติดต่อหมวยหลิน
            </h3>
            <div className="text-center">
              <p className="text-lg font-semibold">
                หมวยหลิน ยินดีต้อนรับ ลูกค้าทุกๆท่าน
              </p>
              <p className="text-base">
                และขอขอบคุณลูกค้าทุกๆท่าน ที่ให้ความไว้วางใจ
              </p>
              <p className="text-lg font-semibold">
                ซื้อเบอร์สวยและทะเบียนสวยกับเรา
              </p>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex flex-col lg:flex-row lg:justify-center items-start gap-2 md:space-x-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    <FiPhone className="text-yellow-300 text-xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm">CALL</span>
                    <span className="text-base">096-396-2888</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    <FaLine className="text-yellow-300 text-xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm">LINE</span>
                    <span className="text-base">muaydata</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    <FiGlobe className="text-yellow-300 text-xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm">Website</span>
                    <span className="text-base">www.muaylintabien.co</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
          © Copyright 2025 by{" "}
          <a
            href="#"
            className="text-white no-underline hover:text-yellow-300 transition duration-300"
          >
            muaylintabien.co
          </a>
        </div>
      </div>
    </footer>
  );
}
