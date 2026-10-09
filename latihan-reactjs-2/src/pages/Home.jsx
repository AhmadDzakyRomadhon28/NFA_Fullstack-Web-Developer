import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="p-5 mb-4 bg-light rounded-3 border shadow-sm">
        <div className="container-fluid py-4">
          <h1 className="display-5 fw-bold text-primary">Selamat Datang di Dzaky Bookstore</h1>
          <p className="col-md-8 fs-5 text-secondary">
            Temukan ribuan koleksi buku teknologi, pemrograman, novel, dan pengembangan diri terbaik dengan harga terjangkau.
          </p>
          <div className="d-flex gap-3">
            <Link to="/books" className="btn btn-primary btn-lg">Jelajahi Buku</Link>
            <Link to="/contact" className="btn btn-outline-secondary btn-lg">Hubungi Kami</Link>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="row g-4 my-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-3 text-center">
            <div className="fs-1 text-primary mb-2">📚</div>
            <h5 className="fw-bold">Koleksi Lengkap</h5>
            <p className="text-muted small">Buku-buku terbitan terbaru dan terpopuler dari berbagai genre siap memenuhi kebutuhanmu.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-3 text-center">
            <div className="fs-1 text-primary mb-2">⚡</div>
            <h5 className="fw-bold">Pengiriman Cepat</h5>
            <p className="text-muted small">Proses pesanan instan dan pengiriman aman ke seluruh penjuru Indonesia.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-3 text-center">
            <div className="fs-1 text-primary mb-2">💯</div>
            <h5 className="fw-bold">Kualitas Terjamin</h5>
            <p className="text-muted small">Semua buku 100% original langsung dari penerbit resmi terpercaya.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;