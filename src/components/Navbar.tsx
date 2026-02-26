import { useEffect, useRef } from 'react';

const NAV_LINKS = ['Servicios', 'Filosofía', 'Planes', 'Contacto'];

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);

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

    return (
        <nav ref={navRef} style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
            borderBottom: '1px solid transparent',
            transition: 'background 0.5s ease, border-color 0.5s ease',
        }}>
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

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

                {/* Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
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
            </div>
        </nav>
    );
}
