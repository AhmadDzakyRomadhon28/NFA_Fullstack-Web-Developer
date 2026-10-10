import React from "react";

const teamMembers = [
  { id: 1, name: "Ahmad Dzaky", role: "Lead Developer", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" },
  { id: 2, name: "Sarah Amalia", role: "UI/UX Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" },
  { id: 3, name: "Budi Santoso", role: "Frontend Dev", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" },
  { id: 4, name: "Citra Lestari", role: "Product Manager", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80" }
];

const Team = () => {
  return (
    <div className="py-3">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6">Tim Hebat Dzaky Bookstore</h2>
        <p className="text-muted">Orang-orang di balik layar yang berdedikasi memberikan layanan terbaik</p>
      </div>

      <div className="row g-4">
        {teamMembers.map((m) => (
          <div className="col-12 col-sm-6 col-md-3" key={m.id}>
            <div className="custom-card p-4 text-center shadow-sm h-100">
              <img 
                src={m.img} 
                className="rounded-circle mb-3 shadow" 
                width="110" 
                height="110" 
                alt={m.name} 
                style={{ objectFit: "cover", border: "4px solid #eff6ff" }} 
              />
              <h5 className="fw-bold mb-1">{m.name}</h5>
              <span className="badge bg-light text-primary border px-3 py-2 rounded-pill mt-1">
                {m.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;