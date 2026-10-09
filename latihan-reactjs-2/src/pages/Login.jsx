import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login berhasil!");
    navigate("/");
  };

  return (
    <div className="row justify-content-center my-4">
      <div className="col-md-5">
        <div className="card shadow-sm border-0 p-4">
          <h3 className="fw-bold text-center mb-3">Login</h3>
          <p className="text-muted text-center small mb-4">Masuk ke akun Dzaky Bookstore Anda</p>
          <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
            <div>
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nama@email.com" />
            </div>
            <div>
              <label className="form-label">Password</label>
              <input type="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">Login</button>
          </form>
          <div className="text-center mt-3 small">
            Belum punya akun? <Link to="/register" className="text-primary text-decoration-none fw-bold">Daftar sekarang</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;