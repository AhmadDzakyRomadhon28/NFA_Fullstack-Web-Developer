export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih! Pesan kamu telah berhasil terkirim ke Ahmad Dzaky Romadhon.");
  };

  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Hubungi Saya</h2>
          <p className="text-muted lead">
            Punya pertanyaan, tawaran proyek, atau ingin berdiskusi? Jangan ragu untuk mengirim pesan!
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {/* Info Card Template */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm p-4 bg-primary text-white h-100 rounded-3">
              <h4 className="fw-bold mb-4">Informasi Kontak</h4>
              <div className="mb-3 d-flex align-items-center">
                <i className="bi bi-person-fill fs-4 me-3"></i>
                <div>
                  <small className="d-block text-white-50">Nama</small>
                  <strong>Ahmad Dzaky Romadhon</strong>
                </div>
              </div>
              <div className="mb-3 d-flex align-items-center">
                <i className="bi bi-envelope-fill fs-4 me-3"></i>
                <div>
                  <small className="d-block text-white-50">Email</small>
                  <strong>dzaky@Gmail.com</strong>
                </div>
              </div>
              <div className="mb-3 d-flex align-items-center">
                <i className="bi bi-geo-alt-fill fs-4 me-3"></i>
                <div>
                  <small className="d-block text-white-50">Lokasi</small>
                  <strong>Indonesia</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Form Template Bootstrap */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm p-4 rounded-3 bg-light">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Nama Lengkap</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Alamat Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="nama@email.com"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Subjek</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Judul / Topik Pembahasan"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Pesan Anda</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Tuliskan pesan Anda untuk Dzaky di sini..."
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-end">
                    <button type="submit" className="btn btn-primary px-4 py-2 fw-bold">
                      <i className="bi bi-send-fill me-2"></i>Kirim Pesan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}   