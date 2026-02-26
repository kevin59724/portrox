import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const eyebrowRef = useRef<HTMLParagraphElement>(null);
    const headRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([eyebrowRef.current, headRef.current, subRef.current, ctaRef.current, badgeRef.current], { opacity: 0, y: 48 });
            gsap.to([eyebrowRef.current, headRef.current, subRef.current, ctaRef.current, badgeRef.current], {
                opacity: 1, y: 0, duration: 1.5, stagger: 0.18, ease: 'power3.out', delay: 0.3,
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="hero" ref={containerRef} style={{
            position: 'relative',
            minHeight: '100dvh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            paddingTop: 80,      /* respeta el navbar fijo */
            paddingBottom: 40,
        }}>
            {/* BG image */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1920&q=85&auto=format&fit=crop")`, backgroundSize: 'cover', backgroundPosition: 'center 35%', filter: 'brightness(0.3) saturate(0.5)' }} />
            {/* Gradient overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, color-mix(in srgb, var(--bg-deep) 50%, transparent) 0%, transparent 40%, color-mix(in srgb, var(--bg-deep) 88%, transparent) 90%, var(--bg-deep) 100%)', transition: 'background 0.8s ease' }} />

            {/* ── Contenido — todo en flujo normal, sin posición absoluta ── */}
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 920, padding: '0 24px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* Línea decorativa superior — en flujo, no absoluta */}
                <div style={{ width: 1, height: 64, background: 'linear-gradient(to bottom, transparent, var(--gold))', marginBottom: 28, flexShrink: 0, transition: 'background 0.6s ease' }} />

                <p ref={eyebrowRef} style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 28, transition: 'color 0.6s ease' }}>
                    Diseño Web con IA · Identidades que no se olvidan
                </p>

                <h1 ref={headRef} className="gradient-text" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(42px, 7.5vw, 108px)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.02em', marginBottom: 28 }}>
                    Tu web no debería<br />
                    <em style={{ fontStyle: 'italic', fontWeight: 400 }}>verse genérica.</em>
                </h1>

                <p ref={subRef} style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(14px, 1.8vw, 18px)', fontWeight: 300, color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 44px' }}>
                    Creamos páginas que comunican quién eres con la precisión del diseño
                    y la velocidad de la inteligencia artificial — únicas, estratégicas y listas para convertir.
                </p>

                <div ref={ctaRef} style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
                    <a href="#planes" className="btn-weighted btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 40px', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid var(--gold)', textDecoration: 'none', transition: 'border-color 0.6s ease, color 0.6s ease' }}>
                        Ver Planes
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                    <a href="#filosofía" className="btn-weighted btn-white-sweep" style={{ display: 'inline-flex', alignItems: 'center', padding: '16px 40px', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)', textDecoration: 'none' }}>
                        Nuestro Enfoque
                    </a>
                </div>

                {/* Stats */}
                <div ref={badgeRef} style={{ display: 'flex', gap: 48, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
                    {[
                        { val: '< 7 días', label: 'Entrega promedio' },
                        { val: '100%', label: 'Diseño a medida' },
                        { val: '∞', label: 'Sin plantillas' },
                    ].map(({ val, label }) => (
                        <div key={label} style={{ textAlign: 'center' }}>
                            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--gold)', transition: 'color 0.6s ease' }}>{val}</div>
                            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{label}</div>
                        </div>
                    ))}
                </div>

                {/* Scroll indicator — en flujo, separado por margen de los stats */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Explorar</span>
                    <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, color-mix(in srgb, var(--gold) 70%, transparent), transparent)', transition: 'background 0.6s ease' }} />
                </div>

            </div>
        </section>
    );
}
