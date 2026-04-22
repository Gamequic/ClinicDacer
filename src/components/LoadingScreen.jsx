import { motion, AnimatePresence } from 'framer-motion';
import { img } from '../imgUrl';

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          style={s.container}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          <div style={s.grid} />

          <motion.div style={s.orbBlue}
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }} />
          <motion.div style={s.orbLime}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 3.5, repeat: Infinity }} />

          <motion.div style={s.logoWrap}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <motion.div style={s.ring}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} />
            <img src={img('logo.jpg')} alt="Clinic Dacer" style={s.logo} />
          </motion.div>

          <motion.div style={s.textWrap}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}>
            <h1 style={s.title}>CLINIC DACER</h1>
            <p style={s.subtitle}>Centro Integral de Recuperación</p>
          </motion.div>

          <motion.div style={s.progressWrap}>
            <motion.div style={s.progressBar}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }} />
          </motion.div>

          <div style={s.dots}>
            {[0, 1, 2].map(i => (
              <motion.span key={i} style={s.dot}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4 }} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const s = {
  container: { position: 'fixed', inset: 0, zIndex: 9999, background: '#0d1a2a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', overflow: 'hidden' },
  grid: { position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,155,222,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,155,222,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' },
  orbBlue: { position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(0,155,222,0.3)', top: '-150px', left: '-150px', filter: 'blur(80px)', pointerEvents: 'none' },
  orbLime: { position: 'absolute', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(122,170,0,0.25)', bottom: '-80px', right: '-80px', filter: 'blur(80px)', pointerEvents: 'none' },
  logoWrap: { position: 'relative', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  ring: { position: 'absolute', inset: '-8px', borderRadius: '50%', border: '2px solid transparent', borderTopColor: '#009bde', borderRightColor: '#7aaa00' },
  logo: { width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(0,155,222,0.5)' },
  textWrap: { textAlign: 'center' },
  title: { fontSize: '2rem', fontWeight: '800', letterSpacing: '0.3em', color: '#ffffff', marginBottom: '8px' },
  subtitle: { fontSize: '0.85rem', color: '#009bde', letterSpacing: '0.15em', textTransform: 'uppercase' },
  progressWrap: { width: '200px', height: '2px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' },
  progressBar: { height: '100%', background: 'linear-gradient(90deg, #009bde, #7aaa00)', transformOrigin: 'left' },
  dots: { display: 'flex', gap: '8px' },
  dot: { width: '6px', height: '6px', borderRadius: '50%', background: '#009bde', display: 'inline-block' },
};
