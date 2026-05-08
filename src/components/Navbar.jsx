import React from 'react';
import { useState } from 'react';
import { buildWhatsAppUrl } from '../data/business';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#entrenamientos', label: 'Entrenamientos' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto', label: 'Contacto' },
];

const logoUrl = 'https://instagram.fmdq7-1.fna.fbcdn.net/v/t51.2885-19/491509211_4106070932960104_6793578928203671923_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fmdq7-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2gGnb8yT9G_UVY49wcHmrxqYOAmxA16uViZOB_Nm5ItJQ26bSjxoaaMGdi04ZEr1PYI&_nc_ohc=jLjIfUUcWW4Q7kNvwEerI3B&_nc_gid=itcD8tezZE0pgw9nlSpk9Q&edm=APoiHPcBAAAA&ccb=7-5&oh=00_Af4F2fZnBLCH-sCngdid4WP-uhfdwvEL3KvF1cyE2PIonw&oe=6A03E831&_nc_sid=22de04';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <a className="brand brand-with-logo" href="#inicio">
        <img src={logoUrl} alt="Logo Punto Entrenamiento" />
        <span>Punto Entrenamiento</span>
      </a>
      <button className="menu-btn" aria-label="Abrir menú" onClick={() => setOpen(!open)}>☰</button>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
      </div>
      <a className="btn btn-sm" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
    </nav>
  );
}
