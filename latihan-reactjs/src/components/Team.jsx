export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Ahmad Dzaky Romadhon",
      role: "Founder & Store Manager",
      desc: "Mengelola operasional toko buku, pemilihan katalog buku terbaik, serta memastikan pelayanan pelanggan berjalan maksimal.",
      badge: "Owner",
      badgeColor: "bg-primary",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Siti Rahma",
      role: "Book Curator & Content Specialist",
      desc: "Bertanggung jawab memilah buku-buku best seller, menulis ulasan singkat, dan merekomendasikan buku bacaan terbaik.",
      badge: "Curator",
      badgeColor: "bg-success",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Budi Santoso",
      role: "Inventory & Logistics Lead",
      desc: "Memastikan ketersediaan stok buku fisik, pengemasan rapi dan aman, serta pengiriman tepat waktu ke seluruh Indonesia.",
      badge: "Logistics",
      badgeColor: "bg-dark",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <section id="team" className="py-5 bg-body-tertiary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Tim Pengelola Bookstore</h2>
          <p className="text-body-secondary lead">
            Orang-orang di balik layar yang siap melayani kebutuhan bacaan dan literasi Anda.
          </p>
        </div>

        {/* Card Grid */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="col">
              <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                <img
                  src={member.image}
                  className="card-img-top"
                  alt={member.name}
                  style={{ height: "230px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <span className={`badge ${member.badgeColor} mb-2`}>
                    {member.badge}
                  </span>
                  <h5 className="card-title fw-bold">{member.name}</h5>
                  <h6 className="card-subtitle mb-2 text-primary">{member.role}</h6>
                  <p className="card-text text-muted small">{member.desc}</p>
                </div>
                <div className="card-footer bg-transparent border-0 pb-3">
                  <button className="btn btn-sm btn-outline-primary w-100 fw-semibold">
                    Hubungi Pengelola
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}