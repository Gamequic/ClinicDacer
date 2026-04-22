import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="hero" ref={ref} style={s.section}>
      <motion.div style={{ ...s.bgLayer, y }} />
      <div style={s.grid} />

      {/* Soft orbs */}
      <motion.div style={s.orbBlue}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div style={s.orbLime}
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />

      <motion.div style={{ ...s.content, opacity }}>
        {/* Badge */}
        <motion.div style={s.badge}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}>
          <motion.span style={s.badgeDot}
            animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          Monterrey, Nuevo León · Lacandon #215
        </motion.div>

        {/* Heading */}
        <div style={s.headingWrap}>
          {['CLINIC', 'DACER'].map((word, wi) => (
            <div key={word} style={s.wordLine}>
              {word.split('').map((char, ci) => (
                <motion.span key={ci} style={s.heroChar}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.9 + wi * 0.12 + ci * 0.04, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p style={s.tagline}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 0.7 }}>
          Centro Integral de Recuperación
          <br />
          <span style={s.taglineAccent}>Atención personalizada · Resultados reales</span>
        </motion.p>

        {/* CTAs */}
        <motion.div style={s.ctaRow}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.6 }}>
          <motion.a href="#servicios" style={s.ctaPrimary}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 28px rgba(0,155,222,0.45)' }}
            whileTap={{ scale: 0.97 }}>
            Ver Servicios
          </motion.a>
          <motion.a href="#contacto" style={s.ctaSecondary}
            whileHover={{ scale: 1.04, background: 'rgba(0,155,222,0.08)' }}
            whileTap={{ scale: 0.97 }}>
            Reservar Cita
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div style={s.stats}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 3.9, duration: 0.8 }}>
          {[
            { value: '14K+', label: 'Seguidores' },
            { value: '460+', label: 'Publicaciones' },
            { value: '6', label: 'Tratamientos' },
            { value: '100%', label: 'Personalizado' },
          ].map(stat => (
            <div key={stat.label} style={s.stat}>
              <span style={s.statValue}>{stat.value}</span>
              <span style={s.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div style={s.scrollInd}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 4.2 }}>
        <motion.div style={s.scrollLine}
          animate={{ scaleY: [0, 1, 0], y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }} />
        <span style={s.scrollText}>Scroll</span>
      </motion.div>
    </section>
  );
}

const s = {
  section: { position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '120px 24px 80px', background: '#f0f7fd' },
  bgLayer: { position: 'absolute', inset: '-20%', background: 'radial-gradient(ellipse at 25% 50%, rgba(0,155,222,0.12) 0%, transparent 60%), radial-gradient(ellipse at 75% 40%, rgba(122,170,0,0.08) 0%, transparent 55%), #f0f7fd' },
  grid: { position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,155,222,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,155,222,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' },
  orbBlue: { position: 'absolute', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,155,222,0.18) 0%, transparent 70%)', top: '-120px', left: '-120px', pointerEvents: 'none' },
  orbLime: { position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(122,170,0,0.12) 0%, transparent 70%)', bottom: '20px', right: '-60px', pointerEvents: 'none' },
  content: { position: 'relative', zIndex: 2, maxWidth: '900px', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' },
  badge: { display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 20px', background: 'rgba(255,255,255,0.85)', border: '1px solid rgba(0,155,222,0.25)', borderRadius: '100px', fontSize: '0.8rem', color: '#009bde', backdropFilter: 'blur(8px)', boxShadow: '0 2px 8px rgba(0,155,222,0.12)' },
  badgeDot: { width: '7px', height: '7px', borderRadius: '50%', background: '#7aaa00', display: 'inline-block' },
  headingWrap: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  wordLine: { display: 'flex' },
  heroChar: { fontSize: 'clamp(4rem, 11vw, 8.5rem)', fontWeight: '900', letterSpacing: '0.06em', color: '#1a2332', display: 'inline-block', lineHeight: 1 },
  tagline: { fontSize: 'clamp(1rem, 2.2vw, 1.2rem)', color: '#475569', lineHeight: 1.8, maxWidth: '500px' },
  taglineAccent: { color: '#009bde', fontSize: '0.92em', fontWeight: '500' },
  ctaRow: { display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaPrimary: { padding: '15px 38px', background: 'linear-gradient(135deg, #009bde, #007ab8)', color: '#fff', borderRadius: '10px', fontSize: '1rem', fontWeight: '600', boxShadow: '0 4px 18px rgba(0,155,222,0.35)' },
  ctaSecondary: { padding: '15px 38px', background: 'rgba(255,255,255,0.8)', color: '#1a2332', borderRadius: '10px', fontSize: '1rem', fontWeight: '600', border: '1.5px solid #e2eaf3', backdropFilter: 'blur(8px)' },
  stats: { display: 'flex', gap: '48px', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '32px', borderTop: '1px solid rgba(0,100,180,0.12)', width: '100%' },
  stat: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' },
  statValue: { fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '800', color: '#009bde', lineHeight: 1 },
  statLabel: { fontSize: '0.72rem', color: '#94a3b8', letterSpacing: '0.12em', textTransform: 'uppercase' },
  scrollInd: { position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', zIndex: 2 },
  scrollLine: { width: '1.5px', height: '30px', background: 'linear-gradient(to bottom, #009bde, transparent)', transformOrigin: 'top' },
  scrollText: { fontSize: '0.68rem', color: '#94a3b8', letterSpacing: '0.2em', textTransform: 'uppercase' },
};
