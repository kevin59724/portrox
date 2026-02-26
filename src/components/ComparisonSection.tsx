import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Mockup: Web genérica ──────────────────────────────────── */
function GenericMockup() {
    return (
        <div style={{
            width: '100%',
            background: '#f5f5f5',
            borderRadius: 8,
            overflow: 'hidden',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        }}>
            {/* Browser chrome */}
            <div style={{ background: '#e0e0e0', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
                <div style={{ flex: 1, background: '#fff', borderRadius: 4, padding: '3px 10px', marginLeft: 8, fontSize: 10, color: '#999' }}>
                    mipaginagenericaai.com
                </div>
            </div>

            {/* Navbar genérica */}
            <div style={{ background: '#1a56db', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>MiEmpresa™</span>
                <div style={{ display: 'flex', gap: 16 }}>
                    {['Inicio', 'Servicios', 'Contacto'].map(l => (
                        <span key={l} style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11 }}>{l}</span>
                    ))}
                </div>
            </div>

            {/* Hero genérico */}
            <div style={{
                background: 'linear-gradient(135deg, #1a56db 0%, #7c3aed 100%)',
                padding: '32px 20px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Stock photo backdrop */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=60")',
                    backgroundSize: 'cover',
                    opacity: 0.15,
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 10, marginBottom: 6, letterSpacing: 2, textTransform: 'uppercase' }}>Bienvenido a</p>
                    <h2 style={{ color: '#fff', fontSize: 22, fontWeight: 900, marginBottom: 8, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                        Tu Solución Digital<br />Para el Futuro 🚀
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11, marginBottom: 16, lineHeight: 1.5 }}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.<br />Sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
                        <button style={{ background: '#facc15', color: '#000', border: 'none', padding: '8px 20px', borderRadius: 20, fontWeight: 700, fontSize: 11, cursor: 'pointer' }}>
                            ¡Contáctanos YA! 👆
                        </button>
                        <button style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.5)', padding: '8px 16px', borderRadius: 20, fontSize: 11 }}>
                            Saber más
                        </button>
                    </div>
                </div>
            </div>

            {/* Features genéricas */}
            <div style={{ background: '#fff', padding: '16px 20px' }}>
                <h3 style={{ textAlign: 'center', fontSize: 13, color: '#333', fontWeight: 700, marginBottom: 12 }}>¿Por qué elegirnos?</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                    {[
                        { icon: '⭐', label: 'Calidad' },
                        { icon: '⚡', label: 'Rapidez' },
                        { icon: '💰', label: 'Precio' },
                    ].map(({ icon, label }) => (
                        <div key={label} style={{ textAlign: 'center', padding: '10px 6px', border: '1px solid #e5e7eb', borderRadius: 6 }}>
                            <div style={{ fontSize: 20, marginBottom: 4 }}>{icon}</div>
                            <div style={{ fontSize: 10, color: '#6b7280', fontWeight: 600 }}>{label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer genérico */}
            <div style={{ background: '#374151', padding: '10px 20px', textAlign: 'center' }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9 }}>© 2025 MiEmpresa™ | Diseñado con IA gratis | Todos los derechos reservados</p>
            </div>
        </div>
    );
}

/* ── Mockup: Web PortRox ────────────────────────────────────── */
function PortroxMockup() {
    return (
        <div style={{
            width: '100%',
            background: 'var(--bg-deep)',
            borderRadius: 8,
            overflow: 'hidden',
            boxShadow: '0 20px 80px var(--gold-glow), 0 0 0 1px var(--gold-dim)',
            transition: 'background 0.8s ease, box-shadow 0.6s ease',
        }}>
            {/* Browser chrome */}
            <div style={{ background: '#1a1a1a', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
                <div style={{ flex: 1, background: '#0d0d0d', border: '1px solid color-mix(in srgb, var(--gold) 20%, transparent)', borderRadius: 4, padding: '3px 10px', marginLeft: 8, fontSize: 10, color: 'var(--gold)', transition: 'color 0.6s ease, border-color 0.6s ease' }}>
                    tuclientefeliz.com
                </div>
            </div>

            {/* Navbar premium */}
            <div style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid color-mix(in srgb, var(--gold) 15%, transparent)', backdropFilter: 'blur(12px)', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'border-color 0.6s ease' }}>
                <span style={{ color: '#fff', fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 14, letterSpacing: '0.05em' }}>Marca</span>
                <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                    {['Servicios', 'Portafolio'].map(l => (
                        <span key={l} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{l}</span>
                    ))}
                    <span style={{ color: 'var(--gold)', fontSize: 10, letterSpacing: '0.1em', border: '1px solid var(--gold)', padding: '4px 12px', borderRadius: 4, transition: 'color 0.6s ease, border-color 0.6s ease' }}>Contacto</span>
                </div>
            </div>

            {/* Hero premium */}
            <div style={{
                position: 'relative',
                padding: '28px 20px 24px',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=70")',
                    backgroundSize: 'cover',
                    filter: 'brightness(0.12) saturate(0.4)',
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.5), rgba(10,10,10,0.95))' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <p style={{ color: 'var(--gold)', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 10, transition: 'color 0.6s ease' }}>Estudio de Diseño Creativo</p>
                    <h2 style={{ color: '#fff', fontSize: 20, fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: 1.2, marginBottom: 10 }}>
                        Hecho para que<br /><em style={{ color: 'var(--gold)', transition: 'color 0.6s ease' }}>te recuerden.</em>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10, lineHeight: 1.6, marginBottom: 18, maxWidth: 280 }}>
                        Identidad visual que comunica tu valor real — sin plantillas, sin compromisos.
                    </p>
                    <div style={{ display: 'flex', gap: 8 }}>
                        <button style={{ background: 'transparent', color: 'var(--gold)', border: '1px solid var(--gold)', padding: '7px 18px', borderRadius: 4, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'color 0.6s ease, border-color 0.6s ease' }}>Ver trabajo</button>
                        <button style={{ background: 'transparent', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '7px 14px', borderRadius: 4, fontSize: 10 }}>Proceso</button>
                    </div>
                </div>
            </div>

            {/* Stats row */}
            <div style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                {[
                    { val: '< 7d', label: 'Entrega' },
                    { val: '100%', label: 'A medida' },
                    { val: '+180%', label: 'Conversión' },
                ].map(({ val, label }) => (
                    <div key={label} style={{ padding: '10px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-serif)', fontSize: 14, fontWeight: 700, transition: 'color 0.6s ease' }}>{val}</div>
                        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>{label}</div>
                    </div>
                ))}
            </div>

            {/* Footer premium */}
            <div style={{ background: 'var(--bg-deeper)', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background 0.8s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 6px var(--gold-glow)', transition: 'background 0.6s ease' }} />
                    <span style={{ color: 'var(--gold)', fontSize: 9, letterSpacing: '0.1em', transition: 'color 0.6s ease' }}>Disponible</span>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 9 }}>© 2025 Marca · PortRox</span>
            </div>
        </div>
    );
}

/* ── Sección principal ────────────────────────────────────── */
export default function ComparisonSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const genericRef = useRef<HTMLDivElement>(null);
    const portroxRef = useRef<HTMLDivElement>(null);
    const stampRef = useRef<HTMLDivElement>(null);
    const labelLeftRef = useRef<HTMLDivElement>(null);
    const labelRightRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ── Estado inicial ────────────────────────────────────
            gsap.set(genericRef.current, { x: 0, rotation: 0, opacity: 0, scale: 0.95 });
            gsap.set(portroxRef.current, { x: 0, scale: 0.95, opacity: 0 });
            gsap.set(stampRef.current, { opacity: 0, scale: 2.5, rotation: -20 });
            gsap.set(labelLeftRef.current, { opacity: 0, y: 10 });
            gsap.set(labelRightRef.current, { opacity: 0, y: 10 });
            gsap.set(glowRef.current, { opacity: 0 });

            // ── Loop de rechazo (se lanza después de la entrada) ──
            const startLoop = () => {
                const loop = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });

                // A. Reset instantáneo al estado inicial de la genérica
                loop.set(genericRef.current, { x: 0, rotation: 0, opacity: 0, scale: 0.9 });
                loop.set(stampRef.current, { opacity: 0, scale: 2.5, rotation: -20 });

                // B. La tarjeta genérica entra deslizándose desde la derecha
                loop.to(genericRef.current, {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    duration: 0.55,
                    ease: 'power2.out',
                });

                // C. Pausa — la audiencia la "ve"
                loop.to({}, { duration: 0.6 });

                // D. Sello RECHAZADO estampa
                loop.to(stampRef.current, {
                    opacity: 1,
                    scale: 1,
                    rotation: -12,
                    duration: 0.4,
                    ease: 'back.out(2.5)',
                });

                // E. Pausa dramática con sello visible
                loop.to({}, { duration: 0.7 });

                // F. La tarjeta VUELA a la izquierda con rotación y rebote
                loop.to(genericRef.current, {
                    x: '-140%',
                    rotation: -22,
                    opacity: 0,
                    scale: 0.75,
                    duration: 0.65,
                    ease: 'power3.in',
                });

                // G. Breve pausa antes del siguiente ciclo
                loop.to({}, { duration: 0.5 });

                return loop;
            };

            // ── Entrada inicial disparada por ScrollTrigger (1 vez) ──
            const entrance = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                    once: true,           // solo se dispara una vez
                },
                onComplete: () => { startLoop(); },    // al terminar la entrada, arranca el loop
            });

            // 1. Tarjeta PortRox aparece
            entrance.to(portroxRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: 'power2.out',
            });

            // 2. Labels aparecen
            entrance.to([labelLeftRef.current, labelRightRef.current], {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.1,
            }, '-=0.3');

            // 3. Glow dorado de PortRox
            entrance.to(glowRef.current, {
                opacity: 1,
                duration: 0.7,
                ease: 'power2.out',
            }, '-=0.4');

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="comparacion"
            style={{
                background: 'linear-gradient(to bottom, var(--bg-deeper), var(--bg-deep))',
                padding: 'clamp(72px, 10vw, 140px) 0',
                overflow: 'hidden',
                position: 'relative',
                transition: 'background 0.8s ease',
            }}
        >
            {/* Fondo decorativo */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                height: 600,
                borderRadius: '50%',
                background: 'radial-gradient(circle, color-mix(in srgb, var(--gold) 4%, transparent) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 80 }}>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16, transition: 'color 0.6s ease' }}>
                        La Diferencia Visual
                    </p>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(34px, 5vw, 62px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
                        Lo genérico se nota.<br />
                        <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'rgba(255,255,255,0.55)' }}>Y te cuesta clientes.</em>
                    </h2>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 480, margin: '0 auto' }}>
                        Desliza hacia abajo y observa la diferencia en tiempo real.
                    </p>
                </div>

                {/* Área de comparación */}
                <div className="comparison-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 32,
                    alignItems: 'start',
                    maxWidth: 960,
                    margin: '0 auto',
                    position: 'relative',
                }}>

                    {/* ─── Tarjeta GENÉRICA ─── */}
                    <div style={{ position: 'relative' }}>
                        {/* Label */}
                        <div
                            ref={labelLeftRef}
                            style={{
                                textAlign: 'center',
                                marginBottom: 16,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 8,
                            }}
                        >
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444' }} />
                            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', fontWeight: 600 }}>
                                Plantilla IA genérica
                            </span>
                        </div>

                        {/* Tarjeta con sello */}
                        <div ref={genericRef} style={{ position: 'relative' }}>
                            <GenericMockup />

                            {/* Sello RECHAZADO */}
                            <div
                                ref={stampRef}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%) rotate(-12deg)',
                                    zIndex: 10,
                                    pointerEvents: 'none',
                                }}
                            >
                                <div style={{
                                    border: '4px solid #ef4444',
                                    borderRadius: 8,
                                    padding: '10px 24px',
                                    textAlign: 'center',
                                    background: 'rgba(10,10,10,0.6)',
                                    backdropFilter: 'blur(4px)',
                                    boxShadow: '0 0 40px rgba(239,68,68,0.4), inset 0 0 20px rgba(239,68,68,0.08)',
                                }}>
                                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 22, fontWeight: 900, letterSpacing: '0.12em', color: '#ef4444', textTransform: 'uppercase', lineHeight: 1 }}>
                                        RECHAZADO
                                    </div>
                                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, color: 'rgba(239,68,68,0.7)', letterSpacing: '0.2em', marginTop: 4 }}>
                                        GENERIC · TEMPLATE · AI
                                    </div>
                                </div>
                            </div>

                            {/* Overlay rojo semitransparente */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    borderRadius: 8,
                                    background: 'rgba(239,68,68,0.06)',
                                    border: '2px solid rgba(239,68,68,0.3)',
                                    pointerEvents: 'none',
                                    zIndex: 9,
                                }}
                            />
                        </div>

                        {/* Defectos listados */}
                        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {[
                                'Plantilla de uso masivo',
                                'Sin identidad de marca',
                                'Copy genérico (lorem ipsum)',
                                'Colores sin estrategia',
                                'Estructura predecible',
                            ].map(d => (
                                <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                                        <circle cx="7" cy="7" r="6" stroke="#ef4444" strokeWidth="1.2" />
                                        <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(255,255,255,0.35)', textDecoration: 'line-through', textDecorationColor: 'rgba(239,68,68,0.4)' }}>{d}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ─── Tarjeta PORTROX ─── */}
                    <div style={{ position: 'relative' }}>
                        {/* Label */}
                        <div
                            ref={labelRightRef}
                            style={{
                                textAlign: 'center',
                                marginBottom: 16,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 8,
                            }}
                        >
                            <div className="pulse-dot" style={{ width: 8, height: 8 }} />
                            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, transition: 'color 0.6s ease' }}>
                                Diseño PortRox
                            </span>
                        </div>

                        <div ref={portroxRef} style={{ position: 'relative' }}>
                            <PortroxMockup />

                            {/* Overlay dorado sutil */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                borderRadius: 8,
                                border: '2px solid color-mix(in srgb, var(--gold) 40%, transparent)',
                                pointerEvents: 'none',
                                zIndex: 9,
                            }} />
                        </div>

                        {/* Glow dorado de fondo */}
                        <div ref={glowRef} style={{
                            position: 'absolute',
                            inset: -20,
                            borderRadius: 16,
                            background: 'radial-gradient(ellipse at center, color-mix(in srgb, var(--gold) 10%, transparent) 0%, transparent 70%)',
                            zIndex: -1,
                            pointerEvents: 'none',
                        }} />

                        {/* Beneficios listados */}
                        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {[
                                'Identidad visual exclusiva',
                                'Estrategia de marca integrada',
                                'Copy real y persuasivo',
                                'Paleta y tipografía con propósito',
                                'Estructura orientada a conversión',
                            ].map(b => (
                                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                                        <circle cx="7" cy="7" r="6" stroke="var(--gold)" strokeWidth="1.2" />
                                        <path d="M4 7.2l2.2 2.2L10 5" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA inferior */}
                <div style={{ textAlign: 'center', marginTop: 80 }}>
                    <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, color-mix(in srgb, var(--gold) 50%, transparent))', margin: '0 auto 32px', transition: 'background 0.6s ease' }} />
                    <a
                        href="#planes"
                        className="btn-weighted btn-gold"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 12,
                            padding: '18px 48px',
                            fontFamily: 'var(--font-sans)',
                            fontSize: 13,
                            fontWeight: 700,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'var(--gold)',
                            border: '1px solid var(--gold)',
                            transition: 'color 0.6s ease, border-color 0.6s ease',
                            textDecoration: 'none',
                        }}
                    >
                        Quiero una web que destaque
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
