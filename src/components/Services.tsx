import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const SERVICIOS = [
    {
        number: '01', tag: 'Diseño Web', title: 'Tu web desde cero, sin compromisos',
        desc: 'Diseñamos tu presencia digital completa: arquitectura de la información, identidad visual, componentes interactivos y código limpio listo para producción. Sin plantillas. Sin atajos.',
        stats: [{ val: '100%', label: 'Personalizado' }, { val: '< 7d', label: 'Entrega estándar' }, { val: '∞', label: 'Revisiones incluidas' }],
        image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1400&q=80&auto=format&fit=crop',
    },
    {
        number: '02', tag: 'IA + Estrategia', title: 'Inteligencia aplicada a tu marca',
        desc: 'Usamos modelos de IA para acelerar la generación de copy, jerarquía visual y estructura de conversión — siempre supervisados por criterio creativo humano para que el resultado se sienta auténtico.',
        stats: [{ val: '×4', label: 'Velocidad vs. tradicional' }, { val: 'Gemini + Claude', label: 'Motor de copy' }, { val: '0', label: 'Plantillas usadas' }],
        image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1400&q=80&auto=format&fit=crop',
    },
    {
        number: '03', tag: 'Optimización', title: 'Una web que no deja de crecer',
        desc: 'Lanzar no es el final. Analizamos el comportamiento de tus visitantes, optimizamos los puntos de mayor impacto y evolucionamos tu página para que siga convirtiendo mes a mes.',
        stats: [{ val: '+180%', label: 'Conversión a leads' }, { val: 'CRO', label: 'Metodología' }, { val: 'Mensual', label: 'Reporte' }],
        image: 'https://plus.unsplash.com/premium_photo-1681586533774-1d9d42425712?q=80&w=977&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

export default function Services() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    // Refs separados: BG (no escala, siempre full-viewport) y contenido (animable)
    const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;
        const totalCards = SERVICIOS.length;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: wrapper,
                start: 'top top',
                // 'bottom top' = cuando el wrapper sale del viewport por arriba
                // Con wrapper de N*100dvh esto da exactamente 100dvh de sticky a la última card
                end: 'bottom top',
                scrub: 1.2,
                onUpdate(self) {
                    // totalProgress: 0 → N-1, termina en los primeros (N-1)/N del scroll
                    const totalProgress = Math.min(self.progress * totalCards, totalCards - 1);

                    SERVICIOS.forEach((_, i) => {
                        const bg = bgRefs.current[i];
                        const content = contentRefs.current[i];
                        if (!bg || !content) return;

                        const p = Math.max(0, Math.min(1, totalProgress - i));

                        if (i < totalCards - 1) {
                            // BG: sólo opacity + blur, SIN scale → siempre cubre el full viewport
                            gsap.set(bg, {
                                opacity: 1 - p * 0.75,
                                filter: `blur(${p * 6}px)`,
                            });
                            // Contenido: scale + blur para el efecto de "retroceso"
                            gsap.set(content, {
                                scale: 1 - p * 0.06,
                                opacity: 1 - p * 0.7,
                                filter: `blur(${p * 6}px)`,
                            });
                        }
                    });
                },
            });
        }, wrapper);

        return () => ctx.revert();
    }, []);

    return (
        <section id="servicios">
            <div style={{ background: 'var(--bg-deep)', padding: '120px 24px 80px', textAlign: 'center', transition: 'background 0.8s ease' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16, transition: 'color 0.6s ease' }}>Servicios</p>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>Lo que construimos contigo</h2>
            </div>

            {/* Wrapper: N×100dvh — con end:'bottom top' la última card tiene 100dvh propios */}
            <div
                ref={wrapperRef}
                style={{ position: 'relative', height: `${SERVICIOS.length * 100}dvh`, background: 'var(--bg-deep)' }}
            >
                {SERVICIOS.map((svc, i) => (
                    <div
                        key={svc.number}
                        style={{
                            position: 'sticky',
                            top: 0,
                            height: '100dvh',
                            width: '100%',
                            overflow: 'hidden',
                            zIndex: i + 1,
                            background: 'var(--bg-deep)',
                        }}
                    >
                        {/* ── CAPA DE FONDO ──────────────────────────────────────────
                            Directamente en el sticky container, SIN ningún wrapper extra.
                            GSAP solo aplica opacity/blur, NUNCA scale → siempre 100vw × 100dvh.
                        ────────────────────────────────────────────────────────────── */}
                        <div
                            ref={el => { bgRefs.current[i] = el; }}
                            style={{ position: 'absolute', inset: 0 }}
                        >
                            <div style={{
                                position: 'absolute', inset: 0,
                                backgroundImage: `url("${svc.image}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                filter: 'brightness(0.18) saturate(0.3)',
                            }} />
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'linear-gradient(135deg, color-mix(in srgb, var(--bg-deep) 93%, transparent) 45%, color-mix(in srgb, var(--bg-deep) 55%, transparent) 100%)',
                                transition: 'background 0.8s ease',
                            }} />
                        </div>

                        {/* ── CAPA DE CONTENIDO ──────────────────────────────────────
                            Animada por GSAP (scale + opacity + blur).
                            Separada del fondo para que el scale no limite la cobertura del BG.
                        ────────────────────────────────────────────────────────────── */}
                        <div
                            ref={el => { contentRefs.current[i] = el; }}
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                maxWidth: 1280,
                                margin: '0 auto',
                                padding: '0 24px',
                            }}
                        >
                            <div className="services-inner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', width: '100%' }}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                                        <span style={{ fontFamily: 'var(--font-serif)', fontSize: 64, fontWeight: 800, color: 'color-mix(in srgb, var(--gold) 12%, transparent)', lineHeight: 1, transition: 'color 0.6s ease' }}>{svc.number}</span>
                                        <div style={{ height: 1, flex: 1, background: 'color-mix(in srgb, var(--gold) 20%, transparent)', transition: 'background 0.6s ease' }} />
                                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, transition: 'color 0.6s ease' }}>{svc.tag}</span>
                                    </div>
                                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>{svc.title}</h3>
                                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'rgba(255,255,255,0.52)', lineHeight: 1.8, marginBottom: 48 }}>{svc.desc}</p>
                                    <a href="#planes" className="btn-weighted btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 36px', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid var(--gold)', textDecoration: 'none', transition: 'border-color 0.6s ease, color 0.6s ease' }}>
                                        Saber más
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 6h9M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </a>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    {svc.stats.map(({ val, label }) => (
                                        <div key={label} className="glass" style={{ padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em' }}>{label}</span>
                                            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 700, color: 'var(--gold)', transition: 'color 0.6s ease' }}>{val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
