import React from 'react';

const scheduleByDay = [
  {
    day: 'Lunes · Miércoles · Viernes',
    tone: 'dark',
    classes: [
      {
        name: 'Entrenamiento funcional',
        times: ['07:00', '08:00', '14:00', '19:00', '20:00'],
      },
      {
        name: 'Acondicionamiento físico',
        times: ['09:00', '10:00', '15:00', '18:00'],
      },
      {
        name: 'Entrenamiento postural',
        times: ['16:00'],
      },
      {
        name: 'Entrenamiento para surfistas (Hermanos del Mar)',
        times: ['17:00'],
      },
    ],
  },
  {
    day: 'Martes · Jueves',
    tone: 'lime',
    classes: [
      {
        name: 'Entrenamiento funcional',
        times: ['08:00', '18:00', '19:00', '20:00'],
      },
      {
        name: 'Acondicionamiento físico',
        times: ['09:00', '10:00', '15:00'],
      },
      {
        name: 'Yoga funcional',
        times: ['16:00'],
      },
      {
        name: 'Vida activa',
        times: ['17:00'],
      },
    ],
  },
];

export default function ScheduleHighlight() {
  return (
    <section className="section schedule-highlight" aria-label="Horarios especiales">
      <div className="schedule-header">
        <p className="eyebrow">Horarios</p>
        <h2>Encontrá tu franja ideal por día</h2>
      </div>
      <div className="schedule-grid">
        {scheduleByDay.map((group) => (
          <article className={`schedule-card ${group.tone}`} key={group.day}>
            <h3>{group.day}</h3>
            <ul className="schedule-list">
              {group.classes.map((item) => (
                <li key={`${group.day}-${item.name}`}>
                  <div className="schedule-class-name">{item.name}</div>
                  <div className="schedule-time-chips" aria-label={`Horarios de ${item.name}`}>
                    {item.times.map((time) => (
                      <span key={`${item.name}-${time}`}>{time}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
