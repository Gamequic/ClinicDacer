import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const posts = [
  {
    src: '/images/post2.jpg',
    alt: 'QUIZZ TIME con Clinic Dacer — Participa en nuestra dinámica',
  },
  {
    src: '/images/post3.jpg',
    alt: 'Foto de Clinic Dacer en Monterrey, Nuevo León',
  },
  {
    src: '/images/post4.jpg',
    alt: 'Foto de Clinic Dacer en Monterrey, Nuevo León',
  },
  {
    src: '/images/post5.jpg',
    alt: 'Foto de Clinic Dacer en Monterrey, Nuevo León',
  },
  {
    src: '/images/post6.jpg',
    alt: 'Foto de Clinic Dacer en Monterrey, Nuevo León',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="galeria" ref={ref} style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span style={styles.eyebrow}>Instagram @clinicdacer</span>
          <h2 style={styles.title}>Nuestra Galería</h2>
          <p style={styles.subtitle}>
            Capturas reales de nuestras terapias, instalaciones y resultados. Únete a nuestra comunidad.
          </p>
          <div style={styles.underline} />
        </motion.div>

        {/* Mosaic grid */}
        <div style={styles.mosaicGrid} className="gallery-grid">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              style={{
                ...styles.mosaicItem,
                ...(i === 0 ? styles.bigItem : {}),
              }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              onClick={() => setLightbox(i)}
            >
              <img src={post.src} alt={post.alt} style={styles.img} loading="lazy" />
              <motion.div
                style={styles.overlay}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <span style={styles.overlayIcon}>🔍</span>
                <span style={styles.overlayText}>Ver más</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          style={styles.ctaWrap}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.a
            href="https://www.instagram.com/clinicdacer/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.igBtn}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,155,222,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span>📸</span> Ver más en Instagram
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            style={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={posts[lightbox].src}
              alt={posts[lightbox].alt}
              style={styles.lightboxImg}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
            />
            <button
              style={styles.closeBtn}
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const styles = {
  section: {
    padding: '120px 24px',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '64px',
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
    maxWidth: '480px',
    margin: '0 auto',
    lineHeight: 1.7,
  },
  underline: {
    width: '60px',
    height: '3px',
    background: 'linear-gradient(90deg, #009bde, #b6c72b)',
    margin: '24px auto 0',
    borderRadius: '2px',
  },
  mosaicGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'auto auto',
    gap: '16px',
  },
  mosaicItem: {
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    aspectRatio: '1 / 1',
    background: '#1a1a1a',
  },
  bigItem: {
    gridColumn: '1 / 2',
    gridRow: '1 / 3',
    aspectRatio: '1 / 2',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,155,222,0.75)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'opacity 0.3s',
  },
  overlayIcon: {
    fontSize: '2rem',
  },
  overlayText: {
    fontSize: '0.85rem',
    color: '#ffffff',
    fontWeight: '600',
    letterSpacing: '0.1em',
  },
  ctaWrap: {
    textAlign: 'center',
    marginTop: '48px',
  },
  igBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '16px 36px',
    background: 'linear-gradient(135deg, #009bde, #007ab8)',
    color: '#ffffff',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    boxShadow: '0 4px 20px rgba(0,155,222,0.3)',
    transition: 'all 0.2s',
  },
  lightbox: {
    position: 'fixed',
    inset: 0,
    zIndex: 9000,
    background: 'rgba(0,0,0,0.92)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  },
  lightboxImg: {
    maxWidth: '80vw',
    maxHeight: '85vh',
    borderRadius: '12px',
    objectFit: 'contain',
    boxShadow: '0 0 60px rgba(0,155,222,0.3)',
  },
  closeBtn: {
    position: 'absolute',
    top: '24px',
    right: '24px',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.1)',
    color: '#ffffff',
    fontSize: '1.1rem',
    border: '1px solid rgba(255,255,255,0.2)',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    transition: 'background 0.2s',
  },
};
