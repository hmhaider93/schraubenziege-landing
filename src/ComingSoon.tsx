import React, { type JSX } from "react";
import "./coming-soon.css";
import schraubenziegeLight from "./assets/logo.png";
import szIcon from "../public/sz-icon.png";

/**
 * ScraubenZiege – Coming Soon (TSX + CSS-only)
 * -------------------------------------------
 * Single-file, static React component in TypeScript (TSX) with pure CSS.
 * No Tailwind, no external UI libs. Drop this into a Vite React + TS project
 * as `src/ComingSoon.tsx`, then render it from `App.tsx`.
 *
 * If you prefer separate files, copy the CSS from the template string below
 * into `src/coming-soon.css` and replace the <style> with: `import "./coming-soon.css";`
 */

const perks = [
  { title: "Smart Commerce", desc: "Import/export, e‑commerce, and digital products under one sharp brand." },
  { title: "Privacy & Trust", desc: "We build with security in mind and keep your data locked down." },
  { title: "Crafted Software", desc: "Web, mobile, and AI‑powered tools engineered for real impact." },
];

const timeline = [
  { label: "Q3 2025", text: "Brand & identity finalized. Landing page goes live." },
  { label: "Q4 2025", text: "First digital product beta + initial e‑commerce drops." },
  { label: "2026", text: "Platform expansion, API integrations, and regional logistics." },
];

export default function ScraubenZiegeComingSoon(): JSX.Element {
  return (
    <div>
      {/* HEADER */}
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <img src={schraubenziegeLight} alt="ScraubenZiege logo" className="logo" />
            <span className="brand-title">Scraubenziege</span>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#perks">What we do</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"/>
        <div className="container hero-inner">
        <img src={schraubenziegeLight} alt="ScraubenZiege logo" className="kicker fade-up hero-logo" />
          <h1 className="h1 fade-up-2">Something sharp is in the works</h1>
          <span className="kicker fade-up">Coming soon • Munich → Global</span>
          <p className="sub fade-up-3">
            ScraubenZiege fuses <strong>import/export</strong>, <strong>e‑commerce</strong> and <strong>digital products</strong>.
            We’re crafting tools and services that turn ideas into traction.
          </p>
          {/* <form className="cta" onSubmit={(e)=>e.preventDefault()}>
            <input className="input" type="email" placeholder="Your email for early access" />
            <button className="btn" type="submit">Notify me</button>
          </form>
          <div className="mini">No spam. Just launch updates.</div> */}
        </div>
      </section>

      {/* PERKS */}
      <section id="perks" className="section">
        <div className="container">
          <div className="cards">
            {perks.map(p => (
              <article key={p.title} className="card">
                <div className="card-title">
                  <span className="badge" aria-hidden>
                    {/* simple spark icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v5M12 17v5M4.22 4.22l3.54 3.54M16.24 16.24l3.54 3.54M2 12h5M17 12h5M4.22 19.78l3.54-3.54M16.24 7.76l3.54-3.54"/></svg>
                  </span>
                  <span>{p.title}</span>
                </div>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <div className="about">
            <h2 style={{margin:0,fontSize:24,fontWeight:700}}>Built in Munich. Shipping everywhere.</h2>
            <p style={{marginTop:10,color:"var(--muted)"}}>
              We’re engineers and operators focused on resilient supply chains, elegant software, and brand experiences that feel premium without being precious.
            </p>
            <ul>
              <li>• Import/Export & Wholesale</li>
              <li>• Shopify / TikTok Shop Ops</li>
              <li>• Web & Mobile Apps</li>
              <li>• AI‑assisted Workflows</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="section">
        <div className="container">
          <h2 style={{textAlign:"center",marginTop:0,fontSize:24,fontWeight:700}}>Roadmap</h2>
          <div className="timeline">
            <div style={{display:"grid",gap:12}}>
              {timeline.map(item => (
                <div key={item.label} className="titem card">
                  <div className="tdot" aria-hidden />
                  <div className="tmeta">{item.label}</div>
                  <div style={{marginTop:4}}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT
      <section id="contact" className="section">
        <div className="container grid2">
          <div className="card contact">
            <h3 style={{marginTop:0,fontSize:20,fontWeight:700}}>Get in touch</h3>
            <p style={{color:"var(--muted)",marginTop:6,fontSize:14}}>Have a partnership idea or want to launch with us? Drop a line.</p>
            <form onSubmit={(e)=>e.preventDefault()} style={{display:"grid",gap:10,marginTop:10}}>
              <input className="input" placeholder="Your name" />
              <input className="input" type="email" placeholder="Email" />
              <textarea className="input" placeholder="Message" rows={4} />
              <button className="btn" type="submit">Send message (static)</button>
              <div className="mini" style={{justifyContent:"flex-start"}}>This is a static preview. Wire it to your backend/email when ready.</div>
            </form>
          </div>
          <div className="card">
            <h3 style={{marginTop:0,fontSize:20,fontWeight:700}}>Follow the build</h3>
            <p style={{color:"var(--muted)",marginTop:6,fontSize:14}}>We’ll share progress, behind‑the‑scenes, and release dates.</p>
            <div style={{display:"grid",gap:10,marginTop:12}}>
              <a className="card" href="#" style={{padding:14,display:"block"}}>
                <strong>LinkedIn</strong><div style={{color:"var(--muted)",fontSize:13,marginTop:6}}>Company updates and hiring news.</div>
              </a>
              <a className="card" href="#" style={{padding:14,display:"block"}}>
                <strong>Twitter / X</strong><div style={{color:"var(--muted)",fontSize:13,marginTop:6}}>Product notes and experiments.</div>
              </a>
            </div>
            <div className="card" style={{marginTop:12,padding:14}}>
              Prefer email? <span style={{color:"#fff"}}>hello@scraubenziege.com</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* FOOTER */}
      <footer className="footer">
        <div className="container" style={{display:"flex",flexDirection:"column",gap:10,justifyContent:"space-between"}}>
          <div>© {new Date().getFullYear()} ScraubenZiege UG (haftungsbeschränkt). All rights reserved.</div>
          <div className="links">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
