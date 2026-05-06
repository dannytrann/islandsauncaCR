import Link from 'next/link'
import { Bebas_Neue, DM_Sans } from 'next/font/google'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const dm = DM_Sans({ subsets: ['latin'], weight: ['300', '400'] })

const designs = [
  {
    num: '1',
    name: 'Midnight Nordic',
    desc: 'Dark amber drama. Steam particles. Glowing embers. Playfair serif.',
    bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a0e04 50%, #0a0a0a 100%)',
    accent: '#c8872a',
    textColor: '#f0e4c8',
    preview: 'radial-gradient(ellipse at 40% 50%, rgba(200,135,42,0.25) 0%, transparent 65%)',
  },
  {
    num: '2',
    name: 'Pacific Minimalist',
    desc: 'Extreme whitespace. Cormorant thin serifs. Breathing room. Ocean blue.',
    bg: 'linear-gradient(135deg, #f7f4ef 0%, #eee8de 100%)',
    accent: '#7fa9b8',
    textColor: '#2c3e50',
    preview: 'linear-gradient(180deg, transparent 0%, rgba(127,169,184,0.12) 100%)',
  },
  {
    num: '3',
    name: 'Cinematic Coast',
    desc: 'Full-viewport Anton display. Navy + vivid teal. Magazine energy.',
    bg: 'linear-gradient(135deg, #060f1e 0%, #0a1a30 100%)',
    accent: '#00c9b1',
    textColor: '#ffffff',
    preview: 'linear-gradient(45deg, transparent 30%, rgba(0,201,177,0.15) 100%)',
  },
  {
    num: '4',
    name: 'Organic Warmth',
    desc: 'Cedar gradients. Steam wisps. Lora warmth. Rounded organic shapes.',
    bg: 'linear-gradient(135deg, #2d1b0e 0%, #5c3318 50%, #8b4513 100%)',
    accent: '#f0c080',
    textColor: '#fdf6ec',
    preview: 'radial-gradient(ellipse at 30% 70%, rgba(240,192,128,0.2) 0%, transparent 60%)',
  },
  {
    num: '5',
    name: 'Aurora Wild',
    desc: 'Animated aurora gradient. Diagonal cuts. Neon glow. Bebas Neue.',
    bg: 'linear-gradient(135deg, #070d14 0%, #0d1f2d 50%, #070d14 100%)',
    accent: '#00e5cc',
    textColor: '#ffffff',
    preview: 'linear-gradient(135deg, rgba(0,229,204,0.15) 0%, rgba(124,58,237,0.15) 50%, rgba(16,185,129,0.1) 100%)',
  },
]

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .design-card {
          display: block;
          text-decoration: none;
          border-radius: 3px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          animation: fadeInUp 0.6s ease both;
        }
        .design-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.4);
        }
        .card-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .design-card:hover .card-arrow {
          transform: translateX(5px);
        }
      `}</style>

      <main style={{ background: '#080c12', minHeight: '100vh', fontFamily: dm.style.fontFamily }}>
        <header style={{ padding: '5rem 4rem 3rem' }}>
          <p style={{
            fontFamily: bebas.style.fontFamily,
            fontSize: '0.8rem',
            letterSpacing: '0.45em',
            color: '#2d3748',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}>
            Design Showcase · Five Concepts
          </p>
          <h1 style={{
            fontFamily: bebas.style.fontFamily,
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            color: '#ffffff',
            letterSpacing: '0.04em',
            lineHeight: 0.95,
            marginBottom: '1.5rem',
          }}>
            Pacific Sauna<br />
            <span style={{ color: '#00c9b1' }}>&amp; Ocean Plunge</span>
          </h1>
          <p style={{ color: '#4a5568', fontSize: '0.9rem', fontWeight: 300, maxWidth: '520px', lineHeight: 1.75 }}>
            Five distinct landing page designs for Floating Sauna Campbell River —
            each exploring a unique aesthetic direction, emotional tone, and typographic identity.
          </p>
        </header>

        <section style={{
          padding: '1rem 4rem 6rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
          gap: '1.25rem',
        }}>
          {designs.map((d, i) => (
            <Link
              key={d.num}
              href={`/${d.num}`}
              className="design-card"
              style={{
                background: d.bg,
                animationDelay: `${i * 0.09}s`,
              }}
            >
              {/* Preview area */}
              <div style={{
                height: '200px',
                background: d.preview,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                overflow: 'hidden',
              }}>
                <span style={{
                  fontFamily: bebas.style.fontFamily,
                  fontSize: '9rem',
                  color: d.accent,
                  opacity: 0.12,
                  lineHeight: 1,
                  userSelect: 'none',
                  position: 'absolute',
                  right: '1rem',
                  bottom: '-1.5rem',
                  letterSpacing: '0',
                }}>
                  {d.num}
                </span>
                <span style={{
                  fontFamily: bebas.style.fontFamily,
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                  color: d.textColor,
                  letterSpacing: '0.12em',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1,
                  textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                }}>
                  {d.name.toUpperCase()}
                </span>
              </div>

              {/* Card info */}
              <div style={{
                padding: '1.25rem 1.75rem 1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.04)',
                background: 'rgba(0,0,0,0.25)',
              }}>
                <p style={{
                  color: d.textColor,
                  opacity: 0.5,
                  fontSize: '0.8rem',
                  lineHeight: 1.75,
                  fontWeight: 300,
                  marginBottom: '1rem',
                }}>
                  {d.desc}
                </p>
                <span style={{
                  color: d.accent,
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}>
                  View Design <span className="card-arrow">→</span>
                </span>
              </div>
            </Link>
          ))}
        </section>

        <footer style={{
          padding: '2rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          textAlign: 'center',
        }}>
          <p style={{ color: '#1e2837', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Floating Sauna Campbell River · British Columbia
          </p>
        </footer>
      </main>
    </>
  )
}
