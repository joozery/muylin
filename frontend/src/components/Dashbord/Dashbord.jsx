import React from 'react';
import Sidebar from './Sidebar';
import Maincontent from './Miancontent';

const Dashbord = () => {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-sidebar">
        <Sidebar />
      </div>
      <div className="dashboard-content">
        <Maincontent />
      </div>
    </div>
  );
};

export default Dashbord;