'use client'

import Link from 'next/link'
import { Bebas_Neue, Barlow } from 'next/font/google'
import { IMGS } from '@/lib/images'
import { useEffect, useRef } from 'react'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', display: 'swap' })
const barlow = Barlow({ subsets: ['latin'], weight: ['300', '400', '500', '600'], display: 'swap' })

const BOOK_URL = 'https://www.islandsauna.ca/campbell-river'

export default function Design5() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars: { x: number; y: number; r: number; alpha: number; speed: number }[] = Array.from({ length: 120 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.2 + 0.2,
      alpha: Math.random() * 0.6 + 0.1,
      speed: Math.random() * 0.008 + 0.002,
    }))

    let frame = 0
    let animId: number

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      // Aurora bands
      const time = frame * 0.004
      const bands = [
        { y: 0.25, color: [0, 229, 204], amplitude: 0.06, freq: 0.8 },
        { y: 0.35, color: [124, 58, 237], amplitude: 0.05, freq: 1.1 },
        { y: 0.45, color: [16, 185, 129], amplitude: 0.04, freq: 0.7 },
        { y: 0.55, color: [0, 180, 216], amplitude: 0.05, freq: 0.9 },
      ]

      bands.forEach(({ y, color: [r, g, b], amplitude, freq }) => {
        const centerY = h * (y + Math.sin(time * freq) * amplitude)
        const gradient = ctx.createRadialGradient(w / 2, centerY, 0, w / 2, centerY, w * 0.6)
        gradient.addColorStop(0, `rgba(${r},${g},${b},0.18)`)
        gradient.addColorStop(0.5, `rgba(${r},${g},${b},0.06)`)
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, w, h)
      })

      // Stars
      stars.forEach((s) => {
        const alpha = s.alpha + Math.sin(frame * s.speed) * 0.15
        ctx.beginPath()
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, alpha)})`
        ctx.fill()
      })

      frame++
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes glitchSlide {
          0%, 100% { clip-path: inset(0 0 100% 0); opacity: 0; }
          5%  { clip-path: inset(0 0 0 0); opacity: 1; }
          95% { clip-path: inset(0 0 0 0); opacity: 1; }
        }
        @keyframes ripple {
          0%   { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes neonPulse {
          0%, 100% { text-shadow: 0 0 10px rgba(0,229,204,0.6), 0 0 20px rgba(0,229,204,0.3); }
          50%       { text-shadow: 0 0 20px rgba(0,229,204,0.9), 0 0 40px rgba(0,229,204,0.5), 0 0 80px rgba(0,229,204,0.2); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(0,229,204,0.2); }
          50%       { border-color: rgba(0,229,204,0.5); box-shadow: 0 0 20px rgba(0,229,204,0.15); }
        }

        .hero-line-1 { animation: slideInLeft 1s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
        .hero-line-2 { animation: slideInRight 1s cubic-bezier(0.16,1,0.3,1) 0.38s both; }
        .hero-line-3 { animation: slideInLeft 1s cubic-bezier(0.16,1,0.3,1) 0.56s both; }
        .hero-sub    { animation: fadeUp 1s ease 0.8s both; }
        .hero-cta    { animation: fadeUp 1s ease 1s both; }

        .neon-text {
          color: #00e5cc;
          animation: neonPulse 3s ease-in-out infinite;
        }

        .diagonal-section {
          clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
          padding: 11rem 5vw;
          margin: -3rem 0;
          position: relative;
          z-index: 1;
        }

        .diagonal-section-alt {
          clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
          padding: 11rem 5vw;
          margin: -3rem 0;
          position: relative;
          z-index: 2;
        }

        .ripple-btn {
          display: inline-block;
          text-decoration: none;
          position: relative;
          padding: 1.1rem 3.2rem;
          color: #070d14;
          background: #00e5cc;
          font-size: 0.8rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-weight: 600;
          transition: background 0.3s, transform 0.2s;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
        .ripple-btn:hover { background: #00ffdf; transform: translateY(-3px); }
        .ripple-btn::before, .ripple-btn::after {
          content: '';
          position: absolute;
          inset: -4px;
          border: 1px solid rgba(0,229,204,0.4);
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
          animation: ripple 2.5s ease-out infinite;
        }
        .ripple-btn::after { animation-delay: 1.25s; }

        .feature-card {
          border: 1px solid rgba(0,229,204,0.12);
          padding: 2.5rem;
          clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
          background: rgba(0,229,204,0.03);
          transition: background 0.3s, border-color 0.3s;
          animation: borderGlow 4s ease-in-out infinite;
        }
        .feature-card:hover {
          background: rgba(0,229,204,0.07);
          border-color: rgba(0,229,204,0.35);
        }

        .glitch-num {
          font-size: clamp(3rem, 9vw, 8rem);
          color: rgba(0,229,204,0.1);
          line-height: 1;
          position: absolute;
          user-select: none;
          pointer-events: none;
        }

        .price-hex {
          border: 1px solid rgba(0,229,204,0.2);
          padding: 2.5rem;
          text-align: center;
          clip-path: polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%);
          background: rgba(0,229,204,0.03);
          min-width: 200px;
          transition: border-color 0.3s, background 0.3s;
        }
        .price-hex:hover {
          border-color: rgba(0,229,204,0.4);
          background: rgba(0,229,204,0.07);
        }

        .scan-line {
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(0,229,204,0.3), transparent);
          animation: scanDown 8s linear infinite;
        }
        @keyframes scanDown {
          from { top: -1px; }
          to   { top: 100%; }
        }
      `}</style>

      <div style={{ background: '#070d14', color: '#ffffff', fontFamily: barlow.style.fontFamily, overflowX: 'hidden', position: 'relative' }}>

        {/* ── Animated Canvas Background ──────── */}
        <canvas ref={canvasRef} style={{
          position: 'fixed', top: 0, left: 0,
          width: '100%', height: '100%',
          zIndex: 0, pointerEvents: 'none',
          opacity: 0.9,
        }} />

        {/* Content overlay */}
        <div style={{ position: 'relative', zIndex: 1 }}>

          {/* ── Nav ──────────────────────────────── */}
          <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
            padding: '1.3rem 3rem',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: 'rgba(7,13,20,0.85)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0,229,204,0.08)',
          }}>
            <span style={{ fontFamily: bebas.style.fontFamily, fontSize: '1.2rem', letterSpacing: '0.12em', color: '#00e5cc' }}>
              PACIFIC SAUNA
            </span>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.2)', textDecoration: 'none', fontSize: '0.65rem', letterSpacing: '0.2em' }}>← DESIGNS</Link>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" style={{
                color: '#00e5cc', textDecoration: 'none', fontSize: '0.68rem',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                border: '1px solid rgba(0,229,204,0.35)', padding: '0.45rem 1.3rem',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              }}>
                BOOK
              </a>
            </div>
          </nav>

          {/* ── Hero ─────────────────────────────── */}
          <section style={{
            minHeight: '100vh',
            padding: '14rem 5vw 8rem',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Actual photo blended beneath aurora */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url('${IMGS.hero}')`,
              backgroundSize: 'cover', backgroundPosition: 'center 40%',
              opacity: 0.28, mixBlendMode: 'luminosity',
            }} />
            {/* Deep dark overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,13,20,0.55)' }} />
            <div className="scan-line" />

            <p style={{ fontSize: '0.65rem', letterSpacing: '0.45em', color: 'rgba(0,229,204,0.6)', marginBottom: '2.5rem', textTransform: 'uppercase' }}>
              Campbell River · British Columbia
            </p>

            <div className="hero-line-1">
              <span style={{
                fontFamily: bebas.style.fontFamily,
                fontSize: 'clamp(4rem, 16vw, 13rem)',
                lineHeight: 0.88, letterSpacing: '0.02em',
                display: 'block', color: '#ffffff',
              }}>
                PACIFIC
              </span>
            </div>
            <div className="hero-line-2">
              <span className="neon-text" style={{
                fontFamily: bebas.style.fontFamily,
                fontSize: 'clamp(4rem, 16vw, 13rem)',
                lineHeight: 0.88, letterSpacing: '0.02em',
                display: 'block',
              }}>
                SAUNA
              </span>
            </div>
            <div className="hero-line-3">
              <span style={{
                fontFamily: bebas.style.fontFamily,
                fontSize: 'clamp(2.5rem, 10vw, 8rem)',
                lineHeight: 0.95, letterSpacing: '0.04em',
                display: 'block', color: 'rgba(255,255,255,0.55)',
              }}>
                &amp; OCEAN PLUNGE
              </span>
            </div>

            <div className="hero-sub" style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              paddingTop: '3rem', marginTop: '2rem',
              borderTop: '1px solid rgba(0,229,204,0.1)',
              flexWrap: 'wrap', gap: '2rem',
            }}>
              <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.92rem', lineHeight: 1.8, fontWeight: 300, maxWidth: '360px' }}>
                West Coast sauna. Pacific Ocean cold plunge.<br />Gather, reset, or celebrate.
              </p>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="ripple-btn hero-cta" style={{ fontFamily: bebas.style.fontFamily, letterSpacing: '0.2em', fontSize: '0.95rem' }}>
                Book Now
              </a>
            </div>
          </section>

          {/* ── Overview (diagonal) ──────────────── */}
          <section className="diagonal-section" style={{ background: 'rgba(0,229,204,0.03)' }}>
            <div style={{ maxWidth: '800px' }}>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.45em', color: '#00e5cc', marginBottom: '2rem', opacity: 0.65, textTransform: 'uppercase' }}>01 — Overview</p>
              <h2 style={{
                fontFamily: bebas.style.fontFamily,
                fontSize: 'clamp(2rem, 6vw, 5rem)',
                lineHeight: 0.92,
                letterSpacing: '0.03em',
                marginBottom: '3rem',
                color: '#ffffff',
              }}>
                ROOTED IN SCANDINAVIAN TRADITION.<br />
                <span className="neon-text">SHAPED BY THE PACIFIC.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', lineHeight: 2, fontWeight: 300, maxWidth: '560px' }}>
                A floating sauna and ocean plunge experience designed for deep relaxation, connection,
                and unforgettable moments on the coast. A calm, elevated space to warm up, cool down,
                and come together on the wild edge of the Pacific Northwest.
              </p>
            </div>
          </section>

          {/* ── Gallery Strip ─────────────────────── */}
          <section style={{ display: 'flex', height: '320px', overflow: 'hidden' }}>
            {[IMGS.hero, IMGS.interior, IMGS.plungeSocial, IMGS.deck, IMGS.plungeAerial].map((src, i) => (
              <div key={i} style={{
                flex: 1, backgroundImage: `url('${src}')`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                position: 'relative',
                transition: 'flex 0.4s ease',
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,13,20,0.4)' }} />
              </div>
            ))}
          </section>

          {/* ── Experience ────────────────────────── */}
          <section className="diagonal-section-alt" style={{ background: '#070d14' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.45em', color: '#00e5cc', marginBottom: '2rem', opacity: 0.65, textTransform: 'uppercase' }}>02 — The Experience</p>
              <h2 style={{
                fontFamily: bebas.style.fontFamily,
                fontSize: 'clamp(2.5rem, 7vw, 6rem)',
                lineHeight: 0.9,
                color: '#ffffff', marginBottom: '5rem',
              }}>
                HEAT. COLD.<br />
                <span className="neon-text">REST. REPEAT.</span>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {[
                  { num: '01', title: 'Traditional Sauna', desc: 'Dry heat up to 80°C. Scandinavian bathing tradition perfected over centuries.' },
                  { num: '02', title: 'Ocean Cold Plunge', desc: 'Pacific waters. Bracing and clarifying. The essential contrast.' },
                  { num: '03', title: 'Upper Deck', desc: 'Open air. Ocean views. Coastal wind between rounds.' },
                  { num: '04', title: 'Quiet Gathering', desc: 'Intimate space for connection or solitude on the water.' },
                ].map((item) => (
                  <div key={item.num} className="feature-card">
                    <span style={{ fontFamily: bebas.style.fontFamily, fontSize: '2.5rem', color: '#00e5cc', opacity: 0.3, display: 'block', marginBottom: '1rem', lineHeight: 1 }}>
                      {item.num}
                    </span>
                    <h3 style={{ fontFamily: bebas.style.fontFamily, fontSize: '1.4rem', letterSpacing: '0.08em', color: '#ffffff', marginBottom: '0.75rem' }}>
                      {item.title.toUpperCase()}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.88rem', lineHeight: 1.85, fontWeight: 300 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Private Events ────────────────────── */}
          <section className="diagonal-section" style={{ background: 'rgba(124,58,237,0.06)' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.45em', color: '#8b5cf6', marginBottom: '2rem', opacity: 0.75, textTransform: 'uppercase' }}>03 — Private Events & Upper Deck</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
                <div>
                  <h2 style={{
                    fontFamily: bebas.style.fontFamily,
                    fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                    lineHeight: 0.92, color: '#ffffff', marginBottom: '2rem',
                  }}>
                    HOST AN ELEVATED<br />
                    <span style={{ color: '#8b5cf6' }}>COASTAL EXPERIENCE</span>
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.92rem', lineHeight: 2, fontWeight: 300, marginBottom: '2.5rem' }}>
                    This is not just a booking. It is a shared coastal experience for those who gather intentionally.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Bachelorettes', 'Stagettes', 'Birthdays', 'Summer Events', 'Winter Events', 'Wellness', 'Corporate'].map((ev) => (
                      <span key={ev} style={{
                        padding: '0.35rem 1rem',
                        border: '1px solid rgba(139,92,246,0.25)',
                        color: 'rgba(255,255,255,0.45)',
                        fontSize: '0.78rem',
                        letterSpacing: '0.06em',
                        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                      }}>
                        {ev}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="feature-card" style={{ borderColor: 'rgba(0,229,204,0.15)' }}>
                    <span style={{ fontFamily: bebas.style.fontFamily, fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#00e5cc', lineHeight: 1 }}>$250</span>
                    <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.82rem', marginTop: '0.35rem', fontWeight: 300 }}>Private session — first 2 guests</p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="feature-card" style={{ borderColor: 'rgba(139,92,246,0.2)' }}>
                      <span style={{ fontFamily: bebas.style.fontFamily, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#8b5cf6', lineHeight: 1 }}>+$30</span>
                      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', marginTop: '0.35rem', fontWeight: 300 }}>per additional guest</p>
                    </div>
                    <div className="feature-card" style={{ borderColor: 'rgba(0,229,204,0.12)' }}>
                      <span style={{ fontFamily: bebas.style.fontFamily, fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1 }}>$42.50</span>
                      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', marginTop: '0.35rem', fontWeight: 300 }}>drop-in session</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Drinks ────────────────────────────── */}
          <section className="diagonal-section-alt" style={{ background: '#070d14' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.45em', color: '#00e5cc', marginBottom: '2rem', opacity: 0.65, textTransform: 'uppercase' }}>04 — Drinks & Add-Ons</p>
              <h2 style={{ fontFamily: bebas.style.fontFamily, fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#ffffff', marginBottom: '0.5rem', lineHeight: 0.9 }}>
                SIMPLE. <span className="neon-text">CLEAN.</span><br />INTENTIONAL.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '3.5rem' }}>
                Available with private bookings and select sessions only.
              </p>
              <div style={{ border: '1px solid rgba(0,229,204,0.1)', overflow: 'hidden', clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
                {[
                  { name: 'Cultured Kombucha', price: '$7.00' },
                  { name: 'Glacier Water', price: '$5.00' },
                  { name: 'House Red Wine', price: 'TBD' },
                  { name: 'House White Wine', price: 'TBD' },
                ].map((d, i) => (
                  <div key={d.name} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '1.25rem 2rem',
                    borderBottom: i < 3 ? '1px solid rgba(0,229,204,0.07)' : 'none',
                    background: i % 2 === 0 ? 'transparent' : 'rgba(0,229,204,0.02)',
                  }}>
                    <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', fontWeight: 300 }}>{d.name}</span>
                    <span style={{ fontFamily: bebas.style.fontFamily, color: '#00e5cc', fontSize: '1.2rem', letterSpacing: '0.06em' }}>{d.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ───────────────────────────────── */}
          <section className="diagonal-section" style={{ background: 'rgba(0,229,204,0.04)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.45em', color: '#00e5cc', marginBottom: '2.5rem', opacity: 0.65, textTransform: 'uppercase' }}>
              05 — Book Your Session
            </p>
            <h2 style={{
              fontFamily: bebas.style.fontFamily,
              fontSize: 'clamp(2.8rem, 9vw, 8rem)',
              lineHeight: 0.9, color: '#ffffff',
              marginBottom: '1.5rem',
            }}>
              CHOOSE YOUR SESSION.<br />
              <span className="neon-text">GATHER YOUR PEOPLE.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.95rem', lineHeight: 2, fontWeight: 300, maxWidth: '480px', margin: '0 auto 4rem' }}>
              Whether you are seeking stillness or celebration, Pacific Sauna & Ocean Plunge
              offers a flexible experience for every season.
            </p>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="ripple-btn" style={{ fontFamily: bebas.style.fontFamily, fontSize: '1.1rem', letterSpacing: '0.18em' }}>
              Reserve Now →
            </a>
          </section>

          {/* ── Footer ────────────────────────────── */}
          <footer style={{
            padding: '3rem 5vw',
            borderTop: '1px solid rgba(0,229,204,0.06)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: '1rem',
            background: 'rgba(7,13,20,0.95)',
            position: 'relative', zIndex: 10,
          }}>
            <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: bebas.style.fontFamily }}>
              Pacific Sauna & Ocean Plunge · Campbell River, BC
            </p>
            <Link href="/" style={{ color: 'rgba(0,229,204,0.3)', textDecoration: 'none', fontSize: '0.65rem', letterSpacing: '0.2em' }}>
              ← ALL DESIGNS
            </Link>
          </footer>
        </div>
      </div>
    </>
  )
}
