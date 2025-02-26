import React from 'react';
import { useLocation } from 'react-router-dom';

import OldAuction from './page/OldAuction';
import NewAuction from './page/NewAuction';
import NonAuction from './page/NonAuction';
import SpecialPlate from './page/SpecialPlate';
import VanPlate from './page/VanPlate';
import MotorcyclePlate from './page/MotorcyclePlate';
import GreenPlate from './page/GreenPlate';
import GraphicVanPlate from './page/GraphicVanPlate';
import SingleDigitPlate from './page/SingleDigitPlate';
import DoubleDigitPlate from './page/DoubleDigitPlate';
import TripleDigitPlate from './page/TripleDigitPlate';
import QuadrupleDigitPlate from './page/QuadrupleDigitPlate';
import NewNonAuctionPlate from './page/NewNonAuctionPlate';
import OldNonAuctionPlate from './page/OldNonAuctionPlate';
import GoldGraphicPlate from './page/GoldGraphicPlate';

const Maincontent = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex-1 bg-gray-100 p-8 overflow-auto">
      {currentPath === '/dashboard/old-auction' && <OldAuction />} 
      {/* ทะเบียนรถประมูลหมวดเก่า */}
      {currentPath === '/dashboard/new-auction' && <NewAuction />}  
      {/* ทะเบียนรถประมูลหมวดใหม่ */}
      {currentPath === '/dashboard/non-auction' && <NonAuction />}
      {currentPath === '/dashboard/special-plate' && <SpecialPlate />} 
      {/* ทะเบียนรถคิดเอง(ลักษณะพิเศษ)	 */}
      {currentPath === '/dashboard/van-plate' && <VanPlate />} 
      {/* ทะเบียนรถตู้ป้ายฟ้า */}
      {currentPath === '/dashboard/motorcycle-plate' && <MotorcyclePlate />} 
      {/* ทะเบียนรถมอเตอร์ไซด์ */}
      {currentPath === '/dashboard/green-plate' && <GreenPlate />}  
      {/* ทะเบียนรถกะบะป้ายเขียว */}
      {currentPath === '/dashboard/graphic-van-plate' && <GraphicVanPlate />} 
      {/* ทะเบียนรถตู้กราฟฟิค */}
      {currentPath === '/dashboard/single-digit-plate' && <SingleDigitPlate />} 
      {/* ทะเบียนรถเลขตัวเดียว */}
      {currentPath === '/dashboard/double-digit-plate' && <DoubleDigitPlate />} 
      {/* ทะเบียนรถเลขคู่ */}
      {currentPath === '/dashboard/triple-digit-plate' && <TripleDigitPlate />} 
      {/* ทะเบียนเลขตอง */}
      {currentPath === '/dashboard/quadruple-digit-plate' && <QuadrupleDigitPlate />} 
      {/* ทะเบียนเลขโฟร์ */}
      {currentPath === '/dashboard/new-non-auction' && <NewNonAuctionPlate />} 
      {/* ทะเบียนรถขาวดำหมวดใหม่ */}
      {currentPath === '/dashboard/old-non-auction' && <OldNonAuctionPlate />} 
      {/* ทะเบียนรถขาวดำหมวดเก่า */}
      {currentPath === '/dashboard/gold-graphic-plate' && <GoldGraphicPlate />} 
      {/* ทะเบียนรถระฆังทอง (กราฟฟิคสีทอง) */}
      
      {currentPath === '/dashboard' && (
        <>
          <h1 className="text-3xl font-bold">ยินดีต้อนรับสู่ Dashboard</h1>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded shadow">ข้อมูลสถิติที่ 1</div>
            <div className="bg-white p-4 rounded shadow">ข้อมูลสถิติที่ 2</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Maincontent;