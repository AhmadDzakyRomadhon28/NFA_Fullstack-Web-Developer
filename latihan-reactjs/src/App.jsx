import Team from "./components/Team";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      {/* 1. NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#home">
            📚 Dzaky Bookstore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fw-semibold">
              <li className="nav-item">
                <a className="nav-link active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="py-5 bg-light text-dark align-items-center d-flex min-vh-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="badge bg-primary mb-2 px-3 py-2 fs-6">
                📚 Toko Buku Online Resmi
              </span>
              <h1 className="display-4 fw-bold lh-1 mb-3">
                Selamat Datang di Dzaky Bookstore
              </h1>
              <p className="lead text-secondary">
                Temukan koleksi buku terlengkap mulai dari novel, pemrograman, bisnis, hingga pengembangan diri. Dapatkan penawaran harga terbaik dan pengiriman cepat!
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-0">
                <a href="#team" className="btn btn-primary btn-lg px-4 me-md-2 fw-semibold">
                  Tim Pengelola
                </a>
                <a href="#contact" className="btn btn-outline-secondary btn-lg px-4 fw-semibold">
                  Hubungi Toko
                </a>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop"
                className="img-fluid rounded-3 shadow-lg"
                alt="Dzaky Bookstore Hero"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. KOMPONEN TEAM & CONTACT */}
      <Team />
      <Contact />

      {/* 4. FOOTER */}
      <footer className="bg-dark text-white py-4 mt-5 border-top border-secondary">
        <div className="container text-center">
          <p className="mb-1 fw-semibold">
            &copy; {new Date().getFullYear()} Dzaky Bookstore. All Rights Reserved.
          </p>
          <small className="text-muted">
            Dibuat oleh Ahmad Dzaky Romadhon — Tugas React JS
          </small>
        </div>
      </footer>
    </div>
  );
}