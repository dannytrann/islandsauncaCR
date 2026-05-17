import type { Metadata } from 'next'
import Link from 'next/link'
import { Bebas_Neue, DM_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Comox Valley Floating Sauna | Coming Soon',
  description: 'A new floating sauna experience is coming to the Comox Valley. Stay tuned — the ocean is waiting.',
  robots: { index: false, follow: false },
}

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const dm = DM_Sans({ subsets: ['latin'], weight: ['300', '400'] })

export default function ComoxPage() {
  return (
    <>
      <style>{`
        @keyframes drift {
          0%   { transform: translateY(0px) translateX(0px); opacity: 0.06; }
          33%  { transform: translateY(-18px) translateX(6px); opacity: 0.12; }
          66%  { transform: translateY(-8px) translateX(-8px); opacity: 0.08; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.06; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .hero-tag    { animation: fadeUp 0.8s ease 0s both; }
        .hero-title  { animation: fadeUp 1s ease 0.15s both; }
        .hero-line   { animation: lineGrow 1.2s cubic-bezier(0.16,1,0.3,1) 0.4s both; transform-origin: left; }
        .hero-sub    { animation: fadeUp 0.9s ease 0.5s both; }
        .hero-back   {
          animation: fadeUp 0.8s ease 0.75s both;
          display: inline-flex; align-items: center; gap: 0.5rem;
          color: #2D5580; text-decoration: none;
          font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase;
          transition: color 0.2s ease;
        }
        .hero-back:hover { color: #29A8C5; }
        .cursor      { animation: blink 1.1s step-end infinite; }

        .orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
      `}</style>

      <div style={{
        background: '#071525',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 2rem',
        fontFamily: dm.style.fontFamily,
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Ambient background orbs */}
        <div className="orb" style={{
          width: '600px', height: '600px',
          top: '-200px', right: '-200px',
          background: 'radial-gradient(circle, rgba(41,168,197,0.08) 0%, transparent 70%)',
          animation: 'drift 12s ease-in-out infinite',
        }} />
        <div className="orb" style={{
          width: '500px', height: '500px',
          bottom: '-150px', left: '-150px',
          background: 'radial-gradient(circle, rgba(41,168,197,0.06) 0%, transparent 70%)',
          animation: 'drift 18s ease-in-out infinite reverse',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px' }}>

          <p className="hero-tag" style={{
            fontFamily: bebas.style.fontFamily,
            fontSize: '0.72rem',
            letterSpacing: '0.5em',
            color: '#29A8C5',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
            opacity: 0.75,
          }}>
            Island Sauna · Comox Valley
          </p>

          <h1 className="hero-title" style={{
            fontFamily: bebas.style.fontFamily,
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            color: '#ffffff',
            letterSpacing: '0.03em',
            lineHeight: 0.9,
            marginBottom: '0.5rem',
          }}>
            Coming<br />
            <span style={{ color: '#29A8C5' }}>Soon<span className="cursor" style={{ color: '#29A8C5' }}>_</span></span>
          </h1>

          <div className="hero-line" style={{
            width: '48px',
            height: '2px',
            background: 'linear-gradient(to right, #29A8C5, transparent)',
            margin: '2.5rem auto',
          }} />

          <p className="hero-sub" style={{
            color: '#4A7A95',
            fontSize: '0.95rem',
            fontWeight: 300,
            lineHeight: 1.9,
            maxWidth: '420px',
            margin: '0 auto 3.5rem',
          }}>
            A new floating sauna experience is being brought to the Comox Valley.
            The ocean is waiting.
          </p>

          <Link href="/" className="hero-back">
            ← Back to Campbell River
          </Link>
        </div>

        {/* Bottom location tag */}
        <p style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: bebas.style.fontFamily,
          fontSize: '0.65rem',
          letterSpacing: '0.4em',
          color: '#1B3867',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>
          Floating Sauna · British Columbia
        </p>
      </div>
    </>
  )
}
