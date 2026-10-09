import myFoto from '../assets/dzaky.jpeg';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Ahmad Dzaky Romadhon",
      role: "Frontend Developer & UI Specialist",
      desc: "Fokus pada pengembangan antarmuka web modern yang responsif dan interaktif menggunakan React JS dan Bootstrap.",
      badge: "Core Member",
      badgeColor: "bg-primary",
      // 2. Masukkan variabel import tadi ke sini (tanpa tanda petik)
      image: myFoto 
    },
    {
      id: 2,
      name: "UI/UX Design Team",
      role: "Visual & Interface Designer",
      desc: "Merancang wireframe, mockup, dan sistem tata letak visual agar pengalaman pengguna menjadi lebih efisien.",
      badge: "Design",
      badgeColor: "bg-success",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Backend & Git Collaboration",
      role: "Data Integration & Version Control",
      desc: "Mengelola integrasi API, alur data aplikasi, serta manajemen versi kode menggunakan Git dan GitHub.",
      badge: "Support",
      badgeColor: "bg-dark",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <section id="team" className="py-5 bg-body-tertiary">
      <div className="container">
        {/* Section Header Template Bootstrap */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Tim & Keahlian Saya</h2>
          <p className="text-body-secondary lead">
            Kolaborasi peran dan bidang keahlian utama Ahmad Dzaky Romadhon dalam membangun proyek web.
          </p>
        </div>

        {/* Card Grid Template Bootstrap */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="col">
              <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                <img
                  src={member.image}
                  className="card-img-top"
                  alt={member.name}
                  style={{ height: "220px", objectFit: "cover" }}
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
                    Detail Profil
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