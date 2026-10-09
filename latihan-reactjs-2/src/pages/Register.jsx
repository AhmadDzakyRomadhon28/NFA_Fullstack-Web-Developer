import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registrasi berhasil! Silakan login.");
    navigate("/login");
  };

  return (
    <div className="row justify-content-center my-4">
      <div className="col-md-5">
        <div className="card shadow-sm border-0 p-4">
          <h3 className="fw-bold text-center mb-3">Register</h3>
          <p className="text-muted text-center small mb-4">Buat akun baru di Dzaky Bookstore</p>
          <form onSubmit={handleRegister} className="d-flex flex-column gap-3">
            <div>
              <label className="form-label">Nama Lengkap</label>
              <input type="text" className="form-control" required placeholder="Ahmad Dzaky" />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required placeholder="nama@email.com" />
            </div>
            <div>
              <label className="form-label">Password</label>
              <input type="password" className="form-control" required placeholder="••••••••" />
            </div>
            <button type="submit" className="btn btn-success w-100 mt-2">Daftar Akun</button>
          </form>
          <div className="text-center mt-3 small">
            Sudah punya akun? <Link to="/login" className="text-primary text-decoration-none fw-bold">Login di sini</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;