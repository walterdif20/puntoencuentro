import React from 'react';

const igEmbeds = [
  'https://www.instagram.com/p/C4GpwvguLq2/embed',
  'https://www.instagram.com/p/C4E4Q_GOlrW/embed',
  'https://www.instagram.com/p/C31RQ5tOq9N/embed',
];

export default function GalleryMock() {
  return (
    <section className="section split ig-section">
      <div>
        <p className="eyebrow">Desde Instagram</p>
        <h2>El día a día real de Punto Entrenamiento</h2>
        <p className="lead">Integramos publicaciones del Instagram oficial para mostrar el estilo de entrenamiento, la comunidad y el ritmo del espacio.</p>
        <a className="btn btn-ghost" href="https://www.instagram.com/punto_entrenamiento/" target="_blank" rel="noreferrer">Ver perfil completo</a>
      </div>
      <div className="ig-grid">
        {igEmbeds.map((src) => (
          <div className="ig-card" key={src}>
            <iframe title={`Publicación ${src}`} src={src} loading="lazy" allowTransparency="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
