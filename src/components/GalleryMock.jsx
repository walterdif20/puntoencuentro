import React from 'react';

export default function GalleryMock() {
  return (
    <section className="section split before-after">
      <div>
        <p className="eyebrow">Antes / Después</p>
        <h2>De entrenar sin dirección a entrenar con progreso medible</h2>
        <div className="compare">
          <article>
            <h3>Antes</h3>
            <ul>
              <li>Rutina improvisada.</li>
              <li>Poca constancia y estancamiento.</li>
              <li>Sin métricas claras.</li>
            </ul>
          </article>
          <article>
            <h3>Después</h3>
            <ul>
              <li>Plan claro según objetivo.</li>
              <li>Seguimiento para sostener el hábito.</li>
              <li>Mejoras visibles en fuerza y técnica.</li>
            </ul>
          </article>
        </div>
      </div>
      <aside className="panel glow-panel">
        <h3>Lo que cambia</h3>
        <p>Cuando el proceso tiene estructura, entrenar deja de ser una obligación y pasa a ser una decisión que te fortalece cada semana.</p>
      </aside>
    </section>
  );
}
