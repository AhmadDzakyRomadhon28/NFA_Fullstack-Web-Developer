import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="text-primary fw-bold mb-3">📚 Dzaky Bookstore</h5>
            <p className="text-muted small">
              Platform toko buku digital terlengkap untuk menemukan inspirasi, ilmu, dan wawasan baru melalui ribuan koleksi buku pilihan.
            </p>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase fw-bold mb-3">Menu</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/books" className="text-muted text-decoration-none">Books</Link></li>
              <li className="mb-2"><Link to="/team" className="text-muted text-decoration-none">Team</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-muted text-decoration-none">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="text-uppercase fw-bold mb-3">Akun</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/login" className="text-muted text-decoration-none">Login</Link></li>
              <li className="mb-2"><Link to="/register" className="text-muted text-decoration-none">Register</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="text-uppercase fw-bold mb-3">Kontak</h6>
            <p className="text-muted small mb-1">📍 Jl. Pendidikan No. 123, Jakarta</p>
            <p className="text-muted small mb-1">✉️ support@dzakybookstore.com</p>
            <p className="text-muted small mb-1">📞 +62 812-3456-7890</p>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
        <div className="text-center text-muted small">
          &copy; {new Date().getFullYear()} Dzaky Bookstore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;