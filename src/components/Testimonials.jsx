import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Tania Rendon',
    text: 'Lo que mi espalda necesitaba, se los juro 😭❤️ Deja de ignorar esas contracturas. El equipo de Clinic Dacer es increíble, totalmente recomendados.',
    rating: 5,
    treatment: 'Masaje Terapéutico',
  },
  {
    name: 'Paciente satisfecho',
    text: 'En Clinic Dacer están comprometidos con tu recuperación. Me trataron con electroterapia y los resultados fueron inmediatos. Atención personalizada de primer nivel.',
    rating: 5,
    treatment: 'Electroterapia',
  },
  {
    name: 'María G.',
    text: 'El drenaje linfático cambió mi vida. Después de meses con retención de líquidos, por fin me siento ligera. El equipo es muy profesional y atento.',
    rating: 5,
    treatment: 'Drenaje Linfático',
  },
  {
    name: 'Carlos V.',
    text: 'Vine con una contractura severa en el cuello. Después de 3 sesiones de cupping y masaje, me siento como nuevo. ¡Gracias Clinic Dacer!',
    rating: 5,
    treatment: 'Cupping + Masaje',
  },
  {
    name: 'Andrea M.',
    text: 'La presoterapia es espectacular después del ejercicio. Recuperación increíblemente rápida. Ya no puedo imaginar mi rutina sin venir aquí.',
    rating: 5,
    treatment: 'Presoterapia',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} style={styles.section}>
      <div style={styles.bgAccent} />
      <div style={styles.container}>
        {/* Header */}
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span style={styles.eyebrow}>Lo que dicen nuestros pacientes</span>
          <h2 style={styles.title}>Testimonios</h2>
          <div style={styles.underline} />
        </motion.div>

        {/* Stars row */}
        <motion.div
          style={styles.starsRow}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {'★★★★★'.split('').map((s, i) => (
            <motion.span
              key={i}
              style={styles.starBig}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
            >
              {s}
            </motion.span>
          ))}
        </motion.div>

        {/* Carousel */}
        <motion.div
          style={styles.carousel}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              style={styles.testimonialCard}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <span style={styles.quoteIcon}>"</span>
              <p style={styles.quote}>{testimonials[current].text}</p>
              <div style={styles.cardFooter}>
                <div style={styles.authorInfo}>
                  <div style={styles.authorAvatar}>
                    {testimonials[current].name[0]}
                  </div>
                  <div>
                    <div style={styles.authorName}>{testimonials[current].name}</div>
                    <div style={styles.authorTreatment}>{testimonials[current].treatment}</div>
                  </div>
                </div>
                <div style={styles.stars}>
                  {'★'.repeat(testimonials[current].rating)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots navigation */}
          <div style={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                style={{
                  ...styles.dot,
                  background: i === current ? '#009bde' : 'rgba(255,255,255,0.2)',
                  width: i === current ? '24px' : '8px',
                }}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 24px',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #0d0d0d 0%, #111111 100%)',
  },
  bgAccent: {
    position: 'absolute',
    right: '-200px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0,155,222,0.07) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  eyebrow: {
    display: 'inline-block',
    fontSize: '0.75rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: '#b6c72b',
    marginBottom: '16px',
    padding: '6px 16px',
    background: 'rgba(182,199,43,0.1)',
    borderRadius: '100px',
    border: '1px solid rgba(182,199,43,0.2)',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '800',
    color: '#ffffff',
  },
  underline: {
    width: '60px',
    height: '3px',
    background: 'linear-gradient(90deg, #009bde, #b6c72b)',
    margin: '20px auto 0',
    borderRadius: '2px',
  },
  starsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '4px',
    marginBottom: '40px',
  },
  starBig: {
    fontSize: '1.8rem',
    color: '#b6c72b',
  },
  carousel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  testimonialCard: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '20px',
    padding: '48px',
    position: 'relative',
    overflow: 'hidden',
  },
  quoteIcon: {
    position: 'absolute',
    top: '20px',
    left: '30px',
    fontSize: '6rem',
    lineHeight: 1,
    color: 'rgba(0,155,222,0.12)',
    fontFamily: 'Georgia, serif',
  },
  quote: {
    fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
    color: 'rgba(255,255,255,0.82)',
    lineHeight: 1.8,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: '32px',
    position: 'relative',
    zIndex: 1,
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '16px',
  },
  authorInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  authorAvatar: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #009bde, #007ab8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#ffffff',
    flexShrink: 0,
  },
  authorName: {
    fontWeight: '600',
    color: '#ffffff',
    fontSize: '0.95rem',
  },
  authorTreatment: {
    fontSize: '0.78rem',
    color: '#009bde',
    letterSpacing: '0.05em',
  },
  stars: {
    color: '#b6c72b',
    fontSize: '1.1rem',
    letterSpacing: '2px',
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    alignItems: 'center',
  },
  dot: {
    height: '8px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};
