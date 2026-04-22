import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="hero" ref={ref} style={styles.section}>
      {/* Parallax background */}
      <motion.div style={{ ...styles.bgLayer, y }} />

      {/* Grid overlay */}
      <div style={styles.grid} />

      {/* Animated gradient orbs */}
      <motion.div
        style={styles.orbBlue}
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={styles.orbLime}
        animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <motion.div style={{ ...styles.content, opacity }}>
        {/* Badge */}
        <motion.div
          style={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
        >
          <span style={styles.badgeDot} />
          Monterrey, Nuevo León · Lacandon #215
        </motion.div>

        {/* Main heading */}
        <div style={styles.headingWrap}>
          {['CLINIC', 'DACER'].map((word, wi) => (
            <div key={word} style={styles.wordLine}>
              {word.split('').map((char, ci) => (
                <motion.span
                  key={ci}
                  style={styles.heroChar}
                  initial={{ opacity: 0, y: 60, rotateX: -40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 2.9 + wi * 0.15 + ci * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          style={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 0.7 }}
        >
          Centro Integral de Recuperación
          <br />
          <span style={styles.taglineAccent}>Atención personalizada · Resultados reales</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          style={styles.ctaRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.6 }}
        >
          <motion.a
            href="#servicios"
            style={styles.ctaPrimary}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,155,222,0.6)' }}
            whileTap={{ scale: 0.97 }}
          >
            Ver Servicios
          </motion.a>
          <motion.a
            href="#contacto"
            style={styles.ctaSecondary}
            whileHover={{ scale: 1.05, background: 'rgba(0,155,222,0.15)' }}
            whileTap={{ scale: 0.97 }}
          >
            Reservar Cita
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          style={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.9, duration: 0.8 }}
        >
          {[
            { value: '14K+', label: 'Seguidores' },
            { value: '460+', label: 'Publicaciones' },
            { value: '6', label: 'Tratamientos' },
            { value: '100%', label: 'Personalizado' },
          ].map(stat => (
            <div key={stat.label} style={styles.stat}>
              <span style={styles.statValue}>{stat.value}</span>
              <span style={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2 }}
      >
        <motion.div
          style={styles.scrollLine}
          animate={{ scaleY: [0, 1, 0], y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span style={styles.scrollText}>Scroll</span>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '120px 24px 80px',
  },
  bgLayer: {
    position: 'absolute',
    inset: '-20%',
    background: 'radial-gradient(ellipse at 20% 50%, rgba(0,155,222,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(182,199,43,0.08) 0%, transparent 60%), #0d0d0d',
  },
  grid: {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'linear-gradient(rgba(0,155,222,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,155,222,0.04) 1px, transparent 1px)',
    backgroundSize: '60px 60px',
    pointerEvents: 'none',
  },
  orbBlue: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0,155,222,0.2) 0%, transparent 70%)',
    top: '-100px',
    left: '-100px',
    pointerEvents: 'none',
  },
  orbLime: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(182,199,43,0.15) 0%, transparent 70%)',
    bottom: '0px',
    right: '-50px',
    pointerEvents: 'none',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '900px',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '28px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 20px',
    background: 'rgba(0,155,222,0.1)',
    border: '1px solid rgba(0,155,222,0.3)',
    borderRadius: '100px',
    fontSize: '0.8rem',
    color: '#009bde',
    letterSpacing: '0.05em',
  },
  badgeDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#b6c72b',
    animation: 'pulse 2s infinite',
  },
  headingWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0px',
    perspective: '800px',
  },
  wordLine: {
    display: 'flex',
  },
  heroChar: {
    fontSize: 'clamp(4rem, 12vw, 9rem)',
    fontWeight: '900',
    letterSpacing: '0.08em',
    color: '#ffffff',
    display: 'inline-block',
    lineHeight: 1,
    textShadow: '0 0 60px rgba(0,155,222,0.3)',
  },
  tagline: {
    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 1.7,
    maxWidth: '500px',
  },
  taglineAccent: {
    color: '#009bde',
    fontSize: '0.9em',
    letterSpacing: '0.05em',
  },
  ctaRow: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  ctaPrimary: {
    padding: '16px 40px',
    background: 'linear-gradient(135deg, #009bde, #007ab8)',
    color: '#ffffff',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    letterSpacing: '0.05em',
    boxShadow: '0 4px 20px rgba(0,155,222,0.35)',
    transition: 'all 0.2s',
  },
  ctaSecondary: {
    padding: '16px 40px',
    background: 'transparent',
    color: '#ffffff',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    letterSpacing: '0.05em',
    border: '1px solid rgba(255,255,255,0.2)',
    transition: 'all 0.2s',
  },
  stats: {
    display: 'flex',
    gap: '48px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '8px',
    paddingTop: '32px',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    width: '100%',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  statValue: {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: '700',
    color: '#009bde',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.5)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    zIndex: 2,
  },
  scrollLine: {
    width: '1.5px',
    height: '32px',
    background: 'linear-gradient(to bottom, rgba(0,155,222,0.8), transparent)',
    transformOrigin: 'top',
  },
  scrollText: {
    fontSize: '0.7rem',
    color: 'rgba(255,255,255,0.4)',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
  },
};
