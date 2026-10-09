import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // Styling navigasi aktif (Instruksi 3: nilai tambahan)[cite: 31, 33]
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#0d6efd" : "#495057",
    fontWeight: isActive ? "bold" : "normal",
    borderBottom: isActive ? "2px solid #0d6efd" : "none",
    textDecoration: "none",
    padding: "8px 12px",
    transition: "all 0.3s ease",
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary fs-4" to="/">
          📚 Dzaky Bookstore
        </Link>
        <div className="collapse navbar-collapse d-flex justify-content-between">
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <NavLink to="/" style={navLinkStyle}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/books" style={navLinkStyle}>
                Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/team" style={navLinkStyle}>
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" style={navLinkStyle}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <Link to="/login" className="btn btn-outline-primary btn-sm px-3">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary btn-sm px-3">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;