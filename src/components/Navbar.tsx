import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "What We Do",
    href: "/services",
    children: [
      { label: "Seat Covers & Upholstery", href: "/services#seat-covers" },
      { label: "Carpets", href: "/services#carpets" },
      { label: "Galley Equipment", href: "/services#galley" },
      { label: "Life Rafts", href: "/services#life-rafts" },
      { label: "Life Vests", href: "/services#life-vests" },
      { label: "Floor Panels", href: "/services#floor-panels" },
      { label: "Escape Slides", href: "/services#escape-slides" },
      { label: "Avionics", href: "/services#avionics" },
    ],
  },
  { label: "Markets", href: "/markets" },
  { label: "Certifications", href: "/certifications" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setMenuOpen(false);
  }, [location]);

  const isDark = isHome && !scrolled;

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "background 0.35s, box-shadow 0.35s",
        background: isDark ? "transparent" : "#fff",
        boxShadow: isDark ? "none" : "0 1px 0 rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

          {/* ── Logo ── */}
          <Link href="/">
            <div style={{ cursor: "pointer", display: "flex", alignItems: "center", height: "72px" }}>
              {/* Dark background (hero): show light logo (white+gold on black bg) */}
              {/* Light background (scrolled): show dark logo (black+gold on white bg) */}
              <img
                src={isDark ? "/logo-light.png" : "/logo-dark.png"}
                alt="A.R. Aerospace"
                style={{
                  height: "52px",
                  width: "auto",
                  objectFit: "contain",
                  transition: "opacity 0.3s",
                  display: "block",
                }}
                onError={(e) => {
                  // fallback to text if image missing
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const parent = e.currentTarget.parentElement!;
                  if (!parent.querySelector(".logo-fallback")) {
                    const div = document.createElement("div");
                    div.className = "logo-fallback";
                    div.innerHTML = `<span style="font-weight:800;font-size:1.1rem;letter-spacing:0.05em;color:${isDark?"#fff":"#0f1929"};line-height:1.1;display:block;">A.R. AEROSPACE</span><span style="font-size:0.6rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#b8962e;line-height:1;display:block;">Your Trusted MRO Partner</span>`;
                    parent.appendChild(div);
                  }
                }}
              />
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  style={{ position: "relative" }}
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button style={{
                    display: "flex", alignItems: "center", gap: "4px",
                    background: "none", border: "none", cursor: "pointer", padding: 0,
                    fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.03em",
                    color: isDark ? "rgba(255,255,255,0.88)" : (isActive(link.href) ? "var(--gold)" : "#374151"),
                    transition: "color 0.2s",
                  }}>
                    {link.label}
                    <ChevronDown style={{ width: "12px", height: "12px", opacity: 0.6 }} />
                  </button>
                  {openDropdown === link.label && (
                    <div style={{
                      position: "absolute", top: "100%", left: 0, paddingTop: "12px",
                      width: "240px", zIndex: 100,
                    }}>
                      <div style={{
                        background: "#fff", border: "1px solid #f3f4f6",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.12)", padding: "8px 0",
                      }}>
                        {link.children.map((child) => (
                          <Link key={child.label} href={child.href}>
                            <div
                              onClick={() => setOpenDropdown(null)}
                              style={{
                                padding: "10px 20px", fontSize: "0.72rem", fontWeight: 600,
                                color: "#374151", letterSpacing: "0.06em", textTransform: "uppercase",
                                cursor: "pointer", transition: "color 0.15s, background 0.15s",
                                display: "flex", alignItems: "center", justifyContent: "space-between",
                              }}
                              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; (e.currentTarget as HTMLElement).style.background = "#fffbeb"; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#374151"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                            >
                              {child.label}
                              <ArrowRight style={{ width: "11px", height: "11px", color: "var(--gold)", opacity: 0.7 }} />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.label} href={link.href}>
                  <span style={{
                    fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.03em", cursor: "pointer",
                    color: isDark ? "rgba(255,255,255,0.88)" : (isActive(link.href) ? "var(--gold)" : "#374151"),
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = isDark ? "rgba(255,255,255,0.88)" : (isActive(link.href) ? "var(--gold)" : "#374151")}
                  >
                    {link.label}
                  </span>
                </Link>
              )
            )}
          </nav>

          {/* ── CTA ── */}
          <div className="desktop-nav">
            <Link href="/contact">
              <span className="btn-gold" style={{ fontSize: "0.7rem", padding: "0.65rem 1.4rem" }}>
                Request a Quote
              </span>
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: isDark ? "#fff" : "#1f2937" }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X style={{ width: "20px", height: "20px" }} /> : <Menu style={{ width: "20px", height: "20px" }} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {menuOpen && (
        <div className="mobile-drawer" style={{ background: "#fff", borderTop: "1px solid #f3f4f6", boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}>
          <nav style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: "2px" }}>
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link href={link.href}>
                  <div
                    onClick={() => setMenuOpen(false)}
                    style={{
                      padding: "10px 0", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer",
                      color: isActive(link.href) ? "var(--gold)" : "#111827",
                      borderBottom: "1px solid #f9fafb",
                    }}
                  >
                    {link.label}
                  </div>
                </Link>
                {link.children && (
                  <div style={{ marginLeft: "12px", borderLeft: "2px solid #f3f4f6", paddingLeft: "12px" }}>
                    {link.children.map((child) => (
                      <Link key={child.label} href={child.href}>
                        <div
                          onClick={() => setMenuOpen(false)}
                          style={{ padding: "5px 0", fontSize: "0.72rem", fontWeight: 600, color: "#6b7280", cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase" }}
                        >
                          {child.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact">
              <div
                className="btn-gold"
                onClick={() => setMenuOpen(false)}
                style={{ marginTop: "12px", textAlign: "center", justifyContent: "center", fontSize: "0.72rem" }}
              >
                Request a Quote
              </div>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
