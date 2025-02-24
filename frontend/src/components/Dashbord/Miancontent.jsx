import React from 'react';
import { useLocation } from 'react-router-dom';

import OldAuction from './page/OldAuction';
import NewAuction from './page/NewAuction';
import NonAuction from './page/NonAuction';
import SpecialPlate from './page/SpecialPlate';
import VanPlate from './page/VanPlate';

const Maincontent = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex-1 bg-gray-100 p-8 overflow-auto">
      {currentPath === '/dashboard/old-auction' && <OldAuction />}
      {currentPath === '/dashboard/new-auction' && <NewAuction />}
      {currentPath === '/dashboard/non-auction' && <NonAuction />}
      {currentPath === '/dashboard/special-plate' && <SpecialPlate />}
      {currentPath === '/dashboard/van-plate' && <VanPlate />}
      
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