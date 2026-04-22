import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const testimonials = [
  { name: 'Tania Rendon', text: 'Lo que mi espalda necesitaba, se los juro 😭❤️ Deja de ignorar esas contracturas. El equipo de Clinic Dacer es increíble, totalmente recomendados.', rating: 5, treatment: 'Masaje Terapéutico' },
  { name: 'Paciente satisfecho', text: 'En Clinic Dacer están comprometidos con tu recuperación. Me trataron con electroterapia y los resultados fueron inmediatos. Atención personalizada de primer nivel.', rating: 5, treatment: 'Electroterapia' },
  { name: 'María G.', text: 'El drenaje linfático cambió mi vida. Después de meses con retención de líquidos, por fin me siento ligera. El equipo es muy profesional y atento.', rating: 5, treatment: 'Drenaje Linfático' },
  { name: 'Carlos V.', text: 'Vine con una contractura severa en el cuello. Después de 3 sesiones de cupping y masaje, me siento como nuevo. ¡Gracias Clinic Dacer!', rating: 5, treatment: 'Cupping + Masaje' },
  { name: 'Andrea M.', text: 'La presoterapia es espectacular después del ejercicio. Recuperación increíblemente rápida. Ya no puedo imaginar mi rutina sin venir aquí.', rating: 5, treatment: 'Presoterapia' },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={ref} style={s.section}>
      <div style={s.container}>
        <motion.div style={s.header}
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          <span style={s.eyebrow}>Lo que dicen nuestros pacientes</span>
          <h2 style={s.title}>Testimonios</h2>
          <div style={s.underline} />
        </motion.div>

        <motion.div style={s.starsRow}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}>
          {[0,1,2,3,4].map(i => (
            <motion.span key={i} style={s.star}
              initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.38 + i * 0.07 }}>★</motion.span>
          ))}
        </motion.div>

        <motion.div style={s.carousel}
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}>
          <AnimatePresence mode="wait">
            <motion.div key={current} style={s.card}
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.42 }}>
              <span style={s.quoteIcon}>"</span>
              <p style={s.quote}>{testimonials[current].text}</p>
              <div style={s.footer}>
                <div style={s.authorRow}>
                  <div style={s.avatar}>{testimonials[current].name[0]}</div>
                  <div>
                    <div style={s.name}>{testimonials[current].name}</div>
                    <div style={s.treatment}>{testimonials[current].treatment}</div>
                  </div>
                </div>
                <div style={s.stars}>{'★'.repeat(testimonials[current].rating)}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div style={s.dots}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                style={{ ...s.dot, background: i === current ? '#009bde' : '#cbd5e1', width: i === current ? '24px' : '8px' }} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const s = {
  section: { padding: '100px 24px', background: '#f8fafc' },
  container: { maxWidth: '800px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: '28px' },
  eyebrow: { display: 'inline-block', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7aaa00', marginBottom: '14px', padding: '5px 16px', background: '#f2f8e6', borderRadius: '100px', border: '1px solid rgba(122,170,0,0.22)', fontWeight: '600' },
  title: { fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: '800', color: '#1a2332' },
  underline: { width: '50px', height: '3px', background: 'linear-gradient(90deg, #009bde, #7aaa00)', margin: '18px auto 0', borderRadius: '2px' },
  starsRow: { display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '36px' },
  star: { fontSize: '1.8rem', color: '#f59e0b' },
  carousel: { display: 'flex', flexDirection: 'column', gap: '28px' },
  card: { background: '#ffffff', border: '1.5px solid #e2eaf3', borderRadius: '20px', padding: '44px', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,100,180,0.07)' },
  quoteIcon: { position: 'absolute', top: '16px', left: '28px', fontSize: '5.5rem', lineHeight: 1, color: 'rgba(0,155,222,0.08)', fontFamily: 'Georgia, serif' },
  quote: { fontSize: 'clamp(0.97rem, 1.7vw, 1.15rem)', color: '#475569', lineHeight: 1.82, fontStyle: 'italic', textAlign: 'center', marginBottom: '28px', position: 'relative', zIndex: 1 },
  footer: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' },
  authorRow: { display: 'flex', alignItems: 'center', gap: '12px' },
  avatar: { width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg, #009bde, #007ab8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: '700', color: '#fff', flexShrink: 0 },
  name: { fontWeight: '600', color: '#1a2332', fontSize: '0.92rem' },
  treatment: { fontSize: '0.76rem', color: '#009bde', letterSpacing: '0.05em' },
  stars: { color: '#f59e0b', fontSize: '1.1rem', letterSpacing: '2px' },
  dots: { display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center' },
  dot: { height: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' },
};
