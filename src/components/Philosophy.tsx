import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const COMPARACIONES = [
    { izq: 'Plantillas de WordPress', der: 'Identidad visual propia' },
    { izq: 'Diseño genérico de agencia', der: 'Estrategia hecha a medida' },
    { izq: 'Meses de espera y revisiones', der: 'Entrega en menos de 7 días' },
    { izq: 'Páginas que se ven iguales', der: 'Una web que solo es tuya' },
];

export default function Philosophy() {
    const sectionRef = useRef<HTMLElement>(null);
    const parallaxRef = useRef<HTMLDivElement>(null);
    const rowRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (parallaxRef.current && sectionRef.current) {
                gsap.to(parallaxRef.current, { y: '12%', ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 } });
            }
            rowRefs.current.forEach((row, i) => {
                if (!row) return;
                gsap.fromTo([row.querySelector('.phil-left'), row.querySelector('.phil-vs'), row.querySelector('.phil-right')],
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: row, start: 'top 80%' }, delay: i * 0.05 }
                );
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="filosofía" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-deeper)', padding: '140px 0', transition: 'background 0.8s ease' }}>
            {/* Parallax texture */}
            <div ref={parallaxRef} style={{ position: 'absolute', inset: '-10%', opacity: 0.35, backgroundImage: `url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=70&auto=format&fit=crop")`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.25) saturate(0.15) grayscale(0.6)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--bg-deeper) 0%, rgba(0,0,0,0.35) 50%, var(--bg-deeper) 100%)', transition: 'background 0.8s ease' }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: 96 }}>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16, transition: 'color 0.6s ease' }}>El Manifiesto</p>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4.5vw, 58px)', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
                        La diferencia es <em style={{ color: 'var(--gold)', fontStyle: 'italic', transition: 'color 0.6s ease' }}>todo</em>
                    </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {COMPARACIONES.map(({ izq, der }, i) => (
                        <div key={i} ref={el => { if (el) rowRefs.current[i] = el; }} className="philosophy-row" style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', alignItems: 'center', padding: '32px 0', borderBottom: i < COMPARACIONES.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                            <div className="phil-left" style={{ textAlign: 'right', paddingRight: 32 }}>
                                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px, 2.5vw, 34px)', fontWeight: 500, color: 'rgba(255,255,255,0.16)', fontStyle: 'italic', textDecoration: 'line-through', textDecorationColor: 'rgba(255,255,255,0.07)' }}>{izq}</span>
                            </div>
                            <div className="phil-vs" style={{ textAlign: 'center' }}>
                                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, border: '1px solid color-mix(in srgb, var(--gold) 30%, transparent)', borderRadius: 4, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', color: 'var(--gold)', transition: 'color 0.6s ease, border-color 0.6s ease' }}>VS</div>
                            </div>
                            <div className="phil-right" style={{ paddingLeft: 32 }}>
                                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px, 2.5vw, 34px)', fontWeight: 700, color: '#fff' }}>{der}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: 96, maxWidth: 680, margin: '96px auto 0' }}>
                    <div style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, transparent, var(--gold))', margin: '0 auto 32px', transition: 'background 0.6s ease' }} />
                    <blockquote style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>
                        "Tu web no es un folleto digital.<br />Es tu argumento de venta más <span style={{ color: 'var(--gold)', transition: 'color 0.6s ease' }}>poderoso.</span>"
                    </blockquote>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginTop: 24 }}>— PortRox · Principios de Diseño</p>
                </div>
            </div>
        </section>
    );
}
