import { useState } from 'react';
import { buildWhatsAppUrl } from '../data/business';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#entrenamientos', label: 'Entrenamientos' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <a className="brand" href="#inicio">Punto Entrenamiento</a>
      <button className="menu-btn" aria-label="Abrir menú" onClick={() => setOpen(!open)}>☰</button>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
      </div>
      <a className="btn btn-sm" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
    </nav>
  );
}
