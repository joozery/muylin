import { useEffect, useState } from "react";

const PlatesOldNonAuction = ({ cover, url }) => {
  const [platesOldNonAuction, setPlatesOldNonAuction] = useState([]);

  // ✅ ดึงข้อมูลทะเบียนรถขาวดำหมวดเก่าจาก API
  useEffect(() => {
    const fetchPlatesOldNonAuction = async () => {
      try {
        const response = await fetch(`${url}/plates_old_non_auction`);
        if (!response.ok) throw new Error("Failed to fetch plates");
        const data = await response.json();
        setPlatesOldNonAuction(data);
      } catch (error) {
        console.error("❌ Error fetching plates_old_non_auction:", error);
      }
    };
    fetchPlatesOldNonAuction();
  }, [url]);

  return (
    <>
      {/* ✅ หัวข้อ */}
      <div className="text-center mt-12 mb-6">
        <h2 className="text-2xl font-bold italic">ทะเบียนรถขาวดำหมวดเก่า</h2>
      </div>

      {/* ✅ แสดงข้อมูลทะเบียนรถขาวดำหมวดเก่า */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {platesOldNonAuction.length > 0 ? (
          platesOldNonAuction.map((plate, index) => (
            <div
              key={index}
              className="relative text-center p-6 rounded-md bg-cover bg-center shadow-lg"
              style={{ backgroundImage: `url(${cover})` }}
            >
              {/* แสดงป้าย "จองแล้ว" ถ้ามี */}
              {plate.status && (
                <div className="absolute top-[5px] right-0 bg-red-500 text-white py-1 px-3 text-sm rounded-s-md">
                  {plate.status}
                </div>
              )}

              {/* หมายเลขทะเบียน */}
              <p className="text-2xl text-black font-semibold">{plate.plate}</p>

              {/* ✅ แสดงราคาเป็น `1,000.-` แทน `1000.00` */}
              {plate.price && (
                <p className="text-lg text-black font-semibold mt-2 px-2 rounded-md">
                  {Number(plate.price).toLocaleString()}<span className="text-sm">.-</span>
                </p>
              )}

              {/* แสดงเลขผลรวม */}
              {plate.total && (
                <div className="absolute bottom-2 right-2 text-white bg-yellow-600 px-2 py-1 rounded-full text-xs">
                  {plate.total}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-4">
            ❌ ไม่พบทะเบียนรถขาวดำหมวดเก่า
          </p>
        )}
      </div>
    </>
  );
};

export default PlatesOldNonAuction;