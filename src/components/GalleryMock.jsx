import React from 'react';

const galleryImages = [
  '/assets/gallery/punto-01.jpg',
  '/assets/gallery/punto-02.jpg',
  '/assets/gallery/punto-03.jpg',
  '/assets/gallery/punto-04.jpg',
];

export default function GalleryMock() {
  return (
    <section className="section split ig-section">
      <div>
        <p className="eyebrow">Desde Instagram</p>
        <h2>El día a día real de Punto Entrenamiento</h2>
        <p className="lead">Dejamos una galería local lista para que puedas cargar tus fotos del Instagram sin depender de embeds externos.</p>
        <a className="btn btn-ghost" href="https://www.instagram.com/punto_entrenamiento/" target="_blank" rel="noreferrer">Ver perfil completo</a>
      </div>
      <div className="ig-grid">
        {galleryImages.map((src, index) => (
          <figure className="ig-card" key={src}>
            <img src={src} alt={`Entrenamiento en Punto ${index + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
