import { Link } from "wouter";
import { ArrowRight, CheckCircle, Shield, Award, Globe } from "lucide-react";

export default function Certifications() {
  return (
    <div>
      <div className="page-hero">
        <img src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=1400&q=75&auto=format&fit=crop" alt="MRO compliance" />
        <div className="page-hero-content max-w-7xl" style={{ padding: "0 2.5rem", width: "100%" }}>
          <div className="fade-up">
            <span className="section-label">Regulatory Framework</span>
            <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", margin: 0 }}>Certifications &amp; Compliance</h1>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section style={{ background: "#fff", padding: "3.5rem 0", borderBottom: "1px solid #f3f4f6" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <div style={{ maxWidth: "760px" }}>
            <span className="section-label">Our Standards</span>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#111827", margin: "0 0 0.5rem" }}>Compliance-First MRO Services</h2>
            <span className="gold-bar" />
            <p style={{ color: "#4b5563", fontSize: "0.875rem", lineHeight: 1.8, margin: 0 }}>
              Delivering compliance-first MRO services to international standards. A.R. Aerospace operates under EASA Part-145 approval with DGCA CAR-145 certification actively under process. All work is performed against approved maintenance data and signed off with EASA Form 1 documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Cert Cards */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "#e5e7eb" }} className="rg">
            {/* EASA */}
            <div style={{ background: "#fff", padding: "2.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <div>
                  <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 4px" }}>European Union Aviation Safety Agency</p>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", margin: 0 }}>EASA Part-145</h3>
                </div>
                <span className="cert-active">ACTIVE</span>
              </div>
              <div className="img-hover-zoom" style={{ height: "200px", marginBottom: "2rem" }}>
                <img src="https://images.unsplash.com/photo-1608023136037-626dad6be634?w=600&q=80&auto=format&fit=crop" alt="EASA certified" />
              </div>
              <p style={{ fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Full approval for component maintenance, enabling services to EU-registered, EASA-regulated, and international aircraft operators worldwide.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { title: "Part-145 Approval — Certified", desc: "Full approval for component maintenance activities" },
                  { title: "Interior Components Approved", desc: "Seat covers, carpets, life vests, escape slides and more" },
                  { title: "EU and International Operations", desc: "Global client access enabled through EASA certification" },
                  { title: "EASA Form 1 Release", desc: "Authorised Release Certificate issued for all maintained components" },
                ].map(item => (
                  <li key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: "10px", borderBottom: "1px solid #f9fafb", paddingBottom: "12px" }}>
                    <CheckCircle style={{ width: "16px", height: "16px", color: "#16a34a", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#111827", margin: "0 0 2px" }}>{item.title}</p>
                      <p style={{ fontSize: "0.75rem", color: "#6b7280", margin: 0 }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* DGCA */}
            <div style={{ background: "#f9fafb", padding: "2.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <div>
                  <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 4px" }}>Directorate General of Civil Aviation</p>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", margin: 0 }}>DGCA CAR-145</h3>
                </div>
                <span className="cert-pending">COMING SOON</span>
              </div>
              <div className="img-hover-zoom" style={{ height: "200px", marginBottom: "2rem" }}>
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80&auto=format&fit=crop" alt="India aviation" />
              </div>
              <p style={{ fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                CAR-145 application filed, documentation under active process. Upon approval, A.R. Aerospace will hold full domestic Indian market access for all Indian-registered operators.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { title: "CAR-145 Application Filed", desc: "Documentation submission under active process" },
                  { title: "Interior Components Scope", desc: "Full Indian regulatory framework coverage for our services" },
                  { title: "Domestic Operations Unlock", desc: "Full Indian market access for all VT-registered aircraft" },
                  { title: "Bridged by EASA Coverage", desc: "International clients served under EASA Part-145 meanwhile" },
                ].map(item => (
                  <li key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: "10px", borderBottom: "1px solid #e5e7eb", paddingBottom: "12px" }}>
                    <CheckCircle style={{ width: "16px", height: "16px", color: "var(--gold)", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#111827", margin: "0 0 2px" }}>{item.title}</p>
                      <p style={{ fontSize: "0.75rem", color: "#6b7280", margin: 0 }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section style={{ background: "#f8f8f6", padding: "5rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="rg">
            <div>
              <span className="section-label">Quality Standards</span>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#111827", marginBottom: "2rem" }}>Operating to the Highest Standards</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { title: "Approved Maintenance Data Only", desc: "All work is carried out strictly against manufacturer-approved CMMs, IPC, and maintenance manuals. No deviations without formal engineering approval.", Icon: Shield },
                  { title: "Quality Management System", desc: "Full QMS with documented procedures, recurring quality audits, corrective action tracking, and continuous improvement processes.", Icon: Award },
                  { title: "EASA Form 1 Release Documentation", desc: "Every component we maintain and release is accompanied by an EASA Authorised Release Certificate — the internationally recognised airworthiness document.", Icon: CheckCircle },
                  { title: "Parts Traceability", desc: "Full traceability from OEM source through installation. Only approved parts with complete documentation trails.", Icon: Globe },
                ].map(item => (
                  <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{ width: "36px", height: "36px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--gold)" }}>
                      <item.Icon style={{ width: "16px", height: "16px", color: "var(--gold)" }} />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, color: "#111827", fontSize: "0.9rem", margin: "0 0 4px" }}>{item.title}</h4>
                      <p style={{ fontSize: "0.78rem", color: "#6b7280", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-hover-zoom" style={{ height: "480px" }}>
              <img src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=700&q=80&auto=format&fit=crop" alt="Quality facility" />
            </div>
          </div>
        </div>
      </section>

      {/* Scope Table */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <span className="section-label">Approved Scope</span>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#111827", marginBottom: "2.5rem" }}>Scope of Approval</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2px", background: "#e5e7eb" }} className="four-grid">
            {[
              { category: "Interior Soft Furnishings", items: ["Seat covers", "Headrests", "Armrest covers", "Carpets and rugs"] },
              { category: "Cabin Safety Equipment", items: ["Life rafts", "Life vests", "Escape slides", "Emergency oxygen"] },
              { category: "Cabin Structures", items: ["Floor panels", "Overhead storage liners", "Partition panels", "Galley structures"] },
              { category: "Avionics LRUs", items: ["Navigation units", "Communication units", "Display units", "Flight management systems"] },
            ].map(cat => (
              <div key={cat.category} style={{ background: "#fff", padding: "2rem" }}>
                <h3 style={{ fontWeight: 700, color: "#111827", fontSize: "0.875rem", margin: "0 0 1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #f3f4f6" }}>{cat.category}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {cat.items.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#4b5563" }}>
                      <ArrowRight style={{ width: "11px", height: "11px", color: "var(--gold)", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--navy)", padding: "4rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", margin: "0 0 4px" }}>Questions About Our Compliance?</p>
            <p style={{ color: "#6b7280", fontSize: "0.875rem", margin: 0 }}>Our Quality team is happy to provide full details on our EASA Part-145 approval scope.</p>
          </div>
          <Link href="/contact"><span className="btn-gold">Contact Quality Team <ArrowRight style={{ width: "13px", height: "13px" }} /></span></Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .rg { grid-template-columns: 1fr !important; }
          .four-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 560px) {
          .four-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
