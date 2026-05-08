const items = [
  ['Entrenamientos guiados', 'Sesiones con estructura clara para progresar sin improvisar.'],
  ['Mejora de fuerza y resistencia', 'Combinamos cargas y trabajo funcional con foco en rendimiento real.'],
  ['Técnica y acompañamiento', 'Correcciones y seguimiento para entrenar mejor y más seguro.'],
  ['Ambiente motivador', 'Comunidad local que te ayuda a sostener el hábito.'],
  ['Rutinas dinámicas', 'Bloques variados para evitar estancamiento y mantener energía alta.'],
  ['Ubicación local en Necochea', 'Entrená cerca tuyo con horarios pensados para tu día a día.'],
];
export default function Benefits(){return <section id="beneficios" className="section"><h2>Beneficios que se notan dentro y fuera del gym</h2><div className="grid">{items.map(([t,d])=><article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section>}
