import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home";
import TentangKami from "./pages/tentangKami";
import HubungiKami from "./pages/hubungiKami";
import PortfolioPage from "./pages/portofolio";
import PortfolioDetailPage from "./pages/portofolio/[id]";
import Karir from "./pages/karir";
import JobDetail from "./pages/karir/[id]";
import ApplicationForm from "./pages/karir/apply";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/hubungi-kami" element={<HubungiKami />} />
        <Route path="/portofolio" element={<PortfolioPage />} />
        <Route path="/portofolio/:id" element={<PortfolioDetailPage />} />
        <Route path="/karir" element={<Karir />} />
<Route path="/karir/:id" element={<JobDetail />} />
<Route path="/karir/apply/:id" element={<ApplicationForm />} />

      </Routes>
    </Router>
  );
}

export default App;
