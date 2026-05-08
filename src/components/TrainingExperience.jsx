import React from 'react';

const steps = [
  ['01', 'Charlamos objetivo y punto de partida.'],
  ['02', 'Armamos una propuesta progresiva para tu nivel.'],
  ['03', 'Entrenás con correcciones, seguimiento y ajuste continuo.'],
  ['04', 'Medís avances en fuerza, técnica y constancia.'],
];

export default function TrainingExperience() {
  return (
    <section className="section timeline">
      <h2>Cómo es el proceso</h2>
      <div className="timeline-list">
        {steps.map(([num, text]) => (
          <article key={num} className="timeline-item">
            <span>{num}</span>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
