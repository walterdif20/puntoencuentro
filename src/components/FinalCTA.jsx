import React from 'react';
import { buildWhatsAppUrl } from '../data/business';

export default function FinalCTA() {
  return (
    <section id="contacto" className="section cta mid-cta">
      <h2>Reservá tu primer paso</h2>
      <p>Escribinos por WhatsApp y te proponemos un horario realista para empezar esta semana.</p>
      <a className="btn" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">Quiero empezar ahora</a>
    </section>
  );
}
