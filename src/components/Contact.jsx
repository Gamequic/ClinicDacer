import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contacto" ref={ref} style={s.section}>
      <div style={s.container}>
        <motion.div style={s.header}
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          <span style={s.eyebrow}>Estamos aquí para ti</span>
          <h2 style={s.title}>Contáctanos</h2>
          <p style={s.subtitle}>Agenda tu consulta hoy. Nuestro equipo está listo para atenderte con la dedicación que mereces.</p>
          <div style={s.underline} />
        </motion.div>

        <div style={s.grid} className="contact-grid">
          {/* Info col */}
          <motion.div style={s.infoCol}
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}>
            <h3 style={s.colTitle}>Información de Contacto</h3>

            {[
              { icon: '📍', label: 'Dirección', value: 'Lacandon #215', sub: 'Monterrey, Nuevo León, México 67150', color: '#009bde', bg: '#e8f5fd', border: 'rgba(0,155,222,0.18)' },
              { icon: '📸', label: 'Instagram', value: '@clinicdacer', sub: '14K+ seguidores · 460 publicaciones', color: '#7aaa00', bg: '#f2f8e6', border: 'rgba(122,170,0,0.2)', href: 'https://www.instagram.com/clinicdacer/' },
              { icon: '🕐', label: 'Horarios', value: 'Lunes a Sábado', sub: 'Agenda tu cita por Instagram', color: '#009bde', bg: '#e8f5fd', border: 'rgba(0,155,222,0.18)' },
            ].map((item, i) => (
              <motion.a key={item.label} href={item.href || '#'}
                target={item.href ? '_blank' : undefined}
                rel={item.href ? 'noopener noreferrer' : undefined}
                style={{ ...s.infoCard, borderColor: item.border }}
                initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ borderColor: item.color, y: -2, boxShadow: '0 6px 20px rgba(0,100,180,0.1)' }}>
                <div style={{ ...s.infoIcon, background: item.bg }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ ...s.infoLabel, color: item.color }}>{item.label}</div>
                  <div style={s.infoValue}>{item.value}</div>
                  <div style={s.infoSub}>{item.sub}</div>
                </div>
              </motion.a>
            ))}

            <motion.a href="https://www.instagram.com/clinicdacer/" target="_blank" rel="noopener noreferrer"
              style={s.bigCta}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 28px rgba(0,155,222,0.3)' }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65 }}>
              <span style={{ fontSize: '1.7rem' }}>📲</span>
              <div>
                <div style={s.ctaTitle}>Reserva por Instagram</div>
                <div style={s.ctaSub}>Envíanos un mensaje directo</div>
              </div>
              <span style={s.ctaArrow}>→</span>
            </motion.a>
          </motion.div>

          {/* Map col */}
          <motion.div style={s.mapCol}
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}>
            <div style={s.mapCard}>
              <div style={s.mapGrid} />
              <div style={s.mapContent}>
                <span style={{ fontSize: '2.8rem', display: 'block', marginBottom: '12px' }}>📍</span>
                <div style={s.mapAddr}>Lacandon #215</div>
                <div style={s.mapCity}>Monterrey, Nuevo León</div>
                <div style={s.mapZip}>México 67150</div>
              </div>
              <motion.div style={s.ping1} animate={{ scale: [1, 1.9], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.div style={s.ping2} animate={{ scale: [1, 2.3], opacity: [0.3, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
            </div>

            <div style={s.statsGrid}>
              {[
                { value: '14K+', label: 'Seguidores Instagram' },
                { value: '460+', label: 'Publicaciones' },
                { value: '6', label: 'Especialidades' },
                { value: '100%', label: 'Personalizado' },
              ].map(stat => (
                <div key={stat.label} style={s.statCard}>
                  <span style={s.statVal}>{stat.value}</span>
                  <span style={s.statLbl}>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const s = {
  section: { padding: '110px 24px', background: '#f8fafc' },
  container: { maxWidth: '1280px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: '64px' },
  eyebrow: { display: 'inline-block', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#009bde', marginBottom: '14px', padding: '5px 16px', background: '#e8f5fd', borderRadius: '100px', border: '1px solid rgba(0,155,222,0.2)', fontWeight: '600' },
  title: { fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: '800', color: '#1a2332', marginBottom: '14px' },
  subtitle: { fontSize: '1rem', color: '#64748b', maxWidth: '460px', margin: '0 auto', lineHeight: 1.75 },
  underline: { width: '50px', height: '3px', background: 'linear-gradient(90deg, #009bde, #7aaa00)', margin: '20px auto 0', borderRadius: '2px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' },
  infoCol: { display: 'flex', flexDirection: 'column', gap: '14px' },
  colTitle: { fontSize: '1.05rem', fontWeight: '700', color: '#1a2332', marginBottom: '6px' },
  infoCard: { display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '18px 20px', background: '#ffffff', borderRadius: '12px', border: '1.5px solid', transition: 'all 0.2s', textDecoration: 'none', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' },
  infoIcon: { width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.15rem', flexShrink: 0 },
  infoLabel: { fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '700', marginBottom: '3px' },
  infoValue: { fontSize: '0.95rem', fontWeight: '600', color: '#1a2332', marginBottom: '2px' },
  infoSub: { fontSize: '0.78rem', color: '#94a3b8' },
  bigCta: { display: 'flex', alignItems: 'center', gap: '16px', padding: '18px 22px', background: 'linear-gradient(135deg, #e8f5fd, #f0f7fd)', border: '1.5px solid rgba(0,155,222,0.25)', borderRadius: '14px', transition: 'all 0.2s', textDecoration: 'none' },
  ctaTitle: { fontSize: '0.95rem', fontWeight: '700', color: '#1a2332' },
  ctaSub: { fontSize: '0.78rem', color: '#64748b' },
  ctaArrow: { marginLeft: 'auto', fontSize: '1.2rem', color: '#009bde' },
  mapCol: { display: 'flex', flexDirection: 'column', gap: '20px' },
  mapCard: { position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '260px', background: '#e8f5fd', border: '1.5px solid rgba(0,155,222,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,100,180,0.08)' },
  mapGrid: { position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,155,222,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,155,222,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' },
  mapContent: { position: 'relative', zIndex: 1, textAlign: 'center' },
  mapAddr: { fontSize: '1.15rem', fontWeight: '700', color: '#1a2332', marginBottom: '4px' },
  mapCity: { fontSize: '0.88rem', color: '#009bde', marginBottom: '2px' },
  mapZip: { fontSize: '0.78rem', color: '#94a3b8' },
  ping1: { position: 'absolute', width: '56px', height: '56px', borderRadius: '50%', border: '2px solid rgba(0,155,222,0.4)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 },
  ping2: { position: 'absolute', width: '56px', height: '56px', borderRadius: '50%', border: '2px solid rgba(122,170,0,0.3)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 },
  statsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' },
  statCard: { padding: '18px', background: '#ffffff', border: '1.5px solid #e2eaf3', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' },
  statVal: { fontSize: '1.55rem', fontWeight: '800', color: '#009bde', lineHeight: 1 },
  statLbl: { fontSize: '0.7rem', color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.35 },
};
