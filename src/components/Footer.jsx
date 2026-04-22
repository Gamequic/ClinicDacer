import { motion } from 'framer-motion';
import { img } from '../imgUrl';

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.topLine} />
      <div style={s.container} className="footer-inner">
        <div style={s.brand}>
          <img src={img('logo.jpg')} alt="Clinic Dacer" style={s.logo} />
          <div>
            <div style={s.brandName}>CLINIC DACER</div>
            <div style={s.brandTagline}>Centro Integral de Recuperación</div>
          </div>
        </div>

        <div style={s.nav} className="footer-nav">
          {[
            { label: 'Inicio', href: '#hero' },
            { label: 'Servicios', href: '#servicios' },
            { label: 'Nosotros', href: '#nosotros' },
            { label: 'Galería', href: '#galeria' },
            { label: 'Contacto', href: '#contacto' },
          ].map(l => (
            <a key={l.label} href={l.href} style={s.navLink}>{l.label}</a>
          ))}
        </div>

        <div style={s.social} className="footer-social">
          <motion.a href="https://www.instagram.com/clinicdacer/" target="_blank" rel="noopener noreferrer"
            style={s.igLink} whileHover={{ color: '#009bde' }}>
            📸 @clinicdacer
          </motion.a>
          <div style={s.address}>Lacandon #215, Monterrey, N.L.</div>
        </div>
      </div>

      <div style={s.bottom}>
        <div style={s.bottomInner}>
          <span style={s.copy}>© 2024 Clinic Dacer. Todos los derechos reservados.</span>
          <span style={s.copy}>
            Hecho por{' '}
            <a href="https://calleros.me" target="_blank" rel="noopener noreferrer" style={s.credit}>calleros.me</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

const s = {
  footer: { background: '#1a2332' },
  topLine: { height: '3px', background: 'linear-gradient(90deg, transparent, #009bde 40%, #7aaa00 60%, transparent)' },
  container: { maxWidth: '1280px', margin: '0 auto', padding: '56px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px', alignItems: 'start' },
  brand: { display: 'flex', alignItems: 'center', gap: '12px' },
  logo: { width: '46px', height: '46px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(0,155,222,0.4)' },
  brandName: { fontSize: '0.88rem', fontWeight: '800', letterSpacing: '0.2em', color: '#ffffff' },
  brandTagline: { fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', marginTop: '3px' },
  nav: { display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' },
  navLink: { fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' },
  social: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' },
  igLink: { display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', fontWeight: '600', transition: 'color 0.2s' },
  address: { fontSize: '0.76rem', color: 'rgba(255,255,255,0.35)', textAlign: 'right' },
  bottom: { borderTop: '1px solid rgba(255,255,255,0.07)' },
  bottomInner: { maxWidth: '1280px', margin: '0 auto', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' },
  copy: { fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' },
  credit: { color: '#009bde', textDecoration: 'none', fontWeight: '500' },
};
