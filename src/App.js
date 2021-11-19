import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Location from "./pages/LocationPage";
import DetaillokasiPage from "./pages/DetaillocationPage";

import "./assets/css/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="location" element={<Location />} />
        <Route path="about" element={<About />} />
        <Route path="detail/:regions/:id" element={<DetaillokasiPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
