import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import OrderProcess from "./components/OrderProcess";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Dashbord from './components/Dashbord/Dashbord';

// Import เมนู Dashboard
import OldAuction from './components/Dashbord/page/OldAuction';
import NewAuction from './components/Dashbord/page/NewAuction';
import NonAuction from './components/Dashbord/page/NonAuction';
import SpecialPlate from './components/Dashbord/page/SpecialPlate';
import VanPlate from './components/Dashbord/page/VanPlate';
import MotorcyclePlate from './components/Dashbord/page/MotorcyclePlate';
import GreenPlate from './components/Dashbord/page/GreenPlate';
import GraphicVanPlate from './components/Dashbord/page/GraphicVanPlate';
import SingleDigitPlate from './components/Dashbord/page/SingleDigitPlate';
import DoubleDigitPlate from './components/Dashbord/page/DoubleDigitPlate';
import TripleDigitPlate from './components/Dashbord/page/TripleDigitPlate';
import QuadrupleDigitPlate from './components/Dashbord/page/QuadrupleDigitPlate';
import NewNonAuctionPlate from './components/Dashbord/page/NewNonAuctionPlate';
import OldNonAuctionPlate from './components/Dashbord/page/OldNonAuctionPlate';
import GoldGraphicPlate from './components/Dashbord/page/GoldGraphicPlate';

import './App.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && <Sidebar />}
      <div className={`content ${!isDashboard ? '' : 'dashboard'}`}>
        {children}
        {!isDashboard && <Footer />}
        <ScrollToTop />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* 🟢 เส้นทาง Dashboard */}
        <Route path="/dashboard/*" element={<Dashbord />}>
          <Route path="old-auction" element={<OldAuction />} />
          <Route path="new-auction" element={<NewAuction />} />
          <Route path="non-auction" element={<NonAuction />} />
          <Route path="special-plate" element={<SpecialPlate />} />
          <Route path="van-plate" element={<VanPlate />} />
          <Route path="motorcycle-plate" element={<MotorcyclePlate />} />
          <Route path="green-plate" element={<GreenPlate />} />
          <Route path="graphic-van-plate" element={<GraphicVanPlate />} />
          <Route path="single-digit-plate" element={<SingleDigitPlate />} />
          <Route path="double-digit-plate" element={<DoubleDigitPlate />} />
          <Route path="triple-digit-plate" element={<TripleDigitPlate />} />
          <Route path="quadruple-digit-plate" element={<QuadrupleDigitPlate />} />
          <Route path="new-non-auction" element={<NewNonAuctionPlate />} />
          <Route path="old-non-auction" element={<OldNonAuctionPlate />} />
          <Route path="gold-graphic-plate" element={<GoldGraphicPlate />} />
        </Route>

        {/* 🔵 เส้นทางหน้าเว็บทั่วไป */}
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order-process" element={<OrderProcess />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;