import React from 'react';
import { business, buildWhatsAppUrl } from '../data/business';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>{business.name}</h3>
          <p>Entrenamiento funcional, fuerza y musculación con seguimiento en Necochea.</p>
        </div>
        <div>
          <h4>Contacto</h4>
          <p>{business.shortAddress}</p>
          <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <div>
          <h4>Redes</h4>
          <div className="row">
            <a href={business.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={business.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </div>
      <small>© {new Date().getFullYear()} Punto Entrenamiento</small>
    </footer>
  );
}
