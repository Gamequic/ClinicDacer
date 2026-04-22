import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { img } from '../imgUrl';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="nosotros" ref={ref} style={s.section}>
      <div style={s.blob} />
      <div style={s.container} className="about-grid">

        {/* Left */}
        <motion.div style={s.left}
          initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
          <div style={s.imgStack}>
            <motion.div style={s.ring1} animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }} />
            <motion.div style={s.ring2} animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }} />
            <img src={img('logo.jpg')} alt="Clinic Dacer" style={s.mainImg} />
            <motion.div style={s.badge}
              initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}>
              <span style={s.badgeVal}>14K+</span>
              <span style={s.badgeLbl}>Comunidad</span>
            </motion.div>
          </div>

          <div style={s.trustCol}>
            {[
              { icon: '✅', text: 'Resultados comprobados' },
              { icon: '🏥', text: 'Atención profesional' },
              { icon: '📍', text: 'Monterrey, N.L.' },
            ].map(item => (
              <div key={item.text} style={s.trustItem}>
                <span>{item.icon}</span>
                <span style={s.trustText}>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div style={s.right}
          initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
          <span style={s.eyebrow}>Quiénes Somos</span>
          <h2 style={s.title}>Tu bienestar es<br /><span style={s.titleGrad}>nuestra prioridad</span></h2>
          <p style={s.body}>En <strong style={{ color: '#009bde' }}>Clinic Dacer</strong> somos un centro integral de recuperación dedicado a devolverte el movimiento, la vitalidad y el bienestar que mereces. Con atención completamente personalizada, cada tratamiento se adapta a tus necesidades específicas.</p>
          <p style={s.body}>Nuestro equipo combina técnicas tradicionales con tecnología moderna para ofrecerte los mejores resultados en masajes, electroterapia, cupping, drenaje linfático y presoterapia.</p>

          <div style={s.teamBox}>
            <div style={s.teamLabel}>Equipo especialista:</div>
            <div style={s.teamTags}>
              {['Fisioterapeutas', 'Nutriología @alehdz', 'Psicología @monicontreras'].map(t => (
                <span key={t} style={s.teamTag}>{t}</span>
              ))}
            </div>
          </div>

          <div style={s.values}>
            {[{ icon: '🎯', label: 'Atención Personalizada' }, { icon: '🔬', label: 'Técnicas Avanzadas' }, { icon: '❤️', label: 'Cuidado Integral' }].map(v => (
              <div key={v.label} style={s.value}>
                <span>{v.icon}</span>
                <span style={s.valueLabel}>{v.label}</span>
              </div>
            ))}
          </div>

          <motion.a href="https://www.instagram.com/clinicdacer/" target="_blank" rel="noopener noreferrer" style={s.igBtn}
            whileHover={{ scale: 1.03, boxShadow: '0 6px 22px rgba(122,170,0,0.3)' }}
            whileTap={{ scale: 0.97 }}>
            📸 Ver en Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

const s = {
  section: { position: 'relative', padding: '110px 24px', background: '#f8fafc', overflow: 'hidden' },
  blob: { position: 'absolute', left: '-200px', top: '50%', transform: 'translateY(-50%)', width: '550px', height: '550px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(122,170,0,0.07) 0%, transparent 70%)', pointerEvents: 'none' },
  container: { maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', position: 'relative', zIndex: 1 },
  left: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' },
  imgStack: { position: 'relative', width: '260px', height: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  ring1: { position: 'absolute', inset: '-24px', borderRadius: '50%', border: '1.5px dashed rgba(0,155,222,0.25)' },
  ring2: { position: 'absolute', inset: '-48px', borderRadius: '50%', border: '1px dashed rgba(122,170,0,0.2)' },
  mainImg: { width: '220px', height: '220px', borderRadius: '50%', objectFit: 'cover', border: '4px solid rgba(0,155,222,0.3)', boxShadow: '0 8px 40px rgba(0,155,222,0.18)' },
  badge: { position: 'absolute', bottom: '-8px', right: '-8px', background: 'linear-gradient(135deg, #7aaa00, #5e8500)', borderRadius: '12px', padding: '12px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 16px rgba(122,170,0,0.35)' },
  badgeVal: { fontSize: '1.4rem', fontWeight: '800', color: '#fff', lineHeight: 1 },
  badgeLbl: { fontSize: '0.68rem', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600' },
  trustCol: { display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' },
  trustItem: { display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', background: '#ffffff', borderRadius: '10px', border: '1px solid #e2eaf3', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' },
  trustText: { fontSize: '0.85rem', color: '#475569' },
  right: { display: 'flex', flexDirection: 'column', gap: '18px' },
  eyebrow: { display: 'inline-block', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7aaa00', padding: '5px 16px', background: '#f2f8e6', borderRadius: '100px', border: '1px solid rgba(122,170,0,0.22)', width: 'fit-content', fontWeight: '600' },
  title: { fontSize: 'clamp(1.9rem, 3.5vw, 2.7rem)', fontWeight: '800', color: '#1a2332', lineHeight: 1.18 },
  titleGrad: { background: 'linear-gradient(135deg, #009bde, #7aaa00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
  body: { fontSize: '0.93rem', color: '#64748b', lineHeight: 1.82 },
  teamBox: { padding: '18px 20px', background: '#e8f5fd', borderRadius: '12px', border: '1px solid rgba(0,155,222,0.18)' },
  teamLabel: { fontSize: '0.7rem', color: '#009bde', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px', fontWeight: '700' },
  teamTags: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
  teamTag: { padding: '4px 12px', background: 'rgba(0,155,222,0.1)', borderRadius: '100px', fontSize: '0.78rem', color: '#007ab8', border: '1px solid rgba(0,155,222,0.2)', fontWeight: '500' },
  values: { display: 'flex', gap: '12px', flexWrap: 'wrap' },
  value: { display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 16px', background: '#ffffff', borderRadius: '8px', border: '1px solid #e2eaf3', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' },
  valueLabel: { fontSize: '0.8rem', color: '#475569', fontWeight: '500' },
  igBtn: { display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 26px', background: 'linear-gradient(135deg, rgba(122,170,0,0.12), rgba(122,170,0,0.06))', border: '1.5px solid rgba(122,170,0,0.35)', borderRadius: '10px', color: '#5e8500', fontWeight: '600', fontSize: '0.9rem', width: 'fit-content', transition: 'all 0.2s' },
};
