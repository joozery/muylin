import cover from "../assets/cover.webp"; // ✅ นำเข้ารูปภาพ

export default function OrderHeader() {
    return (
        <section className="relative h-[300px] md:h-[400px] w-full font-prompt">
            {/* รูปพื้นหลัง */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${cover})` }} // ✅ ใช้ตัวแปร cover
            ></div>

            {/* Overlay สีม่วงโปร่งแสง */}
            <div className="absolute inset-0 bg-[#260c35] bg-opacity-20"></div> {/* ✅ เปลี่ยนเป็นสีม่วง */}

            {/* ข้อความ */}
            <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 lg:px-20 text-white">
                <p className="text-sm uppercase tracking-widest opacity-75">รายละเอียด</p>
                <h1 className="text-4xl md:text-5xl font-bold italic">ขั้นตอนการสั่งซื้อ</h1>
            </div>
        </section>
    );
}