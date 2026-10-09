import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header";

const MainLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container my-4 flex-grow-1">
        {/* Outlet tempat halaman anak (Home, Team, Contact, dll) dirender */}
        <Outlet />
      </main>
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <small>&copy; {new Date().getFullYear()} Dzaky Bookstore. All rights reserved.</small>
      </footer>
    </div>
  );
};

export default MainLayout;