import React from 'react';

const scheduleItems = [
  {
    name: 'Entrenamiento para surfistas (Hermanos del Mar)',
    days: 'Lunes · Miércoles · Viernes',
    time: '17:00 hs',
    tone: 'lime',
  },
  {
    name: 'Yoga funcional',
    days: 'Martes · Jueves',
    time: '16:00 hs',
    tone: 'dark',
  },
  {
    name: 'Entrenamiento postural',
    days: 'Lunes · Miércoles · Viernes',
    time: '16:00 hs',
    tone: 'dark',
  },
  {
    name: 'Vida activa',
    days: 'Martes · Jueves',
    time: '17:00 hs',
    tone: 'lime',
  },
];

export default function ScheduleHighlight() {
  return (
    <section className="section schedule-highlight" aria-label="Horarios especiales">
      <div className="schedule-header">
        <p className="eyebrow">Horarios</p>
        <h2>Clases especiales con cupos limitados</h2>
      </div>
      <div className="schedule-grid">
        {scheduleItems.map((item) => (
          <article className={`schedule-card ${item.tone}`} key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.days}</p>
            <strong>{item.time}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
