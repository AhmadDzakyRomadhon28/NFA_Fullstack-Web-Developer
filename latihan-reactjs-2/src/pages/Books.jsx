import React from "react";

const booksData = [
  { id: 1, title: "Belajar ReactJS & Routing", price: "Rp 95.000", tag: "Best Seller", img: "https://picsum.photos/400/250?random=10", desc: "Panduan praktis membangun Single Page Application modern." },
  { id: 2, title: "Mastering JavaScript ES6+", price: "Rp 110.000", tag: "Popular", img: "https://picsum.photos/400/250?random=20", desc: "Memahami konsep async, closure, dan fiturnya secara mendalam." },
  { id: 3, title: "Bootstrap 5 Responsive Layout", price: "Rp 85.000", tag: "New", img: "https://picsum.photos/400/250?random=30", desc: "Trik merancang tampilan web responsif cepat dan efektif." },
  { id: 4, title: "Atomic Design Architecture", price: "Rp 125.000", tag: "Hot", img: "https://picsum.photos/400/250?random=40", desc: "Struktur komponen rapi dari Atom hingga Pages." },
  { id: 5, title: "Node.js Backend Development", price: "Rp 130.000", tag: "Pro", img: "https://picsum.photos/400/250?random=50", desc: "Membangun REST API performa tinggi untuk web app." },
  { id: 6, title: "UI/UX Design Fundamentals", price: "Rp 90.000", tag: "Trending", img: "https://picsum.photos/400/250?random=60", desc: "Dasar perancangan antarmuka yang ramah pengguna." },
];

const Books = () => {
  return (
    <div className="py-3">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6">Katalog Buku Pilihan</h2>
        <p className="text-muted fs-6">Tingkatkan skill dan pengetahuanmu dengan koleksi buku terbaik kami</p>
      </div>
      
      <div className="row g-4">
        {booksData.map((book) => (
          <div className="col-12 col-md-6 col-lg-4" key={book.id}>
            <div className="custom-card shadow-sm h-100 overflow-hidden d-flex flex-column">
              <div className="position-relative">
                <img src={book.img} className="card-img-top" alt={book.title} style={{ height: "200px", objectFit: "cover" }} />
                <span className="badge bg-primary position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill shadow-sm">
                  {book.tag}
                </span>
              </div>
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="fw-bold mb-2 fs-5">{book.title}</h5>
                <p className="text-muted small mb-4 flex-grow-1">{book.desc}</p>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="price-badge">{book.price}</span>
                  <button className="btn btn-gradient px-3 py-2 btn-sm">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;   