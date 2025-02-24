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
        <Route path="/dashboard/*" element={<Dashbord />}>
          <Route path="old-auction" element={<OldAuction />} />
          <Route path="new-auction" element={<NewAuction />} />
          <Route path="non-auction" element={<NonAuction />} />
          <Route path="special-plate" element={<SpecialPlate />} />
          <Route path="van-plate" element={<VanPlate />} />
        </Route>
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