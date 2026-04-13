import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Globe } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const inp: React.CSSProperties = {
    width: "100%", border: "1px solid #e5e7eb", padding: "0.78rem 1rem",
    fontSize: "0.875rem", fontFamily: "inherit", color: "#111827", background: "#fff",
    outline: "none", transition: "border-color 0.2s", boxSizing: "border-box",
  };
  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "var(--gold)");
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "#e5e7eb");

  const contactItems = [
    { Icon: MapPin, label: "Address", content: <span style={{ fontSize: "0.875rem", color: "#374151", lineHeight: 1.75 }}>B-113, Ecotech VI, Kasna<br />Greater Noida, UP – 201310<br />India</span> },
    { Icon: Phone, label: "Phone", content: <div><a href="tel:+919218115893" style={{ fontSize: "0.875rem", color: "#374151", display: "block", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#374151"}>+91 92181 15893</a><a href="tel:+918077601380" style={{ fontSize: "0.875rem", color: "#374151", display: "block", marginTop: "2px", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#374151"}>+91 80776 01380</a></div> },
    { Icon: Mail, label: "Email", content: <a href="mailto:info@araerospace.com" style={{ fontSize: "0.875rem", color: "#374151", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#374151"}>info@araerospace.com</a> },
    { Icon: Globe, label: "Website", content: <a href="https://www.araerospace.com" target="_blank" rel="noreferrer" style={{ fontSize: "0.875rem", color: "#374151", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#374151"}>www.araerospace.com</a> },
    { Icon: Clock, label: "Office Hours", content: <span style={{ fontSize: "0.875rem", color: "#374151" }}>Monday – Friday<br />10:00 AM – 6:00 PM IST</span> },
  ];

  return (
    <div>
      <div className="page-hero">
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=75&auto=format&fit=crop" alt="Aircraft" />
        <div className="page-hero-content" style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2.5rem", width: "100%" }}>
          <div className="fade-up">
            <span className="section-label">Contact</span>
            <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", margin: 0 }}>Get in Touch</h1>
          </div>
        </div>
      </div>

      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3.5rem" }} className="contact-grid">

            {/* Contact Info */}
            <div>
              <span className="section-label">Reach Us</span>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#111827", marginBottom: "2rem" }}>A.R. Aerospace</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {contactItems.map(({ Icon, label, content }) => (
                  <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <div style={{ width: "36px", height: "36px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--gold)", background: "rgba(184,150,46,0.06)" }}>
                      <Icon style={{ width: "15px", height: "15px", color: "var(--gold)" }} />
                    </div>
                    <div>
                      <p style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 4px" }}>{label}</p>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", padding: "1.25rem 1.25rem 1.25rem 1.5rem", borderLeft: "4px solid var(--gold)", background: "#f8f8f6" }}>
                <p style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 10px" }}>A Message from the Founders</p>
                <p style={{ fontSize: "0.875rem", color: "#4b5563", fontStyle: "italic", lineHeight: 1.78, margin: 0 }}>
                  "Thank you for joining us at the inauguration of A.R. Aerospace. We are committed to raising the bar for aircraft interior MRO in India."
                </p>
              </div>
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <span className="cert-active">EASA Part-145 Active</span>
                <span className="cert-pending">DGCA In Process</span>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "400px", border: "1px solid #f3f4f6", textAlign: "center", padding: "3rem" }}>
                  <div style={{ width: "56px", height: "56px", background: "#f0fdf4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                    <CheckCircle style={{ width: "28px", height: "28px", color: "#16a34a" }} />
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111827", margin: "0 0 8px" }}>Message Sent</h3>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem", maxWidth: "340px", lineHeight: 1.75, margin: 0 }}>Thank you for reaching out. Our team will respond within one business day.</p>
                  <button className="btn-gold" style={{ marginTop: "2rem", fontSize: "0.72rem" }}
                    onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", subject: "", message: "" }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <span className="section-label">Enquiry Form</span>
                  <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#111827", marginBottom: "1.5rem" }}>Send Us a Message</h2>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-row">
                      <div><label style={{ display: "block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280", marginBottom: "8px" }}>Full Name *</label><input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" style={inp} onFocus={focus} onBlur={blur} /></div>
                      <div><label style={{ display: "block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280", marginBottom: "8px" }}>Company / Airline</label><input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company or airline" style={inp} onFocus={focus} onBlur={blur} /></div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-row">
                      <div><label style={{ display: "block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280", marginBottom: "8px" }}>Email Address *</label><input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" style={inp} onFocus={focus} onBlur={blur} /></div>
                      <div><label style={{ display: "block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280", marginBottom: "8px" }}>Phone Number</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={inp} onFocus={focus} onBlur={blur} /></div>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280", marginBottom: "8px" }}>Subject *</label>
                      <select name="subject" value={form.subject} onChange={handleChange} required style={{ ...inp, background: "#fff" }} onFocus={focus} onBlur={blur}>
                        <option value="">Select a topic...</option>
                        <option value="seat-covers">Seat Covers / Carpets</option>
                        <option value="safety-equipment">Life Rafts / Vests / Escape Slides</option>
                        <option value="galley">Galley Equipment</option>
                        <option value="avionics">Avionics Services</option>
                        <option value="floor-panels">Floor Panels</option>
                        <option value="quote">General Quote Request</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="careers">Career Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280", marginBottom: "8px" }}>Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your aircraft type and MRO requirements..." style={{ ...inp, resize: "none" }} onFocus={focus} onBlur={blur} />
                    </div>
                    <button type="submit" disabled={loading} className="btn-gold" style={{ justifyContent: "center", opacity: loading ? 0.7 : 1 }}>
                      {loading
                        ? <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><div style={{ width: "14px", height: "14px", border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />Sending...</span>
                        : <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>Send Message <ArrowRight style={{ width: "14px", height: "14px" }} /></span>
                      }
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE MAP ── */}
      <section style={{ padding: "0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2.5rem 4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
            <div style={{ width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--gold)", background: "rgba(184,150,46,0.06)" }}>
              <MapPin style={{ width: "16px", height: "16px", color: "var(--gold)" }} />
            </div>
            <div>
              <span className="section-label" style={{ margin: 0 }}>Find Us</span>
              <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", margin: 0 }}>B-113, Ecotech VI, Kasna, Greater Noida</p>
            </div>
          </div>
          <div style={{ border: "1px solid #e5e7eb", overflow: "hidden", height: "400px" }}>
            <iframe
              title="A.R. Aerospace Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.687!2d77.5046!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1b0e1234567%3A0xabcdef!2sEcotech+VI%2C+Greater+Noida%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div style={{ background: "var(--navy)", padding: "1.25rem 1.5rem", display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <MapPin style={{ width: "14px", height: "14px", color: "var(--gold)", flexShrink: 0 }} />
              <span style={{ color: "#fff", fontSize: "0.82rem", fontWeight: 600 }}>B-113, Ecotech VI, Kasna, Greater Noida, UP – 201310</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Clock style={{ width: "14px", height: "14px", color: "var(--gold)", flexShrink: 0 }} />
              <span style={{ color: "#9ca3af", fontSize: "0.82rem" }}>Mon–Fri · 10:00 AM – 6:00 PM IST</span>
            </div>
            <a href="https://maps.google.com/?q=Ecotech+VI+Kasna+Greater+Noida" target="_blank" rel="noreferrer"
              style={{ marginLeft: "auto", fontSize: "0.72rem", color: "var(--gold)", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px", fontWeight: 700 }}>
              Open in Google Maps <ArrowRight style={{ width: "12px", height: "12px" }} />
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
