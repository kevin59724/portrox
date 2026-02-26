import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/* ════════════════════════════════════════════════════════════
   DEFINICIÓN DE TEMAS
   Cada tema cambia: paleta de color, tipografía y nombre
   ════════════════════════════════════════════════════════════ */
const THEMES = [
    {
        id: 'gold', name: 'Ébano Dorado', label: 'Lujo Clásico',
        cssClass: '',
        gold: '#D4AF37',
        goldDim: 'rgba(212,175,55,0.15)',
        goldGlow: 'rgba(212,175,55,0.35)',
        bgDeep: '#0A0A0A',
        bgDeeper: '#060606',
        glassBg: 'rgba(255,255,255,0.04)',
        glassBorder: 'rgba(255,255,255,0.08)',
        fontSerif: "'Playfair Display', Georgia, serif",
        fontSans: "'Inter', system-ui, sans-serif",
    },
    {
        id: 'tech', name: 'Precisión Industrial', label: 'Tech Minimalista',
        cssClass: 'theme-tech',
        gold: '#007AFF',                   /* Electric Blue */
        goldDim: 'rgba(0,122,255,0.12)',
        goldGlow: 'rgba(0,122,255,0.35)',
        bgDeep: '#0A0A0A',                   /* Jet Black */
        bgDeeper: '#000000',
        glassBg: 'rgba(255,255,255,0.03)',
        glassBorder: 'rgba(255,255,255,0.12)',
        fontSerif: "'Inter', system-ui, sans-serif",   /* Inter para todos */
        fontSans: "'Inter', system-ui, sans-serif",
    },
    {
        id: 'fashion', name: 'Avant-Garde Boutique', label: 'Moda & Lifestyle',
        cssClass: 'theme-fashion',
        gold: '#B85C6E',                   /* Burgundy visible */
        goldDim: 'rgba(184,92,110,0.15)',
        goldGlow: 'rgba(184,92,110,0.35)',
        bgDeep: '#0D0709',                   /* Onyx cálido */
        bgDeeper: '#080405',
        glassBg: 'rgba(247,243,240,0.04)',    /* Champagne tint */
        glassBorder: 'rgba(247,243,240,0.08)',
        fontSerif: "'Cormorant', Georgia, serif",       /* Editorial */
        fontSans: "'DM Sans', system-ui, sans-serif",  /* Grotesk */
    },
    {
        id: 'saas', name: 'Modern Velocity', label: 'SaaS & Startup',
        cssClass: 'theme-saas',
        gold: '#6366F1',                   /* Indigo */
        goldDim: 'rgba(99,102,241,0.15)',
        goldGlow: 'rgba(99,102,241,0.45)',
        bgDeep: '#020617',                   /* Midnight Navy */
        bgDeeper: '#010410',
        glassBg: 'rgba(99,102,241,0.07)',
        glassBorder: 'rgba(99,102,241,0.18)',
        fontSerif: "'Plus Jakarta Sans', system-ui, sans-serif",
        fontSans: "'Plus Jakarta Sans', system-ui, sans-serif",
    },
    {
        id: 'biophilic', name: 'Diseño Biofílico', label: 'Sostenibilidad',
        cssClass: 'theme-biophilic',
        gold: '#E2725B',                   /* Terracotta */
        goldDim: 'rgba(226,114,91,0.15)',
        goldGlow: 'rgba(226,114,91,0.35)',
        bgDeep: '#1A1510',                   /* Charcoal cálido */
        bgDeeper: '#120F0B',
        glassBg: 'rgba(226,114,91,0.05)',
        glassBorder: 'rgba(135,169,107,0.18)',   /* Sage border */
        fontSerif: "'Lora', Georgia, serif",             /* Humanista serif cálida */
        fontSans: "'Archivo', system-ui, sans-serif",
    },
];

const CYCLE_DURATION = 20;
const ALL_THEME_CLASSES = ['theme-tech', 'theme-fashion', 'theme-saas', 'theme-biophilic'];

