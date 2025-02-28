import React, { useState, useEffect } from "react";
import newImage from "../assets/หมวดใหม่.jpg";
import gold from "../assets/gold.jpg";
import greenImage from "../assets/green.jpg"; // ✅ ใส่ภาพพื้นหลังของป้ายเขียว
import graphicVanCover from "../assets/ทะเบียนเขียว.jpg"; // ✅ รูปทะเบียนรถตู้กราฟฟิค
import motorcycleImage from "../assets/ทะเบียนรถมอเตอร์ไซด์.jpg"; // ✅ ใส่รูปพื้นหลังของป้ายมอเตอร์ไซค์
import singleDigitImage from "../assets/ขาวดำเก่า.jpg";
import doubleDigitImage from "../assets/ขาวดำเก่า.jpg"; // ✅ ใส่รูปพื้นหลังของทะเบียนเลขคู่
import tripleDigitImage from "../assets/ขาวดำเก่า.jpg"; // ✅ ใส่รูปพื้นหลังของทะเบียนเลขตอง
import quadrupleDigitImage from "../assets/หมวดใหม่.jpg"; // ✅ ใส่รูปพื้นหลังของทะเบียนเลขโฟร์
import newNonAuctionImage from "../assets/ขาวดำเก่า.jpg"; // ✅ ใส่รูปพื้นหลังของทะเบียนหมวดใหม่ (ไม่ใช่ประมูล)
import oldNonAuctionImage from "../assets/ขาวดำเก่า.jpg"; // ✅ ใส่รูปพื้นหลังของทะเบียนขาวดำหมวดเก่า
import oldImage from "../assets/ขาวดำเก่า.jpg"; // ✅ รูปพื้นหลังของทะเบียนขาวดำหมวดเก่า
import goldGraphicImage from "../assets/gold.jpg"; // ✅ รูปพื้นหลังของทะเบียนระฆังทอง (กราฟฟิคสีทอง)
import PlatesComponent from "./Plates/PlatesSearchComponent";
import {BeatLoader , GridLoader} from "react-spinners";

const API_URL = import.meta.env.VITE_API_URL;

