import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Globe, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "#9ca3af" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "4rem 2.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1.4fr", gap: "2.5rem" }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1.25rem" }}>
              <img src="/logo-light.png" alt="A.R. Aerospace" style={{ height: "48px", width: "auto", objectFit: "contain", display: "block", marginBottom: "10px" }}
                onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
              <p style={{ color: "#fff", fontSize: "1rem", fontWeight: 800, letterSpacing: "0.04em", margin: "0 0 2px" }}>A.R. Aerospace</p>
              <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", margin: 0 }}>Your Trusted MRO Partner</p>
            </div>
            <p style={{ fontSize: "0.75rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              A joint venture of Anemos Aviation and the Röder Group — India's EASA Part-145 approved aircraft interior and safety equipment Component MRO.
            </p>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              <span className="cert-active">EASA Part-145 Active</span>
              <span className="cert-pending">DGCA CAR-145 In Process</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ color: "#fff", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Navigation</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "What We Do", href: "/services" },
                { label: "Markets", href: "/markets" },
                { label: "Certifications", href: "/certifications" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span style={{ fontSize: "0.75rem", color: "#9ca3af", cursor: "pointer", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "6px", textDecoration: "none" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#9ca3af"}>
                      <ArrowRight style={{ width: "11px", height: "11px", color: "var(--gold)", flexShrink: 0 }} />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p style={{ color: "#fff", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "1.25rem" }}>MRO Services</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Seat Covers", "Carpets", "Galley Equipment", "Life Rafts", "Life Vests", "Floor Panels", "Escape Slides", "Avionics"].map((item) => (
                <li key={item}>
                  <Link href="/services">
                    <span style={{ fontSize: "0.75rem", color: "#9ca3af", cursor: "pointer", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "6px", textDecoration: "none" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#9ca3af"}>
                      <ArrowRight style={{ width: "11px", height: "11px", color: "var(--gold)", flexShrink: 0 }} />
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ color: "#fff", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Contact</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{ width: "28px", height: "28px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(184,150,46,0.4)", borderRadius: "2px", marginTop: "1px" }}>
                  <MapPin style={{ width: "13px", height: "13px", color: "var(--gold)" }} />
                </div>
                <span style={{ fontSize: "0.75rem", lineHeight: 1.7 }}>B-113, Ecotech VI, Kasna<br />Greater Noida, UP – 201310<br />India</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{ width: "28px", height: "28px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(184,150,46,0.4)", borderRadius: "2px" }}>
                  <Phone style={{ width: "13px", height: "13px", color: "var(--gold)" }} />
                </div>
                <div>
                  <a href="tel:+919218115893" style={{ fontSize: "0.75rem", color: "#9ca3af", display: "block", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#9ca3af"}>+91 92181 15893</a>
                  <a href="tel:+918077601380" style={{ fontSize: "0.75rem", color: "#9ca3af", display: "block", textDecoration: "none", marginTop: "3px", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#9ca3af"}>+91 80776 01380</a>
                </div>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "28px", height: "28px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(184,150,46,0.4)", borderRadius: "2px" }}>
                  <Mail style={{ width: "13px", height: "13px", color: "var(--gold)" }} />
                </div>
                <a href="mailto:info@araerospace.com" style={{ fontSize: "0.75rem", color: "#9ca3af", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#9ca3af"}>info@araerospace.com</a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "28px", height: "28px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(184,150,46,0.4)", borderRadius: "2px" }}>
                  <Globe style={{ width: "13px", height: "13px", color: "var(--gold)" }} />
                </div>
                <a href="https://www.araerospace.com" target="_blank" rel="noreferrer" style={{ fontSize: "0.75rem", color: "#9ca3af", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#9ca3af"}>www.araerospace.com</a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "28px", height: "28px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(184,150,46,0.4)", borderRadius: "2px" }}>
                  <Clock style={{ width: "13px", height: "13px", color: "var(--gold)" }} />
                </div>
                <span style={{ fontSize: "0.75rem" }}>Mon–Fri · 10:00 AM – 6:00 PM IST</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #1f2937" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "1.25rem 2.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <p style={{ fontSize: "0.72rem", color: "#4b5563", margin: 0 }}>&copy; {new Date().getFullYear()} A.R. Aerospace Private Limited — All rights reserved</p>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <a href="#" style={{ fontSize: "0.72rem", color: "#4b5563", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#4b5563"}>Privacy Policy</a>
            <a href="#" style={{ fontSize: "0.72rem", color: "#4b5563", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#4b5563"}>Terms</a>
            <Link href="/certifications">
              <span style={{ fontSize: "0.72rem", color: "#4b5563", cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#4b5563"}>Certifications</span>
            </Link>
            <span style={{ fontSize: "0.72rem", color: "#4b5563" }}>EASA Part-145 · DGCA CAR-145</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
