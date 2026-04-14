import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div>
      <div className="page-hero">
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=95&auto=format&fit=crop" alt="About A.R. Aerospace" />
        <div className="page-hero-content max-w-7xl" style={{ padding: "0 2.5rem", width: "100%" }}>
          <div className="fade-up">
            <span className="section-label">About Us</span>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", margin: 0 }}>Welcome to A.R. Aerospace</h1>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="rg">
            <div>
              <span className="section-label">Company Overview</span>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#111827", lineHeight: 1.2, margin: "0 0 0.5rem" }}>India's EASA Part-145 Approved Component MRO</h2>
              <span className="gold-bar" />
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.8 }}>
                <p>A.R. Aerospace is a strategic joint venture between <strong>Anemos Aviation</strong> and the <strong>Röder Group</strong> — established as an EASA Part-145 Approved Component MRO facility located in Greater Noida, India.</p>
                <p>We specialize exclusively in aircraft interiors and safety equipment, serving commercial and general aviation operators across India and internationally. DGCA CAR-145 approval is under active process.</p>
                <p>Today marks a defining milestone for Indian aviation. A.R. Aerospace opens as a world-class Component MRO, bringing together the expertise of Anemos Aviation and the global reach of the Röder Group.</p>
              </div>
              <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
                {[
                  { label: "Component MRO", sub: "Specialized in aircraft interior components and safety equipment" },
                  { label: "EASA & DGCA Approved", sub: "Full Part-145 certification · International operations enabled" },
                  { label: "Greater Noida", sub: "Strategic NCR location near IGI Airport" },
                ].map(item => (
                  <div key={item.label} style={{ borderTop: "2px solid var(--gold)", paddingTop: "1rem" }}>
                    <p style={{ fontWeight: 700, color: "#111827", fontSize: "0.85rem", margin: "0 0 4px" }}>{item.label}</p>
                    <p style={{ fontSize: "0.72rem", color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
              {[
                { src: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1200&q=95&auto=format&fit=crop", alt: "Aircraft cabin interior" },
                { src: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=1200&q=95&auto=format&fit=crop", alt: "Aircraft cockpit" },
                { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=95&auto=format&fit=crop", alt: "MRO facility" },
                { src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=95&auto=format&fit=crop", alt: "Aircraft on ground" },
              ].map(({ src, alt }, i) => (
                <div key={i} className="img-hover-zoom" style={{ height: i < 2 ? "240px" : "200px", overflow: "hidden" }}>
                  <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section style={{ background: "#f8f8f6", padding: "5rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }} className="rg">
            <div style={{ background: "var(--navy)", padding: "3rem" }}>
              <span className="section-label">Our Mission</span>
              <p style={{ fontSize: "1.3rem", fontWeight: 700, color: "#fff", lineHeight: 1.4, margin: "0.5rem 0 1rem" }}>
                "Delivering safe, compliant and efficient MRO solutions for aircraft interiors and safety equipment."
              </p>
              <span className="gold-bar" />
              <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>
                Every component we maintain — every seat cover stitched, every life raft repacked, every avionics LRU certified — is done with the singular commitment to safety and airworthiness.
              </p>
            </div>
            <div style={{ background: "#fff", padding: "3rem", border: "1px solid #f3f4f6" }}>
              <span className="section-label">Our Vision</span>
              <p style={{ fontSize: "1.3rem", fontWeight: 700, color: "#111827", lineHeight: 1.4, margin: "0.5rem 0 1rem" }}>
                "India's most trusted DGCA and EASA approved interior component MRO with a global client footprint."
              </p>
              <span className="gold-bar" />
              <p style={{ color: "#4b5563", fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>
                From our facility in Greater Noida, we aim to grow into a pan-India service network, with international partnerships and defence sector capabilities by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <span className="section-label">Core Values</span>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#111827", marginBottom: "3rem" }}>What We Stand For</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2rem" }} className="values-grid">
            {[
              { no: "01", title: "Safety First", desc: "Every decision, every repair, every inspection prioritizes the safety of passengers and crew above all else.", img: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=800&q=95&auto=format&fit=crop" },
              { no: "02", title: "Technical Excellence", desc: "Our technicians are trained to the highest standards. Precision and quality are non-negotiable.", img: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&q=95&auto=format&fit=crop" },
              { no: "03", title: "Regulatory Compliance", desc: "Fully EASA Part-145 compliant with DGCA CAR-145 in process. Operating within the strictest frameworks.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=95&auto=format&fit=crop" },
              { no: "04", title: "Customer Centricity", desc: "Tailored solutions, quick turnaround, and transparent communication — partners airlines can depend on.", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=95&auto=format&fit=crop" },
            ].map(val => (
              <div key={val.no}>
                <div className="img-hover-zoom" style={{ height: "180px", marginBottom: "1rem", overflow: "hidden" }}>
                  <img src={val.img} alt={val.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#d1d5db", margin: "0 0 4px" }}>{val.no}</p>
                <h3 style={{ fontWeight: 700, color: "#111827", margin: "0 0 8px", fontSize: "0.95rem" }}>{val.title}</h3>
                <p style={{ fontSize: "0.78rem", color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Detail */}
      <section style={{ background: "var(--navy)", padding: "5rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <span className="section-label">The Partnership</span>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#fff", marginBottom: "3rem" }}>Bringing Together Excellent Expertise</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "rgba(255,255,255,0.06)" }} className="rg">
            {[
              {
                region: "India", name: "Anemos Aviation", bg: "#0f1929",
                items: [
                  { title: "Running Simulators A320 sector", desc: "Established presence and trust across India's aviation sector" },
                  { title: "Regulatory and Market Access", desc: "Strong relationships across Indian aviation authorities and regulators" },
                  { title: "Pan-India Operations Network", desc: "Reaching every corner of India's growing aviation market" },
                ],
              },
              {
                region: "Germany · Europe · Since 1922", name: "Röder Group", bg: "#1a2840",
                items: [
                  { title: "Aviation Excellence Since 1922", desc: "10+ decades of global MRO leadership and continuous innovation" },
                  { title: "EASA & FAA Certified Standards", desc: "Bringing European regulatory excellence and quality systems to India" },
                  { title: "International Operations", desc: "Active MRO presence in India, Dubai, Germany and expanding globally" },
                  { title: "Global Technical Knowledge", desc: "World-class processes, tooling, and trained technical expertise" },
                ],
              },
            ].map(partner => (
              <div key={partner.name} style={{ background: partner.bg, padding: "2.5rem" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "8px" }}>{partner.region}</p>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "1.5rem" }}>{partner.name}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {partner.items.map(item => (
                    <div key={item.title} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1rem" }}>
                      <p style={{ color: "#fff", fontSize: "0.875rem", fontWeight: 600, margin: "0 0 2px" }}>{item.title}</p>
                      <p style={{ color: "#6b7280", fontSize: "0.75rem", margin: 0 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <span className="section-label">Strategic Roadmap</span>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#111827", marginBottom: "3rem" }}>Our Growth Journey</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2rem", position: "relative" }} className="roadmap-grid">
            {[
              { year: "2026", phase: "Launch", active: true, items: ["EASA Part-145 Active", "DGCA CAR-145 Awaited", "Facility Inauguration", "Commercial Operations Begin"] },
              { year: "2027", phase: "Expand", active: false, items: ["Additional service lines", "Grow airline client base", "Capacity scale-up"] },
              { year: "2028", phase: "Scale", active: false, items: ["Pan-India service reach", "Defence contracts", "Training academy", "International partnerships"] },
              { year: "2030+", phase: "Lead", active: false, items: ["India's premier interior MRO", "Multi-location operations", "Technology integration", "Export services"] },
            ].map(phase => (
              <div key={phase.year}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 800, marginBottom: "1rem", background: phase.active ? "var(--gold)" : "#e5e7eb", color: phase.active ? "#fff" : "#9ca3af" }}>
                  {phase.year.slice(-2)}
                </div>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", margin: "0 0 4px" }}>{phase.year}</p>
                <p style={{ fontWeight: 700, color: "#111827", margin: "0 0 0.75rem" }}>{phase.phase}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                  {phase.items.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "6px", fontSize: "0.75rem", color: "#6b7280" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#d1d5db", flexShrink: 0, marginTop: "6px" }} />
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
      <section style={{ padding: "4rem 0", background: "var(--gold)" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", margin: "0 0 4px" }}>A.R. Aerospace — Building India's Aviation Future</p>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", margin: 0 }}>EASA Part-145 Active · DGCA CAR-145 Under Process</p>
          </div>
          <Link href="/contact">
            <span className="btn-white-gold">Contact Us <ArrowRight style={{ width: "13px", height: "13px" }} /></span>
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .rg { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: repeat(2,1fr) !important; }
          .roadmap-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 560px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .roadmap-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