/* ── Aplica un tema al :root via JS ────────────────────────── */
function applyTheme(theme: typeof THEMES[0]) {
    const r = document.documentElement.style;
    r.setProperty('--gold', theme.gold);
    r.setProperty('--gold-dim', theme.goldDim);
    r.setProperty('--gold-glow', theme.goldGlow);
    r.setProperty('--bg-deep', theme.bgDeep);
    r.setProperty('--bg-deeper', theme.bgDeeper);
    r.setProperty('--glass-bg', theme.glassBg);
    r.setProperty('--glass-border', theme.glassBorder);
    r.setProperty('--font-serif', theme.fontSerif);
    r.setProperty('--font-sans', theme.fontSans);
    document.body.style.backgroundColor = theme.bgDeep;
    document.body.style.fontFamily = theme.fontSans;

    /* Aplicar la CSS class de comportamiento */
    document.documentElement.classList.remove(...ALL_THEME_CLASSES);
    if (theme.cssClass) {
        document.documentElement.classList.add(theme.cssClass);
    }
}

export default function ThemeSwitcher() {
    const [themeIdx, setThemeIdx] = useState(0);
    const [progress, setProgress] = useState(0); // 0-1 para la barra de cuenta regresiva
    const overlayRef = useRef<HTMLDivElement>(null);
    const scanlinesRef = useRef<HTMLDivElement>(null);
    const flashRef = useRef<HTMLDivElement>(null);
    const slice1Ref = useRef<HTMLDivElement>(null);
    const slice2Ref = useRef<HTMLDivElement>(null);
    const slice3Ref = useRef<HTMLDivElement>(null);
    const glitchRRef = useRef<HTMLDivElement>(null);
    const glitchGRef = useRef<HTMLDivElement>(null);
    const glitchBRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const nextThemeRef = useRef(1);

    /* ── Animación de distorsión ────────────────────────────── */
    const runGlitch = (nextIdx: number) => {
        const overlay = overlayRef.current;
        const flash = flashRef.current;
        const s1 = slice1Ref.current;
        const s2 = slice2Ref.current;
        const s3 = slice3Ref.current;
        const glitchR = glitchRRef.current;
        const glitchG = glitchGRef.current;
        const glitchB = glitchBRef.current;
        if (!overlay) return;

        const tl = gsap.timeline({
            onComplete: () => {
                // Limpia el overlay
                gsap.set(overlay, { opacity: 0 });
                gsap.set([s1, s2, s3], { opacity: 0 });
                gsap.set(flash, { opacity: 0 });
                gsap.set([glitchR, glitchG, glitchB], { x: 0 });
            }
        });

        // 1. Overlay aparece con scanlines
        tl.to(overlay, { opacity: 1, duration: 0.08, ease: 'none' });

        // 2. Aberración cromática: los canales R/G/B se separan
        tl.to(glitchR, { x: -6, duration: 0.06, ease: 'none' }, '<');
        tl.to(glitchG, { x: 4, duration: 0.06, ease: 'none' }, '<');
        tl.to(glitchB, { x: -3, duration: 0.06, ease: 'none' }, '<');

        // 3. Slices aparecen en posiciones aleatorias
        tl.set(s1, { top: `${10 + Math.random() * 15}%`, opacity: 0.6 })
            .set(s2, { top: `${40 + Math.random() * 15}%`, opacity: 0.4 })
            .set(s3, { top: `${65 + Math.random() * 20}%`, opacity: 0.5 });

        // 4. Parpadeo rápido del overlay
        tl.to(overlay, { opacity: 0, duration: 0.05 })
            .to(overlay, { opacity: 0.9, duration: 0.04 })
            .to(overlay, { opacity: 0.3, duration: 0.05 })
            .to(overlay, { opacity: 1, duration: 0.04 });

        // 5. Los slices se desplazan
        tl.to(s1, { x: '-8px', duration: 0.08, ease: 'none' }, '<')
            .to(s2, { x: '12px', duration: 0.08, ease: 'none' }, '<')
            .to(s3, { x: '-5px', duration: 0.08, ease: 'none' }, '<');

        // 6. FLASH BLANCO → aquí cambiamos el tema
        tl.to(flash, { opacity: 0.85, duration: 0.04 })
            .call(() => {
                setThemeIdx(nextIdx);
                applyTheme(THEMES[nextIdx]);
            })
            .to(flash, { opacity: 0, duration: 0.08 });

        // 7. Segunda ronda de glitch más corta
        tl.to(overlay, { opacity: 0.6, duration: 0.04 })
            .to(glitchR, { x: 3, duration: 0.05 })
            .to(glitchB, { x: 5, duration: 0.05 }, '<')
            .to(overlay, { opacity: 0.3, duration: 0.04 })
            .to([s1, s2, s3], { opacity: 0, duration: 0.08, x: 0 });

        // 8. Overlay se disuelve suavemente
        tl.to(overlay, { opacity: 0, duration: 0.35, ease: 'power2.out' });

        // 9. Badge anima
        if (badgeRef.current) {
            tl.fromTo(badgeRef.current,
                { y: 8, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
                '-=0.2'
            );
        }
    };

    /* ── Ciclo principal ────────────────────────────────────── */
    useEffect(() => {
        // Mostrar badge inicial
        if (badgeRef.current) {
            gsap.fromTo(badgeRef.current,
                { y: 12, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 1.5, ease: 'power2.out' }
            );
        }

        let elapsed = 0;
        const TICK = 100; // ms

        progressIntervalRef.current = setInterval(() => {
            elapsed += TICK;
            const pct = (elapsed % (CYCLE_DURATION * 1000)) / (CYCLE_DURATION * 1000);
            setProgress(pct);

            if (elapsed > 0 && elapsed % (CYCLE_DURATION * 1000) === 0) {
                const next = nextThemeRef.current;
                runGlitch(next);
                nextThemeRef.current = (next + 1) % THEMES.length;
            }
        }, TICK);

        return () => {
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const theme = THEMES[themeIdx];
    const barHeight = Math.round(progress * 48);

    return (
        <>
            {/* ── Overlay de distorsión ───────────────────────── */}
            <div ref={overlayRef} className="glitch-overlay">
                <div ref={scanlinesRef} className="glitch-scanlines" />
                <div ref={glitchRRef} className="glitch-r" />
                <div ref={glitchGRef} className="glitch-g" />
                <div ref={glitchBRef} className="glitch-b" />
                <div
                    ref={slice1Ref}
                    className="glitch-slice"
                    style={{ top: '20%' }}
                />
                <div
                    ref={slice2Ref}
                    className="glitch-slice"
                    style={{ top: '50%' }}
                />
                <div
                    ref={slice3Ref}
                    className="glitch-slice"
                    style={{ top: '75%' }}
                />
                <div ref={flashRef} className="glitch-flash" />
            </div>

            {/* ── Badge de tema activo ─────────────────────────── */}
            <div ref={badgeRef} className="theme-badge">
                {/* Barra de progreso vertical */}
                <div style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: 2,
                    height: `${barHeight}px`,
                    maxHeight: '100%',
                    background: theme.gold,
                    borderRadius: '0 0 var(--radius) var(--radius)',
                    transition: 'height 0.1s linear, background 0.6s ease',
                    opacity: 0.7,
                }} />

                <div className="theme-badge-dot" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <span style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 9,
                        letterSpacing: '0.15em',
                        color: 'rgba(255,255,255,0.35)',
                        textTransform: 'uppercase',
                    }}>
                        Estilo activo
                    </span>
                    <span className="theme-badge-name" style={{ fontFamily: 'var(--font-sans)' }}>
                        {theme.name}
                    </span>
                </div>
                <div style={{
                    marginLeft: 6,
                    padding: '2px 8px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: 2,
                    fontFamily: 'var(--font-sans)',
                    fontSize: 9,
                    letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.35)',
                    whiteSpace: 'nowrap',
                }}>
                    {theme.label}
                </div>
            </div>
        </>
    );
}
