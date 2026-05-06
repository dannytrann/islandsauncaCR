import Link from 'next/link'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { IMGS } from '@/lib/images'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})
const dm = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500'], display: 'swap' })

const BOOK_URL = 'https://www.islandsauna.ca/campbell-river'

export default function Design1() {
  const steamParticles = Array.from({ length: 14 }, (_, i) => ({
    left: `${6 + i * 6.5}%`,
    delay: `${(i * 0.35) % 3}s`,
    duration: `${2.8 + (i * 0.2) % 1.5}s`,
    size: `${5 + (i * 3) % 8}px`,
  }))

  return (
    <>
      <style>{`
        @keyframes steamRise {
          0%   { transform: translateY(0) scale(1) translateX(0); opacity: 0.55; }
          40%  { transform: translateY(-35px) scale(1.15) translateX(8px); opacity: 0.3; }
          100% { transform: translateY(-90px) scale(1.6) translateX(-4px); opacity: 0; }
        }
        @keyframes emberPulse {
          0%, 100% { box-shadow: 0 0 18px 4px rgba(200,135,42,0.35); }
          50%       { box-shadow: 0 0 42px 14px rgba(200,135,42,0.65), 0 0 80px 28px rgba(200,135,42,0.18); }
        }
        @keyframes goldGlow {
          0%, 100% { text-shadow: 0 0 12px rgba(200,135,42,0.5); }
          50%       { text-shadow: 0 0 35px rgba(200,135,42,0.95), 0 0 70px rgba(200,135,42,0.4); }
        }
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.2; }
          50%       { opacity: 0.6; }
        }

        .hero-title  { animation: heroReveal 1.1s ease 0.2s both; }
        .hero-tag    { animation: heroReveal 0.9s ease 0s both; }
        .hero-body   { animation: heroReveal 1.1s ease 0.5s both; }
        .hero-cta    { animation: heroReveal 1.1s ease 0.75s both, emberPulse 3.5s ease-in-out 2s infinite; }
        .gold-pulse  { animation: goldGlow 4s ease-in-out infinite; }
        .divider-line {
          transform-origin: left center;
          animation: lineExpand 1.2s cubic-bezier(0.16,1,0.3,1) 0.3s both;
        }
        .scroll-indicator { animation: scrollPulse 2.5s ease-in-out infinite; }

        .steam-wrap {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          pointer-events: none;
          overflow: hidden;
        }
        .steam {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,135,42,0.4) 0%, transparent 70%);
          animation: steamRise linear infinite;
          bottom: 0;
        }

        .section-card {
          background: #0e0e0e;
          border: 1px solid rgba(200,135,42,0.08);
          padding: 2.5rem 2rem;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .section-card:hover {
          border-color: rgba(200,135,42,0.25);
          background: #111008;
        }

        .book-btn {
          display: inline-block;
          background: #c8872a;
          color: #0a0a0a;
          text-decoration: none;
          font-size: 0.72rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          font-weight: 700;
          padding: 0.95rem 2.8rem;
          transition: background 0.25s ease, transform 0.2s ease;
        }
        .book-btn:hover { background: #e09a35; transform: translateY(-2px); }

        .nav-book {
          color: #c8872a;
          text-decoration: none;
          font-size: 0.7rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          border: 1px solid rgba(200,135,42,0.45);
          padding: 0.5rem 1.4rem;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .nav-book:hover { background: rgba(200,135,42,0.12); }
      `}</style>

      <div style={{ background: '#0a0a0a', color: '#e8d5b7', fontFamily: dm.style.fontFamily, overflowX: 'hidden' }}>

        {/* ── Fixed Nav ─────────────────────────────── */}
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '1.4rem 3rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderBottom: '1px solid rgba(200,135,42,0.08)',
          backdropFilter: 'blur(12px)',
          background: 'rgba(10,10,10,0.82)',
        }}>
          <span style={{ fontFamily: playfair.style.fontFamily, fontSize: '1.1rem', color: '#c8872a', letterSpacing: '0.08em' }}>
            Pacific Sauna
          </span>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: '#4a3a2a', textDecoration: 'none', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>← Designs</Link>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="nav-book">Book Now</a>
          </div>
        </nav>

        {/* ── Hero ──────────────────────────────────── */}
        <section style={{
          minHeight: '100vh',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          textAlign: 'center', padding: '8rem 2rem 5rem',
          position: 'relative', overflow: 'hidden',
          backgroundImage: `url('${IMGS.hero}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}>
          {/* Dark image overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,5,2,0.72)', pointerEvents: 'none' }} />
          {/* Radial amber glow on top of overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 80% 60% at 50% 65%, rgba(200,135,42,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Steam particles */}
          <div className="steam-wrap">
            {steamParticles.map((p, i) => (
              <div key={i} className="steam" style={{
                left: p.left,
                width: p.size, height: p.size,
                animationDuration: p.duration,
                animationDelay: p.delay,
              }} />
            ))}
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p className="hero-tag" style={{
              fontSize: '0.68rem', letterSpacing: '0.42em', textTransform: 'uppercase',
              color: '#c8872a', marginBottom: '2.5rem', opacity: 0.85,
            }}>
              Campbell River · British Columbia
            </p>

            <h1 className="hero-title" style={{
              fontFamily: playfair.style.fontFamily,
              fontSize: 'clamp(3.2rem, 10.5vw, 9.5rem)',
              fontWeight: 900,
              lineHeight: 0.92,
              marginBottom: '2rem',
              color: '#f0e4c8',
            }}>
              Pacific<br />
              <em style={{ color: '#c8872a', fontStyle: 'italic' }}>Sauna</em><br />
              <span style={{ fontSize: '0.6em', fontWeight: 400, color: '#a08060', letterSpacing: '0.04em' }}>&amp; Ocean Plunge</span>
            </h1>

            <p className="hero-body" style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
              letterSpacing: '0.07em',
              color: '#7a6650',
              maxWidth: '380px', margin: '0 auto 3.5rem',
              lineHeight: 1.9,
            }}>
              West Coast sauna. Pacific Ocean cold plunge.<br />Gather, reset, or celebrate.
            </p>

            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="book-btn hero-cta">
              Reserve Your Session
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator" style={{
            position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          }}>
            <div style={{ width: '1px', height: '52px', background: 'linear-gradient(to bottom, transparent, #c8872a)' }} />
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#c8872a' }}>Scroll</span>
          </div>
        </section>

        {/* ── Divider ───────────────────────────────── */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(200,135,42,0.35), transparent)', margin: '0 5rem' }} />

        {/* ── Overview ─────────────────────────────── */}
        <section style={{ maxWidth: '960px', margin: '0 auto', padding: '9rem 2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c8872a', marginBottom: '1.2rem' }}>Overview</p>
              <div className="divider-line" style={{ width: '36px', height: '2px', background: '#c8872a', transformOrigin: 'left' }} />
            </div>
            <div>
              <h2 style={{
                fontFamily: playfair.style.fontFamily,
                fontSize: 'clamp(1.7rem, 3.5vw, 2.8rem)',
                fontWeight: 700, lineHeight: 1.2,
                marginBottom: '1.5rem', color: '#f0e4c8',
              }}>
                A floating experience designed for deep relaxation, connection, and unforgettable moments on the coast.
              </h2>
              <p style={{ color: '#6a5440', lineHeight: 2, fontSize: '0.97rem' }}>
                Rooted in Scandinavian sauna tradition and shaped by the wild beauty of the Pacific Northwest,
                Pacific Sauna & Ocean Plunge offers a calm, elevated space to warm up, cool down, and come together.
                Whether you're booking a quiet reset or a private gathering, this is a place to slow down, breathe deeply, and reconnect.
              </p>
            </div>
          </div>
        </section>

        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(200,135,42,0.35), transparent)', margin: '0 5rem' }} />

        {/* ── The Experience ───────────────────────── */}
        <section style={{ padding: '9rem 2.5rem' }}>
          <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c8872a', textAlign: 'center', marginBottom: '1.5rem' }}>The Experience</p>
            <h2 className="gold-pulse" style={{
              fontFamily: playfair.style.fontFamily,
              fontSize: 'clamp(2.2rem, 6vw, 5.5rem)',
              fontWeight: 900, textAlign: 'center',
              color: '#c8872a', marginBottom: '5rem', lineHeight: 0.95,
            }}>
              Step into the heat.<br /><em>Step into the ocean.</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'rgba(200,135,42,0.08)' }}>
              {[
                { icon: '♨', title: 'Traditional Sauna', desc: 'Dry heat up to 80°C. Softens the body, quiets the mind, and opens the pores.' },
                { icon: '〰', title: 'Ocean Cold Plunge', desc: 'Pacific waters. Sharpens the senses, invigorates the spirit, and resets the nervous system.' },
                { icon: '◇', title: 'Upper Deck', desc: 'Open air. Ocean views. A place to breathe deeply between rounds of heat and cold.' },
                { icon: '○', title: 'Quiet Gathering', desc: 'Intimate space for connection, celebration, wellness, or simply being present.' },
              ].map((item, i) => (
                <div key={i} className="section-card">
                  <div style={{ fontSize: '1.8rem', color: '#c8872a', marginBottom: '1.5rem', opacity: 0.6 }}>{item.icon}</div>
                  <h3 style={{ fontFamily: playfair.style.fontFamily, fontSize: '1.2rem', color: '#f0e4c8', marginBottom: '0.8rem', fontWeight: 700 }}>{item.title}</h3>
                  <p style={{ color: '#5a4838', lineHeight: 1.85, fontSize: '0.87rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Photo Strip ──────────────────────────── */}
        <section style={{ padding: '0 2.5rem 6rem' }}>
          <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3px', height: '420px' }}>
              <div style={{ backgroundImage: `url('${IMGS.interior}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.3)' }} />
              </div>
              <div style={{ backgroundImage: `url('${IMGS.plungeSocial}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ backgroundImage: `url('${IMGS.deck}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </div>
          </div>
        </section>

        {/* ── Sauna Philosophy ─────────────────────── */}
        <section style={{ background: 'linear-gradient(135deg, #110900 0%, #0a0a0a 100%)', padding: '9rem 2.5rem' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c8872a', marginBottom: '2rem' }}>Philosophy</p>
            <blockquote style={{
              fontFamily: playfair.style.fontFamily,
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              fontStyle: 'italic',
              color: '#8a7060',
              lineHeight: 1.5,
              borderLeft: 'none',
              margin: 0, padding: 0,
            }}>
              "The sauna softens the body.<br />The ocean sharpens the mind.<br />
              <span style={{ color: '#c8872a' }}>Together, they create a full reset.</span>"
            </blockquote>
            <div style={{ width: '60px', height: '1px', background: 'rgba(200,135,42,0.35)', margin: '3rem auto 0' }} />
          </div>
        </section>

        {/* ── Private Events ───────────────────────── */}
        <section style={{ padding: '9rem 2.5rem' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '6rem', alignItems: 'start' }}>
              <div>
                <p style={{ fontSize: '0.62rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c8872a', marginBottom: '1.5rem' }}>Private Events & Upper Deck</p>
                <h2 style={{
                  fontFamily: playfair.style.fontFamily,
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  color: '#f0e4c8', marginBottom: '1.5rem', lineHeight: 1.1, fontWeight: 700,
                }}>
                  Host intimate, elevated experiences on the <em style={{ color: '#c8872a' }}>coast</em>.
                </h2>
                <p style={{ color: '#6a5440', lineHeight: 2, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
                  This is not just a booking. It is a shared coastal experience.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Bachelorettes & Stagettes', 'Birthday Gatherings', 'Summer & Winter Events', 'Wellness Sessions', 'Corporate Retreats'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.65rem', color: '#8a7060', fontSize: '0.9rem' }}>
                      <span style={{ color: '#c8872a', fontSize: '0.45rem', flexShrink: 0 }}>◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing card */}
              <div style={{ position: 'relative' }}>
                <div style={{
                  border: '1px solid rgba(200,135,42,0.25)',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  position: 'relative',
                  background: '#0d0d0d',
                }}>
                  <div style={{ position: 'absolute', top: '-1px', left: '22%', right: '22%', height: '2px', background: '#c8872a' }} />
                  <p style={{ fontFamily: playfair.style.fontFamily, fontSize: '3.8rem', color: '#c8872a', fontWeight: 900, lineHeight: 1, marginBottom: '0.5rem' }}>$250</p>
                  <p style={{ color: '#5a4838', fontSize: '0.8rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>Private session<br />First 2 guests included</p>
                  <div style={{ height: '1px', background: 'rgba(200,135,42,0.15)', marginBottom: '1.5rem' }} />
                  <p style={{ fontFamily: playfair.style.fontFamily, fontSize: '2.2rem', color: '#8a7060', fontWeight: 700, lineHeight: 1 }}>+$30</p>
                  <p style={{ color: '#5a4838', fontSize: '0.78rem', marginTop: '0.5rem' }}>per additional guest</p>
                  <div style={{ height: '1px', background: 'rgba(200,135,42,0.15)', margin: '1.5rem 0' }} />
                  <p style={{ fontFamily: playfair.style.fontFamily, fontSize: '1.6rem', color: '#6a5440', fontWeight: 700 }}>$42.50</p>
                  <p style={{ color: '#5a4838', fontSize: '0.78rem', marginTop: '0.35rem' }}>per person · drop-in session</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(200,135,42,0.35), transparent)', margin: '0 5rem' }} />

        {/* ── Drinks & Add-Ons ─────────────────────── */}
        <section style={{ padding: '9rem 2.5rem' }}>
          <div style={{ maxWidth: '660px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c8872a', marginBottom: '1.5rem' }}>Drinks & Add-Ons</p>
            <h2 style={{ fontFamily: playfair.style.fontFamily, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f0e4c8', marginBottom: '0.75rem', fontWeight: 700 }}>
              Simple. Clean. <em style={{ color: '#c8872a' }}>Intentional.</em>
            </h2>
            <p style={{ color: '#5a4838', marginBottom: '3.5rem', lineHeight: 2, fontSize: '0.88rem' }}>
              Our offerings are minimal by design — chosen to support<br />the experience rather than distract from it.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(200,135,42,0.08)' }}>
              {[
                { name: 'Cultured Kombucha', price: '$7.00' },
                { name: 'Glacier Water', price: '$5.00' },
                { name: 'House Red Wine', price: 'TBD' },
                { name: 'House White Wine', price: 'TBD' },
              ].map((d, i) => (
                <div key={i} className="section-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem' }}>
                  <span style={{ color: '#8a7060', fontSize: '0.88rem' }}>{d.name}</span>
                  <span style={{ fontFamily: playfair.style.fontFamily, color: '#c8872a', fontSize: '1rem', fontWeight: 700 }}>{d.price}</span>
                </div>
              ))}
            </div>
            <p style={{ color: '#3a2a18', fontSize: '0.75rem', marginTop: '1.5rem', letterSpacing: '0.05em' }}>
              Available with private bookings and select sessions only.
            </p>
          </div>
        </section>

        {/* ── Atmosphere ───────────────────────────── */}
        <section style={{
          position: 'relative', height: '70vh', minHeight: '480px', overflow: 'hidden',
          backgroundImage: `url('${IMGS.plungeSocial}')`,
          backgroundSize: 'cover', backgroundPosition: 'center 30%',
          backgroundAttachment: 'fixed',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,4,1,0.62)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, transparent 40%, transparent 60%, rgba(10,10,10,0.7) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c8872a', marginBottom: '2rem', opacity: 0.85 }}>Atmosphere</p>
            <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {['Warm Wood', 'Ocean Air', 'Soft Steam'].map((a) => (
                <div key={a} style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: playfair.style.fontFamily, color: '#f0e4c8', fontSize: '1.15rem', fontStyle: 'italic' }}>{a}</p>
                  <div style={{ width: '24px', height: '1px', background: 'rgba(200,135,42,0.5)', margin: '0.5rem auto 0' }} />
                </div>
              ))}
            </div>
            <p style={{ fontFamily: playfair.style.fontFamily, color: 'rgba(240,228,200,0.55)', fontSize: 'clamp(1rem, 2vw, 1.3rem)', fontStyle: 'italic', maxWidth: '500px' }}>
              West Coast calm. Scandinavian tradition. Pacific edge.
            </p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────── */}
        <section style={{ padding: '10rem 2.5rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 90% 80% at 50% 50%, rgba(200,135,42,0.11) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c8872a', marginBottom: '2rem' }}>Book Your Session</p>
            <h2 style={{
              fontFamily: playfair.style.fontFamily,
              fontSize: 'clamp(2.2rem, 5.5vw, 5rem)',
              color: '#f0e4c8', fontWeight: 900, lineHeight: 0.95,
              marginBottom: '1.5rem',
            }}>
              Choose your session.<br /><em style={{ color: '#c8872a' }}>Gather your people.</em>
            </h2>
            <p style={{ color: '#5a4838', lineHeight: 1.9, marginBottom: '4rem', fontSize: '0.9rem' }}>
              Whether you are seeking stillness or celebration, Pacific Sauna & Ocean Plunge<br />
              offers a flexible experience for every season.
            </p>
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ fontFamily: playfair.style.fontFamily, fontSize: '4.5rem', color: '#c8872a', fontWeight: 900, lineHeight: 1 }}>$42.50</span>
              <p style={{ color: '#5a4838', fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '0.5rem' }}>per person · per session</p>
            </div>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="book-btn">
              Book Your Experience →
            </a>
          </div>
        </section>

        {/* ── Footer ───────────────────────────────── */}
        <footer style={{ borderTop: '1px solid rgba(200,135,42,0.1)', padding: '3rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontFamily: playfair.style.fontFamily, color: '#c8872a', fontSize: '1rem', marginBottom: '0.25rem' }}>Pacific Sauna & Ocean Plunge</p>
            <p style={{ color: '#3a2a18', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Campbell River, British Columbia</p>
          </div>
          <Link href="/" style={{ color: '#3a2a18', textDecoration: 'none', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>← All Designs</Link>
        </footer>
      </div>
    </>
  )
}
