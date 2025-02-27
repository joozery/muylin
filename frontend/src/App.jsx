import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import OrderProcess from "./components/OrderProcess";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Dashbord from './components/Dashbord/Dashbord';
import BeautifulPhone from "./components/BeautifulPhone"; // ✅ นำเข้าหน้าเบอร์สวย
import OurServices from "./components/OurServices"; // ✅ ให้ตรงกับไฟล์จริง
import Customers from "./components/Customers"; // ✅ ให้ตรงกับไฟล์จริง


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

// ✅ Import ไฟล์ทะเบียนรถแต่ละหมวดจาก Pages
import PagesPlatesGraphicVan from "./components/Pages/PagesPlatesGraphicVan";
import PagesPlatesGreen from "./components/Pages/PagesPlatesGreen";
import PagesPlatesMotorcycle from "./components/Pages/PagesPlatesMotorcycle";
import PagesPlatesNew from "./components/Pages/PagesPlatesNew";
import PagesPlatesNewNonAuction from "./components/Pages/PagesPlatesNewNonAuction";
import PagesPlatesOld from "./components/Pages/PagesPlatesOld";
import PagesPlatesOldNonAuction from "./components/Pages/PagesPlatesOldNonAuction";
import PagesPlatesQuadrupleDigit from "./components/Pages/PagesPlatesQuadrupleDigit";
import PagesPlatesSingleDigit from "./components/Pages/PagesPlatesSingleDigit";
import PagesPlatesSpecial from "./components/Pages/PagesPlatesSpecial";
import PagesPlatesTripleDigit from "./components/Pages/PagesPlatesTripleDigit";
import PagesPlatesDoubleDigit from "./components/Pages/PagesPlatesDoubleDigit";
import PagesPlatesGoldGraphic from "./components/Pages/PagesPlatesGoldGraphic";

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
          {/* <Route path="non-auction" element={<NonAuction />} /> */}
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
                <Route path="/beautiful-phone" element={<BeautifulPhone />} /> {/* ✅ เพิ่มหน้าเบอร์สวย */}
                <Route path="/our-service" element={<OurServices />} />
                <Route path="/customers" element={<Customers />} />

                {/* ✅ เส้นทางทะเบียนรถ */}
                <Route path="/plates-graphic-van" element={<PagesPlatesGraphicVan />} />
                <Route path="/plates-green" element={<PagesPlatesGreen />} />
                <Route path="/plates-motorcycle" element={<PagesPlatesMotorcycle />} />
                <Route path="/plates-new" element={<PagesPlatesNew />} />
                <Route path="/plates-new-non-auction" element={<PagesPlatesNewNonAuction />} />
                <Route path="/plates-old" element={<PagesPlatesOld />} />
                <Route path="/plates-old-non-auction" element={<PagesPlatesOldNonAuction />} />
                <Route path="/plates-single-digit" element={<PagesPlatesSingleDigit />} />
                <Route path="/plates-double-digit" element={<PagesPlatesDoubleDigit />} />
                <Route path="/plates-triple-digit" element={<PagesPlatesTripleDigit />} />
                <Route path="/plates-quadruple-digit" element={<PagesPlatesQuadrupleDigit />} />
                <Route path="/plates-special" element={<PagesPlatesSpecial />} />
                <Route path="/plates-gold-graphic" element={<PagesPlatesGoldGraphic />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;