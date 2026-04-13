import { Link } from "wouter";
import { MapPin, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const openings = [
  { id: 1, title: "Quality Assurance Inspector", department: "Quality Assurance", location: "Greater Noida, India", type: "Full-time", category: "Quality", desc: "Certified QA Inspector to oversee all MRO work and ensure compliance with EASA Part-145 and DGCA CAR-145 standards.", requirements: ["EASA Part-145 or DGCA approved inspector qualification", "Minimum 3 years of aircraft interior MRO experience", "Knowledge of EASA Part-145 and DGCA CAR-145 regulations", "Experience with QMS and ISO 9001 systems"] },
  { id: 2, title: "Seat Cover & Upholstery Technician", department: "Interior MRO", location: "Greater Noida, India", type: "Full-time", category: "Technician", desc: "Skilled upholstery technician to manufacture and refurbish aircraft seat covers and interior soft furnishings to OEM specifications.", requirements: ["Proven upholstery or sewing experience (3+ years)", "Familiarity with aviation-grade flame-retardant materials", "Attention to detail and pattern-matching skills", "Previous aircraft interior experience preferred"] },
  { id: 3, title: "Safety Equipment Technician", department: "Safety Equipment MRO", location: "Greater Noida, India", type: "Full-time", category: "Technician", desc: "Maintain, inspect, and certify aircraft safety equipment including life rafts, life vests, and escape slides.", requirements: ["EASA or OEM authorization for safety equipment preferred", "Knowledge of CMM and OEM procedures for safety equipment", "Strong documentation and record-keeping skills", "Physical fitness for equipment handling"] },
  { id: 4, title: "Avionics Technician", department: "Avionics", location: "Greater Noida, India", type: "Full-time", category: "Engineering", desc: "Bench test, repair, and certify avionics LRUs and systems for commercial and general aviation aircraft.", requirements: ["DGCA AME (Radio/Avionics) or EASA Part-66 B2 license preferred", "LRU bench testing and repair experience", "Test equipment calibration knowledge", "Strong fault diagnosis skills"] },
  { id: 5, title: "Production Planning Coordinator", department: "Operations", location: "Greater Noida, India", type: "Full-time", category: "Operations", desc: "Coordinate MRO work order scheduling, parts tracking, and customer communication for smooth day-to-day operations.", requirements: ["Aviation MRO planning or operations background", "ERP or aviation maintenance software proficiency", "Strong English and Hindi communication skills", "Customer-oriented and highly organised"] },
  { id: 6, title: "Apprentice — Aircraft Interior Technician", department: "Interior MRO", location: "Greater Noida, India", type: "Apprenticeship", category: "Apprenticeship", desc: "Start your aviation career with A.R. Aerospace — structured on-the-job training in aircraft interior component MRO under EASA-qualified supervision.", requirements: ["12th grade or ITI / Diploma in relevant technical subject", "Strong interest in aviation maintenance", "Willingness to work in a structured, regulated environment", "Good English comprehension"] },
];

const categories = ["All", "Engineering", "Quality", "Technician", "Operations", "Apprenticeship"];

export default function Careers() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const filtered = activeCategory === "All" ? openings : openings.filter(j => j.category === activeCategory);

  return (
    <div>
      <div className="page-hero">
        <img src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=1400&q=75&auto=format&fit=crop" alt="Team" />
        <div className="page-hero-content max-w-7xl" style={{ padding: "0 2.5rem", width: "100%" }}>
          <div className="fade-up">
            <span className="section-label">Careers</span>
            <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", margin: 0 }}>Join Our Team</h1>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section style={{ background: "#fff", padding: "4rem 0", borderBottom: "1px solid #f3f4f6" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }} className="rg">
            <div>
              <span className="section-label">Why Join A.R. Aerospace</span>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#111827", margin: "0 0 0.5rem" }}>Build Your Career in Aviation MRO</h2>
              <span className="gold-bar" />
              <p style={{ color: "#4b5563", fontSize: "0.875rem", lineHeight: 1.8, margin: 0 }}>
                Be part of something historic — A.R. Aerospace is building India's premier aircraft interior MRO from the ground up. We're looking for passionate aviation professionals who want to grow with an EASA-certified operation backed by 100 years of Röder Group expertise.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { title: "EASA-Standard Work", desc: "Build skills to international aviation standards" },
                { title: "Growth Opportunity", desc: "Join at the start — grow as we expand" },
                { title: "World-Class Training", desc: "Röder Group's century of MRO knowledge" },
                { title: "Collaborative Culture", desc: "Small team, direct impact, high visibility" },
              ].map(b => (
                <div key={b.title} style={{ border: "1px solid #f3f4f6", padding: "1.25rem" }}>
                  <p style={{ fontWeight: 700, color: "#111827", fontSize: "0.875rem", margin: "0 0 4px" }}>{b.title}</p>
                  <p style={{ fontSize: "0.75rem", color: "#6b7280", lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section style={{ background: "#f8f8f6", padding: "5rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <span className="section-label">Open Positions</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#111827", margin: 0 }}>Current Opportunities</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  style={{
                    fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                    padding: "6px 14px", cursor: "pointer", transition: "all 0.2s", border: "1px solid",
                    background: activeCategory === cat ? "var(--gold)" : "#fff",
                    color: activeCategory === cat ? "#fff" : "#374151",
                    borderColor: activeCategory === cat ? "var(--gold)" : "#e5e7eb",
                  }}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px", background: "#e5e7eb" }}>
            {filtered.map(job => (
              <div key={job.id} style={{ background: "#fff" }}>
                <div
                  style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", padding: "1.5rem", cursor: "pointer", transition: "background 0.15s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#f9fafb"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#fff"}
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af" }}>{job.category}</span>
                      <span style={{ fontSize: "0.68rem", fontWeight: 700, padding: "2px 8px", background: job.type === "Apprenticeship" ? "#eff6ff" : "#f0fdf4", color: job.type === "Apprenticeship" ? "#1d4ed8" : "#15803d" }}>{job.type}</span>
                    </div>
                    <p style={{ fontWeight: 700, color: "#111827", margin: "0 0 2px" }}>{job.title}</p>
                    <p style={{ fontSize: "0.75rem", color: "#6b7280", margin: 0 }}>{job.department}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.75rem", color: "#6b7280" }}>
                      <MapPin style={{ width: "12px", height: "12px" }} />{job.location}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.75rem", color: "#6b7280" }}>
                      <Briefcase style={{ width: "12px", height: "12px" }} />{job.type}
                    </span>
                    <Link href="/contact">
                      <span className="btn-gold" style={{ fontSize: "0.68rem", padding: "8px 18px" }} onClick={e => e.stopPropagation()}>Apply</span>
                    </Link>
                  </div>
                </div>

                {selectedJob === job.id && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: "1px solid #f3f4f6" }}>
                    <p style={{ fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.8, margin: "1rem 0" }}>{job.desc}</p>
                    <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 10px" }}>Requirements</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem", display: "flex", flexDirection: "column", gap: "8px" }}>
                      {job.requirements.map(req => (
                        <li key={req} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                          <CheckCircle style={{ width: "14px", height: "14px", color: "var(--gold)", flexShrink: 0, marginTop: "2px" }} />
                          <span style={{ fontSize: "0.8rem", color: "#374151" }}>{req}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <span className="btn-outline-dark" style={{ fontSize: "0.72rem" }}>Apply via Email <ArrowRight style={{ width: "12px", height: "12px" }} /></span>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--navy)", padding: "4rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", margin: "0 0 4px" }}>Don't See a Matching Role?</p>
            <p style={{ color: "#6b7280", fontSize: "0.875rem", margin: 0 }}>Send your CV to <span style={{ color: "var(--gold)" }}>info@araerospace.com</span> and we'll be in touch.</p>
          </div>
          <Link href="/contact"><span className="btn-gold">Submit Your CV <ArrowRight style={{ width: "13px", height: "13px" }} /></span></Link>
        </div>
      </section>

      <style>{`@media (max-width: 900px) { .rg { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
