import Link from 'next/link'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import { IMGS } from '@/lib/images'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['300', '400', '500'], display: 'swap' })

const BOOK_URL = 'https://www.islandsauna.ca/campbell-river'

export default function Design2() {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes revealLine {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes driftUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-brand { animation: driftUp 1.2s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
        .hero-h1    { animation: driftUp 1.4s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
        .hero-sub   { animation: driftUp 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s both; }
        .hero-rule  {
          animation: revealLine 1.4s cubic-bezier(0.16,1,0.3,1) 0.8s both;
          transform-origin: left;
        }
        .hero-cta   { animation: driftUp 1.2s cubic-bezier(0.16,1,0.3,1) 0.9s both; }

        .chapter-num {
          position: absolute;
          font-size: clamp(6rem, 14vw, 11rem);
          font-weight: 300;
          color: rgba(44, 62, 80, 0.045);
          line-height: 1;
          user-select: none;
          pointer-events: none;
        }

        .minimal-rule {
          width: 100%;
          height: 1px;
          background: rgba(44,62,80,0.12);
        }
        .accent-rule {
          display: block;
          width: 32px;
          height: 1px;
          background: #7fa9b8;
          margin-bottom: 1.5rem;
          animation: revealLine 1s ease 0.4s both;
          transform-origin: left;
        }

        .book-btn-2 {
          display: inline-block;
          text-decoration: none;
          color: #2c3e50;
          font-size: 0.72rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          padding: 1rem 2.8rem;
          border: 1px solid rgba(44,62,80,0.22);
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .book-btn-2::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #2c3e50;
          transform: translateX(-100%);
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .book-btn-2:hover { color: #f7f4ef; border-color: #2c3e50; }
        .book-btn-2:hover::after { transform: translateX(0); }
        .book-btn-2 span { position: relative; z-index: 1; }

        .nav-link {
          text-decoration: none;
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(44,62,80,0.35);
          transition: color 0.2s ease;
        }
        .nav-link:hover { color: #2c3e50; }

        .experience-item {
          padding: 3rem 0;
          border-bottom: 1px solid rgba(44,62,80,0.08);
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 2.5rem;
          align-items: start;
          transition: background 0.3s ease;
        }
        .experience-item:hover { background: rgba(127,169,184,0.03); }

        .drink-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 1.2rem 0;
          border-bottom: 1px solid rgba(44,62,80,0.07);
        }

        @media (max-width: 768px) {
          .d2-nav { padding: 1rem 1.25rem !important; }
          .d2-hero-panel { display: none !important; }
          .d2-hero-fade { display: none !important; }
          .d2-events { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .d2-photos { grid-template-columns: 1fr !important; height: auto !important; }
          .d2-photos > div { height: 240px; }
        }
      `}</style>

      <div style={{ background: '#f7f4ef', color: '#2c3e50', fontFamily: jakarta.style.fontFamily, overflowX: 'hidden' }}>

        {/* ── Nav ────────────────────────────────── */}
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '1.6rem 4rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: 'rgba(247,244,239,0.9)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(44,62,80,0.07)',
        }} className="d2-nav">
          <span style={{ fontFamily: cormorant.style.fontFamily, fontSize: '1rem', color: '#2c3e50', letterSpacing: '0.12em', fontWeight: 500 }}>
            Pacific Sauna
          </span>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <Link href="/" className="nav-link">← Designs</Link>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ color: '#7fa9b8' }}>Book →</a>
          </div>
        </nav>

        {/* ── Hero ─────────────────────────────── */}
        <section style={{
          minHeight: '100vh',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: '12rem 12vw 8rem',
          position: 'relative',
        }}>
          {/* Hero image — right side, clipped */}
          <div className="d2-hero-panel" style={{
            position: 'absolute', top: 0, right: 0, width: '42%', bottom: 0,
            backgroundImage: `url('${IMGS.hero}')`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: 0.18,
          }} />
          <div className="d2-hero-fade" style={{
            position: 'absolute', top: 0, right: '42%', width: '15%', bottom: 0,
            background: 'linear-gradient(to right, #f7f4ef, transparent)',
          }} />
          <span className="chapter-num" style={{ right: '8vw', top: '18%', fontFamily: cormorant.style.fontFamily }}>01</span>

          <p className="hero-brand" style={{
            fontSize: '0.65rem', letterSpacing: '0.45em', textTransform: 'uppercase',
            color: '#7fa9b8', marginBottom: '2.5rem', fontWeight: 400,
          }}>
            Campbell River · British Columbia
          </p>

          <h1 className="hero-h1" style={{
            fontFamily: cormorant.style.fontFamily,
            fontSize: 'clamp(3.5rem, 9vw, 8.5rem)',
            fontWeight: 300,
            lineHeight: 0.98,
            letterSpacing: '-0.02em',
            color: '#2c3e50',
            marginBottom: '3rem',
          }}>
            Pacific<br />
            <em style={{ fontStyle: 'italic', color: '#7fa9b8', fontWeight: 400 }}>Sauna</em><br />
            &amp; Ocean<br />
            Plunge
          </h1>

          <div className="hero-rule" style={{ width: '100%', height: '1px', background: 'rgba(44,62,80,0.12)', marginBottom: '2.5rem' }} />

          <div className="hero-sub" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <p style={{
              fontFamily: cormorant.style.fontFamily,
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              fontWeight: 300, color: '#8c7b6b',
              lineHeight: 1.6, maxWidth: '380px',
              fontStyle: 'italic',
            }}>
              West Coast sauna. Pacific Ocean cold plunge. Gather, reset, or celebrate.
            </p>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="book-btn-2 hero-cta">
              <span>Reserve a Session</span>
            </a>
          </div>
        </section>

        <div className="minimal-rule" style={{ margin: '0 8vw' }} />

        {/* ── Overview ─────────────────────────── */}
        <section style={{ padding: '10rem 12vw', position: 'relative' }}>
          <span className="chapter-num" style={{ left: '5vw', top: '10%', fontFamily: cormorant.style.fontFamily }}>02</span>
          <div style={{ maxWidth: '720px' }}>
            <span className="accent-rule" />
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#7fa9b8', marginBottom: '2rem' }}>Overview</p>
            <h2 style={{
              fontFamily: cormorant.style.fontFamily,
              fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
              fontWeight: 300, lineHeight: 1.15,
              color: '#2c3e50', marginBottom: '2.5rem',
            }}>
              A floating sauna and ocean plunge experience designed for deep relaxation, connection, and unforgettable moments.
            </h2>
            <p style={{ color: '#8c7b6b', lineHeight: 2.1, fontSize: '0.94rem', fontWeight: 300, maxWidth: '560px' }}>
              Rooted in Scandinavian sauna tradition and shaped by the wild beauty of the Pacific Northwest,
              Pacific Sauna & Ocean Plunge offers a calm, elevated space to warm up, cool down, and come together.
              Whether you're booking a quiet reset or a private gathering, this is a place to slow down, breathe deeply, and reconnect.
            </p>
          </div>
        </section>

        <div className="minimal-rule" style={{ margin: '0 8vw' }} />

        {/* ── Experience ───────────────────────── */}
        <section style={{ padding: '10rem 12vw', position: 'relative' }}>
          <span className="chapter-num" style={{ right: '5vw', top: '5%', fontFamily: cormorant.style.fontFamily }}>03</span>
          <div style={{ maxWidth: '760px' }}>
            <span className="accent-rule" />
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#7fa9b8', marginBottom: '3rem' }}>The Experience</p>
            <h2 style={{
              fontFamily: cormorant.style.fontFamily,
              fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
              fontWeight: 300, lineHeight: 1.05,
              color: '#2c3e50', marginBottom: '1rem',
            }}>
              Heat. Cold. Rest. <em style={{ fontStyle: 'italic', color: '#7fa9b8' }}>Repeat.</em>
            </h2>
            <p style={{ color: '#8c7b6b', marginBottom: '4rem', fontStyle: 'italic', fontFamily: cormorant.style.fontFamily, fontSize: '1.1rem' }}>
              Come for the ritual. Stay for the feeling.
            </p>

            {[
              { num: '—', title: 'Traditional Sauna Heat', desc: 'Dry heat up to 80°C. Softens the body, opens the pores, and quiets the overactive mind. Inspired by Scandinavian bathing culture.' },
              { num: '—', title: 'Ocean Cold Plunge', desc: 'Pacific waters. Bracing and clarifying. Sharpens the senses, invigorates the spirit, and creates a profound contrast with the heat.' },
              { num: '—', title: 'Upper Deck Lounging', desc: 'Open air above the water. Ocean views in every direction. A place to breathe between rounds, wrapped in cool coastal air.' },
              { num: '—', title: 'Quiet Space to Gather', desc: 'Intimate space designed for connection or solitude. Bring your people or arrive alone. Both are welcome here.' },
            ].map((item, i) => (
              <div key={i} className="experience-item">
                <span style={{ fontFamily: cormorant.style.fontFamily, fontSize: '0.9rem', color: '#7fa9b8', fontStyle: 'italic', paddingTop: '0.3rem' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 style={{ fontFamily: cormorant.style.fontFamily, fontSize: '1.4rem', fontWeight: 500, color: '#2c3e50', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: '#8c7b6b', lineHeight: 1.85, fontSize: '0.9rem', fontWeight: 300 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="minimal-rule" style={{ margin: '0 8vw' }} />

        {/* ── Private Events ───────────────────── */}
        <section style={{ padding: '10rem 12vw', position: 'relative', background: 'rgba(127,169,184,0.04)' }}>
          <span className="chapter-num" style={{ left: '5vw', bottom: '10%', fontFamily: cormorant.style.fontFamily }}>04</span>
          <div style={{ maxWidth: '900px' }}>
            <span className="accent-rule" />
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#7fa9b8', marginBottom: '2rem' }}>Private Events</p>
            <div className="d2-events" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '8rem', alignItems: 'start' }}>
              <div>
                <h2 style={{
                  fontFamily: cormorant.style.fontFamily,
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 300, lineHeight: 1.1,
                  color: '#2c3e50', marginBottom: '2rem',
                }}>
                  The upper deck is designed for <em style={{ fontStyle: 'italic', color: '#7fa9b8' }}>gathering</em>.
                </h2>
                <p style={{ color: '#8c7b6b', lineHeight: 2, fontSize: '0.92rem', fontWeight: 300, marginBottom: '2.5rem' }}>
                  This is not just a booking. It is a shared coastal experience.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Bachelorettes & Stagettes', 'Birthday Gatherings', 'Summer & Winter Events', 'Wellness Sessions', 'Corporate Retreats'].map((item) => (
                    <li key={item} style={{ padding: '0.7rem 0', borderBottom: '1px solid rgba(44,62,80,0.06)', color: '#8c7b6b', fontSize: '0.9rem', fontWeight: 300 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ paddingTop: '1rem' }}>
                <p style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#7fa9b8', marginBottom: '2rem' }}>Pricing</p>
                <div style={{ marginBottom: '2rem' }}>
                  <p style={{ fontFamily: cormorant.style.fontFamily, fontSize: '3.5rem', color: '#2c3e50', fontWeight: 300, lineHeight: 1 }}>$250</p>
                  <p style={{ color: '#8c7b6b', fontSize: '0.82rem', marginTop: '0.5rem', fontWeight: 300 }}>Private · first 2 guests</p>
                </div>
                <div style={{ height: '1px', background: 'rgba(44,62,80,0.1)', marginBottom: '2rem' }} />
                <div style={{ marginBottom: '2rem' }}>
                  <p style={{ fontFamily: cormorant.style.fontFamily, fontSize: '2rem', color: '#7fa9b8', fontWeight: 300 }}>$30</p>
                  <p style={{ color: '#8c7b6b', fontSize: '0.82rem', marginTop: '0.3rem', fontWeight: 300 }}>each additional guest</p>
                </div>
                <div style={{ height: '1px', background: 'rgba(44,62,80,0.1)', marginBottom: '2rem' }} />
                <div>
                  <p style={{ fontFamily: cormorant.style.fontFamily, fontSize: '2.2rem', color: '#2c3e50', fontWeight: 300 }}>$42.50</p>
                  <p style={{ color: '#8c7b6b', fontSize: '0.82rem', marginTop: '0.3rem', fontWeight: 300 }}>per person · drop-in</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="minimal-rule" style={{ margin: '0 8vw' }} />

        {/* ── Drinks ───────────────────────────── */}
        <section style={{ padding: '10rem 12vw' }}>
          <div style={{ maxWidth: '560px' }}>
            <span className="accent-rule" />
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#7fa9b8', marginBottom: '2rem' }}>Drinks & Add-Ons</p>
            <h2 style={{ fontFamily: cormorant.style.fontFamily, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 300, color: '#2c3e50', marginBottom: '0.5rem' }}>
              Simple. <em style={{ fontStyle: 'italic', color: '#7fa9b8' }}>Intentional.</em>
            </h2>
            <p style={{ color: '#8c7b6b', fontSize: '0.88rem', fontWeight: 300, marginBottom: '3rem', lineHeight: 1.8 }}>
              Available with private bookings and select sessions only.
            </p>
            {[
              { name: 'Cultured Kombucha', price: '$7' },
              { name: 'Glacier Water', price: '$5' },
              { name: 'House Red Wine', price: 'TBD' },
              { name: 'House White Wine', price: 'TBD' },
            ].map((d) => (
              <div key={d.name} className="drink-row">
                <span style={{ color: '#6a7f8c', fontSize: '0.9rem', fontWeight: 300 }}>{d.name}</span>
                <span style={{ fontFamily: cormorant.style.fontFamily, color: '#7fa9b8', fontSize: '1.1rem' }}>{d.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Photo Moment ─────────────────────── */}
        <section className="d2-photos" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '60vh', minHeight: '400px' }}>
          <div style={{ backgroundImage: `url('${IMGS.hero}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ backgroundImage: `url('${IMGS.interior}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </section>

        <div className="minimal-rule" style={{ margin: '0 8vw' }} />

        {/* ── CTA ──────────────────────────────── */}
        <section style={{ padding: '12rem 12vw' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '3rem' }}>
            <span className="accent-rule" />
            <h2 style={{
              fontFamily: cormorant.style.fontFamily,
              fontSize: 'clamp(3rem, 8vw, 7.5rem)',
              fontWeight: 300,
              lineHeight: 0.95,
              color: '#2c3e50',
              maxWidth: '800px',
            }}>
              Book a session.<br />
              <em style={{ color: '#7fa9b8', fontStyle: 'italic' }}>Create something memorable.</em>
            </h2>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="book-btn-2">
              <span>Reserve Your Session →</span>
            </a>
          </div>
        </section>

        {/* ── Footer ───────────────────────────── */}
        <footer style={{ padding: '3rem 12vw', borderTop: '1px solid rgba(44,62,80,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: cormorant.style.fontFamily, color: '#8c7b6b', fontSize: '0.95rem', fontStyle: 'italic' }}>
            Pacific Sauna & Ocean Plunge · Campbell River, BC
          </p>
          <Link href="/" className="nav-link">← All Designs</Link>
        </footer>
      </div>
    </>
  )
}
