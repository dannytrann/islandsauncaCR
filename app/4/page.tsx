import Link from 'next/link'
import { Lora, Nunito_Sans } from 'next/font/google'
import { IMGS } from '@/lib/images'

const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], display: 'swap' })
const nunito = Nunito_Sans({ subsets: ['latin'], weight: ['300', '400', '600'], display: 'swap' })

const BOOK_URL = 'https://www.islandsauna.ca/campbell-river'

export default function Design4() {
  const wisps = Array.from({ length: 10 }, (_, i) => ({
    left: `${8 + i * 9}%`,
    delay: `${(i * 0.6) % 4}s`,
    duration: `${4 + (i * 0.35) % 2}s`,
    w: `${12 + (i * 5) % 16}px`,
    h: `${50 + (i * 10) % 50}px`,
  }))

  return (
    <>
      <style>{`
        @keyframes wispRise {
          0%   { transform: translateY(0) scale(1) rotate(-2deg); opacity: 0.35; }
          40%  { transform: translateY(-40px) scale(1.1) rotate(3deg); opacity: 0.2; }
          100% { transform: translateY(-110px) scale(0.7) rotate(-1deg); opacity: 0; }
        }
        @keyframes emberFlicker {
          0%, 100% { opacity: 1; }
          25%  { opacity: 0.85; }
          50%  { opacity: 0.95; }
          75%  { opacity: 0.8; }
        }
        @keyframes warmGlow {
          0%, 100% { box-shadow: 0 0 30px 8px rgba(196,114,58,0.35), inset 0 0 40px rgba(200,100,20,0.2); }
          50%       { box-shadow: 0 0 60px 18px rgba(196,114,58,0.5), inset 0 0 60px rgba(200,100,20,0.3); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes driftIn {
          from { opacity: 0; transform: translateY(24px) rotate(-0.5deg); }
          to   { opacity: 1; transform: translateY(0) rotate(0); }
        }

        .hero-h1    { animation: driftIn 1.3s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
        .hero-sub   { animation: driftIn 1.1s cubic-bezier(0.16,1,0.3,1) 0.5s both; }
        .hero-cta   { animation: driftIn 1.1s cubic-bezier(0.16,1,0.3,1) 0.75s both, warmGlow 4s ease-in-out 2s infinite; }

        .wisp {
          position: absolute;
          border-radius: 50% 50% 40% 60%;
          background: radial-gradient(ellipse, rgba(255,200,120,0.5) 0%, rgba(196,114,58,0.2) 50%, transparent 80%);
          animation: wispRise ease-in-out infinite;
          bottom: 0;
          filter: blur(3px);
        }

        .warm-card {
          background: rgba(253,246,236,0.06);
          border: 1px solid rgba(240,192,128,0.15);
          border-radius: 20px;
          padding: 2.5rem;
          transition: background 0.4s ease, border-color 0.4s ease, transform 0.3s ease;
        }
        .warm-card:hover {
          background: rgba(253,246,236,0.1);
          border-color: rgba(240,192,128,0.3);
          transform: translateY(-4px);
        }

        .book-btn-4 {
          display: inline-block;
          text-decoration: none;
          background: linear-gradient(135deg, #c4723a, #e09a35);
          color: #fdf6ec;
          border-radius: 50px;
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 600;
          padding: 1rem 2.8rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: warmGlow 4s ease-in-out 1s infinite;
        }
        .book-btn-4:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(196,114,58,0.5);
        }

        .divider-warm {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin: 0 4rem;
        }
        .divider-warm::before,
        .divider-warm::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(240,192,128,0.2);
        }
        .divider-warm-icon {
          color: rgba(240,192,128,0.4);
          font-size: 0.7rem;
        }

        .price-ring {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: 2px solid rgba(240,192,128,0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: float 5s ease-in-out infinite;
          background: radial-gradient(circle, rgba(196,114,58,0.1) 0%, transparent 70%);
        }

        .menu-item {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 1.25rem 0;
          border-bottom: 1px solid rgba(240,192,128,0.12);
        }

        .event-tag {
          display: inline-block;
          padding: 0.45rem 1.1rem;
          background: rgba(240,192,128,0.08);
          border: 1px solid rgba(240,192,128,0.15);
          border-radius: 100px;
          color: rgba(253,246,236,0.55);
          font-size: 0.8rem;
          margin: 0.2rem;
          transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }
        .event-tag:hover {
          background: rgba(240,192,128,0.15);
          color: #f0c080;
          border-color: rgba(240,192,128,0.35);
        }
      `}</style>

      <div style={{ background: '#1c0f05', color: '#fdf6ec', fontFamily: nunito.style.fontFamily, overflowX: 'hidden' }}>

        {/* ── Nav ─────────────────────────────────── */}
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '1.4rem 3rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: 'rgba(28,15,5,0.88)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(240,192,128,0.07)',
        }}>
          <span style={{ fontFamily: lora.style.fontFamily, fontSize: '1.05rem', color: '#f0c080', letterSpacing: '0.06em' }}>
            Pacific Sauna
          </span>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'rgba(240,192,128,0.3)', textDecoration: 'none', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>← Designs</Link>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" style={{
              color: '#f0c080', textDecoration: 'none', fontSize: '0.7rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              border: '1px solid rgba(240,192,128,0.3)', borderRadius: '100px',
              padding: '0.45rem 1.3rem',
            }}>
              Book
            </a>
          </div>
        </nav>

        {/* ── Hero ────────────────────────────────── */}
        <section style={{
          minHeight: '100vh',
          backgroundImage: `url('${IMGS.hero}')`,
          backgroundSize: 'cover', backgroundPosition: 'center 45%',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          textAlign: 'center', padding: '8rem 2rem 5rem',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Warm dark overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,8,2,0.72)' }} />
          {/* Warm gradient bloom */}
          <div style={{
            position: 'absolute', bottom: '-10%', left: '50%', transform: 'translateX(-50%)',
            width: '80%', height: '60%',
            background: 'radial-gradient(ellipse, rgba(196,114,58,0.25) 0%, rgba(140,60,20,0.1) 40%, transparent 70%)',
            filter: 'blur(40px)', pointerEvents: 'none',
            animation: 'emberFlicker 5s ease-in-out infinite',
          }} />

          {/* Steam wisps */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            {wisps.map((w, i) => (
              <div key={i} className="wisp" style={{
                left: w.left, width: w.w, height: w.h,
                animationDuration: w.duration, animationDelay: w.delay,
              }} />
            ))}
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(240,192,128,0.6)', marginBottom: '2.5rem' }}>
              Campbell River · British Columbia
            </p>
            <h1 className="hero-h1" style={{
              fontFamily: lora.style.fontFamily,
              fontSize: 'clamp(3rem, 9vw, 8.5rem)',
              fontWeight: 700,
              lineHeight: 1,
              color: '#fdf6ec',
              marginBottom: '0.5rem',
              animation: 'driftIn 1.3s cubic-bezier(0.16,1,0.3,1) 0.2s both, emberFlicker 6s ease-in-out 1.5s infinite',
            }}>
              Pacific Sauna
            </h1>
            <h2 className="hero-sub" style={{
              fontFamily: lora.style.fontFamily,
              fontSize: 'clamp(1.4rem, 4vw, 3.5rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#c4723a',
              marginBottom: '2rem',
              lineHeight: 1.2,
            }}>
              &amp; Ocean Plunge
            </h2>
            <p style={{
              color: 'rgba(253,246,236,0.45)', fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
              lineHeight: 1.9, maxWidth: '360px', margin: '0 auto 3.5rem',
              fontWeight: 300,
            }}>
              West Coast sauna. Pacific Ocean cold plunge.<br />Gather, reset, or celebrate.
            </p>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="book-btn-4 hero-cta">
              Reserve Your Session
            </a>
          </div>
        </section>

        {/* ── Divider ───────────────────────────── */}
        <div className="divider-warm">
          <span className="divider-warm-icon">✦</span>
        </div>

        {/* ── Overview ──────────────────────────── */}
        <section style={{ padding: '9rem 4rem', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '6rem', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#c4723a', marginBottom: '1.5rem', opacity: 0.8 }}>Overview</p>
              <div style={{ width: '40px', height: '2px', background: 'linear-gradient(to right, #c4723a, #f0c080)', borderRadius: '1px', marginBottom: '2rem' }} />
              <p style={{ fontFamily: lora.style.fontFamily, fontSize: '1.25rem', color: '#f0c080', fontStyle: 'italic', lineHeight: 1.7 }}>
                "Warm up, cool down, and come together."
              </p>
            </div>
            <div>
              <h2 style={{
                fontFamily: lora.style.fontFamily,
                fontSize: 'clamp(1.6rem, 3.5vw, 2.7rem)',
                fontWeight: 600, color: '#fdf6ec',
                lineHeight: 1.25, marginBottom: '1.5rem',
              }}>
                A floating experience designed for deep relaxation and unforgettable moments on the coast.
              </h2>
              <p style={{ color: 'rgba(253,246,236,0.45)', lineHeight: 2.1, fontSize: '0.93rem', fontWeight: 300 }}>
                Rooted in Scandinavian sauna tradition and shaped by the wild beauty of the Pacific Northwest,
                Pacific Sauna & Ocean Plunge offers a calm, elevated space. Whether you're booking a quiet reset
                or a private gathering, this is a place to slow down, breathe deeply, and reconnect.
              </p>
            </div>
          </div>
        </section>

        <div className="divider-warm">
          <span className="divider-warm-icon">✦</span>
        </div>

        {/* ── Experience ────────────────────────── */}
        <section style={{ padding: '9rem 4rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#c4723a', marginBottom: '1.5rem', opacity: 0.8 }}>The Experience</p>
              <h2 style={{
                fontFamily: lora.style.fontFamily,
                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                fontWeight: 700, color: '#fdf6ec', lineHeight: 1.05,
              }}>
                Heat. Cold. Rest. <em style={{ color: '#c4723a' }}>Repeat.</em>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {[
                { icon: '♨', title: 'Traditional Sauna', desc: 'Dry heat up to 80°C. Softens the body and quiets the mind in the Scandinavian tradition.' },
                { icon: '〰', title: 'Ocean Cold Plunge', desc: 'Pacific waters. Bracing, clarifying, and invigorating. The perfect contrast to the heat.' },
                { icon: '◇', title: 'Upper Deck', desc: 'Open air over the water. Breathe the ocean air between rounds of heat and cold.' },
                { icon: '○', title: 'Quiet Gathering', desc: 'Intimate coastal space for connection, celebration, wellness, or peaceful solitude.' },
              ].map((item) => (
                <div key={item.title} className="warm-card">
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1.2rem', opacity: 0.5, color: '#f0c080' }}>{item.icon}</span>
                  <h3 style={{ fontFamily: lora.style.fontFamily, fontSize: '1.15rem', fontWeight: 600, color: '#fdf6ec', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(253,246,236,0.4)', lineHeight: 1.9, fontSize: '0.88rem', fontWeight: 300 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Philosophy ────────────────────────── */}
        <section style={{
          padding: '8rem 4rem',
          background: 'radial-gradient(ellipse at center, rgba(100,40,10,0.4) 0%, transparent 70%)',
          textAlign: 'center',
        }}>
          <p style={{ fontFamily: lora.style.fontFamily, fontSize: 'clamp(1.4rem, 3vw, 2.3rem)', fontStyle: 'italic', color: 'rgba(253,246,236,0.4)', lineHeight: 1.6, maxWidth: '620px', margin: '0 auto' }}>
            "The sauna softens the body.<br />The ocean sharpens the mind.<br />
            <span style={{ color: '#c4723a' }}>Together, they create a full reset.</span>"
          </p>
        </section>

        {/* ── Plunge Photo ──────────────────────── */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '55vh', minHeight: '380px' }}>
          <div style={{ backgroundImage: `url('${IMGS.plungeSocial}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,15,5,0.2)' }} />
          </div>
          <div style={{ backgroundImage: `url('${IMGS.interior}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,15,5,0.15)' }} />
          </div>
        </section>

        <div className="divider-warm">
          <span className="divider-warm-icon">✦</span>
        </div>

        {/* ── Private Events ────────────────────── */}
        <section style={{ padding: '9rem 4rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '6rem', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '0.62rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#c4723a', marginBottom: '1.5rem', opacity: 0.8 }}>Private Events & Upper Deck</p>
                <h2 style={{ fontFamily: lora.style.fontFamily, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fdf6ec', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                  The upper deck is designed for <em style={{ color: '#c4723a' }}>gathering</em>.
                </h2>
                <p style={{ color: 'rgba(253,246,236,0.4)', lineHeight: 2.1, fontSize: '0.93rem', fontWeight: 300, marginBottom: '2.5rem' }}>
                  Host intimate, elevated experiences. This is not just a booking —<br />it is a shared coastal experience.
                </p>
                <div style={{ flexWrap: 'wrap', display: 'flex', gap: '0.25rem' }}>
                  {['Bachelorettes', 'Stagettes', 'Birthday Gatherings', 'Summer Events', 'Winter Events', 'Wellness Sessions', 'Corporate Retreats'].map((ev) => (
                    <span key={ev} className="event-tag">{ev}</span>
                  ))}
                </div>
              </div>

              {/* Pricing rings */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                <div className="price-ring">
                  <span style={{ fontFamily: lora.style.fontFamily, fontSize: '2.8rem', color: '#f0c080', fontWeight: 700, lineHeight: 1 }}>$250</span>
                  <span style={{ color: 'rgba(253,246,236,0.35)', fontSize: '0.72rem', textAlign: 'center', marginTop: '0.3rem' }}>Private · 2 guests</span>
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div style={{
                    width: '110px', height: '110px', borderRadius: '50%',
                    border: '1px solid rgba(240,192,128,0.2)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(196,114,58,0.05)',
                  }}>
                    <span style={{ fontFamily: lora.style.fontFamily, fontSize: '1.6rem', color: '#c4723a', fontWeight: 600 }}>+$30</span>
                    <span style={{ color: 'rgba(253,246,236,0.3)', fontSize: '0.65rem', textAlign: 'center' }}>per add&apos;l guest</span>
                  </div>
                  <div style={{
                    width: '110px', height: '110px', borderRadius: '50%',
                    border: '1px solid rgba(240,192,128,0.2)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(196,114,58,0.05)',
                  }}>
                    <span style={{ fontFamily: lora.style.fontFamily, fontSize: '1.4rem', color: '#fdf6ec', fontWeight: 600, lineHeight: 1.1 }}>$42.50</span>
                    <span style={{ color: 'rgba(253,246,236,0.3)', fontSize: '0.65rem', textAlign: 'center' }}>drop-in session</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider-warm">
          <span className="divider-warm-icon">✦</span>
        </div>

        {/* ── Drinks ────────────────────────────── */}
        <section style={{ padding: '9rem 4rem' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#c4723a', marginBottom: '1.5rem', opacity: 0.8, textAlign: 'center' }}>Drinks & Add-Ons</p>
            <h2 style={{ fontFamily: lora.style.fontFamily, fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#fdf6ec', textAlign: 'center', marginBottom: '0.75rem' }}>
              Simple. Clean. <em style={{ color: '#c4723a' }}>Intentional.</em>
            </h2>
            <p style={{ color: 'rgba(253,246,236,0.35)', textAlign: 'center', marginBottom: '3.5rem', fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.8 }}>
              Minimal by design. Chosen to support the experience,<br />not distract from it.
            </p>
            <div style={{ background: 'rgba(253,246,236,0.03)', borderRadius: '20px', border: '1px solid rgba(240,192,128,0.1)', overflow: 'hidden' }}>
              {[
                { name: 'Cultured Kombucha', price: '$7.00' },
                { name: 'Glacier Water', price: '$5.00' },
                { name: 'House Red Wine', price: 'TBD' },
                { name: 'House White Wine', price: 'TBD' },
              ].map((d, i) => (
                <div key={d.name} className="menu-item" style={{ padding: '1.4rem 2rem', borderBottom: i < 3 ? '1px solid rgba(240,192,128,0.08)' : 'none' }}>
                  <span style={{ color: 'rgba(253,246,236,0.5)', fontSize: '0.9rem', fontWeight: 300 }}>{d.name}</span>
                  <span style={{ fontFamily: lora.style.fontFamily, color: '#f0c080', fontSize: '1.05rem', fontWeight: 600 }}>{d.price}</span>
                </div>
              ))}
            </div>
            <p style={{ color: 'rgba(253,246,236,0.2)', fontSize: '0.72rem', textAlign: 'center', marginTop: '1.2rem' }}>
              Available with private bookings and select sessions only.
            </p>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────── */}
        <section style={{
          padding: '10rem 4rem',
          background: 'radial-gradient(ellipse at center bottom, rgba(100,40,10,0.5) 0%, rgba(45,18,8,0.6) 50%, #1c0f05 100%)',
          textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)',
            width: '100%', height: '70%',
            background: 'radial-gradient(ellipse, rgba(196,114,58,0.15) 0%, transparent 65%)',
            filter: 'blur(50px)', pointerEvents: 'none',
            animation: 'emberFlicker 5s ease-in-out infinite',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#c4723a', marginBottom: '2.5rem', opacity: 0.8 }}>Book Your Session</p>
            <h2 style={{
              fontFamily: lora.style.fontFamily,
              fontSize: 'clamp(2.2rem, 5.5vw, 5rem)',
              fontWeight: 700, color: '#fdf6ec',
              lineHeight: 1, marginBottom: '1.5rem',
            }}>
              Choose your session.<br />
              <em style={{ color: '#c4723a' }}>Gather your people.</em>
            </h2>
            <p style={{ color: 'rgba(253,246,236,0.35)', lineHeight: 2, marginBottom: '4rem', fontWeight: 300, maxWidth: '480px', margin: '0 auto 4rem' }}>
              Whether you are seeking stillness or celebration, Pacific Sauna & Ocean Plunge
              offers a flexible experience for every season of the year.
            </p>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="book-btn-4">
              Book Your Experience
            </a>
          </div>
        </section>

        {/* ── Footer ────────────────────────────── */}
        <footer style={{
          padding: '2.5rem 4rem',
          borderTop: '1px solid rgba(240,192,128,0.08)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{ fontFamily: lora.style.fontFamily, color: 'rgba(240,192,128,0.35)', fontSize: '0.9rem', fontStyle: 'italic' }}>
            Pacific Sauna & Ocean Plunge · Campbell River, BC
          </p>
          <Link href="/" style={{ color: 'rgba(240,192,128,0.25)', textDecoration: 'none', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            ← All Designs
          </Link>
        </footer>
      </div>
    </>
  )
}
