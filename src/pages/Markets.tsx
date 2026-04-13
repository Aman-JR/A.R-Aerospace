import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Markets() {
  return (
    <div>
      <div className="page-hero">
        <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1400&q=75&auto=format&fit=crop" alt="Aviation" />
        <div className="page-hero-content max-w-7xl" style={{ padding: "0 2.5rem", width: "100%" }}>
          <div className="fade-up">
            <span className="section-label">Markets</span>
            <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", margin: 0 }}>Our Markets</h1>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section style={{ background: "#fff", padding: "3.5rem 0", borderBottom: "1px solid #f3f4f6" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <div style={{ maxWidth: "760px" }}>
            <span className="section-label">Who We Serve</span>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#111827", margin: "0 0 0.5rem" }}>Serving Commercial and General Aviation</h2>
            <span className="gold-bar" />
            <p style={{ color: "#4b5563", fontSize: "0.875rem", lineHeight: 1.8, margin: 0 }}>
              A.R. Aerospace serves a diverse range of aviation operators — from scheduled airlines and low-cost carriers to business jets and charter operators across India and internationally.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Aviation */}
      <section id="commercial" style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="rg">
            <div className="img-hover-zoom" style={{ height: "480px" }}>
              <img src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80" alt="Commercial aviation" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem 3.5rem", background: "#f9fafb" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--gold)", opacity: 0.2, lineHeight: 1 }}>CA</span>
                <div>
                  <span className="section-label" style={{ marginBottom: "2px" }}>Market Segment</span>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", margin: 0 }}>Commercial Aviation</h2>
                </div>
              </div>
              <span className="gold-bar" />
              <p style={{ fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Domestic and international airlines operating commercial aircraft fleets. We support scheduled carriers, low-cost operators, and regional airlines with fast-turnaround, EASA-compliant MRO services.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Scheduled airline fleets — narrow and wide body", "Low-cost carrier operators", "Regional and narrow-body aircraft operators", "MRO service providers for airline fleets", "Wet lease and ACMI operators"].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <CheckCircle style={{ width: "14px", height: "14px", color: "var(--gold)", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "0.875rem", color: "#374151" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact"><span className="btn-gold">Get in Touch <ArrowRight style={{ width: "13px", height: "13px" }} /></span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* General Aviation */}
      <section id="general" style={{ background: "#f9fafb", padding: "5rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="rg">
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem 3.5rem", background: "#fff", order: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--gold)", opacity: 0.2, lineHeight: 1 }}>GA</span>
                <div>
                  <span className="section-label" style={{ marginBottom: "2px" }}>Market Segment</span>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", margin: 0 }}>General Aviation</h2>
                </div>
              </div>
              <span className="gold-bar" />
              <p style={{ fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Business jets and charter operators requiring premium interior quality and rapid turnaround. We understand that VIP interiors demand the highest craftsmanship — and our team delivers to that standard.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Private operators and VIP charter companies", "Corporate flight departments", "Air ambulance and medevac operators", "Flight training academies", "Government and VVIP aircraft operators"].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <CheckCircle style={{ width: "14px", height: "14px", color: "var(--gold)", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "0.875rem", color: "#374151" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact"><span className="btn-gold">Get in Touch <ArrowRight style={{ width: "13px", height: "13px" }} /></span></Link>
            </div>
            <div className="img-hover-zoom" style={{ height: "480px", order: 2 }}>
              <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80" alt="General aviation" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section style={{ background: "#f8f8f6", padding: "5rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <span className="section-label">Why Partner with Us</span>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#111827", marginBottom: "3rem" }}>A.R. Aerospace Advantage</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2px", background: "#e5e7eb" }} className="three-grid">
            {[
              { title: "One-Stop Interior MRO", desc: "Seat covers, carpets, life rafts, escape slides, floor panels, and avionics — all under one roof.", img: "https://images.unsplash.com/photo-1540339832862-474599807836?w=600&q=80" },
              { title: "Dual Certification", desc: "EASA Part-145 active and DGCA CAR-145 in process — seamlessly serving both Indian-registered and internationally-registered aircraft.", img: "https://images.unsplash.com/photo-1530840716-4c1c52ede54f?w=600&q=80" },
              { title: "Strategic Location", desc: "Greater Noida — close to IGI Airport and the upcoming Noida International Airport. Fast access, fast delivery.", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" },
            ].map(item => (
              <div key={item.title} style={{ background: "#fff" }}>
                <div className="img-hover-zoom" style={{ height: "200px" }}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div style={{ padding: "2rem" }}>
                  <h3 style={{ fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section style={{ background: "var(--navy)", padding: "5rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }} className="rg">
            <div>
              <span className="section-label">Geographic Focus</span>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#fff", marginBottom: "1.5rem" }}>India-Focused, Globally Certified</h2>
              <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Headquartered in Greater Noida with proximity to IGI Airport, A.R. Aerospace is positioned to serve the entire NCR aviation market while expanding towards a pan-India footprint.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { region: "Delhi NCR", detail: "Primary service zone — direct proximity to IGI Airport" },
                  { region: "Pan-India", detail: "Planned service expansion to all major Indian aviation hubs by 2028" },
                  { region: "International", detail: "EASA Part-145 enables services to EU and internationally registered aircraft" },
                ].map(item => (
                  <div key={item.region} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1rem" }}>
                    <p style={{ fontWeight: 600, color: "#fff", fontSize: "0.875rem", margin: "0 0 2px" }}>{item.region}</p>
                    <p style={{ color: "#6b7280", fontSize: "0.78rem", margin: 0 }}>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-hover-zoom" style={{ height: "380px", position: "relative" }}>
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=80" alt="Aircraft" style={{ opacity: 0.75 }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(10,18,32,0.92), transparent)" }}>
                <p style={{ color: "var(--gold)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 4px" }}>Inauguration</p>
                <p style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>April 2026 — Greater Noida, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#fff", padding: "4rem 0", borderTop: "1px solid #f3f4f6" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "1.2rem", color: "#111827", margin: "0 0 4px" }}>Become a Partner Operator</p>
            <p style={{ color: "#6b7280", fontSize: "0.875rem", margin: 0 }}>Discuss your fleet's interior component and safety equipment MRO requirements.</p>
          </div>
          <Link href="/contact"><span className="btn-gold">Contact Us Today <ArrowRight style={{ width: "13px", height: "13px" }} /></span></Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .rg { grid-template-columns: 1fr !important; }
          .three-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 700px) {
          .three-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
