import { useEffect, useState } from "react";

const PlatesSpecial = ({cover , url}) => {
  const [platesSpecial, setPlatesSpecial] = useState([]);
  // ✅ ดึงข้อมูลป้ายคิดเองลักษณะพิเศษ

  useEffect(() => {
    const fetchPlatesSpecial = async () => {
      try {
        const response = await fetch(`${url}/plates_special`);
        if (!response.ok) throw new Error("Failed to fetch plates");
        const data = await response.json();
        setPlatesSpecial(data);
      } catch (error) {
        console.error("❌ Error fetching plates:", error);
      }
    };
    fetchPlatesSpecial();
  }, []);


  return (
    <>
      <div className="text-center mt-12 mb-6">
        <h2 className="text-2xl font-bold italic">ป้ายคิดเองลักษณะพิเศษ</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {platesSpecial.length > 0 ? (
          platesSpecial.map((plate, index) => (
            <div
              key={index}
              className="relative text-center p-6 rounded-md bg-cover bg-center shadow-lg"
              style={{ backgroundImage: `url(${cover})` }}
            >
              {/* แสดงป้าย "จองแล้ว" ถ้ามี */}
              {plate.status && (
                <div className="absolute top-[5px] right-0 bg-red-500 text-white py-1 px-2 md:px-3 text-sm rounded-s-md">
                  {plate.status}
                </div>
              )}

              {/* หมายเลขทะเบียน */}
              <p className="text-2xl text-black font-semibold">{plate.plate}</p>

              {/* แสดงราคา */}
              {plate.price && (
                <p className="text-lg text-black font-semibold mt-2">
                  {plate.price.toLocaleString()}{" "}
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
            ❌ ไม่พบผลลัพธ์ที่ตรงกับการค้นหา
          </p>
        )}
      </div>
    </>
  );
};
export default PlatesSpecial;
