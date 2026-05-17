import type { Metadata } from 'next'
import Link from 'next/link'
import { Lora, Nunito_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Floating Sauna Campbell River BC | Book a Session',
  description: 'Pacific Sauna & Ocean Plunge is a wood-fired floating sauna at the Coast Marina, Campbell River BC. Social sessions from $42.50/person. Private bookings from $250. Ocean cold plunge included.',
  alternates: {
    canonical: '/',
  },
}

const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], display: 'swap' })
const nunito = Nunito_Sans({ subsets: ['latin'], weight: ['300', '400', '600'], display: 'swap' })

const BOOK_URL = 'https://book.peek.com/s/1a637cc6-17b1-4613-92f1-0258eba85679/j0870'

const faqs = [
  { q: 'What do I need to bring?', a: 'Flip flops, a couple of towels, and some water. You need to sit on a towel in the sauna, and it\'s best to bring an extra one to dry off with.' },
  { q: 'What should I wear?', a: 'A swimsuit. Towels are required for sitting inside the sauna. We ask that everyone sit on their towel to keep the space clean and comfortable for all.' },
  { q: 'How hot does the sauna get?', a: 'The sauna is wood-fired and heated to 80–100°C. The temperature is dialed in for your group\'s comfort and your host can adjust it as needed.' },
  { q: 'What is the cold plunge like?', a: 'It\'s an enclosed ocean water cold plunge tub right alongside the sauna. Bracing, clarifying, and invigorating. Pacific waters at ambient sea temperature. You step in and out at your own pace.' },
  { q: 'Is this experience suitable for beginners?', a: 'Absolutely. There\'s no right or wrong way to do it. You control how long you spend in the sauna, when to cool down, and how many rounds you do. Listen to your body and go at your own pace.' },
  { q: 'Do I need to know how to swim?', a: 'No. The cold plunge is a contained tub, not open water. You do not need to swim.' },
  { q: 'Can kids come?', a: 'Yes, of course! Children are welcome.' },
  { q: 'Is there a birthday special?', a: 'Yes. Book a private session with 7 or more guests and the birthday person gets free entry. Valid ID required, same day only. Call us to arrange.' },
  { q: 'Can I book for a large group or corporate event?', a: 'Yes. Private sessions accommodate groups of any size. For groups of 10 or more, corporate rates are available. Call 250-504-1095 to discuss.' },
  { q: 'Are memberships or punch passes from other Island Sauna locations valid here?', a: 'Unfortunately not. Due to separate ownership between locations, memberships are not interchangeable. Contact us if you\'d like to learn about membership options at the Campbell River floating sauna.' },
  { q: 'Do you offer gift cards?', a: 'Yes, gift cards are available through Island Sauna. A great gift for anyone who loves the outdoors, wellness, or something a little different.' },
  { q: 'What is your cancellation policy?', a: 'Cancellation terms are shown at the time of booking and in your confirmation email via the Peek platform. Please review those details when you book.' },
]

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pacificsauna.ca'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Pacific Sauna & Ocean Plunge',
  description: 'Wood-fired floating sauna at the Coast Marina, Campbell River BC. Social and private sessions with Pacific Ocean cold plunge.',
  url: siteUrl,
  telephone: '+1-250-504-1095',
  email: 'islandmobilesauna@gmail.com',
  image: `${siteUrl}/photos/CR-Sauna_038.jpg`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Coast Marina',
    addressLocality: 'Campbell River',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.0163,
    longitude: -125.2446,
  },
  sameAs: ['https://www.instagram.com/island_floating_sauna_cr'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sauna Sessions',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Social Session',
        description: 'Open sauna session, up to 5 guests, includes ocean cold plunge',
        price: '42.50',
        priceCurrency: 'CAD',
        url: BOOK_URL,
      },
      {
        '@type': 'Offer',
        name: 'Private Session',
        description: 'Exclusive sauna booking for your group, includes ocean cold plunge',
        price: '250.00',
        priceCurrency: 'CAD',
      },
    ],
  },
}