export default function LicensePlates({ data, loading }) {
  const componentMap = {
    plates_new: { cover: newImage, text: "ป้ายประมูลหมวดใหม่" },
    plates_special: { cover: gold, text: "ป้ายคิดเองลักษณะพิเศษ" },
    plates_green: { cover: greenImage, text: "ป้ายเขียว" },
    plates_graphic_van: {
      cover: graphicVanCover,
      text: "ป้ายทะเบียนรถตู้กราฟฟิค",
    },
    plates_motorcycle: {
      cover: motorcycleImage,
      text: "ป้ายทะเบียนรถมอเตอร์ไซค์",
    },
    plates_single_digit: {
      cover: singleDigitImage,
      text: "ป้ายทะเบียนรถเลขตัวเดียว",
    },
    plates_double_digit: {
      cover: doubleDigitImage,
      text: "ป้ายทะเบียนรถเลขคู่",
    },
    plates_triple_digit: {
      cover: tripleDigitImage,
      text: "ป้ายทะเบียนรถเลขตอง",
    },
    plates_quadruple_digit: {
      cover: quadrupleDigitImage,
      text: "ป้ายทะเบียนรถเลขโฟร์",
    },
    plates_new_non_auction: {
      cover: newNonAuctionImage,
      text: "ป้ายทะเบียนรถหมวดใหม่ (ไม่ใช่ประมูล)",
    },
    plates_old_non_auction: {
      cover: oldNonAuctionImage,
      text: "ป้ายทะเบียนรถขาวดำหมวดเก่า",
    },
    plates_old: { cover: oldImage, text: "ป้ายทะเบียนรถขาวดำหมวดเก่า" },
    plates_gold_graphic: {
      cover: goldGraphicImage,
      text: "ป้ายทะเบียนรถระฆังทอง (กราฟฟิคสีทอง)",
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
    <section className="bg-gradient-to-b to-[#111111] text-white py-12 font-tahoma">
      <div className="container mx-auto px-6 lg:px-20">
        {/* ⭐⭐⭐⭐⭐ MUAY.LINTABIEN.CO */}
        <div className="text-center mb-6">
          <p className="text-yellow-400 text-lg">★★★★★</p>
          <p className="text-yellow-400 font-bold">MUAYLINTABIEN.CO</p>
        </div>
        {/* แสดงผล Component ตามผลลัพธ์การค้นหา*/}
        {data &&
          data.map((result, index) => {
            const { type, data: plateData } = result;
            const componentConfig = componentMap[type];

            if (componentConfig && plateData && plateData.length > 0) {
              return (
                <PlatesComponent
                  key={index}
                  cover={componentConfig.cover}
                  text={`${componentConfig.text} (${plateData.length} รายการ)`}
                  data={plateData}
                />
              );
            }
            return null;
          })}
        {/* แสดงผล Component ตามผลลัพธ์การค้นหา
        {data &&
          data.map((result, index) => {
            const { type, data } = result;
            switch (type) {
              case "plates_new":
                return (
                  <PlatesComponent
                    key={index}
                    cover={newImage}
                    text={`ป้ายประมูลหมวดใหม่ (${data.length} รายการ)`}
                    data={data}
                  />
                );
              case "plates_special":
                return (
                  <PlatesComponent
                    key={index}
                    cover={gold}
                    text={`ป้ายคิดเองลักษณะพิเศษ (${data.length} รายการ)`}
                    data={data}
                  />
                );
              case "plates_green":
                return (
                  <PlatesComponent
                    key={index}
                    cover={greenImage}
                    text={`ป้ายเขียว (${data.length} รายการ)`}
                    data={data}
                  />
                );
              case "plates_graphic_van":
                return (
                  <PlatesComponent
                    key={index}
                    cover={graphicVanCover}
                    text={`ป้ายทะเบียนรถตู้กราฟฟิค (${data.length} รายการ)`}
                    data={data}
                  />
                );
              case "plates_motorcycle":
                return (
                  <PlatesComponent
                    key={index}
                    cover={motorcycleImage}
                    text={`ป้ายทะเบียนรถมอเตอร์ไซค์ (${data.length} รายการ)`}
                    data={data}
                  />
                );
              case "plates_single_digit":
                return (
                  <PlatesComponent
                    key={index}
                    cover={singleDigitImage}
                    text={`ป้ายทะเบียนรถเลขตัวเดียว (${data.length} รายการ)`}
                    data={data}
                  />
                );
              case "plates_double_digit":
                return (
                  <PlatesComponent
                    key={index}
                    cover={doubleDigitImage}
                    text={`ป้ายทะเบียนรถเลขคู่ (${data.length} รายการ)`}
                    data={data}
                  />
                );
              case "plates_triple_digit":
                return (
                  <PlatesComponent
                    key={index}
                    cover={tripleDigitImage}
                    text={`ป้ายทะเบียนรถเลขตอง (${data.length} รายการ)`}
                    data={data}
                  />
                );
              case "plates_quadruple_digit":
                return (
                  <PlatesComponent
                    key={index}
                    cover={quadrupleDigitImage}
                    text={`ป้ายทะเบียนรถเลขโฟร์ (${data.length} รายการ)`}
                    data={data}
                  />
                );
              case "plates_new_non_auction":
                return (
                  <PlatesComponent
                    key={index}
                    cover={newNonAuctionImage}
                    text={`ป้ายทะเบียนรถหมวดใหม่ (ไม่ใช่ประมูล) (${data.length} รายการ)`}
                    data={data}
                  />
                );
              case "plates_old_non_auction":
                return (
                  <PlatesComponent
                    key={index}
                    cover={oldNonAuctionImage}
                    text={`ป้ายทะเบียนรถขาวดำหมวดเก่า (${data.length} รายการ)`}
                    data={data}
                  />
                );
              case "plates_old":
                return (
                  <PlatesComponent
                    key={index}
                    cover={oldImage}
                    text={`ป้ายทะเบียนรถขาวดำหมวดเก่า (${data.length} รายการ)`}
                    data={data}
                  />
                );
              case "plates_gold_graphic":
                return (
                  <PlatesComponent
                    key={index}
                    cover={goldGraphicImage}
                    text={`ป้ายทะเบียนรถระฆังทอง (กราฟฟิคสีทอง) (${data.length} รายการ)`}
                    data={data}
                  />
                );
              default:
                return null;
            }
          })} */}
      </div>
    </section>
  );
}
