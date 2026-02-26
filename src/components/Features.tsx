import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/* ── Card 1: Proyectos ────────────────────────────────────── */
const PROYECTOS = [
    { cliente: 'Estudio Luma', tipo: 'Agencia creativa', delta: '↑ 340% tráfico', dias: '5 días' },
    { cliente: 'Nexo Capital', tipo: 'Finanzas B2B', delta: '↑ 210% leads', dias: '6 días' },
    { cliente: 'Mara Skincare', tipo: 'E-commerce', delta: '↑ 180% conversión', dias: '7 días' },
];

function DataShuffler() {
    const [cards, setCards] = useState(PROYECTOS);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const iv = setInterval(() => {
            const el = containerRef.current?.children;
            if (!el || el.length === 0) return;
            const outEl = el[el.length - 1] as HTMLElement;
            gsap.to(outEl, {
                y: -20, opacity: 0, duration: 0.5, ease: 'power2.in', onComplete: () => {
                    setCards(prev => { const n = [...prev]; n.unshift(n.pop()!); return n; });
                    gsap.set(outEl, { y: 0, opacity: 1 });
                }
            });
        }, 4000);
        return () => clearInterval(iv);
    }, []);

    return (
        <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', gap: 8, minHeight: 210 }}>
            {cards.map((c, i) => (
                <div key={c.cliente} style={{
                    padding: '14px 18px',
                    background: i === 0 ? 'color-mix(in srgb, var(--gold) 8%, transparent)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${i === 0 ? 'color-mix(in srgb, var(--gold) 30%, transparent)' : 'rgba(255,255,255,0.06)'}`,
                    borderRadius: 4,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    transform: `scale(${1 - i * 0.015})`, transformOrigin: 'top center',
                    opacity: 1 - i * 0.2, transition: 'all 0.5s ease, background 0.6s ease, border-color 0.6s ease',
                }}>
                    <div>
                        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 4 }}>{c.tipo}</div>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 700, color: '#fff' }}>{c.cliente}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--gold)', fontWeight: 600, transition: 'color 0.6s ease' }}>{c.delta}</div>
                        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>{c.dias}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

/* ── Card 2: Terminal ─────────────────────────────────────── */
const TERMINAL_LINES = [
    '> INIT: analizando brief del cliente...',
    '> AI: generando arquitectura visual',
    '> PALETTE: extrayendo identidad de marca',
    '> LAYOUT: estructurando jerarquía de contenido',
    '> COPY: adaptando tono y voz de marca',
    '> COMPONENTS: construyendo sistema de diseño',
    '> REVIEW: validando coherencia visual',
    '> RESPONSIVE: optimizando para móvil',
    '> SEO: estructurando metadatos y semántica',
    '> DEPLOY: lista para entregar ✓',
];

function LiveTerminal() {
    const [lines, setLines] = useState<string[]>([]);
    const [lineIdx, setLineIdx] = useState(0);
    const termRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (lineIdx >= TERMINAL_LINES.length) {
            const r = setTimeout(() => { setLines([]); setLineIdx(0); }, 3000);
            return () => clearTimeout(r);
        }
        const t = setTimeout(() => {
            setLines(prev => [...prev, TERMINAL_LINES[lineIdx]].slice(-6));
            setLineIdx(i => i + 1);
        }, 700 + Math.random() * 350);
        return () => clearTimeout(t);
    }, [lineIdx]);

    useEffect(() => { if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight; }, [lines]);

    return (
        <div ref={termRef} style={{ height: 210, overflowY: 'auto', scrollbarWidth: 'none', padding: '4px 0' }}>
            {lines.map((l, i) => <p key={i} className="terminal-line" style={{ marginBottom: 2, opacity: 1 - (lines.length - 1 - i) * 0.12 }}>{l}</p>)}
            <span className="terminal-line blink">█</span>
        </div>
    );
}

/* ── Card 3: Calendario ───────────────────────────────────── */
const DIAS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
const ETAPAS = ['Brief', 'Diseño', 'Review', 'Deploy'];

function Scheduler() {
    const [activeDay, setActiveDay] = useState(-1);
    const [activeHour, setActiveHour] = useState(-1);
    useEffect(() => {
        const step = () => {
            const d = Math.floor(Math.random() * DIAS.length);
            const h = Math.floor(Math.random() * ETAPAS.length);
            setActiveDay(d); setActiveHour(h);
            setTimeout(() => { setActiveDay(-1); setActiveHour(-1); }, 2200);
        };
        step();
        const iv = setInterval(step, 4800);
        return () => clearInterval(iv);
    }, []);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '52px repeat(7, 1fr)', gap: 4 }}>
                <div />
                {DIAS.map((d, i) => (
                    <div key={d} style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.05em', textTransform: 'uppercase', color: i === activeDay ? 'var(--gold)' : 'rgba(255,255,255,0.3)', textAlign: 'center', fontWeight: 600, transition: 'color 0.6s ease' }}>{d}</div>
                ))}
            </div>
            {ETAPAS.map((etapa, hi) => (
                <div key={etapa} style={{ display: 'grid', gridTemplateColumns: '52px repeat(7, 1fr)', gap: 4 }}>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, color: 'rgba(255,255,255,0.28)', display: 'flex', alignItems: 'center' }}>{etapa}</div>
                    {DIAS.map((_, di) => {
                        const isActive = di === activeDay && hi === activeHour;
                        return (
                            <div key={di} className="day-cell" style={{ height: 36, background: isActive ? 'var(--gold-dim)' : 'rgba(255,255,255,0.03)', borderColor: isActive ? 'var(--gold)' : 'rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
                                {isActive && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--gold-dim), transparent)' }} />}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

/* ── Sección principal ────────────────────────────────────── */
export default function Features() {
    const cards = [
        { id: 'proyectos', tag: 'Resultados Reales', title: 'Impacto medible desde el día 1', desc: 'Cada página que construimos está diseñada para generar resultados concretos — más tráfico, más conversiones, más presencia.', component: <DataShuffler /> },
        {
            id: 'ia', tag: 'Motor IA en Vivo', title: 'Diseño acelerado por IA', desc: 'Nuestro flujo combina inteligencia artificial y criterio creativo humano para entregar páginas únicas en días, no en meses.',
            component: (
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                        <div className="pulse-dot" />
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, transition: 'color 0.6s ease' }}>Procesando</span>
                    </div>
                    <LiveTerminal />
                </div>
            )
        },
        { id: 'entrega', tag: 'Proceso Ágil', title: 'De brief a publicado', desc: 'Un proceso claro, sin sorpresas. Cuatro etapas definidas, comunicación directa y entregas que cumplen lo prometido.', component: <Scheduler /> },
    ];
    return (
        <section id="servicios-preview" className="section-pad" style={{ background: 'var(--bg-deep)', transition: 'background 0.8s ease' }}>
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: 80 }}>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16, transition: 'color 0.6s ease' }}>La Plataforma</p>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
                        Diseño que trabaja mientras tú descansas
                    </h2>
                </div>
                <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
                    {cards.map(({ id, tag, title, desc, component }) => (
                        <div key={id} className="glass shimmer-line" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <div>
                                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, transition: 'color 0.6s ease' }}>{tag}</span>
                                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700, color: '#fff', marginTop: 8, marginBottom: 10 }}>{title}</h3>
                                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{desc}</p>
                            </div>
                            <div style={{ flex: 1 }}>{component}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
