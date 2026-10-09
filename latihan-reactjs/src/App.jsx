import Contact from './components/Contact';
import Team from './components/Team';
import myFoto from './assets/dzaky.jpeg';

function App() {
  return (
    <>
      {/* Navbar / Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="#home" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="bi bi-code-slash fs-2 text-primary"></i>
              <span className="ms-2 fs-4 fw-bold">Dzaky.dev</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 fw-semibold">
            <li>
              <a href="#home" className="nav-link px-2 link-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#team" className="nav-link px-2 link-dark">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link px-2 link-dark">
                Contact
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </div>
        </header>
      </div>

      {/* Hero Section (Home) */}
      <div id="home" className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-light">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <span className="badge bg-primary text-white mb-2 px-3 py-2 fw-bold">PORTFOLIO PERSONAL</span>
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Halo, Saya Ahmad Dzaky Romadhon! 👋
            </h1>
            <p className="lead text-muted mt-3">
              Saya seorang Web Developer & Mahasiswa yang berfokus pada pengembangan aplikasi web modern menggunakan React JS dan Bootstrap.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-4">
              <a href="#team" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                Lihat Tim
              </a>
              <a href="#contact" className="btn btn-outline-secondary btn-lg px-4">
                Hubungi Saya
              </a>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden text-center">
            <img
              className="rounded-3 img-fluid shadow-lg mb-4"
              src={myFoto}
              alt="Ahmad Dzaky Romadhon"
              />
            </div>
        </div>
      </div>

      {/* CALL COMPONENT TEAM & CONTACT HERE */}
      <Team />
      <Contact />

      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4 border-top">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#home" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link px-2 text-body-secondary">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link px-2 text-body-secondary">
                Contact
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2026 Ahmad Dzaky Romadhon</p>
        </footer>
      </div>
    </>
  );
}

export default App;