const LINKS = {
    Servicios: ['Diseño Web', 'IA + Estrategia', 'Optimización CRO', 'Identidad Visual'],
    Empresa: ['Sobre PortRox', 'Proceso de trabajo', 'Portafolio', 'Blog'],
    Legal: ['Política de privacidad', 'Términos de servicio', 'Cookies'],
};

export default function Footer() {
    return (
        <footer id="contacto" style={{ background: 'var(--bg-deeper)', borderTop: '1px solid rgba(255,255,255,0.04)', transition: 'background 0.8s ease' }}>
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px 48px' }}>
                <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 72 }}>
                    {/* Marca */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                            <div style={{ width: 32, height: 32, border: '1px solid var(--gold)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.6s ease' }}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <rect x="1" y="1" width="6" height="6" stroke="var(--gold)" strokeWidth="1.4" rx="1" />
                                    <rect x="9" y="1" width="6" height="6" stroke="var(--gold)" strokeWidth="1.4" rx="1" />
                                    <rect x="1" y="9" width="6" height="6" stroke="var(--gold)" strokeWidth="1.4" rx="1" />
                                    <path d="M9 12h6M12 9v6" stroke="var(--gold)" strokeWidth="1.4" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '0.04em' }}>PortRox</span>
                        </div>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, maxWidth: 280, marginBottom: 28 }}>
                            Diseño web con IA para marcas que no quieren verse como las demás. Rápido, estratégico y completamente a medida.
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div className="pulse-dot" />
                            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, transition: 'color 0.6s ease' }}>Aceptando proyectos</span>
                        </div>
                    </div>

                    {Object.entries(LINKS).map(([heading, items]) => (
                        <div key={heading}>
                            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>{heading}</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {items.map(item => (
                                    <li key={item}>
                                        <a href="#" style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s ease' }}
                                            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)'; }}
                                            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)'; }}
                                        >{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, color-mix(in srgb, var(--gold) 15%, transparent), transparent)', marginBottom: 32, transition: 'background 0.6s ease' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.05em' }}>© 2025 PortRox. Todos los derechos reservados.</p>
                    <div style={{ display: 'flex', gap: 24 }}>
                        {['Privacidad', 'Términos', 'Cookies'].map(link => (
                            <a key={link} href="#" style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'rgba(255,255,255,0.22)', textDecoration: 'none', transition: 'color 0.3s ease' }}
                                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.22)'; }}
                            >{link}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
