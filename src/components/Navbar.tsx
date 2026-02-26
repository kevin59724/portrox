import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = ['Servicios', 'Filosofía', 'Planes', 'Contacto'];

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;
        const onScroll = () => {
            if (window.scrollY > 60) nav.classList.add('nav-scroll');
            else nav.classList.remove('nav-scroll');
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Cerrar el menú al hacer click en un enlace
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav ref={navRef} style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
            borderBottom: '1px solid transparent',
            transition: 'background 0.5s ease, border-color 0.5s ease',
        }}>
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                {/* Logo PR — imagen original, tintada via CSS filter por tema */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                        <img
                            src="/logo-pr.png"
                            alt="PortRox logo"
                            className="logo-pr-img"
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </div>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, letterSpacing: '0.04em', color: '#fff' }}>PortRox</span>
                </div>

                {/* Links — desktop */}
                <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
                    {NAV_LINKS.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`}
                            style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s ease' }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                        >{link}</a>
                    ))}
                    <a href="#planes" className="btn-weighted btn-gold" style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none', padding: '10px 24px', border: '1px solid var(--gold)', transition: 'border-color 0.6s ease, color 0.6s ease' }}>
                        Empezar
                    </a>
                </div>

                {/* Hamburger button — mobile */}
                <button
                    className="nav-hamburger"
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    style={{
                        background: 'transparent',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: 4,
                        padding: '8px 10px',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        transition: 'border-color 0.3s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                >
                    <span style={{
                        display: 'block', width: 18, height: 1.5,
                        background: menuOpen ? 'var(--gold)' : 'rgba(255,255,255,0.7)',
                        transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
                        transition: 'transform 0.3s ease, background 0.3s ease',
                    }} />
                    <span style={{
                        display: 'block', width: 18, height: 1.5,
                        background: menuOpen ? 'transparent' : 'rgba(255,255,255,0.7)',
                        transition: 'background 0.3s ease',
                    }} />
                    <span style={{
                        display: 'block', width: 18, height: 1.5,
                        background: menuOpen ? 'var(--gold)' : 'rgba(255,255,255,0.7)',
                        transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
                        transition: 'transform 0.3s ease, background 0.3s ease',
                    }} />
                </button>
            </div>

            {/* Mobile dropdown menu */}
            <div
                className="nav-mobile-menu"
                style={{
                    maxHeight: menuOpen ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: 'rgba(10, 10, 10, 0.97)',
                    backdropFilter: 'blur(24px)',
                    borderTop: menuOpen ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
                }}
            >
                <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {NAV_LINKS.map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={handleLinkClick}
                            style={{
                                fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500,
                                letterSpacing: '0.1em', textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
                                padding: '14px 0',
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                transition: 'color 0.3s ease',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                        >
                            {link}
                        </a>
                    ))}
                    <a
                        href="#planes"
                        className="btn-weighted btn-gold"
                        onClick={handleLinkClick}
                        style={{
                            fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600,
                            letterSpacing: '0.15em', textTransform: 'uppercase',
                            color: 'var(--gold)', textDecoration: 'none',
                            padding: '14px 24px', border: '1px solid var(--gold)',
                            textAlign: 'center', marginTop: 12,
                            transition: 'border-color 0.6s ease, color 0.6s ease',
                        }}
                    >
                        Empezar
                    </a>
                </div>
            </div>
        </nav>
    );
}
