import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contacto" ref={ref} style={styles.section}>
      <div style={styles.bgGlow} />
      <div style={styles.container}>
        {/* Header */}
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span style={styles.eyebrow}>Estamos aquí para ti</span>
          <h2 style={styles.title}>Contáctanos</h2>
          <p style={styles.subtitle}>
            Agenda tu consulta hoy. Nuestro equipo está listo para atenderte con la dedicación que mereces.
          </p>
          <div style={styles.underline} />
        </motion.div>

        <div style={styles.grid} className="contact-grid">
          {/* Contact info */}
          <motion.div
            style={styles.infoCol}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h3 style={styles.colTitle}>Información de Contacto</h3>

            {/* Info cards */}
            {[
              {
                icon: '📍',
                label: 'Dirección',
                value: 'Lacandon #215',
                sub: 'Monterrey, Nuevo León, México 67150',
                color: '#009bde',
              },
              {
                icon: '📸',
                label: 'Instagram',
                value: '@clinicdacer',
                sub: '14K+ seguidores · 460 publicaciones',
                color: '#b6c72b',
                href: 'https://www.instagram.com/clinicdacer/',
              },
              {
                icon: '🕐',
                label: 'Horarios',
                value: 'Lunes a Sábado',
                sub: 'Agenda tu cita por Instagram',
                color: '#009bde',
              },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href || '#'}
                target={item.href ? '_blank' : undefined}
                rel={item.href ? 'noopener noreferrer' : undefined}
                style={{
                  ...styles.infoCard,
                  borderColor: `${item.color}22`,
                  textDecoration: 'none',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                whileHover={{ borderColor: `${item.color}55`, background: `${item.color}0a`, y: -2 }}
              >
                <div style={{ ...styles.infoIcon, background: `${item.color}15`, border: `1px solid ${item.color}25` }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ ...styles.infoLabel, color: item.color }}>{item.label}</div>
                  <div style={styles.infoValue}>{item.value}</div>
                  <div style={styles.infoSub}>{item.sub}</div>
                </div>
              </motion.a>
            ))}

            {/* Social CTA */}
            <motion.a
              href="https://www.instagram.com/clinicdacer/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.bigCta}
              whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(0,155,222,0.5)' }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <span style={styles.ctaIcon}>📲</span>
              <div>
                <div style={styles.ctaTitle}>Reserva por Instagram</div>
                <div style={styles.ctaSub}>Envíanos un mensaje directo</div>
              </div>
              <span style={styles.ctaArrow}>→</span>
            </motion.a>
          </motion.div>

          {/* Map / Visual card */}
          <motion.div
            style={styles.mapCol}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {/* Decorative map placeholder */}
            <div style={styles.mapCard}>
              <div style={styles.mapBg} />
              <div style={styles.mapContent}>
                <div style={styles.mapPin}>📍</div>
                <div style={styles.mapAddress}>Lacandon #215</div>
                <div style={styles.mapCity}>Monterrey, Nuevo León</div>
                <div style={styles.mapMexico}>México 67150</div>
              </div>

              {/* Animated rings around pin */}
              <motion.div
                style={styles.pingRing1}
                animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                style={styles.pingRing2}
                animate={{ scale: [1, 2.2], opacity: [0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </div>

            {/* Stats */}
            <div style={styles.statsGrid}>
              {[
                { value: '14K+', label: 'Seguidores Instagram' },
                { value: '460+', label: 'Publicaciones' },
                { value: '6', label: 'Especialidades' },
                { value: '100%', label: 'Personalizado' },
              ].map(stat => (
                <div key={stat.label} style={styles.statCard}>
                  <span style={styles.statValue}>{stat.value}</span>
                  <span style={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '120px 24px',
    position: 'relative',
    overflow: 'hidden',
    background: '#0d0d0d',
  },
  bgGlow: {
    position: 'absolute',
    bottom: '-200px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '800px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(ellipse, rgba(0,155,222,0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    textAlign: 'center',
    marginBottom: '72px',
  },
  eyebrow: {
    display: 'inline-block',
    fontSize: '0.75rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: '#009bde',
    marginBottom: '16px',
    padding: '6px 16px',
    background: 'rgba(0,155,222,0.1)',
    borderRadius: '100px',
    border: '1px solid rgba(0,155,222,0.2)',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.55)',
    maxWidth: '480px',
    margin: '0 auto',
    lineHeight: 1.7,
  },
  underline: {
    width: '60px',
    height: '3px',
    background: 'linear-gradient(90deg, #009bde, #b6c72b)',
    margin: '24px auto 0',
    borderRadius: '2px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '64px',
    alignItems: 'start',
  },
  infoCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  colTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '8px',
    letterSpacing: '-0.01em',
  },
  infoCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '20px',
    background: 'rgba(255,255,255,0.03)',
    borderRadius: '12px',
    border: '1px solid',
    transition: 'all 0.2s',
  },
  infoIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    flexShrink: 0,
  },
  infoLabel: {
    fontSize: '0.7rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: '4px',
  },
  infoValue: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '2px',
  },
  infoSub: {
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.5)',
  },
  bigCta: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px 24px',
    background: 'linear-gradient(135deg, rgba(0,155,222,0.2), rgba(0,155,222,0.08))',
    border: '1px solid rgba(0,155,222,0.35)',
    borderRadius: '12px',
    marginTop: '8px',
    transition: 'all 0.2s',
  },
  ctaIcon: {
    fontSize: '1.8rem',
    flexShrink: 0,
  },
  ctaTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#ffffff',
  },
  ctaSub: {
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.55)',
  },
  ctaArrow: {
    marginLeft: 'auto',
    fontSize: '1.2rem',
    color: '#009bde',
  },
  mapCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  mapCard: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    height: '280px',
    background: '#1a1a1a',
    border: '1px solid rgba(0,155,222,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapBg: {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'linear-gradient(rgba(0,155,222,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,155,222,0.06) 1px, transparent 1px)',
    backgroundSize: '30px 30px',
  },
  mapContent: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
  },
  mapPin: {
    fontSize: '3rem',
    marginBottom: '12px',
    display: 'block',
  },
  mapAddress: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '4px',
  },
  mapCity: {
    fontSize: '0.9rem',
    color: '#009bde',
    marginBottom: '2px',
  },
  mapMexico: {
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.5)',
  },
  pingRing1: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: '2px solid rgba(0,155,222,0.5)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 0,
  },
  pingRing2: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: '2px solid rgba(182,199,43,0.3)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 0,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  statCard: {
    padding: '20px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    textAlign: 'center',
  },
  statValue: {
    fontSize: '1.6rem',
    fontWeight: '800',
    color: '#009bde',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: '0.72rem',
    color: 'rgba(255,255,255,0.5)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    lineHeight: 1.3,
  },
};
