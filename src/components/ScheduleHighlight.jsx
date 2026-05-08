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
  {
    name: 'Acondicionamiento Fisico',
    days: 'Lunes · Miércoles · Viernes', //martes y jueves 9,10,15 y sabados 9,10
    time: '9:00, 10:00, 15:00, 18:00 hs',
    tone: 'lime',
  },
  {
    name: 'Entrenamiento Funcional',
    days: 'Lunes · Miércoles · Viernes',//martes y jueves 8 18 19 20
    time: '7:00, 8:00, 14:00, 19:00, 20:00 hs',
    tone: 'dark',
  },
  {
    name: 'Acondicionamiento Fisico',
    days: 'Martes · Jueves', //martes y jueves 9,10,15 y sabados 9,10
    time: '9:00, 10:00, 15:00 hs',
    tone: 'dark',
  },
  {
    name: 'Entrenamiento Funcional',
    days: 'Martes · Jueves',//martes y jueves 8 18 19 20
    time: '8:00, 18:00, 19:00, 20:00 hs',
    tone: 'lime',
  }
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
