const PLANES = [
    {
        id: 'lanzamiento', nombre: 'Lanzamiento', tag: 'Para empezar', precio: '200', periodo: ' soles',
        desc: 'Una página de presentación profesional, diseñada a medida, lista en menos de 7 días.',
        features: ['Landing page de 1 sección', 'Diseño personalizado con IA', 'Copy optimizado para conversión', 'Responsive y accesible', 'Dominio y hosting no incluidos'],
        cta: 'Empezar ahora', featured: false,
        waMensaje: '¡Hola, quiero contratar el plan LANZAMIENTO',
    },
    {
        id: 'identidad', nombre: 'Identidad', tag: 'El más elegido', precio: '300', periodo: ' soles',
        desc: 'Tu web completa — hasta 5 secciones, identidad visual cohesionada y optimización SEO desde el día uno.',
        features: ['Web completa hasta 5 secciones', 'Sistema de diseño propio', 'Copy de marca con IA + revisión humana', 'SEO técnico y semántico', 'Animaciones e interacciones', 'Entrega en menos de 10 días', '2 rondas de revisión incluidas'],
        cta: 'Comenzar mi proyecto', featured: true,
        waMensaje: '¡Hola, quiero contratar el plan IDENTIDAD',
    },
    {
        id: 'presencia', nombre: 'Presencia Total', tag: 'Para escalar', precio: 'A medida', periodo: '',
        desc: 'Proyectos complejos, e-commerce, plataformas y webs con múltiples páginas. Solución completa.',
        features: ['Páginas ilimitadas', 'Diseño de sistema completo', 'Integración con CMS o e-commerce', 'Estrategia de contenido', 'Optimización de conversión (CRO)', 'Soporte mensual incluido', 'Consultoría de marca digital'],
        cta: 'Cotizar proyecto', featured: false,
        waMensaje: '¡Hola, quiero contratar el plan PRESENCIA TOTAL',
    },
];

export default function Membership() {
    return (
        <section id="planes" style={{ background: 'var(--bg-deep)', padding: '120px 0', transition: 'background 0.8s ease' }}>
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: 80 }}>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16, transition: 'color 0.6s ease' }}>Planes</p>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>Elige tu punto de partida</h2>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'rgba(255,255,255,0.42)', maxWidth: 480, margin: '0 auto' }}>Sin suscripciones ocultas. Sin sorpresas. Solo resultados.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, alignItems: 'stretch' }}>
                    {PLANES.map(plan => (
                        <div key={plan.id} className={plan.featured ? undefined : 'membership-card'} style={{
                            borderRadius: 4, padding: '40px 36px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden',
                            ...(plan.featured ? {
                                background: 'var(--glass-bg)',
                                backdropFilter: 'blur(24px)',
                                border: '1px solid var(--gold)',
                                boxShadow: '0 0 40px var(--gold-glow), 0 0 80px color-mix(in srgb, var(--gold) 8%, transparent), inset 0 0 40px color-mix(in srgb, var(--gold) 4%, transparent)',
                                transform: 'scale(1.02)',
                                transition: 'border-color 0.6s ease, box-shadow 0.6s ease',
                            } : { border: '1px solid rgba(255,255,255,0.06)' }),
                        }}>
                            {plan.featured && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', transition: 'background 0.6s ease' }} />}

                            <div style={{ marginBottom: 32 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                                    <div>
                                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: plan.featured ? 'var(--gold)' : 'rgba(255,255,255,0.3)', fontWeight: 600, transition: 'color 0.6s ease' }}>{plan.tag}</span>
                                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: '#fff', marginTop: 6 }}>{plan.nombre}</h3>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        {plan.precio !== 'A medida' && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(255,255,255,0.4)', verticalAlign: 'top', marginTop: 6, display: 'inline-block' }}>S/</span>}
                                        <span style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 700, color: plan.featured ? 'var(--gold)' : '#fff', transition: 'color 0.6s ease' }}>{plan.precio}</span>
                                        {plan.periodo && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(255,255,255,0.38)' }}>{plan.periodo}</span>}
                                    </div>
                                </div>
                                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'rgba(255,255,255,0.48)', lineHeight: 1.7 }}>{plan.desc}</p>
                            </div>

                            <div style={{ flex: 1, marginBottom: 36 }}>
                                {plan.features.map(f => (
                                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: plan.featured ? 'var(--gold)' : 'rgba(255,255,255,0.22)', flexShrink: 0, transition: 'background 0.6s ease' }} />
                                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(255,255,255,0.62)' }}>{f}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href={`https://wa.me/51997778512?text=${encodeURIComponent(plan.waMensaje)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={plan.featured ? 'btn-weighted btn-white-sweep' : 'btn-weighted btn-gold'}
                                style={{ width: '100%', padding: '16px', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', border: `1px solid ${plan.featured ? '#ffffff' : 'var(--gold)'}`, color: plan.featured ? '#ffffff' : 'var(--gold)', background: 'transparent', transition: 'border-color 0.6s ease, color 0.6s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, textDecoration: 'none' }}
                            >
                                {/* Icono WhatsApp */}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>
                <p style={{ textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: 12, color: 'rgba(255,255,255,0.18)', marginTop: 48, letterSpacing: '0.05em' }}>
                    Todos los proyectos incluyen una llamada de diagnóstico gratuita.
                </p>
            </div>
        </section>
    );
}
