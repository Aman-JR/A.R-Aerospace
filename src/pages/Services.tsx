import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

const services = [
  { id: "seat-covers", title: "Seat Covers", subtitle: "Upholstery & Refurbishment", img: "/Seat%20Cover.jpg", description: "Precision-made seat upholstery, covers, and refurbishment for all aircraft types. We restore and manufacture seat covers to OEM specifications, ensuring passenger comfort and compliance with aviation flammability standards.", features: ["Custom seat cover fabrication for all aircraft types", "Leather, fabric, and synthetic material options", "Flame-retardant materials per FAR/CS 25.853", "Pattern matching and colour coordination", "Full refurbishment of worn or damaged seats", "OEM-approved materials and processes"] },
  { id: "carpets", title: "Carpets", subtitle: "Custom Fitting & Installation", img: "/Carpets.jpeg", description: "Custom fitting, supply, and installation meeting aviation flame-retardant standards. Complete lifecycle service from design through installation and airworthiness sign-off.", features: ["Aviation-grade flame-retardant carpet supply", "Custom cutting and fitting for all aircraft types", "Cabin aisle, galley, and cockpit carpet replacement", "FAR/CS 25.853 compliant materials", "Full installation and airworthiness sign-off", "Quick turnaround for AOG carpet replacements"] },
  { id: "galley", title: "Galley Equipment", subtitle: "MRO & Overhaul", img: "/Galley.jpeg", description: "Maintenance and repair of galley inserts, trolleys, and cabin service equipment. Full MRO coverage for ovens, chiller units, coffee makers, and service trolleys with full certification.", features: ["Galley insert repair and overhaul (ovens, chillers)", "Service trolley and cart maintenance and repair", "Coffee maker and hot beverage unit servicing", "Galley structure inspection and repair", "OEM documentation and airworthiness certification", "Component testing and full function verification"] },
  { id: "life-rafts", title: "Life Rafts", subtitle: "Inspection, Repacking & Certification", img: "/Life%20Raft.jpeg", description: "Inspection, inflation testing, repacking, and airworthiness release of aircraft life rafts. Trained and approved to handle all major life raft types to ensure they are ready when needed.", features: ["Full life raft inspection per manufacturer's CMM", "Inflation test and leak detection procedures", "Canopy and inflation system repair", "CO₂ cylinder replacement and testing", "Survival equipment check and repack", "Airworthiness release documentation (EASA Form 1)"] },
  { id: "life-vests", title: "Life Vests", subtitle: "Testing, Repacking & Certification", img: "/Life%20Vest.jpeg", description: "Inspection, testing, repacking, and certification of passenger and crew life vests. Ensuring every vest is fully compliant and serviceable before it returns to aircraft service.", features: ["Bladder inflation and pressure testing", "Buckle and strap inspection", "CO₂ cylinder and oral inflation tube check", "Light unit testing and battery replacement", "Whistle and reflective tape inspection", "Full certification and EASA Form 1 release"] },
  { id: "floor-panels", title: "Floor Panels", subtitle: "Removal, Inspection & Repair", img: "/Floor%20Panel.jpeg", description: "Removal, inspection, repair, and re-installation of aircraft cabin floor panels. Damaged or delaminated panels compromise structural integrity — our specialists restore them to full airworthy condition.", features: ["Cabin and galley floor panel removal and refit", "Delamination assessment and composite repair", "Non-destructive testing (NDT) where required", "Replacement panel sourcing and fitting", "Corrosion protection treatment", "Structural repair design and certification"] },
  { id: "escape-slides", title: "Escape Slides", subtitle: "Inspection, Repacking & Re-certification", img: "/Escape%20Slides.jpeg", description: "Inspection, repacking, pressure testing, and re-certification of aircraft escape slides. Life-critical equipment handled by our certified team to ensure full compliance and readiness.", features: ["Slide pack disassembly and full inspection", "Inflatable bladder pressure and leak testing", "Inflation system (aspirator) inspection", "Slide fabric inspection and repair", "Repacking to manufacturer specifications", "Re-certification and EASA Form 1 release"] },
  { id: "avionics", title: "Avionics", subtitle: "Bench Testing, Repair & Certification", img: "/Avionics.jpeg", description: "Bench testing, repair, and certification of avionics line-replaceable units (LRUs) and systems for commercial and general aviation aircraft.", features: ["LRU bench testing and fault diagnosis", "Component-level repair of avionics units", "BITE (Built-In Test Equipment) testing", "Test equipment calibration and traceability", "Return to service documentation (EASA Form 1)", "Exchange and loan unit availability"] },
];

