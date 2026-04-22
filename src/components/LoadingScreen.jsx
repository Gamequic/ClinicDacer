import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          style={styles.container}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          {/* Background grid */}
          <div style={styles.grid} />

          {/* Glow orbs */}
          <motion.div
            style={{ ...styles.orb, ...styles.orbBlue }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            style={{ ...styles.orb, ...styles.orbLime }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Logo */}
          <motion.div
            style={styles.logoWrap}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              style={styles.logoRing}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <img src="/images/logo.jpg" alt="Clinic Dacer" style={styles.logo} />
          </motion.div>

          {/* Text */}
          <motion.div
            style={styles.textWrap}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
          >
            <h1 style={styles.title}>CLINIC DACER</h1>
            <p style={styles.subtitle}>Centro Integral de Recuperación</p>
          </motion.div>

          {/* Progress bar */}
          <motion.div style={styles.progressWrap}>
            <motion.div
              style={styles.progressBar}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          {/* Dots */}
          <motion.div style={styles.dots}>
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                style={styles.dot}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const styles = {
  container: {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    background: '#0d0d0d',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
    overflow: 'hidden',
  },
  grid: {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'linear-gradient(rgba(0,155,222,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,155,222,0.05) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    pointerEvents: 'none',
  },
  orb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(80px)',
    pointerEvents: 'none',
  },
  orbBlue: {
    width: '400px',
    height: '400px',
    background: 'rgba(0,155,222,0.4)',
    top: '-100px',
    left: '-100px',
  },
  orbLime: {
    width: '300px',
    height: '300px',
    background: 'rgba(182,199,43,0.3)',
    bottom: '-50px',
    right: '-50px',
  },
  logoWrap: {
    position: 'relative',
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoRing: {
    position: 'absolute',
    inset: '-8px',
    borderRadius: '50%',
    border: '2px solid transparent',
    borderTopColor: '#009bde',
    borderRightColor: '#b6c72b',
  },
  logo: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid rgba(0,155,222,0.4)',
  },
  textWrap: {
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    letterSpacing: '0.3em',
    color: '#ffffff',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: '#009bde',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
  },
  progressWrap: {
    width: '200px',
    height: '2px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    background: 'linear-gradient(90deg, #009bde, #b6c72b)',
    transformOrigin: 'left',
    borderRadius: '2px',
  },
  dots: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#009bde',
    display: 'inline-block',
  },
};
