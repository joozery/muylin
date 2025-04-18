const PlatesComponent = ({ cover, data, text, border, color_text }) => {
  return (
    <>
      <div className="pb-5">
        {/* ✅ หัวข้อ */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-center">{text}</h2>
        </div>

        {/* ✅ แสดงข้อมูลป้ายเขียว */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
          {data.length > 0 ? (
            data.map((plate, index) => (
              <div
                key={index}
                className={`relative flex flex-col gap-1 text-center px-2 py-1 md:p-6 rounded-md bg-cover bg-center shadow-lg ${border}`}
                style={{ backgroundImage: `url(${cover})` }}
              >
                {/* แสดงป้าย "จองแล้ว" ถ้ามี */}
                {plate.status && (
                  <div className="absolute top-[5px] right-0 bg-red-500 text-white px-[4px] py-[2px] md:px-2 md:py-1 rounded-s-md text-[8px] sm:text-[10px] md:text-xs">
                    {plate.status}
                  </div>
                )}

                {/* หมายเลขทะเบียน */}
                <span
                  className={`text-[1.1rem] md:text-xl ${
                    color_text ? color_text : "text-black"
                  } font-bold`}
                >
                  {plate.plate}
                </span>

                <span
                  className={`text-sm md:text-lg font-bold ${
                    color_text ? color_text : "text-black"
                  } `}
                >
                  กรุงเทพมหานคร
                </span>

                {/* ✅ แสดงราคาเป็น `1,000.-` แทน `1000.00` */}
                {plate.price && (
                  <div className="text-sm md:text-base flex justify-center gap-1 items-center leading-relaxed tracking-wider text-black font-bold pb-1">
                    {/* {plate.price === NaN ? 'ติดต่อ' : Number(plate.price).toLocaleString()} */}
                    {isNaN(Number(plate.price.replace(/,/g, "")))
                      ? "ติดต่อ"
                      : Number(plate.price.replace(/,/g, "")).toLocaleString()}
                    {/* {Number(plate.price).toLocaleString()} */}
                    <span className="text-sm"> บาท</span>
                  </div>
                )}

                {/* แสดงเลขผลรวม */}
                {plate.total && (
                  <div className="absolute bottom-2 right-2 text-white bg-yellow-600 px-[4px] py-[2px] sm:px-[6px] sm:py-[4px] rounded-full text-[8px] sm:text-[10px] md:text-xs">
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
