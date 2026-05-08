import React from 'react';
import { buildWhatsAppUrl } from '../data/business';

const services = [
  ['Entrenamiento funcional', 'Trabajo integral de fuerza, coordinación y resistencia.'],
  ['Fuerza y musculación', 'Planificación de cargas y progresiones para ver avances concretos.'],
  ['Acondicionamiento físico', 'Más energía y capacidad para entrenar mejor y vivir mejor.'],
  ['Movilidad y complementario', 'Bloques complementarios según objetivo y nivel.'],
];

export default function Services() {
  return (
    <section id="entrenamientos" className="section alt services-cards">
      <div className="section-head">
        <h2>Entrenamientos destacados</h2>
        <a className="btn btn-ghost" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">Consultar cupos</a>
      </div>
      <div className="grid">
        {services.map(([name, desc]) => (
          <article className="card" key={name}>
            <h3>{name}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
