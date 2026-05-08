import React from 'react';
import { business, buildWhatsAppUrl } from '../data/business';

export default function Hero() {
  return (
    <section className="hero section hero-editorial">
      <div>
        <p className="eyebrow">Necochea · Calle 48 2841</p>
        <h1>Entrená fuerte. Movete mejor. Sentite en tu punto.</h1>
        <p className="lead">Funcional, fuerza y musculación con acompañamiento para que ganes constancia, técnica y rendimiento.</p>
        <div className="row">
          <a className="btn" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
          <a className="btn btn-ghost" href="#entrenamientos">Ver entrenamientos</a>
        </div>
      </div>
      <aside className="hours-block">
        <h3>Horarios destacados</h3>
        <ul>
          {business.hours.map((hour) => <li key={hour}>{hour}</li>)}
        </ul>
        <p>{business.tagline}</p>
      </aside>
    </section>
  );
}
