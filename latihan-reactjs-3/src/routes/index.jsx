import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Books from "../pages/Books";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<div className="text-center py-5"><h2>404 - Halaman Tidak Ditemukan</h2></div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;