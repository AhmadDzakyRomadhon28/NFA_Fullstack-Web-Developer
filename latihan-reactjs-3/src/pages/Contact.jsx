import React from "react";

const Contact = () => {
  return (
    <div className="py-4">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6">Hubungi Kami</h2>
        <p className="text-muted">Punya pertanyaan atau butuh bantuan? Kami siap melayani kamu.</p>
      </div>

      <div className="row g-4 align-items-start">
        {/* Kolom Kiri: Informasi Kontak */}
        <div className="col-lg-5">
          <div className="custom-card p-4 shadow-sm h-100">
            <h4 className="fw-bold mb-3 text-primary">Informasi Kontak</h4>
            <p className="text-muted small mb-4">
              Jangan ragu untuk menghubungi kami melalui detail kontak di bawah ini atau kirimkan pesan langsung melalui formulir.
            </p>

            <div className="d-flex align-items-center mb-3">
              <div className="fs-4 text-primary me-3">👤</div>
              <div>
                <h6 className="fw-bold mb-0">Nama Pemilik</h6>
                <p className="text-muted small mb-0">Ahmad Dzaky</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-3">
              <div className="fs-4 text-primary me-3">✉️</div>
              <div>
                <h6 className="fw-bold mb-0">Email</h6>
                <p className="text-muted small mb-0">dzaky@bookstore.com</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-3">
              <div className="fs-4 text-primary me-3">📞</div>
              <div>
                <h6 className="fw-bold mb-0">No. Telepon / WhatsApp</h6>
                <p className="text-muted small mb-0">+62 812-3456-7890</p>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div className="fs-4 text-primary me-3">📍</div>
              <div>
                <h6 className="fw-bold mb-0">Alamat</h6>
                <p className="text-muted small mb-0">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Form Pesan */}
        <div className="col-lg-7">
          <form className="custom-card p-4 shadow-sm">
            <h4 className="fw-bold mb-4">Kirim Pesan</h4>
            <div className="mb-3">
              <label className="form-label fw-semibold">Nama Lengkap</label>
              <input type="text" className="form-control" placeholder="Masukkan nama..." required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input type="email" className="form-control" placeholder="nama@email.com" required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Pesan</label>
              <textarea className="form-control" rows="4" placeholder="Tuliskan pesanmu..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100 fw-bold">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;