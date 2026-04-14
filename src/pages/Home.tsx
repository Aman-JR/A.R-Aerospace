import { Link } from "wouter";
import { ArrowRight, CheckCircle, Shield, Zap, Award, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  { title: "Seat Covers", subtitle: "Upholstery & Refurbishment", img: "/Seat%20Cover.jpg", href: "/services#seat-covers" },
  { title: "Carpets", subtitle: "Supply & Installation", img: "/Carpets.jpeg", href: "/services#carpets" },
  { title: "Galley Equipment", subtitle: "MRO & Overhaul", img: "/Galley.jpeg", href: "/services#galley" },
  { title: "Life Rafts", subtitle: "Inspection & Repacking", img: "/Life%20Raft.jpeg", href: "/services#life-rafts" },
  { title: "Life Vests", subtitle: "Testing & Certification", img: "/Life%20Vest.jpeg", href: "/services#life-vests" },
  { title: "Floor Panels", subtitle: "Removal, Repair & Refit", img: "/Floor%20Panel.jpeg", href: "/services#floor-panels" },
  { title: "Escape Slides", subtitle: "Repacking & Re-certification", img: "/Escape%20Slides.jpeg", href: "/services#escape-slides" },
  { title: "Avionics", subtitle: "Bench Testing & Repair", img: "/Avionics.jpeg", href: "/services#avionics" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal(), r6 = useReveal(), r7 = useReveal();

  return (
    <div>
      {/* ── HERO ── */}
      <section className="hero-bg">
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1800&q=75&auto=format&fit=crop" alt="Aircraft" />
        <div className="hero-content" style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2.5rem", width: "100%" }}>
          <div style={{ maxWidth: "640px" }} className="fade-up">
            <span className="section-label" style={{ color: "var(--gold)" }}>EASA Part-145 Approved · Greater Noida, India</span>
            <h1 style={{ fontSize: "clamp(2.4rem,5vw,3.6rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 1.25rem" }}>
              Your Trusted<br /><span style={{ color: "var(--gold)" }}>MRO Partner</span>
            </h1>
            <p style={{ fontSize: "0.97rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.78, maxWidth: "500px", margin: "0 0 2rem" }}>
              India's EASA-approved Component MRO for aircraft interiors and safety equipment — a joint venture of Anemos Aviation and the Röder Group.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/services"><span className="btn-gold">What We Do <ArrowRight style={{ width: "14px", height: "14px" }} /></span></Link>
              <Link href="/contact"><span className="btn-outline-white">Contact Us</span></Link>
            </div>
            <div style={{ marginTop: "2rem", display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <span className="cert-active">EASA Part-145 Active</span>
              <span className="cert-pending">DGCA CAR-145 Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: "var(--navy-mid)", borderBottom: "1px solid rgba(184,150,46,0.2)" }}>
        <div style={{ maxWidth: "90rem", margin: "0 auto", padding: "2rem 2.5rem", display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "1rem", textAlign: "center" }} className="stats-grid">
          {[
            { value: "5000+", label: "Components Capability" },
            { value: "100+", label: "Years Röder Group Heritage" },
            { value: "EASA", label: "Part-145 Certified" },
            { value: "DGCA", label: "CAR-145 Soon" },
            { value: "NCR", label: "Greater Noida Facility" },
          ].map(s => (
            <div key={s.label} style={{ padding: "0.75rem" }}>
              <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--gold)", margin: "0 0 4px" }}>{s.value}</p>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section style={{ background: "#fff", padding: "5rem 0", borderBottom: "1px solid #f3f4f6" }}>
        <div ref={r1} className="reveal" style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="rg">
            <div>
              <span className="section-label">Who We Are</span>
              <h2 style={{ fontSize: "1.9rem", fontWeight: 800, color: "#111827", lineHeight: 1.2, margin: "0 0 0.5rem" }}>
                India's Dedicated Aircraft<br />Interior Component MRO
              </h2>
              <span className="gold-bar" />
              <p style={{ fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                A.R. Aerospace is a strategic joint venture between <strong>Anemos Aviation</strong> (India) and the <strong>Röder Group</strong> (Germany) — established as an EASA Part-145 Approved Component MRO facility in Greater Noida. We specialize exclusively in aircraft interiors and safety equipment, serving commercial and general aviation operators.
              </p>
              <Link href="/about">
                <span className="btn-outline-dark">About Us <ArrowRight style={{ width: "13px", height: "13px" }} /></span>
              </Link>
            </div>
            {/* 2×2 image mosaic */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "6px", height: "clamp(300px, 45vh, 480px)" }}>
              {[
                { src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&q=80&auto=format&fit=crop", alt: "Aircraft" },
                { src: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=500&q=80&auto=format&fit=crop", alt: "Aircraft interior" },
                { src: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=500&q=80&auto=format&fit=crop", alt: "Aircraft cabin interior" },
                { src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=500&q=80&auto=format&fit=crop", alt: "Aircraft on ground" },
              ].map(({ src, alt }) => (
                <div key={alt} className="img-hover-zoom" style={{ overflow: "hidden", height: "100%" }}>
                  <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ background: "#f9fafb", padding: "5rem 0" }}>
        <div ref={r2} className="reveal" style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span className="section-label">What We Do</span>
              <h2 style={{ fontSize: "1.9rem", fontWeight: 800, color: "#111827", margin: 0 }}>MRO Capabilities</h2>
            </div>
            <Link href="/services">
              <span className="btn-outline-dark">All Services <ArrowRight style={{ width: "13px", height: "13px" }} /></span>
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "4px" }} className="services-grid">
            {services.map((svc) => (
              <Link key={svc.title} href={svc.href}>
                <div className="service-card" style={{ height: "clamp(200px, 35vh, 280px)" }}>
                  <img src={svc.img} alt={svc.title} loading="lazy" />
                  <div className="service-card-overlay">
                    <div className="service-card-desc">{svc.subtitle}</div>
                    <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", margin: 0, letterSpacing: "0.01em" }}>{svc.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section style={{ background: "var(--navy)", padding: "4.5rem 0" }}>
        <div ref={r3} className="reveal" style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3rem", alignItems: "center" }} className="rg">
            <div>
              <span className="section-label">Certifications</span>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>EASA Part-145 Active · DGCA CAR-145 In Process</h2>
              <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.8, maxWidth: "520px", marginBottom: "1.5rem" }}>
                We operate under EASA Part-145 approval — enabling services to EU-registered and international aircraft globally. DGCA CAR-145 certification is under active processing, unlocking full domestic Indian market access.
              </p>
              <Link href="/certifications">
                <span className="btn-gold">Certification Details <ArrowRight style={{ width: "13px", height: "13px" }} /></span>
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "EASA Part-145", status: "Active", cls: "cert-active", desc: "European Union Aviation Safety Agency — Full component maintenance approval" },
                { title: "DGCA CAR-145", status: "Coming Soon", cls: "cert-pending", desc: "Directorate General of Civil Aviation — Application filed, under process" },
              ].map(cert => (
                <div key={cert.title} style={{ border: "1px solid rgba(255,255,255,0.08)", padding: "1.25rem", background: "rgba(255,255,255,0.03)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", margin: 0 }}>{cert.title}</p>
                    <span className={cert.cls}>{cert.status}</span>
                  </div>
                  <p style={{ color: "#6b7280", fontSize: "0.75rem", lineHeight: 1.65, margin: 0 }}>{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP ── */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div ref={r4} className="reveal" style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="rg">
            <div style={{ position: "relative", minHeight: "clamp(300px, 40vh, 480px)", overflow: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80&auto=format&fit=crop" alt="Partnership" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,18,32,0.88) 0%, rgba(10,18,32,0.45) 100%)" }} />
              <div style={{ position: "relative", zIndex: 10, padding: "3rem", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <span className="section-label">The Partnership</span>
                <p style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", lineHeight: 1.2, margin: "0 0 0.75rem" }}>Anemos Aviation × Röder Group</p>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.875rem", lineHeight: 1.75, maxWidth: "340px" }}>
                  Combining India's aviation market reach with 100+ years of European MRO excellence to build a world-class Component MRO in India.
                </p>
              </div>
            </div>
            <div style={{ background: "#f9fafb", padding: "3rem 3.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ marginBottom: "2rem" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 6px" }}>India Partner</p>
                <p style={{ fontSize: "1.15rem", fontWeight: 800, color: "#111827", margin: "0 0 1rem" }}>Anemos Aviation</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {["Running Simulators A320 sector", "Regulatory and market access across India", "Pan-India operations network"].map(i => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.85rem", color: "#4b5563" }}>
                      <CheckCircle style={{ width: "15px", height: "15px", color: "var(--gold)", flexShrink: 0, marginTop: "2px" }} />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "2rem" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 6px" }}>German Partner · Since 1922</p>
                <p style={{ fontSize: "1.15rem", fontWeight: 800, color: "#111827", margin: "0 0 1rem" }}>Röder Group</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {["Aviation excellence since 1922 — 100+ years", "EASA & FAA certified global MRO standards", "Operations in India, Dubai, Germany and beyond"].map(i => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.85rem", color: "#4b5563" }}>
                      <CheckCircle style={{ width: "15px", height: "15px", color: "var(--gold)", flexShrink: 0, marginTop: "2px" }} />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/about"><span className="btn-outline-dark" style={{ marginTop: "2rem" }}>Our Story <ArrowRight style={{ width: "13px", height: "13px" }} /></span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background: "#f8f8f6", padding: "5rem 0" }}>
        <div ref={r5} className="reveal" style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label" style={{ textAlign: "center", display: "block" }}>Competitive Advantage</span>
            <h2 style={{ fontSize: "1.9rem", fontWeight: 800, color: "#111827", margin: 0 }}>Why Choose A.R. Aerospace?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2px", background: "#e5e7eb" }} className="three-grid">
            {[
              { Icon: Award, title: "Specialized Interior MRO", desc: "One of India's few dedicated aircraft interior component MROs — not a generalist shop." },
              { Icon: Shield, title: "Dual Certification", desc: "EASA Part-145 active and DGCA CAR-145 in process — serving both Indian and international operators." },
              { Icon: Zap, title: "Fast Turnaround", desc: "Efficient processes and skilled manpower to reduce aircraft ground time and maximize revenue." },
              { Icon: Users, title: "Joint Venture Strength", desc: "Backed by Anemos Aviation's expertise and Röder Group's global technical standards since 1922." },
              { Icon: CheckCircle, title: "OEM-Approved Parts", desc: "Only approved parts with full documentation trails, ensuring continued airworthiness." },
              { Icon: ArrowRight, title: "End-to-End Service", desc: "From initial inspection to final certification — complete MRO cycle in one facility." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} style={{ background: "#fff", padding: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(184,150,46,0.3)", flexShrink: 0 }}>
                  <Icon style={{ width: "18px", height: "18px", color: "var(--gold)" }} />
                </div>
                <h3 style={{ fontWeight: 700, color: "#111827", fontSize: "0.95rem", margin: 0 }}>{title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#6b7280", lineHeight: 1.75, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKETS ── */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div ref={r6} className="reveal" style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2.5rem" }}>
          <span className="section-label">Markets</span>
          <h2 style={{ fontSize: "1.9rem", fontWeight: 800, color: "#111827", marginBottom: "2.5rem" }}>We Serve</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }} className="rg">
            {[
              { href: "/markets#commercial", img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80&auto=format&fit=crop", code: "CA", title: "Commercial Aviation", desc: "Scheduled airlines, low-cost carriers, regional operators, MRO networks" },
              { href: "/markets#general", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format&fit=crop", code: "GA", title: "General Aviation", desc: "Business jets, VIP charter, air ambulance, corporate flight departments" },
            ].map(m => (
              <Link key={m.title} href={m.href}>
                <div className="service-card" style={{ height: "clamp(240px, 40vh, 360px)" }}>
                  <img src={m.img} alt={m.title} />
                  <div className="service-card-overlay">
                    <div className="service-card-desc">{m.desc}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.14em", color: "var(--gold)", background: "rgba(184,150,46,0.15)", padding: "3px 8px" }}>{m.code}</span>
                      <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{m.title}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITY ── */}
      <section style={{ background: "#f9fafb", padding: "5rem 0" }}>
        <div ref={r7} className="reveal" style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="rg">
            <div>
              <span className="section-label">Our Facility</span>
              <h2 style={{ fontSize: "1.9rem", fontWeight: 800, color: "#111827", lineHeight: 1.2, margin: "0 0 0.5rem" }}>Component MRO<br />in Greater Noida</h2>
              <span className="gold-bar" />
              <p style={{ fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                Our dedicated facility at B-113, Ecotech VI, Kasna, Greater Noida is equipped with aviation-grade tools, specialist testing rigs, and a complete Quality Management System — strategically located near IGI Airport.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "12px" }}>
                {["Close proximity to Indira Gandhi International Airport", "Ecotech VI industrial zone — purpose-built infrastructure", "Access to Noida International Airport (Jewar)", "Full QMS documentation suite and ERP system", "Specialist personnel across all capability areas"].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <ArrowRight style={{ width: "13px", height: "13px", color: "var(--gold)", flexShrink: 0, marginTop: "3px" }} />
                    <span style={{ fontSize: "0.875rem", color: "#4b5563" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ border: "1px solid #e5e7eb", padding: "1.25rem", background: "#fff" }}>
                <p style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 6px" }}>Address</p>
                <p style={{ fontWeight: 700, color: "#111827", margin: "0 0 2px" }}>B-113, Ecotech VI, Kasna</p>
                <p style={{ fontSize: "0.82rem", color: "#6b7280", margin: "0 0 2px" }}>Greater Noida, UP – 201310, India</p>
                <p style={{ fontSize: "0.82rem", color: "#6b7280", margin: 0 }}>Mon–Fri · 10:00 AM – 6:00 PM IST</p>
              </div>
            </div>
            <div className="img-hover-zoom" style={{ height: "clamp(360px, 55vh, 600px)", position: "relative" }}>
              {/* Uses actual facility photo from PPT slide 8 */}
              <img src="/Our%20Location.png" alt="A.R. Aerospace Facility, Greater Noida" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(10,18,32,0.9), transparent)" }}>
                <p style={{ color: "var(--gold)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 4px" }}>Inaugurated</p>
                <p style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 800, margin: "0 0 2px" }}>April 2026</p>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.75rem", margin: 0 }}>Greater Noida, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", background: "var(--navy)" }}>
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=60&auto=format&fit=crop" alt="Aircraft" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.14 }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: "900px", margin: "0 auto", padding: "0 2.5rem", textAlign: "center" }}>
          <span className="section-label" style={{ textAlign: "center", display: "block" }}>Get in Touch</span>
          <h2 style={{ fontSize: "clamp(1.6rem,3.5vw,2.2rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>Ready to Discuss Your MRO Requirements?</h2>
          <p style={{ color: "#6b7280", fontSize: "0.9rem", maxWidth: "480px", margin: "0 auto 2rem", lineHeight: 1.8 }}>
            Contact our team in Greater Noida to discuss your aircraft interior and safety equipment maintenance needs.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact"><span className="btn-gold">Contact Us <ArrowRight style={{ width: "13px", height: "13px" }} /></span></Link>
            <Link href="/services"><span className="btn-outline-white">View Services</span></Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .rg { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: repeat(2,1fr) !important; }
          .three-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .three-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
