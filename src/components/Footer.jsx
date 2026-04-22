import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.topLine} />
      <div style={styles.container} className="footer-inner">
        {/* Brand */}
        <div style={styles.brand}>
          <img src="/images/logo.jpg" alt="Clinic Dacer" style={styles.logo} />
          <div>
            <div style={styles.brandName}>CLINIC DACER</div>
            <div style={styles.brandTagline}>Centro Integral de Recuperación</div>
          </div>
        </div>

        {/* Links */}
        <div style={styles.nav} className="footer-nav">
          {[
            { label: 'Inicio', href: '#hero' },
            { label: 'Servicios', href: '#servicios' },
            { label: 'Nosotros', href: '#nosotros' },
            { label: 'Galería', href: '#galeria' },
            { label: 'Contacto', href: '#contacto' },
          ].map(link => (
            <a key={link.label} href={link.href} style={styles.navLink}>{link.label}</a>
          ))}
        </div>

        {/* Social */}
        <div style={styles.social} className="footer-social">
          <motion.a
            href="https://www.instagram.com/clinicdacer/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.igLink}
            whileHover={{ scale: 1.05, color: '#009bde' }}
          >
            <span style={styles.igIcon}>📸</span>
            @clinicdacer
          </motion.a>
          <div style={styles.address}>
            Lacandon #215, Monterrey, N.L.
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={styles.bottom}>
        <div style={styles.bottomInner}>
          <span style={styles.copy}>© 2024 Clinic Dacer. Todos los derechos reservados.</span>
          <span style={styles.copy}>Hecho por <a href="https://calleros.me" target="_blank" rel="noopener noreferrer" style={styles.credit}>calleros.me</a></span>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#080808',
    position: 'relative',
  },
  topLine: {
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(0,155,222,0.4), rgba(182,199,43,0.4), transparent)',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '60px 24px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '40px',
    alignItems: 'start',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  logo: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid rgba(0,155,222,0.3)',
  },
  brandName: {
    fontSize: '0.9rem',
    fontWeight: '800',
    letterSpacing: '0.2em',
    color: '#ffffff',
  },
  brandTagline: {
    fontSize: '0.72rem',
    color: 'rgba(255,255,255,0.45)',
    marginTop: '3px',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'center',
  },
  navLink: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.55)',
    transition: 'color 0.2s',
    letterSpacing: '0.05em',
  },
  social: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '12px',
  },
  igLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '600',
    transition: 'color 0.2s',
  },
  igIcon: {
    fontSize: '1.1rem',
  },
  address: {
    fontSize: '0.78rem',
    color: 'rgba(255,255,255,0.35)',
    textAlign: 'right',
  },
  bottom: {
    borderTop: '1px solid rgba(255,255,255,0.06)',
  },
  bottomInner: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '20px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
  },
  copy: {
    fontSize: '0.72rem',
    color: 'rgba(255,255,255,0.3)',
    letterSpacing: '0.05em',
  },
  credit: {
    color: '#009bde',
    textDecoration: 'none',
    fontWeight: '500',
  },
};
