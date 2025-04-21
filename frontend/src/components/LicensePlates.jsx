import React, { useState, useEffect } from "react";
import newImage from "../assets/หมวดใหม่.jpg";
import gold from "../assets/gold.jpg";
import greenImage from "../assets/green.jpg"; // ✅ ใส่ภาพพื้นหลังของป้ายเขียว
import graphicVanCover from "../assets/ทะเบียนเขียว.jpg"; // ✅ รูปทะเบียนรถตู้กราฟฟิค
import motorcycleImage from "../assets/ทะเบียนรถมอเตอร์ไซด์.jpg"; // ✅ ใส่รูปพื้นหลังของป้ายมอเตอร์ไซค์
import defaultPlates from "../assets/ขาวดำเก่า.jpg";
import goldGraphicImage from "../assets/gold.jpg"; // ✅ รูปพื้นหลังของทะเบียนระฆังทอง (กราฟฟิคสีทอง)
import PlatesComponent from "./Plates/PlatesSearchComponent";
import { BeatLoader, GridLoader } from "react-spinners";

const API_URL = import.meta.env.VITE_API_URL;

export default function LicensePlates({ data, loading }) {
  const componentMap = {
    plates_new: { cover: newImage, text: "ป้ายประมูลหมวดใหม่" },
    plates_special: {
      cover: defaultPlates,
      border: `border-2 border-yellow-500`,
      text: "ป้ายคิดเองลักษณะพิเศษ",
    },
    plates_green: {
      cover: defaultPlates,
      text: "ป้ายเขียว",
      colorText: `text-green-700`,
      border: `border-3 border-green-700`,
    },
    plates_graphic_van: {
      cover: graphicVanCover,
      text: "ป้ายทะเบียนรถตู้กราฟฟิค",
    },
    plates_motorcycle: {
      cover: defaultPlates,
      text: "ป้ายทะเบียนรถมอเตอร์ไซค์",
    },
    plates_single_digit: {
      cover: defaultPlates,
      text: "ป้ายทะเบียนรถเลขตัวเดียว",
    },
    plates_double_digit: {
      cover: defaultPlates,
      text: "ป้ายทะเบียนรถเลขคู่",
    },
    plates_triple_digit: {
      cover: defaultPlates,
      text: "ป้ายทะเบียนรถเลขตอง",
    },
    plates_quadruple_digit: {
      cover: defaultPlates,
      text: "ป้ายทะเบียนรถเลขโฟร์",
    },
    plates_new_non_auction: {
      cover: defaultPlates,
      text: "ป้ายทะเบียนรถหมวดใหม่ (ไม่ใช่ประมูล)",
    },
    plates_old_non_auction: {
      cover: defaultPlates,
      text: "ป้ายทะเบียนรถขาวดำหมวดเก่า",
    },
    plates_old: { cover: newImage, text: "ป้ายทะเบียนรถประมูลหมวดเก่า" },
    plates_gold_graphic: {
      cover: goldGraphicImage,
      text: "ป้ายทะเบียนรถระฆังทอง (กราฟฟิคสีทอง)",
    },
    plates_electric: {
      cover: defaultPlates,
      text: "ป้ายทะเบียนรถตู้ป้ายฟ้า",
      colorText: `text-[#023F8C]`,
      border: `border-3 border-[#023F8C]`,
    },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <GridLoader className="mx-auto" color="#591282" size={20} />
      </div>
    );
  }

  return (
    <section className="bg-black text-white pb-12 font-tahoma">
      <div className="container mx-auto px-6 lg:px-20">
        {/* เช็คว่าทุกหมวดไม่มีข้อมูลเลย */}
        {data.every((item) => !item.data || item.data.length === 0) ? (
          <div className="text-center font-bold text-black text-lg py-12">
            ❌ ไม่พบข้อมูลที่ค้นหา
          </div>
        ) : (
          // แสดงผล Component ตามผลลัพธ์การค้นหา
          data.map((result, index) => {
            const { type, data: plateData } = result;
            const componentConfig = componentMap[type];

            if (componentConfig && plateData && plateData.length > 0) {
              return (
                <PlatesComponent
                  key={index}
                  color_text={componentConfig.colorText}
                  border={componentConfig.border}
                  cover={componentConfig.cover}
                  text={`${componentConfig.text} (${plateData.length} รายการ)`}
                  data={plateData}
                />
              );
            }
            return null;
          })
        )}
      </div>
    </section>
  );
}
