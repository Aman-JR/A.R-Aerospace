import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Globe, ArrowRight, X } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer style={{ background: "var(--navy)", color: "#9ca3af" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "4rem 2.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1.4fr", gap: "2.5rem" }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1.25rem" }}>
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
        <div className="footer-bottom" style={{ maxWidth: "80rem", margin: "0 auto", padding: "1.25rem 2.5rem", display: "flex", alignItems: "center", gap: "2rem" }}>
          <p style={{ fontSize: "0.72rem", color: "#4b5563", margin: 0 }}>&copy; {new Date().getFullYear()} A.R. Aerospace Private Limited — All rights reserved</p>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <button onClick={() => setShowPrivacy(true)} style={{ fontSize: "0.72rem", color: "#4b5563", textDecoration: "none", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0 }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#4b5563"}>Privacy Policy</button>
            <button onClick={() => setShowTerms(true)} style={{ fontSize: "0.72rem", color: "#4b5563", textDecoration: "none", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0 }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#4b5563"}>Terms of Service</button>
            <Link href="/certifications">
              <span style={{ fontSize: "0.72rem", color: "#4b5563", cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#4b5563"}>Certifications</span>
            </Link>
            <span style={{ fontSize: "0.72rem", color: "#4b5563" }}>EASA Part-145 · DGCA CAR-145</span>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "1rem" }}>
          <div style={{ background: "#fff", borderRadius: "6px", maxWidth: "600px", width: "100%", maxHeight: "70vh", overflow: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem", borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, background: "#fff" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#111827", margin: 0 }}>Privacy Policy</h2>
              <button onClick={() => setShowPrivacy(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
                <X style={{ width: "20px", height: "20px", color: "#6b7280" }} />
              </button>
            </div>
            <div style={{ padding: "1.5rem" }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginTop: "0" }}>Data Collection</h3>
              <p style={{ fontSize: "0.85rem", color: "#4b5563", lineHeight: 1.75, marginBottom: "1rem" }}>We collect minimal personal information necessary to provide services. This includes name, email, and contact details when you reach out to us through our contact forms or communications.</p>

              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>Data Usage</h3>
              <p style={{ fontSize: "0.85rem", color: "#4b5563", lineHeight: 1.75, marginBottom: "1rem" }}>Your information is used solely to respond to inquiries, provide services, and improve our offerings. We do not share your data with third parties without consent.</p>

              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>Security</h3>
              <p style={{ fontSize: "0.85rem", color: "#4b5563", lineHeight: 1.75 }}>We implement industry-standard security measures to protect your personal information from unauthorized access and misuse.</p>
            </div>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {showTerms && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "1rem" }}>
          <div style={{ background: "#fff", borderRadius: "6px", maxWidth: "600px", width: "100%", maxHeight: "70vh", overflow: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem", borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, background: "#fff" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#111827", margin: 0 }}>Terms of Service</h2>
              <button onClick={() => setShowTerms(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
                <X style={{ width: "20px", height: "20px", color: "#6b7280" }} />
              </button>
            </div>
            <div style={{ padding: "1.5rem" }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginTop: "0" }}>Use of Services</h3>
              <p style={{ fontSize: "0.85rem", color: "#4b5563", lineHeight: 1.75, marginBottom: "1rem" }}>By using our website and services, you agree to use them for lawful purposes only. You must not use our services for any illegal or unauthorized activities.</p>

              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>Intellectual Property</h3>
              <p style={{ fontSize: "0.85rem", color: "#4b5563", lineHeight: 1.75, marginBottom: "1rem" }}>All content on our website, including text, graphics, logos, and images, is the property of A.R. Aerospace or its content suppliers and is protected by copyright laws.</p>

              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>Disclaimer</h3>
              <p style={{ fontSize: "0.85rem", color: "#4b5563", lineHeight: 1.75 }}>We provide services on an "as is" basis. We do not warrant that our services will be uninterrupted or error-free. A.R. Aerospace is not liable for any indirect or consequential damages.</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .footer-bottom {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .footer-bottom p {
          margin: 0;
        }
        .footer-bottom > div {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .footer-bottom > div {
            flex-wrap: wrap;
            gap: 1rem;
          }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}