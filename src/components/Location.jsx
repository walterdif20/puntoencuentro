import React from 'react';
import { business, buildWhatsAppUrl } from '../data/business';

export default function Location() {
  return (
    <section id="ubicacion" className="section location-premium">
      <div className="location-copy">
        <p className="eyebrow">Ubicación</p>
        <h2>Estamos en Necochea, listos para recibirte</h2>
        <p>{business.fullAddress}</p>
        <ul className="hours-highlight">
          {business.hours.map((h) => <li key={h}>{h}</li>)}
        </ul>
        <div className="row">
          <a className="btn btn-ghost" href={business.mapsUrl} target="_blank" rel="noreferrer">Cómo llegar</a>
          <a className="btn" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">Consultar horarios</a>
        </div>
      </div>
      <div className="map-shell">
        <iframe title="Mapa de Punto Entrenamiento en Necochea" src="https://www.google.com/maps?q=C.%2048%202841,%20Necochea,%20Buenos%20Aires&output=embed" loading="lazy"/>
      </div>
    </section>
  );
}