export default function Services() {
  return (
    <div>
      <div className="page-hero">
        <img src="/Avionics.jpeg" alt="MRO work" />
        <div className="page-hero-content max-w-7xl" style={{ padding: "0 2.5rem", width: "100%" }}>
          <div className="fade-up">
            <span className="section-label">What We Do</span>
            <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", margin: 0 }}>Aircraft Interior &amp; Safety Equipment MRO</h1>
          </div>
        </div>
      </div>

      {/* Intro + jump nav */}
      <section style={{ background: "#fff", padding: "3.5rem 0", borderBottom: "1px solid #f3f4f6" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2.5rem", marginBottom: "2rem" }} className="rg">
            <p style={{ color: "#4b5563", fontSize: "0.875rem", lineHeight: 1.8, margin: 0 }}>
              A.R. Aerospace provides specialized Component MRO services for aircraft interiors and safety equipment. Operating under EASA Part-145 approval, with DGCA CAR-145 under process. Our capabilities cover the full MRO lifecycle — from initial inspection to final airworthiness release.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="cert-active">EASA Part-145 Active</span>
                <span style={{ fontSize: "0.72rem", color: "#6b7280" }}>Approved</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="cert-pending">DGCA CAR-145</span>
                <span style={{ fontSize: "0.72rem", color: "#6b7280" }}>Under Process</span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "1.5rem", borderTop: "1px solid #f3f4f6" }}>
            {services.map(svc => (
              <a key={svc.id} href={`#${svc.id}`}
                style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "6px 14px", border: "1px solid #e5e7eb", color: "#374151", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb"; (e.currentTarget as HTMLElement).style.color = "#374151"; }}>
                {svc.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating service sections */}
      {services.map((svc, idx) => (
        <section key={svc.id} id={svc.id} style={{ padding: "5rem 0", background: idx % 2 === 0 ? "#fff" : "#f9fafb" }}>
          <div className="max-w-7xl" style={{ padding: "0 2.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="rg">
              <div className={`img-hover-zoom${idx % 2 !== 0 ? " svc-img-right" : ""}`} style={{ height: "440px", order: idx % 2 !== 0 ? 2 : 1 }}>
                <img src={svc.img} alt={svc.title} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem 3.5rem", background: idx % 2 !== 0 ? "#fff" : "#f9fafb", order: idx % 2 !== 0 ? 1 : 2 }}>
                <span className="section-label">{svc.subtitle}</span>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", margin: "0 0 0.5rem" }}>{svc.title}</h2>
                <span className="gold-bar" />
                <p style={{ fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.8, marginBottom: "1.5rem" }}>{svc.description}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {svc.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <CheckCircle style={{ width: "14px", height: "14px", color: "var(--gold)", flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ fontSize: "0.8rem", color: "#4b5563" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <span className="btn-outline-dark">Request This Service <ArrowRight style={{ width: "13px", height: "13px" }} /></span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ background: "var(--navy)", padding: "4rem 0" }}>
        <div className="max-w-7xl" style={{ padding: "0 2.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", margin: "0 0 4px" }}>Need a Custom MRO Solution?</p>
            <p style={{ color: "#6b7280", fontSize: "0.875rem", margin: 0 }}>Contact our team to discuss your fleet's specific requirements.</p>
          </div>
          <Link href="/contact">
            <span className="btn-gold">Contact Our Team <ArrowRight style={{ width: "13px", height: "13px" }} /></span>
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .rg { grid-template-columns: 1fr !important; }
          .svc-img-right { order: 1 !important; }
        }
      `}</style>
    </div>
  );
}
