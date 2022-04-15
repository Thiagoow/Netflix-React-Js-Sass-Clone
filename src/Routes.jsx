import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectUser from "./pages/SelectUser";
import Home from "./pages/Home";

export function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SelectUser />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
