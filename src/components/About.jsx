import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="nosotros" ref={ref} style={styles.section}>
      <div style={styles.bgLeft} />
      <div style={styles.container} className="about-grid">
        {/* Left: Image & Stats */}
        <motion.div
          style={styles.left}
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={styles.imageStack}>
            {/* Decorative rings */}
            <motion.div
              style={styles.ring1}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              style={styles.ring2}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
            {/* Main image */}
            <img src="/images/logo.jpg" alt="Clinic Dacer" style={styles.mainImg} />

            {/* Floating badge */}
            <motion.div
              style={styles.floatBadge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span style={styles.floatValue}>14K+</span>
              <span style={styles.floatLabel}>Comunidad</span>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <div style={styles.trustRow}>
            {[
              { icon: '✅', text: 'Resultados comprobados' },
              { icon: '🏥', text: 'Atención profesional' },
              { icon: '📍', text: 'Monterrey, N.L.' },
            ].map(item => (
              <div key={item.text} style={styles.trustItem}>
                <span>{item.icon}</span>
                <span style={styles.trustText}>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          style={styles.right}
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span style={styles.eyebrow}>Quiénes Somos</span>
          <h2 style={styles.title}>
            Tu bienestar es
            <br />
            <span style={styles.titleAccent}>nuestra prioridad</span>
          </h2>
          <p style={styles.body}>
            En <strong style={{ color: '#009bde' }}>Clinic Dacer</strong> somos un centro integral de recuperación
            dedicado a devolverte el movimiento, la vitalidad y el bienestar que mereces.
            Con atención completamente personalizada, cada tratamiento se adapta a tus necesidades específicas.
          </p>
          <p style={styles.body}>
            Nuestro equipo de especialistas combina técnicas tradicionales con tecnología moderna
            para ofrecerte los mejores resultados en masajes, electroterapia, cupping, drenaje
            linfático y presoterapia.
          </p>

          {/* Team mentions */}
          <div style={styles.teamRow}>
            <div style={styles.teamLabel}>Equipo especialista:</div>
            <div style={styles.teamTags}>
              {['Fisioterapeutas', 'Nutriología @alehdz', 'Psicología @monicontreras'].map(tag => (
                <span key={tag} style={styles.teamTag}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Values */}
          <div style={styles.values}>
            {[
              { icon: '🎯', label: 'Atención Personalizada' },
              { icon: '🔬', label: 'Técnicas Avanzadas' },
              { icon: '❤️', label: 'Cuidado Integral' },
            ].map(v => (
              <div key={v.label} style={styles.value}>
                <span style={styles.valueIcon}>{v.icon}</span>
                <span style={styles.valueLabel}>{v.label}</span>
              </div>
            ))}
          </div>

          <motion.a
            href="https://www.instagram.com/clinicdacer/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.igBtn}
            whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(182,199,43,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span>📸</span> Ver en Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    padding: '120px 24px',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #0d0d0d 0%, #111111 50%, #0d0d0d 100%)',
  },
  bgLeft: {
    position: 'absolute',
    left: '-200px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(182,199,43,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
  },
  imageStack: {
    position: 'relative',
    width: '260px',
    height: '260px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring1: {
    position: 'absolute',
    inset: '-24px',
    borderRadius: '50%',
    border: '1.5px dashed rgba(0,155,222,0.3)',
  },
  ring2: {
    position: 'absolute',
    inset: '-48px',
    borderRadius: '50%',
    border: '1px dashed rgba(182,199,43,0.2)',
  },
  mainImg: {
    width: '220px',
    height: '220px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid rgba(0,155,222,0.4)',
    boxShadow: '0 0 60px rgba(0,155,222,0.25)',
  },
  floatBadge: {
    position: 'absolute',
    bottom: '-10px',
    right: '-10px',
    background: 'linear-gradient(135deg, #b6c72b, #94a322)',
    borderRadius: '12px',
    padding: '12px 18px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 4px 20px rgba(182,199,43,0.4)',
  },
  floatValue: {
    fontSize: '1.4rem',
    fontWeight: '800',
    color: '#0d0d0d',
    lineHeight: 1,
  },
  floatLabel: {
    fontSize: '0.7rem',
    color: 'rgba(0,0,0,0.7)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  trustRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '100%',
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.03)',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  trustText: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.7)',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  eyebrow: {
    display: 'inline-block',
    fontSize: '0.75rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: '#b6c72b',
    padding: '6px 16px',
    background: 'rgba(182,199,43,0.1)',
    borderRadius: '100px',
    border: '1px solid rgba(182,199,43,0.2)',
    width: 'fit-content',
  },
  title: {
    fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: 1.15,
  },
  titleAccent: {
    background: 'linear-gradient(135deg, #009bde, #b6c72b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  body: {
    fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.62)',
    lineHeight: 1.8,
  },
  teamRow: {
    padding: '20px',
    background: 'rgba(0,155,222,0.06)',
    borderRadius: '12px',
    border: '1px solid rgba(0,155,222,0.15)',
  },
  teamLabel: {
    fontSize: '0.75rem',
    color: '#009bde',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '10px',
    fontWeight: '600',
  },
  teamTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  teamTag: {
    padding: '4px 12px',
    background: 'rgba(0,155,222,0.12)',
    borderRadius: '100px',
    fontSize: '0.8rem',
    color: '#009bde',
    border: '1px solid rgba(0,155,222,0.2)',
  },
  values: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  value: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    background: 'rgba(255,255,255,0.03)',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.07)',
  },
  valueIcon: {
    fontSize: '1.1rem',
  },
  valueLabel: {
    fontSize: '0.82rem',
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  igBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 28px',
    background: 'linear-gradient(135deg, rgba(182,199,43,0.15), rgba(182,199,43,0.05))',
    border: '1px solid rgba(182,199,43,0.35)',
    borderRadius: '8px',
    color: '#b6c72b',
    fontWeight: '600',
    fontSize: '0.9rem',
    width: 'fit-content',
    transition: 'all 0.2s',
  },
};
