import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { img } from '../imgUrl';

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.nav
      style={{
        ...s.nav,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,100,180,0.10)' : 'none',
        borderBottomColor: scrolled ? '#e2eaf3' : 'transparent',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div style={s.inner}>
        <a href="#hero" style={s.brand}>
          <img src={img('logo.jpg')} alt="Clinic Dacer" style={s.logo} />
          <span style={s.brandName}>CLINIC DACER</span>
        </a>

        <div style={s.links} className="nav-links">
          {links.map((l, i) => (
            <motion.a key={l.label} href={l.href} style={s.link}
              whileHover={{ color: '#009bde' }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7 + i * 0.07 }}>
              {l.label}
            </motion.a>
          ))}
          <motion.a href="#contacto" style={s.cta}
            whileHover={{ scale: 1.04, boxShadow: '0 4px 16px rgba(0,155,222,0.35)' }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.1 }}>
            Reservar Cita
          </motion.a>
        </div>

        <button style={s.burger} className="nav-hamburger" onClick={() => setOpen(o => !o)}>
          <span style={{ ...s.bar, ...(open ? s.b1 : {}) }} />
          <span style={{ ...s.bar, ...(open ? s.b2 : {}) }} />
          <span style={{ ...s.bar, ...(open ? s.b3 : {}) }} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div style={s.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}>
            {links.map(l => (
              <a key={l.label} href={l.href} style={s.mobileLink} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="#contacto" style={s.mobileCta} onClick={() => setOpen(false)}>Reservar Cita</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

const s = {
  nav: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, borderBottom: '1px solid transparent', backdropFilter: 'blur(16px)', transition: 'all 0.3s' },
  inner: { maxWidth: '1280px', margin: '0 auto', padding: '0 24px', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  brand: { display: 'flex', alignItems: 'center', gap: '10px' },
  logo: { width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(0,155,222,0.35)' },
  brandName: { fontSize: '0.9rem', fontWeight: '800', letterSpacing: '0.18em', color: '#1a2332' },
  links: { display: 'flex', alignItems: 'center', gap: '28px' },
  link: { fontSize: '0.88rem', color: '#475569', fontWeight: '500', transition: 'color 0.2s', letterSpacing: '0.02em' },
  cta: { padding: '10px 22px', background: 'linear-gradient(135deg, #009bde, #007ab8)', color: '#fff', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', boxShadow: '0 2px 10px rgba(0,155,222,0.25)' },
  burger: { display: 'none', flexDirection: 'column', gap: '5px', background: 'none', padding: '8px' },
  bar: { width: '22px', height: '2px', background: '#1a2332', borderRadius: '2px', transition: 'transform 0.3s' },
  b1: { transform: 'translateY(7px) rotate(45deg)' },
  b2: { opacity: 0 },
  b3: { transform: 'translateY(-7px) rotate(-45deg)' },
  mobileMenu: { background: 'rgba(255,255,255,0.98)', borderTop: '1px solid #e2eaf3', padding: '16px 24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
  mobileLink: { padding: '14px 0', borderBottom: '1px solid #f1f5f9', fontSize: '1rem', color: '#475569' },
  mobileCta: { marginTop: '16px', padding: '14px 24px', background: 'linear-gradient(135deg, #009bde, #007ab8)', color: '#fff', borderRadius: '8px', textAlign: 'center', fontWeight: '600' },
};