export default function Home() {
  const wisps = Array.from({ length: 10 }, (_, i) => ({
    left: `${8 + i * 9}%`,
    delay: `${(i * 0.6) % 4}s`,
    duration: `${4 + (i * 0.35) % 2}s`,
    w: `${12 + (i * 5) % 16}px`,
    h: `${50 + (i * 10) % 50}px`,
  }))

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

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
          0%, 100% { box-shadow: 0 0 30px 8px rgba(217,112,22,0.35), inset 0 0 40px rgba(200,100,20,0.2); }
          50%       { box-shadow: 0 0 60px 18px rgba(217,112,22,0.5), inset 0 0 60px rgba(200,100,20,0.3); }
        }
        @keyframes driftIn {
          from { opacity: 0; transform: translateY(24px) rotate(-0.5deg); }
          to   { opacity: 1; transform: translateY(0) rotate(0); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.4; }
          50%       { transform: translateX(-50%) translateY(7px); opacity: 0.85; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }

        .hero-h1  { animation: driftIn 1.3s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
        .hero-sub { animation: driftIn 1.1s cubic-bezier(0.16,1,0.3,1) 0.5s both; }
        .hero-cta { animation: driftIn 1.1s cubic-bezier(0.16,1,0.3,1) 0.75s both, warmGlow 4s ease-in-out 2s infinite; }

        .wisp {
          position: absolute;
          border-radius: 50% 50% 40% 60%;
          background: radial-gradient(ellipse, rgba(255,200,120,0.5) 0%, rgba(217,112,22,0.2) 50%, transparent 80%);
          animation: wispRise ease-in-out infinite;
          bottom: 0;
          filter: blur(3px);
        }

        /* Nav */
        .nav-book {
          display: inline-block;
          text-decoration: none;
          background: linear-gradient(135deg, #D97016, #F5A623);
          color: #0C1A32;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 700;
          border-radius: 100px;
          padding: 0.5rem 1.4rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .nav-book:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(217,112,22,0.45);
        }
        .comox-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: rgba(253,246,236,0.4);
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          transition: color 0.2s ease;
        }
        .comox-link:hover { color: rgba(253,246,236,0.7); }
        .comox-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #D97016;
          flex-shrink: 0;
          animation: pulse 2s ease-in-out infinite;
        }

        /* CTA button */
        .book-btn {
          display: inline-block;
          text-decoration: none;
          background: linear-gradient(135deg, #D97016, #F5A623);
          color: #0C1A32;
          border-radius: 50px;
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          padding: 1.1rem 3rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: warmGlow 4s ease-in-out 1s infinite;
        }
        .book-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(217,112,22,0.55);
        }

        /* Section divider */
        .divider {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin: 0 4rem;
        }
        .divider::before, .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(245,166,35,0.15);
        }
        .divider-icon { color: rgba(245,166,35,0.3); font-size: 0.65rem; }

        /* Cards */
        .warm-card {
          background: rgba(253,246,236,0.04);
          border: 1px solid rgba(245,166,35,0.12);
          border-radius: 16px;
          padding: 2.5rem;
          transition: background 0.35s ease, border-color 0.35s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .warm-card:hover {
          background: rgba(253,246,236,0.08);
          border-color: rgba(245,166,35,0.28);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        /* Session pricing */
        .session-card {
          flex: 1;
          border-radius: 20px;
          border: 1px solid rgba(245,166,35,0.18);
          background: rgba(253,246,236,0.03);
          display: flex;
          flex-direction: column;
          padding: 2.5rem 2rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .session-card:hover {
          border-color: rgba(245,166,35,0.35);
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }
        .session-card--featured {
          border-color: rgba(245,166,35,0.4);
          background: rgba(217,112,22,0.07);
          box-shadow: 0 0 0 1px rgba(245,166,35,0.15), 0 20px 50px rgba(0,0,0,0.3);
        }
        .session-cta-outline {
          display: inline-block;
          text-decoration: none;
          color: #F5A623;
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: 1px solid rgba(245,166,35,0.3);
          border-radius: 100px;
          padding: 0.6rem 1.5rem;
          transition: background 0.2s ease, border-color 0.2s ease;
          text-align: center;
        }
        .session-cta-outline:hover {
          background: rgba(245,166,35,0.1);
          border-color: rgba(245,166,35,0.5);
        }
        .session-cta-filled {
          display: inline-block;
          text-decoration: none;
          background: linear-gradient(135deg, #D97016, #F5A623);
          color: #0C1A32;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border-radius: 100px;
          padding: 0.6rem 1.5rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-align: center;
        }
        .session-cta-filled:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(217,112,22,0.4);
        }

        /* Callout cards */
        .callout-card {
          background: rgba(253,246,236,0.03);
          border: 1px solid rgba(245,166,35,0.1);
          border-radius: 16px;
          padding: 1.75rem 2rem;
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
        }
        .callout-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(217,112,22,0.12);
          border: 1px solid rgba(245,166,35,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #F5A623;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Event tags */
        .event-tag {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: rgba(245,166,35,0.07);
          border: 1px solid rgba(245,166,35,0.14);
          border-radius: 100px;
          color: rgba(253,246,236,0.5);
          font-size: 0.78rem;
          margin: 0.2rem;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .event-tag:hover {
          background: rgba(245,166,35,0.14);
          color: #F5A623;
          border-color: rgba(245,166,35,0.32);
        }

        /* Drinks menu */
        .menu-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 1.3rem 2rem;
        }

        /* FAQ */
        .faq-item { border-bottom: 1px solid rgba(245,166,35,0.1); }
        .faq-item summary {
          list-style: none;
          cursor: pointer;
          padding: 1.6rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          color: rgba(253,246,236,0.7);
          transition: color 0.2s ease;
        }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary::after {
          content: '+';
          font-size: 1.25rem;
          color: rgba(245,166,35,0.35);
          flex-shrink: 0;
          font-weight: 300;
          transition: color 0.2s ease;
          line-height: 1;
        }
        .faq-item[open] summary { color: #fdf6ec; }
        .faq-item[open] summary::after { content: '−'; color: #F5A623; }
        .faq-item summary:hover { color: #fdf6ec; }
        .faq-item summary:hover::after { color: rgba(245,166,35,0.7); }
        .faq-body {
          padding: 0 2rem 1.6rem 0;
          color: rgba(253,246,236,0.45);
          line-height: 2;
          font-size: 0.88rem;
          font-weight: 300;
          max-width: 640px;
        }

        /* Scroll indicator */
        .scroll-arrow {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          animation: scrollBounce 2s ease-in-out infinite;
          z-index: 2;
        }
        .scroll-arrow span {
          display: block;
          width: 1px;
          background: rgba(245,166,35,0.35);
        }
        .scroll-arrow svg {
          width: 16px;
          height: 16px;
          color: rgba(245,166,35,0.4);
        }

        /* What to bring list */
        .bring-item {
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(245,166,35,0.07);
        }
        .bring-item:last-child { border-bottom: none; }
        .bring-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #D97016;
          margin-top: 0.55rem;
          flex-shrink: 0;
          opacity: 0.7;
        }

        /* Responsive */
        @media (max-width: 768px) {
          /* Nav */
          .d4-nav { padding: 1rem 1.25rem !important; }
          .comox-link { display: none; }

          /* Universal horizontal padding for all sections */
          section { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
          .d4-section { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
          .divider { margin: 0 1.25rem !important; }

          /* Reduce tall vertical padding on sections */
          .d4-cta { padding-top: 6rem !important; padding-bottom: 6rem !important; }

          /* Grids that need to stack */
          .d4-overview { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .d4-events { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .d4-callouts { grid-template-columns: 1fr !important; }

          /* Photo diptych stacks */
          .d4-photos { grid-template-columns: 1fr !important; height: auto !important; }
          .d4-photos > div { height: 240px; }

          /* Session cards stack + space for floating badge */
          .d4-sessions { flex-direction: column !important; padding-top: 1rem !important; }

          /* Full-width CTAs — easier to tap */
          .book-btn {
            width: 100% !important;
            text-align: center !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .session-cta-outline, .session-cta-filled {
            display: block !important;
            width: 100% !important;
            text-align: center !important;
          }

          /* FAQ inner padding */
          .d4-faq-box { padding-left: 1rem !important; padding-right: 1rem !important; }

          /* Footer stacks vertically */
          .d4-footer {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 2rem 1.25rem !important;
            gap: 1.5rem !important;
          }
          .d4-footer-links {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.6rem !important;
            width: 100% !important;
          }
        }
      `}</style>

      <main style={{ background: '#0C1A32', color: '#fdf6ec', fontFamily: nunito.style.fontFamily, overflowX: 'hidden' }}>

        {/* ── Nav ─────────────────────────────────── */}
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '1.25rem 3rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: 'rgba(10,22,44,0.92)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(245,166,35,0.08)',
        }} className="d4-nav">
          <span style={{ fontFamily: lora.style.fontFamily, fontSize: '1.05rem', color: '#F5A623', letterSpacing: '0.07em' }}>
            Pacific Sauna
          </span>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link href="/comox" className="comox-link">
              <span className="comox-dot" />
              Comox Valley
            </Link>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="nav-book">
              Book Now
            </a>
          </div>
        </nav>

        {/* ── Hero ────────────────────────────────── */}
        <section style={{
          minHeight: '100vh',
          backgroundImage: `url('/photos/CR-Sauna_038.jpg')`,
          backgroundSize: 'cover', backgroundPosition: 'center 45%',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          textAlign: 'center', padding: '8rem 2rem 6rem',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Layered overlays for depth */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,12,28,0.6) 0%, rgba(5,12,28,0.78) 60%, rgba(12,26,50,0.95) 100%)' }} />
          <div style={{
            position: 'absolute', bottom: '-10%', left: '50%', transform: 'translateX(-50%)',
            width: '80%', height: '60%',
            background: 'radial-gradient(ellipse, rgba(217,112,22,0.22) 0%, rgba(140,60,20,0.08) 40%, transparent 70%)',
            filter: 'blur(50px)', pointerEvents: 'none',
            animation: 'emberFlicker 5s ease-in-out infinite',
          }} />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            {wisps.map((w, i) => (
              <div key={i} className="wisp" style={{ left: w.left, width: w.w, height: w.h, animationDuration: w.duration, animationDelay: w.delay }} />
            ))}
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: 'rgba(245,166,35,0.65)', marginBottom: '2.5rem' }}>
              Campbell River · British Columbia
            </p>
            <h1 className="hero-h1" style={{
              fontFamily: lora.style.fontFamily,
              fontSize: 'clamp(3.2rem, 10vw, 9rem)',
              fontWeight: 700, lineHeight: 0.95, color: '#fdf6ec', marginBottom: '0.6rem',
              textShadow: '0 4px 40px rgba(0,0,0,0.5)',
              animation: 'driftIn 1.3s cubic-bezier(0.16,1,0.3,1) 0.2s both, emberFlicker 7s ease-in-out 1.5s infinite',
            }}>
              Pacific Sauna
            </h1>
            <h2 className="hero-sub" style={{
              fontFamily: lora.style.fontFamily,
              fontSize: 'clamp(1.3rem, 3.5vw, 3rem)',
              fontWeight: 400, fontStyle: 'italic', color: '#D97016', marginBottom: '2.5rem', lineHeight: 1.2,
            }}>
              &amp; Ocean Plunge
            </h2>
            <p style={{
              color: 'rgba(253,246,236,0.5)', fontSize: 'clamp(0.88rem, 1.6vw, 1rem)',
              lineHeight: 2, maxWidth: '340px', margin: '0 auto 3.5rem', fontWeight: 300,
            }}>
              Wood-fired sauna floating in the marina.<br />Pacific Ocean cold plunge.<br />Gather, reset, or celebrate.
            </p>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="book-btn hero-cta">
              Reserve Your Session
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-arrow">
            <span style={{ height: '32px' }} />
            <svg viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1 1 8 9 15 1" />
            </svg>
          </div>
        </section>

        {/* ── Overview ──────────────────────────── */}
        <section className="d4-section" style={{ padding: '8rem 4rem', maxWidth: '1100px', margin: '0 auto' }}>
          <div className="d4-overview" style={{ display: 'grid', gridTemplateColumns: '1fr 1.7fr', gap: '7rem', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D97016', marginBottom: '1.25rem', opacity: 0.85 }}>The Experience</p>
              <div style={{ width: '36px', height: '2px', background: 'linear-gradient(to right, #D97016, #F5A623)', borderRadius: '1px', marginBottom: '2rem' }} />
              <p style={{ fontFamily: lora.style.fontFamily, fontSize: '1.3rem', color: 'rgba(245,166,35,0.85)', fontStyle: 'italic', lineHeight: 1.75 }}>
                &ldquo;Warm up, cool down, and come together.&rdquo;
              </p>
            </div>
            <div>
              <h2 style={{
                fontFamily: lora.style.fontFamily,
                fontSize: 'clamp(1.7rem, 3.5vw, 2.8rem)',
                fontWeight: 600, color: '#fdf6ec', lineHeight: 1.2, marginBottom: '1.5rem',
              }}>
                A floating experience designed for deep relaxation and unforgettable moments on the coast.
              </h2>
              <p style={{ color: 'rgba(253,246,236,0.5)', lineHeight: 2.1, fontSize: '0.93rem', fontWeight: 300, marginBottom: '2rem' }}>
                Rooted in Scandinavian tradition and shaped by the wild beauty of the Pacific Northwest,
                Pacific Sauna &amp; Ocean Plunge is a wood-fired floating sauna at the Coast Marina in Campbell River.
                Whether you&apos;re booking a quiet reset or a private gathering, this is a place to slow down, breathe deeply, and reconnect.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a href="tel:2505041095" style={{ color: 'rgba(245,166,35,0.6)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.05em', transition: 'color 0.2s' }}>
                  250-504-1095
                </a>
                <span style={{ color: 'rgba(245,166,35,0.2)' }}>·</span>
                <a href="mailto:islandmobilesauna@gmail.com" style={{ color: 'rgba(245,166,35,0.6)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.05em', transition: 'color 0.2s' }}>
                  islandmobilesauna@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"><span className="divider-icon">✦</span></div>

        {/* ── Experience cards ──────────────────── */}
        <section style={{ padding: '8rem 4rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <h2 style={{
                fontFamily: lora.style.fontFamily,
                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                fontWeight: 700, color: '#fdf6ec', lineHeight: 1.05,
              }}>
                Heat. Cold. Rest. <em style={{ color: '#D97016' }}>Repeat.</em>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {[
                { num: '01', title: 'Wood-Fired Sauna', desc: 'Heated to 80–100°C, dialed to your group. Softens the body and quiets the mind in the Scandinavian tradition. The scent of cedar and eucalyptus fills the air.' },
                { num: '02', title: 'Ocean Cold Plunge', desc: 'An enclosed ocean water cold plunge tub right outside the sauna. Bracing Pacific waters: clarifying, invigorating, and the perfect contrast to the heat.' },
                { num: '03', title: 'Upper Deck', desc: 'Cold drinks, your crew, and views of the surrounding islands. Equal parts lively and laid-back. The perfect place to land between rounds.' },
                { num: '04', title: 'Social & Private', desc: 'Join an open social session and connect with fellow enthusiasts, or book the whole space privately for your group, event, or celebration.' },
              ].map((item) => (
                <div key={item.title} className="warm-card">
                  <span style={{ fontFamily: lora.style.fontFamily, fontSize: '0.7rem', color: 'rgba(245,166,35,0.3)', letterSpacing: '0.2em', display: 'block', marginBottom: '1.5rem' }}>{item.num}</span>
                  <h3 style={{ fontFamily: lora.style.fontFamily, fontSize: '1.1rem', fontWeight: 600, color: '#fdf6ec', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(253,246,236,0.4)', lineHeight: 1.9, fontSize: '0.87rem', fontWeight: 300 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Philosophy ────────────────────────── */}
        <section style={{
          padding: '9rem 4rem',
          background: 'radial-gradient(ellipse at center, rgba(217,112,22,0.18) 0%, transparent 65%)',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, transparent, rgba(245,166,35,0.3))', margin: '0 auto 3rem' }} />
            <p style={{ fontFamily: lora.style.fontFamily, fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontStyle: 'italic', color: 'rgba(253,246,236,0.7)', lineHeight: 1.65 }}>
              &ldquo;The sauna softens the body.<br />The ocean sharpens the mind.<br />
              <span style={{ color: '#D97016' }}>Together, they create a full reset.</span>&rdquo;
            </p>
            <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, rgba(245,166,35,0.3), transparent)', margin: '3rem auto 0' }} />
          </div>
        </section>

        {/* ── Fire Atmosphere ───────────────────── */}
        <section style={{
          height: '65vh', minHeight: '420px',
          backgroundImage: `url('/photos/CR-Sauna_056.jpg')`,
          backgroundSize: 'cover', backgroundPosition: 'center 40%',
          position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(12,26,50,0.5) 0%, rgba(5,12,28,0.5) 100%)' }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(217,112,22,0.18) 0%, transparent 65%)',
            animation: 'emberFlicker 5s ease-in-out infinite',
          }} />
          <p style={{
            position: 'relative', zIndex: 1,
            fontFamily: lora.style.fontFamily,
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            fontStyle: 'italic',
            color: 'rgba(253,246,236,0.75)',
            letterSpacing: '0.03em',
            textAlign: 'center',
            padding: '0 2rem',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          }}>
            The fire has been lit. The ocean is right outside.
          </p>
        </section>

        {/* ── Photo Diptych ─────────────────────── */}
        <section className="d4-photos" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '55vh', minHeight: '380px' }}>
          <div style={{ backgroundImage: `url('/photos/CR-Sauna_003.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,12,28,0.1)' }} />
          </div>
          <div style={{ backgroundImage: `url('/photos/CR-Sauna_061.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,12,28,0.08)' }} />
          </div>
        </section>

        <div className="divider"><span className="divider-icon">✦</span></div>

        {/* ── Sessions & Pricing ────────────────── */}
        <section className="d4-section" style={{ padding: '8rem 4rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <p style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D97016', marginBottom: '1.25rem', opacity: 0.85 }}>Sessions &amp; Pricing</p>
              <h2 style={{
                fontFamily: lora.style.fontFamily,
                fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
                fontWeight: 700, color: '#fdf6ec', lineHeight: 1.1,
              }}>
                Choose your <em style={{ color: '#D97016' }}>session.</em>
              </h2>
            </div>

            <div className="d4-sessions" style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.25rem' }}>

              {/* Social */}
              <div className="session-card">
                <p style={{ fontSize: '0.58rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(217,112,22,0.7)', marginBottom: '2rem' }}>Social Session</p>
                <div style={{ marginBottom: 'auto' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.4rem' }}>
                    <span style={{ fontFamily: lora.style.fontFamily, fontSize: '3.5rem', color: '#F5A623', fontWeight: 700, lineHeight: 1 }}>$42.50</span>
                  </div>
                  <p style={{ color: 'rgba(253,246,236,0.3)', fontSize: '0.72rem', marginBottom: '1.75rem' }}>per person · up to 5 guests</p>
                  <p style={{ color: 'rgba(253,246,236,0.4)', fontSize: '0.85rem', lineHeight: 1.85, fontWeight: 300 }}>
                    Join an open session and connect with other sauna enthusiasts. Perfect for solo visitors, couples, or small groups who want to share the experience.
                  </p>
                </div>
                <div style={{ height: '1px', background: 'rgba(245,166,35,0.1)', margin: '2rem 0' }} />
                <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="session-cta-outline">
                  Book a Social Session
                </a>
              </div>

              {/* Private session - featured */}
              <div className="session-card session-card--featured" style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(135deg, #D97016, #F5A623)',
                  color: '#0C1A32', fontSize: '0.58rem', fontWeight: 700,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  padding: '0.35rem 1.1rem', borderRadius: '100px',
                  whiteSpace: 'nowrap',
                }}>
                  Most Popular
                </div>
                <p style={{ fontSize: '0.58rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(217,112,22,0.85)', marginBottom: '2rem' }}>Private Session</p>
                <div style={{ marginBottom: 'auto' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.1rem' }}>
                    <span style={{ fontFamily: lora.style.fontFamily, fontSize: '3.5rem', color: '#F5A623', fontWeight: 700, lineHeight: 1 }}>$250</span>
                  </div>
                  <p style={{ color: 'rgba(253,246,236,0.3)', fontSize: '0.72rem', marginBottom: '0.3rem' }}>first 2 guests</p>
                  <p style={{ color: 'rgba(217,112,22,0.75)', fontSize: '0.78rem', fontWeight: 600, marginBottom: '1.75rem' }}>+ $30 per additional guest</p>
                  <p style={{ color: 'rgba(253,246,236,0.45)', fontSize: '0.85rem', lineHeight: 1.85, fontWeight: 300 }}>
                    Exclusive use of the entire sauna for your group. Ideal for celebrations, retreats, and gatherings. Recommended for 6 or more people.
                  </p>
                </div>
                <div style={{ height: '1px', background: 'rgba(245,166,35,0.15)', margin: '2rem 0' }} />
                <a href="tel:2505041095" className="session-cta-filled">
                  Call to Book: 250-504-1095
                </a>
              </div>

            </div>

            {/* Birthday & Corporate */}
            <div className="d4-callouts" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="callout-card">
                <div className="callout-icon">★</div>
                <div>
                  <p style={{ fontFamily: lora.style.fontFamily, color: '#F5A623', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem' }}>Birthday Special</p>
                  <p style={{ color: 'rgba(253,246,236,0.4)', fontSize: '0.82rem', lineHeight: 1.75, fontWeight: 300 }}>
                    Book a private session with 7+ guests and the birthday person gets free entry. Valid ID required, same day only.
                  </p>
                </div>
              </div>
              <div className="callout-card">
                <div className="callout-icon">10+</div>
                <div>
                  <p style={{ fontFamily: lora.style.fontFamily, color: '#F5A623', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem' }}>Corporate Rates</p>
                  <p style={{ color: 'rgba(253,246,236,0.4)', fontSize: '0.82rem', lineHeight: 1.75, fontWeight: 300 }}>
                    Discounted rates for groups of 10 or more. Call <a href="tel:2505041095" style={{ color: 'rgba(245,166,35,0.65)', textDecoration: 'none' }}>250-504-1095</a> to discuss.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="divider"><span className="divider-icon">✦</span></div>

        {/* ── Private Events ────────────────────── */}
        <section className="d4-section" style={{ padding: '8rem 4rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="d4-events" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '6rem', alignItems: 'start' }}>
              <div>
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D97016', marginBottom: '1.25rem', opacity: 0.85 }}>Private Events &amp; Groups</p>
                <h2 style={{ fontFamily: lora.style.fontFamily, fontSize: 'clamp(2rem, 4vw, 3.3rem)', fontWeight: 700, color: '#fdf6ec', lineHeight: 1.15, marginBottom: '1.5rem' }}>
                  The upper deck is designed for <em style={{ color: '#D97016' }}>gathering.</em>
                </h2>
                <p style={{ color: 'rgba(253,246,236,0.45)', lineHeight: 2.1, fontSize: '0.92rem', fontWeight: 300, marginBottom: '2.5rem' }}>
                  Host intimate, elevated experiences on the water. This is not just a booking. It is a shared coastal experience your group will talk about long after the embers cool.
                </p>
                <div style={{ flexWrap: 'wrap', display: 'flex', gap: '0.3rem' }}>
                  {['Bachelorettes', 'Stagettes', 'Birthday Gatherings', 'Summer Events', 'Winter Events', 'Wellness Sessions', 'Corporate Retreats', 'Staff Parties', 'Sports Teams'].map((ev) => (
                    <span key={ev} className="event-tag">{ev}</span>
                  ))}
                </div>
              </div>

              {/* What to bring */}
              <div style={{
                background: 'rgba(253,246,236,0.03)',
                border: '1px solid rgba(245,166,35,0.12)',
                borderRadius: '20px', padding: '2.5rem',
              }}>
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#D97016', marginBottom: '1.75rem', opacity: 0.85 }}>What to Bring</p>
                {[
                  'Flip flops',
                  'Swimsuit',
                  'Two towels: one to sit on, one to dry off',
                  'Water to stay hydrated',
                ].map((item) => (
                  <div key={item} className="bring-item">
                    <div className="bring-dot" />
                    <p style={{ color: 'rgba(253,246,236,0.5)', fontSize: '0.88rem', lineHeight: 1.6, fontWeight: 300 }}>{item}</p>
                  </div>
                ))}
                <p style={{ color: 'rgba(253,246,236,0.18)', fontSize: '0.75rem', marginTop: '1.5rem', lineHeight: 1.7 }}>
                  Everything else is taken care of. The warmth, the views, the cold plunge.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"><span className="divider-icon">✦</span></div>

        {/* ── Drinks ────────────────────────────── */}
        <section style={{ padding: '8rem 4rem' }}>
          <div style={{ maxWidth: '560px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D97016', marginBottom: '1.25rem', opacity: 0.85, textAlign: 'center' }}>Drinks &amp; Add-Ons</p>
            <h2 style={{ fontFamily: lora.style.fontFamily, fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#fdf6ec', textAlign: 'center', marginBottom: '0.75rem' }}>
              Simple. Clean. <em style={{ color: '#D97016' }}>Intentional.</em>
            </h2>
            <p style={{ color: 'rgba(253,246,236,0.35)', textAlign: 'center', marginBottom: '3.5rem', fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.9 }}>
              Minimal by design. Chosen to support the experience, not distract from it.
            </p>
            <div style={{ borderRadius: '20px', border: '1px solid rgba(245,166,35,0.1)', overflow: 'hidden' }}>
              {[
                { name: 'Cultured Kombucha', price: '$7.00' },
                { name: 'Glacier Water', price: '$5.00' },
                { name: 'House Red Wine', price: 'Ask your host' },
                { name: 'House White Wine', price: 'Ask your host' },
              ].map((d, i) => (
                <div key={d.name} className="menu-row" style={{ borderBottom: i < 3 ? '1px solid rgba(245,166,35,0.07)' : 'none' }}>
                  <span style={{ color: 'rgba(253,246,236,0.55)', fontSize: '0.9rem', fontWeight: 300 }}>{d.name}</span>
                  <span style={{ fontFamily: lora.style.fontFamily, color: '#F5A623', fontSize: '0.95rem', fontWeight: 600, opacity: d.price.startsWith('A') ? 0.5 : 1 }}>{d.price}</span>
                </div>
              ))}
            </div>
            <p style={{ color: 'rgba(253,246,236,0.18)', fontSize: '0.72rem', textAlign: 'center', marginTop: '1rem' }}>
              Available with private bookings and select sessions only.
            </p>
          </div>
        </section>

        <div className="divider"><span className="divider-icon">✦</span></div>

        {/* ── FAQ ───────────────────────────────── */}
        <section className="d4-section" style={{ padding: '8rem 4rem' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <p style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D97016', marginBottom: '1.25rem', opacity: 0.85 }}>FAQ</p>
              <h2 style={{
                fontFamily: lora.style.fontFamily,
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                fontWeight: 700, color: '#fdf6ec', lineHeight: 1.1,
              }}>
                Common <em style={{ color: '#D97016' }}>questions.</em>
              </h2>
            </div>
            <div className="d4-faq-box" style={{ borderRadius: '20px', border: '1px solid rgba(245,166,35,0.09)', padding: '0 2.5rem', background: 'rgba(253,246,236,0.015)' }}>
              {faqs.map((faq) => (
                <details key={faq.q} className="faq-item">
                  <summary>
                    <span style={{ fontFamily: lora.style.fontFamily, fontSize: '0.97rem', fontWeight: 500 }}>{faq.q}</span>
                  </summary>
                  <p className="faq-body">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────── */}
        <section className="d4-cta" style={{
          padding: '11rem 4rem',
          background: 'radial-gradient(ellipse at center bottom, rgba(217,112,22,0.28) 0%, rgba(15,29,60,0.65) 50%, #0C1A32 100%)',
          textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)',
            width: '100%', height: '70%',
            background: 'radial-gradient(ellipse, rgba(217,112,22,0.12) 0%, transparent 65%)',
            filter: 'blur(60px)', pointerEvents: 'none',
            animation: 'emberFlicker 5s ease-in-out infinite',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.42em', textTransform: 'uppercase', color: '#D97016', marginBottom: '2.5rem', opacity: 0.85 }}>Book Your Session</p>
            <h2 style={{
              fontFamily: lora.style.fontFamily,
              fontSize: 'clamp(2.4rem, 6vw, 5.5rem)',
              fontWeight: 700, color: '#fdf6ec',
              lineHeight: 1, marginBottom: '1.75rem',
            }}>
              Choose your session.<br />
              <em style={{ color: '#D97016' }}>Gather your people.</em>
            </h2>
            <p style={{ color: 'rgba(253,246,236,0.4)', lineHeight: 2, fontWeight: 300, maxWidth: '440px', margin: '0 auto 4rem', fontSize: '0.92rem' }}>
              Whether you are seeking stillness or celebration, Pacific Sauna &amp; Ocean Plunge
              offers a flexible experience for every season of the year.
            </p>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="book-btn">
              Book Your Experience
            </a>
          </div>
        </section>

        {/* ── Footer ─────────────────────────────── */}
        <footer className="d4-footer" style={{
          padding: '3rem 4rem',
          borderTop: '1px solid rgba(245,166,35,0.08)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <div>
            <p style={{ fontFamily: lora.style.fontFamily, color: 'rgba(245,166,35,0.5)', fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '0.4rem' }}>
              Pacific Sauna &amp; Ocean Plunge
            </p>
            <p style={{ color: 'rgba(253,246,236,0.2)', fontSize: '0.72rem', letterSpacing: '0.08em' }}>
              Coast Marina · Campbell River, BC
            </p>
          </div>
          <div className="d4-footer-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="tel:2505041095" style={{ color: 'rgba(253,246,236,0.3)', textDecoration: 'none', fontSize: '0.78rem', transition: 'color 0.2s' }}>
              250-504-1095
            </a>
            <a href="mailto:islandmobilesauna@gmail.com" style={{ color: 'rgba(253,246,236,0.3)', textDecoration: 'none', fontSize: '0.78rem', transition: 'color 0.2s' }}>
              islandmobilesauna@gmail.com
            </a>
            <a href="https://www.instagram.com/island_floating_sauna_cr" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(253,246,236,0.3)', textDecoration: 'none', fontSize: '0.78rem', transition: 'color 0.2s' }}>
              @island_floating_sauna_cr
            </a>
          </div>
        </footer>

      </main>
    </>
  )
}
