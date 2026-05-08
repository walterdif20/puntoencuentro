import React from 'react';

const principles = [
  'Entrenar con criterio, no por inercia.',
  'Sostener el hábito con acompañamiento real.',
  'Mejorar rendimiento sin perder técnica.',
];

export default function Benefits() {
  return (
    <section id="beneficios" className="section manifesto">
      <p className="eyebrow">Manifiesto Punto</p>
      <h2>El cambio no empieza cuando “tenés tiempo”. Empieza cuando entrenás con intención.</h2>
      <div className="manifesto-lines">
        {principles.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
}
