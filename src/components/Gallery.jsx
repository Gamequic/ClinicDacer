import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { img } from '../imgUrl';

const posts = [
  { src: img('post2.jpg'), alt: 'QUIZZ TIME con Clinic Dacer' },
  { src: img('post3.jpg'), alt: 'Clinic Dacer en Monterrey, Nuevo León' },
  { src: img('post4.jpg'), alt: 'Clinic Dacer en Monterrey, Nuevo León' },
  { src: img('post5.jpg'), alt: 'Clinic Dacer en Monterrey, Nuevo León' },
  { src: img('post6.jpg'), alt: 'Clinic Dacer en Monterrey, Nuevo León' },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="galeria" ref={ref} style={s.section}>
      <div style={s.container}>
        <motion.div style={s.header}
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          <span style={s.eyebrow}>Instagram @clinicdacer</span>
          <h2 style={s.title}>Nuestra Galería</h2>
          <p style={s.subtitle}>Capturas reales de nuestras terapias, instalaciones y resultados. Únete a nuestra comunidad.</p>
          <div style={s.underline} />
        </motion.div>

        <div style={s.grid} className="gallery-grid">
          {posts.map((post, i) => (
            <motion.div key={i}
              style={{ ...s.item, ...(i === 0 ? s.bigItem : {}) }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              onClick={() => setLightbox(i)}>
              <img src={post.src} alt={post.alt} style={s.img} loading="lazy" />
              <motion.div style={s.overlay} initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
                <span style={s.overlayIcon}>🔍</span>
                <span style={s.overlayText}>Ver más</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div style={s.ctaWrap}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}>
          <motion.a href="https://www.instagram.com/clinicdacer/" target="_blank" rel="noopener noreferrer"
            style={s.igBtn}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 28px rgba(0,155,222,0.35)' }}
            whileTap={{ scale: 0.97 }}>
            📸 Ver más en Instagram
          </motion.a>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div style={s.lightbox} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
            <motion.img src={posts[lightbox].src} alt={posts[lightbox].alt} style={s.lbImg}
              initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3 }} onClick={e => e.stopPropagation()} />
            <button style={s.closeBtn} onClick={() => setLightbox(null)}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const s = {
  section: { padding: '110px 24px', background: '#ffffff' },
  container: { maxWidth: '1280px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: '56px' },
  eyebrow: { display: 'inline-block', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#009bde', marginBottom: '14px', padding: '5px 16px', background: '#e8f5fd', borderRadius: '100px', border: '1px solid rgba(0,155,222,0.2)', fontWeight: '600' },
  title: { fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: '800', color: '#1a2332', marginBottom: '14px' },
  subtitle: { fontSize: '1rem', color: '#64748b', maxWidth: '460px', margin: '0 auto', lineHeight: 1.75 },
  underline: { width: '50px', height: '3px', background: 'linear-gradient(90deg, #009bde, #7aaa00)', margin: '20px auto 0', borderRadius: '2px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto', gap: '14px' },
  item: { position: 'relative', borderRadius: '14px', overflow: 'hidden', cursor: 'pointer', aspectRatio: '1/1', background: '#f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
  bigItem: { gridColumn: '1/2', gridRow: '1/3', aspectRatio: '1/2' },
  img: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' },
  overlay: { position: 'absolute', inset: 0, background: 'rgba(0,155,222,0.78)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' },
  overlayIcon: { fontSize: '1.8rem' },
  overlayText: { fontSize: '0.82rem', color: '#fff', fontWeight: '600', letterSpacing: '0.08em' },
  ctaWrap: { textAlign: 'center', marginTop: '44px' },
  igBtn: { display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '15px 34px', background: 'linear-gradient(135deg, #009bde, #007ab8)', color: '#fff', borderRadius: '10px', fontWeight: '600', fontSize: '1rem', boxShadow: '0 4px 18px rgba(0,155,222,0.28)' },
  lightbox: { position: 'fixed', inset: 0, zIndex: 9000, background: 'rgba(0,0,0,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' },
  lbImg: { maxWidth: '80vw', maxHeight: '85vh', borderRadius: '14px', objectFit: 'contain', boxShadow: '0 0 60px rgba(0,0,0,0.4)' },
  closeBtn: { position: 'absolute', top: '24px', right: '24px', width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', backdropFilter: 'blur(8px)' },
};
