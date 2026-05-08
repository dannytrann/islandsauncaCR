import Link from 'next/link'
import { Anton, Source_Serif_4 } from 'next/font/google'
import { IMGS } from '@/lib/images'

const anton = Anton({ subsets: ['latin'], weight: '400', display: 'swap' })
const sourceSerif = Source_Serif_4({ subsets: ['latin'], weight: ['300', '400', '600'], style: ['normal', 'italic'], display: 'swap' })

const BOOK_URL = 'https://www.islandsauna.ca/campbell-river'

export default function Design3() {
  return (
    <>
      <style>{`
        @keyframes slideRight {
          from { transform: translateX(-60px); opacity: 0; }
          to   { transform: translateX(0); opacity: 1; }
        }
        @keyframes waveAnim {
          0%   { d: path("M0,30 C160,50 320,10 480,30 C640,50 800,10 960,30 C1120,50 1280,10 1440,30 L1440,60 L0,60 Z"); }
          50%  { d: path("M0,15 C160,35 320,55 480,15 C640,-5 800,45 960,15 C1120,-5 1280,45 1440,15 L1440,60 L0,60 Z"); }
          100% { d: path("M0,30 C160,50 320,10 480,30 C640,50 800,10 960,30 C1120,50 1280,10 1440,30 L1440,60 L0,60 Z"); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tealFlash {
          0%, 100% { color: #ffffff; }
          50%       { color: #00c9b1; }
        }
        @keyframes numberReveal {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 0.08; transform: translateX(0); }
        }

        .big-word {
          font-family: inherit;
          font-size: clamp(4rem, 17vw, 14rem);
          line-height: 0.88;
          letter-spacing: -0.02em;
          color: #ffffff;
          display: block;
          overflow: hidden;
        }
        .big-word-teal { color: #00c9b1 !important; }

        .hero-line-1 { animation: slideRight 1s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
        .hero-line-2 { animation: slideRight 1s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
        .hero-line-3 { animation: slideRight 1s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
        .hero-line-4 { animation: slideRight 1s cubic-bezier(0.16,1,0.3,1) 0.55s both; }
        .hero-info   { animation: fadeUp 1s ease 0.8s both; }

        .section-number {
          position: absolute;
          font-size: clamp(7rem, 20vw, 18rem);
          font-weight: 400;
          color: #00c9b1;
          line-height: 1;
          user-select: none;
          pointer-events: none;
          animation: numberReveal 1s ease both;
        }

        .wave-svg path {
          animation: waveAnim 8s ease-in-out infinite;
        }

        .experience-block {
          border-left: 2px solid rgba(0,201,177,0.2);
          padding-left: 2.5rem;
          margin-bottom: 3.5rem;
          transition: border-color 0.3s ease;
        }
        .experience-block:hover { border-left-color: #00c9b1; }

        .book-btn-3 {
          display: inline-block;
          text-decoration: none;
          background: #00c9b1;
          color: #060f1e;
          font-size: 0.75rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 700;
          padding: 1.1rem 3.2rem;
          transition: background 0.25s ease, transform 0.2s ease;
          font-family: inherit;
        }
        .book-btn-3:hover { background: #00e5cc; transform: translateY(-3px); }

        .tag-label {
          font-size: 0.65rem;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: #00c9b1;
          opacity: 0.75;
        }

        .event-pill {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          border: 1px solid rgba(0,201,177,0.2);
          color: rgba(255,255,255,0.5);
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          margin: 0.25rem;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .event-pill:hover {
          border-color: #00c9b1;
          color: #00c9b1;
          background: rgba(0,201,177,0.05);
        }

        .price-display {
          border: 1px solid rgba(0,201,177,0.15);
          padding: 3rem;
          position: relative;
          background: rgba(0,201,177,0.02);
        }
        .price-display::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(to right, #00c9b1, transparent);
        }

        @media (max-width: 768px) {
          .d3-nav { padding: 1rem 1.25rem !important; }
          .d3-fixedbg { background-attachment: scroll !important; }
          .d3-photos { grid-template-columns: 1fr !important; grid-template-rows: auto !important; }
          .d3-photos > div { height: 220px; grid-row: auto !important; grid-column: auto !important; }
          .d3-events { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>

      <div style={{ background: '#060f1e', color: '#ffffff', fontFamily: anton.style.fontFamily, overflowX: 'hidden' }}>

        {/* ── Nav ─────────────────────────────── */}
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '1.3rem 3rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: 'rgba(6,15,30,0.9)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0,201,177,0.08)',
        }} className="d3-nav">
          <span style={{ fontSize: '1.1rem', letterSpacing: '0.12em', color: '#00c9b1' }}>PACIFIC SAUNA</span>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none', fontSize: '0.65rem', letterSpacing: '0.2em', fontFamily: sourceSerif.style.fontFamily }}>← DESIGNS</Link>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" style={{
              color: '#00c9b1', textDecoration: 'none', fontSize: '0.65rem',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              border: '1px solid rgba(0,201,177,0.35)', padding: '0.45rem 1.3rem',
              fontFamily: sourceSerif.style.fontFamily, fontWeight: 600,
            }}>Book →</a>
          </div>
        </nav>

        {/* ── Hero ────────────────────────────── */}
        <section style={{
          minHeight: '100vh',
          padding: '14rem 5vw 6rem',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Background gradient */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 100% 80% at 100% 0%, rgba(0,201,177,0.07) 0%, transparent 55%)',
            pointerEvents: 'none',
          }} />

          <div className="hero-line-1">
            <span className="big-word">PACIFIC</span>
          </div>
          <div className="hero-line-2">
            <span className="big-word big-word-teal">SAUNA</span>
          </div>
          <div className="hero-line-3">
            <span className="big-word">&amp; OCEAN</span>
          </div>
          <div className="hero-line-4">
            <span className="big-word big-word-teal" style={{ fontSize: 'clamp(3.2rem, 13vw, 11rem)' }}>PLUNGE</span>
          </div>

          <div className="hero-info" style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            paddingTop: '4rem', flexWrap: 'wrap', gap: '2rem',
            borderTop: '1px solid rgba(0,201,177,0.12)', marginTop: '2rem',
          }}>
            <div>
              <p style={{ fontFamily: sourceSerif.style.fontFamily, color: 'rgba(255,255,255,0.4)', fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.7 }}>
                West Coast sauna. Pacific Ocean cold plunge.<br />Gather, reset, or celebrate.
              </p>
              <p style={{ color: 'rgba(0,201,177,0.5)', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: '0.75rem', fontFamily: sourceSerif.style.fontFamily }}>
                Campbell River · British Columbia
              </p>
            </div>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="book-btn-3" style={{ fontFamily: anton.style.fontFamily }}>
              Book Now
            </a>
          </div>
        </section>

        {/* ── Cinematic Photo ───────────────── */}
        <section className="d3-fixedbg" style={{
          height: '80vh', minHeight: '520px', position: 'relative', overflow: 'hidden',
          backgroundImage: `url('${IMGS.hero}')`,
          backgroundSize: 'cover', backgroundPosition: 'center 40%',
          backgroundAttachment: 'fixed',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,15,30,0.55)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #060f1e 0%, transparent 20%, transparent 80%, #060f1e 100%)' }} />
          <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center', padding: '0 5vw' }}>
            <p style={{
              fontFamily: sourceSerif.style.fontFamily,
              fontSize: 'clamp(1.3rem, 3vw, 2.2rem)',
              color: 'rgba(255,255,255,0.75)',
              fontStyle: 'italic', fontWeight: 300,
              maxWidth: '560px', lineHeight: 1.6,
              borderLeft: '2px solid #00c9b1', paddingLeft: '2rem',
            }}>
              "A floating sauna and ocean plunge experience designed for deep relaxation, connection, and unforgettable moments on the coast."
            </p>
          </div>
        </section>

        {/* ── Wave ──────────────────────────── */}
        <div style={{ overflow: 'hidden', lineHeight: 0, background: '#060f1e' }}>
          <svg viewBox="0 0 1440 60" style={{ width: '100%', display: 'block' }} preserveAspectRatio="none">
            <path className="wave-svg" d="M0,30 C160,50 320,10 480,30 C640,50 800,10 960,30 C1120,50 1280,10 1440,30 L1440,60 L0,60 Z" fill="rgba(0,201,177,0.06)" />
          </svg>
        </div>

        {/* ── Overview ────────────────────── */}
        <section style={{ padding: '9rem 5vw', position: 'relative' }}>
          <span className="section-number" style={{ right: '-2vw', top: '5%' }}>01</span>
          <div style={{ maxWidth: '780px' }}>
            <p className="tag-label" style={{ marginBottom: '2rem' }}>Overview</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 4.5rem)', lineHeight: 0.95, marginBottom: '3rem', letterSpacing: '-0.01em' }}>
              ROOTED IN SCANDINAVIAN<br />
              <span style={{ color: '#00c9b1' }}>BATHING TRADITION</span><br />
              SHAPED BY THE PACIFIC
            </h2>
            <p style={{
              fontFamily: sourceSerif.style.fontFamily,
              color: 'rgba(255,255,255,0.45)',
              fontSize: '1.05rem', lineHeight: 2,
              fontWeight: 300, maxWidth: '580px',
            }}>
              A floating sauna and ocean plunge experience designed for deep relaxation, connection,
              and unforgettable moments on the coast. Whether you're booking a quiet reset or a private gathering,
              this is a place to slow down, breathe deeply, and reconnect.
            </p>
          </div>
        </section>

        <div style={{ height: '1px', background: 'linear-gradient(to right, rgba(0,201,177,0.15), transparent)', margin: '0 5vw' }} />

        {/* ── Experience ──────────────────── */}
        <section style={{ padding: '9rem 5vw', position: 'relative' }}>
          <span className="section-number" style={{ left: '-1vw', top: '5%' }}>02</span>
          <div style={{ maxWidth: '800px', marginLeft: 'auto' }}>
            <p className="tag-label" style={{ marginBottom: '2rem' }}>The Experience</p>
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 5.5rem)', lineHeight: 0.92, marginBottom: '5rem', letterSpacing: '-0.01em' }}>
              HEAT. COLD.<br />
              <span style={{ color: '#00c9b1' }}>REST. REPEAT.</span>
            </h2>
            {[
              { num: '01', title: 'Traditional Sauna', desc: 'Dry heat. Softens the body. Inspired by Scandinavian bathing culture perfected over centuries.' },
              { num: '02', title: 'Ocean Cold Plunge', desc: 'Pacific waters. Raw and clarifying. Sharpens the mind, invigorates every cell.' },
              { num: '03', title: 'Upper Deck Lounging', desc: 'Open air over the water. Ocean views, coastal wind, between-round stillness.' },
              { num: '04', title: 'Quiet Gathering', desc: 'Intimate space to come together — or to arrive alone and simply be.' },
            ].map((item) => (
              <div key={item.num} className="experience-block">
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#00c9b1', fontSize: '0.7rem', letterSpacing: '0.15em', fontFamily: sourceSerif.style.fontFamily, opacity: 0.6 }}>{item.num}</span>
                  <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', letterSpacing: '0.02em' }}>{item.title.toUpperCase()}</h3>
                </div>
                <p style={{ fontFamily: sourceSerif.style.fontFamily, color: 'rgba(255,255,255,0.4)', fontSize: '0.92rem', lineHeight: 1.85, fontWeight: 300 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Photo Grid ────────────────────── */}
        <section className="d3-photos" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '280px 280px', gap: '3px' }}>
          <div style={{ backgroundImage: `url('${IMGS.plungeSocial}')`, backgroundSize: 'cover', backgroundPosition: 'center', gridRow: '1 / 3' }} />
          <div style={{ backgroundImage: `url('${IMGS.interior}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ backgroundImage: `url('${IMGS.deck}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ backgroundImage: `url('${IMGS.plungeAerial}')`, backgroundSize: 'cover', backgroundPosition: 'center', gridColumn: '2 / 4' }} />
        </section>

        {/* ── Wave ─────────────────────────── */}
        <div style={{ overflow: 'hidden', lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" style={{ width: '100%', display: 'block', transform: 'scaleY(-1)' }} preserveAspectRatio="none">
            <path d="M0,30 C160,50 320,10 480,30 C640,50 800,10 960,30 C1120,50 1280,10 1440,30 L1440,60 L0,60 Z" fill="rgba(0,201,177,0.04)" />
          </svg>
        </div>

        {/* ── Private Events ──────────────── */}
        <section style={{ padding: '9rem 5vw', background: 'rgba(0,201,177,0.02)' }}>
          <p className="tag-label" style={{ marginBottom: '2rem' }}>Private Events & Upper Deck</p>
          <div className="d3-events" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: 0.92, marginBottom: '2rem', letterSpacing: '-0.01em' }}>
                HOST AN<br />
                <span style={{ color: '#00c9b1' }}>ELEVATED</span><br />
                EXPERIENCE
              </h2>
              <p style={{ fontFamily: sourceSerif.style.fontFamily, color: 'rgba(255,255,255,0.4)', fontSize: '0.92rem', lineHeight: 2, fontWeight: 300, marginBottom: '2.5rem' }}>
                This is not just a booking. It is a shared coastal experience for those who gather intentionally.
              </p>
              <div style={{ flexWrap: 'wrap', display: 'flex' }}>
                {['Bachelorettes', 'Stagettes', 'Birthdays', 'Summer Events', 'Winter Events', 'Wellness', 'Corporate'].map((ev) => (
                  <span key={ev} className="event-pill">{ev}</span>
                ))}
              </div>
            </div>

            <div>
              <div className="price-display">
                <p className="tag-label" style={{ marginBottom: '1.5rem' }}>Pricing</p>
                <div style={{ marginBottom: '2rem' }}>
                  <span style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', color: '#00c9b1', lineHeight: 1 }}>$250</span>
                  <p style={{ fontFamily: sourceSerif.style.fontFamily, color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', marginTop: '0.5rem', fontWeight: 300 }}>Private session — first 2 guests</p>
                </div>
                <div style={{ height: '1px', background: 'rgba(0,201,177,0.12)', marginBottom: '2rem' }} />
                <div style={{ marginBottom: '2rem' }}>
                  <span style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1 }}>+$30</span>
                  <p style={{ fontFamily: sourceSerif.style.fontFamily, color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', marginTop: '0.5rem', fontWeight: 300 }}>each additional guest</p>
                </div>
                <div style={{ height: '1px', background: 'rgba(0,201,177,0.12)', marginBottom: '2rem' }} />
                <div>
                  <span style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1 }}>$42.50</span>
                  <p style={{ fontFamily: sourceSerif.style.fontFamily, color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', marginTop: '0.5rem', fontWeight: 300 }}>per person · drop-in session</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Drinks ─────────────────────── */}
        <section style={{ padding: '9rem 5vw' }}>
          <p className="tag-label" style={{ marginBottom: '2rem' }}>Drinks & Add-Ons</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 0.92, marginBottom: '4rem', letterSpacing: '-0.01em' }}>
            SIMPLE.<br /><span style={{ color: '#00c9b1' }}>CLEAN.</span><br />INTENTIONAL.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'rgba(0,201,177,0.08)', maxWidth: '700px' }}>
            {[
              { name: 'Cultured Kombucha', price: '$7.00' },
              { name: 'Glacier Water', price: '$5.00' },
              { name: 'House Red Wine', price: 'TBD' },
              { name: 'House White Wine', price: 'TBD' },
            ].map((d) => (
              <div key={d.name} style={{ background: '#060f1e', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontFamily: sourceSerif.style.fontFamily, color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', fontWeight: 300 }}>{d.name}</span>
                <span style={{ fontSize: '1.4rem', color: '#00c9b1', lineHeight: 1 }}>{d.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ────────────────────────── */}
        <section style={{ padding: '10rem 5vw', borderTop: '1px solid rgba(0,201,177,0.1)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 80% at 50% 100%, rgba(0,201,177,0.08) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p className="tag-label" style={{ marginBottom: '2rem' }}>Book Your Session</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)', lineHeight: 0.9, marginBottom: '3.5rem', maxWidth: '900px' }}>
              CHOOSE YOUR<br />SESSION.<br />
              <span style={{ color: '#00c9b1' }}>GATHER YOUR PEOPLE.</span>
            </h2>
            <p style={{ fontFamily: sourceSerif.style.fontFamily, color: 'rgba(255,255,255,0.35)', fontSize: '0.95rem', lineHeight: 2, fontWeight: 300, maxWidth: '480px', marginBottom: '4rem' }}>
              Whether you are seeking stillness or celebration, Pacific Sauna & Ocean Plunge
              offers a flexible experience for every season. Book a session. Plan a private event.
            </p>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="book-btn-3" style={{ fontFamily: anton.style.fontFamily }}>
              Reserve Now →
            </a>
          </div>
        </section>

        <footer style={{ padding: '2.5rem 5vw', borderTop: '1px solid rgba(0,201,177,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: '0.68rem', letterSpacing: '0.2em' }}>
            PACIFIC SAUNA & OCEAN PLUNGE · CAMPBELL RIVER, BC
          </p>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.18)', textDecoration: 'none', fontSize: '0.65rem', letterSpacing: '0.2em', fontFamily: sourceSerif.style.fontFamily }}>← ALL DESIGNS</Link>
        </footer>
      </div>
    </>
  )
}
