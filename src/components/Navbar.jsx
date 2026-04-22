import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      style={{
        ...styles.nav,
        background: scrolled ? 'rgba(13,13,13,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottomColor: scrolled ? 'rgba(0,155,222,0.15)' : 'transparent',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div style={styles.inner}>
        {/* Logo */}
        <a href="#hero" style={styles.logoLink}>
          <img src="/images/logo.jpg" alt="Clinic Dacer" style={styles.navLogo} />
          <span style={styles.navBrand}>CLINIC DACER</span>
        </a>

        {/* Desktop links */}
        <div style={styles.links} className="nav-links">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              style={styles.link}
              whileHover={{ color: '#009bde' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7 + i * 0.08 }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#contacto"
            style={styles.ctaBtn}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,155,222,0.5)' }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
          >
            Reservar Cita
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button style={styles.hamburger} className="nav-hamburger" onClick={() => setMenuOpen(o => !o)}>
          <span style={{ ...styles.bar, ...(menuOpen ? styles.barTop : {}) }} />
          <span style={{ ...styles.bar, ...(menuOpen ? styles.barMid : {}) }} />
          <span style={{ ...styles.bar, ...(menuOpen ? styles.barBot : {}) }} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            style={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                style={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" style={styles.mobileCta} onClick={() => setMenuOpen(false)}>
              Reservar Cita
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderBottom: '1px solid transparent',
    transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
  },
  inner: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    height: '72px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  navLogo: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid rgba(0,155,222,0.5)',
  },
  navBrand: {
    fontSize: '0.95rem',
    fontWeight: '700',
    letterSpacing: '0.2em',
    color: '#ffffff',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    '@media (maxWidth: 768px)': { display: 'none' },
  },
  link: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.75)',
    transition: 'color 0.2s',
    letterSpacing: '0.05em',
    fontWeight: '500',
  },
  ctaBtn: {
    padding: '10px 24px',
    background: 'linear-gradient(135deg, #009bde, #007ab8)',
    color: '#ffffff',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '0.05em',
    transition: 'all 0.2s',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: 'none',
    padding: '8px',
    '@media (maxWidth: 768px)': { display: 'flex' },
  },
  bar: {
    width: '24px',
    height: '2px',
    background: '#ffffff',
    borderRadius: '2px',
    transition: 'transform 0.3s',
  },
  barTop: { transform: 'translateY(7px) rotate(45deg)' },
  barMid: { opacity: 0 },
  barBot: { transform: 'translateY(-7px) rotate(-45deg)' },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 24px',
    background: 'rgba(13,13,13,0.98)',
    borderTop: '1px solid rgba(0,155,222,0.15)',
    overflow: 'hidden',
  },
  mobileLink: {
    padding: '14px 0',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.8)',
  },
  mobileCta: {
    marginTop: '16px',
    padding: '14px 24px',
    background: 'linear-gradient(135deg, #009bde, #007ab8)',
    color: '#ffffff',
    borderRadius: '6px',
    textAlign: 'center',
    fontWeight: '600',
  },
};
