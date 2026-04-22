import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    icon: '🤲',
    title: 'Masajes Terapéuticos',
    desc: 'Técnicas especializadas de masaje para aliviar tensión muscular, reducir el estrés y promover la relajación profunda del cuerpo.',
    color: '#009bde',
    gradient: 'linear-gradient(135deg, rgba(0,155,222,0.15), rgba(0,155,222,0.03))',
    border: 'rgba(0,155,222,0.3)',
  },
  {
    icon: '⚡',
    title: 'Electroterapia',
    desc: 'Tratamiento con corrientes eléctricas de baja y media frecuencia para aliviar el dolor, reducir inflamación y acelerar la recuperación.',
    color: '#b6c72b',
    gradient: 'linear-gradient(135deg, rgba(182,199,43,0.15), rgba(182,199,43,0.03))',
    border: 'rgba(182,199,43,0.3)',
  },
  {
    icon: '🫧',
    title: 'Cupping (Ventosas)',
    desc: 'Terapia milenaria que utiliza ventosas para mejorar la circulación, liberar toxinas y tratar contracturas profundas del tejido.',
    color: '#009bde',
    gradient: 'linear-gradient(135deg, rgba(0,155,222,0.15), rgba(0,155,222,0.03))',
    border: 'rgba(0,155,222,0.3)',
  },
  {
    icon: '💪',
    title: 'Contracturas Musculares',
    desc: 'Tratamiento especializado para la liberación de contracturas, puntos gatillo y tensión muscular crónica con técnicas avanzadas.',
    color: '#b6c72b',
    gradient: 'linear-gradient(135deg, rgba(182,199,43,0.15), rgba(182,199,43,0.03))',
    border: 'rgba(182,199,43,0.3)',
  },
  {
    icon: '🌊',
    title: 'Drenaje Linfático',
    desc: 'Técnica suave y rítmica que estimula el sistema linfático, reduce edemas, mejora la circulación y fortalece el sistema inmune.',
    color: '#009bde',
    gradient: 'linear-gradient(135deg, rgba(0,155,222,0.15), rgba(0,155,222,0.03))',
    border: 'rgba(0,155,222,0.3)',
  },
  {
    icon: '🩺',
    title: 'Presoterapia',
    desc: 'Compresión neumática secuencial que mejora la circulación, reduce retención de líquidos y acelera la recuperación muscular post-ejercicio.',
    color: '#b6c72b',
    gradient: 'linear-gradient(135deg, rgba(182,199,43,0.15), rgba(182,199,43,0.03))',
    border: 'rgba(182,199,43,0.3)',
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicios" ref={ref} style={styles.section}>
      {/* Background accent */}
      <div style={styles.bgAccent} />

      <div style={styles.container}>
        {/* Section header */}
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span style={styles.eyebrow}>Lo que hacemos</span>
          <h2 style={styles.title}>Nuestros Tratamientos</h2>
          <p style={styles.subtitle}>
            Cada terapia está diseñada para tu recuperación integral, combinando técnicas tradicionales
            con tecnología de vanguardia.
          </p>
          <div style={styles.titleUnderline} />
        </motion.div>

        {/* Services grid */}
        <div style={styles.grid} className="services-grid">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ svc, index, inView }) {
  const isHovered = useRef(false);

  return (
    <motion.div
      style={{
        ...styles.card,
        background: svc.gradient,
        borderColor: 'rgba(255,255,255,0.06)',
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        scale: 1.03,
        borderColor: svc.border,
        boxShadow: `0 8px 40px ${svc.color}22`,
        y: -4,
      }}
    >
      {/* Icon */}
      <div style={{ ...styles.iconWrap, background: `${svc.color}18`, border: `1px solid ${svc.border}` }}>
        <span style={styles.icon}>{svc.icon}</span>
      </div>

      {/* Content */}
      <h3 style={{ ...styles.cardTitle, color: svc.color }}>{svc.title}</h3>
      <p style={styles.cardDesc}>{svc.desc}</p>

      {/* Bottom accent line */}
      <motion.div
        style={{ ...styles.cardLine, background: svc.color }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

const styles = {
  section: {
    position: 'relative',
    padding: '120px 24px',
    overflow: 'hidden',
  },
  bgAccent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '800px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0,155,222,0.04) 0%, transparent 70%)',
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
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: 1.7,
  },
  titleUnderline: {
    width: '60px',
    height: '3px',
    background: 'linear-gradient(90deg, #009bde, #b6c72b)',
    margin: '24px auto 0',
    borderRadius: '2px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  card: {
    position: 'relative',
    padding: '36px 32px',
    borderRadius: '16px',
    border: '1px solid',
    overflow: 'hidden',
    cursor: 'default',
    transition: 'all 0.3s ease',
  },
  iconWrap: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  icon: {
    fontSize: '1.6rem',
  },
  cardTitle: {
    fontSize: '1.15rem',
    fontWeight: '700',
    marginBottom: '12px',
    letterSpacing: '-0.01em',
  },
  cardDesc: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.6)',
    lineHeight: 1.7,
  },
  cardLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '2px',
    transformOrigin: 'left',
  },
};
