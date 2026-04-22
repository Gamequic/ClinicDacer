import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  { icon: '🤲', title: 'Masajes Terapéuticos', desc: 'Técnicas especializadas de masaje para aliviar tensión muscular, reducir el estrés y promover la relajación profunda del cuerpo.', color: '#009bde', bg: '#e8f5fd', border: 'rgba(0,155,222,0.2)' },
  { icon: '⚡', title: 'Electroterapia', desc: 'Tratamiento con corrientes eléctricas de baja y media frecuencia para aliviar el dolor, reducir inflamación y acelerar la recuperación.', color: '#7aaa00', bg: '#f2f8e6', border: 'rgba(122,170,0,0.22)' },
  { icon: '🫧', title: 'Cupping (Ventosas)', desc: 'Terapia milenaria que utiliza ventosas para mejorar la circulación, liberar toxinas y tratar contracturas profundas del tejido.', color: '#009bde', bg: '#e8f5fd', border: 'rgba(0,155,222,0.2)' },
  { icon: '💪', title: 'Contracturas Musculares', desc: 'Tratamiento especializado para la liberación de contracturas, puntos gatillo y tensión muscular crónica con técnicas avanzadas.', color: '#7aaa00', bg: '#f2f8e6', border: 'rgba(122,170,0,0.22)' },
  { icon: '🌊', title: 'Drenaje Linfático', desc: 'Técnica suave y rítmica que estimula el sistema linfático, reduce edemas, mejora la circulación y fortalece el sistema inmune.', color: '#009bde', bg: '#e8f5fd', border: 'rgba(0,155,222,0.2)' },
  { icon: '🩺', title: 'Presoterapia', desc: 'Compresión neumática secuencial que mejora la circulación, reduce retención de líquidos y acelera la recuperación muscular post-ejercicio.', color: '#7aaa00', bg: '#f2f8e6', border: 'rgba(122,170,0,0.22)' },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="servicios" ref={ref} style={s.section}>
      <div style={s.container}>
        <motion.div style={s.header}
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          <span style={s.eyebrow}>Lo que hacemos</span>
          <h2 style={s.title}>Nuestros Tratamientos</h2>
          <p style={s.subtitle}>Cada terapia está diseñada para tu recuperación integral, combinando técnicas tradicionales con tecnología de vanguardia.</p>
          <div style={s.underline} />
        </motion.div>

        <div style={s.grid} className="services-grid">
          {services.map((svc, i) => (
            <motion.div key={svc.title} style={s.card}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, boxShadow: '0 12px 36px rgba(0,100,180,0.13)' }}>
              <div style={{ ...s.iconWrap, background: svc.bg, border: `1.5px solid ${svc.border}` }}>
                <span style={s.icon}>{svc.icon}</span>
              </div>
              <h3 style={{ ...s.cardTitle, color: svc.color }}>{svc.title}</h3>
              <p style={s.cardDesc}>{svc.desc}</p>
              <motion.div style={{ ...s.cardLine, background: svc.color }}
                initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  section: { padding: '110px 24px', background: '#ffffff' },
  container: { maxWidth: '1280px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: '64px' },
  eyebrow: { display: 'inline-block', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#009bde', marginBottom: '14px', padding: '5px 16px', background: '#e8f5fd', borderRadius: '100px', border: '1px solid rgba(0,155,222,0.2)', fontWeight: '600' },
  title: { fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: '800', color: '#1a2332', marginBottom: '14px' },
  subtitle: { fontSize: '1rem', color: '#64748b', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 },
  underline: { width: '50px', height: '3px', background: 'linear-gradient(90deg, #009bde, #7aaa00)', margin: '20px auto 0', borderRadius: '2px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' },
  card: { position: 'relative', padding: '32px 28px', borderRadius: '16px', background: '#ffffff', border: '1.5px solid #e2eaf3', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,100,180,0.06)', transition: 'all 0.25s ease' },
  iconWrap: { width: '54px', height: '54px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' },
  icon: { fontSize: '1.5rem' },
  cardTitle: { fontSize: '1.1rem', fontWeight: '700', marginBottom: '10px' },
  cardDesc: { fontSize: '0.88rem', color: '#64748b', lineHeight: 1.75 },
  cardLine: { position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', transformOrigin: 'left' },
};
