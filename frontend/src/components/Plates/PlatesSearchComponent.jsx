const PlatesComponent = ({ cover, data, text , border }) => {
  return (
    <>
      <div className="pb-5">
        {/* ✅ หัวข้อ */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-center">{text}</h2>
        </div>

        {/* ✅ แสดงข้อมูลป้ายเขียว */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 mt-8">
          {data.length > 0 ? (
            data.map((plate, index) => (
              <div
                key={index}
                className={`relative text-center px-2 py-1 md:p-6 rounded-md bg-cover bg-center shadow-lg ${border}`}
                style={{ backgroundImage: `url(${cover})` }}
              >
                {/* แสดงป้าย "จองแล้ว" ถ้ามี */}
                {plate.status && (
                  <div className="absolute top-[5px] right-0 bg-red-500 text-white px-2 py-1 md:py-1 md:px-3 text-sm rounded-s-md text-xs">
                    {plate.status}
                  </div>
                )}

                {/* หมายเลขทะเบียน */}
                <p className="text-sm md:text-2xl text-black font-semibold">
                  {plate.plate}
                </p>

                <p className="text-sm md:text-2xl text-black font-semibold">
                  กรุงเทพมหานคร
                </p>

                {/* ✅ แสดงราคาเป็น `1,000.-` แทน `1000.00` */}
                {plate.price && (
                  <p className="text-sm md:text-lg text-black font-semibold mt-2  px-2 rounded-md">
                    {/* {plate.price === NaN ? 'ติดต่อ' : Number(plate.price).toLocaleString()} */}
                    {isNaN(Number(plate.price.replace(/,/g, "")))
                      ? "ติดต่อ"
                      : Number(plate.price.replace(/,/g, "")).toLocaleString()}
                    {/* {Number(plate.price).toLocaleString()} */}
                    <span className="text-sm"> บาท</span>
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
              ❌ ไม่พบป้ายเขียว
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default PlatesComponent;
