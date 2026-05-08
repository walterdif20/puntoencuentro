import { business, buildWhatsAppUrl } from '../data/business';

export default function Hero() {
  return (
    <section className="hero section">
      <div>
        <p className="eyebrow">Necochea · Calle 48 2841</p>
        <h1>Entrená fuerte. Movete mejor. Sentite en tu punto.</h1>
        <p className="lead">Funcional, fuerza y musculación con acompañamiento para que ganes constancia, técnica y rendimiento.</p>
        <div className="row">
          <a className="btn" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">Consultar horarios por WhatsApp</a>
          <a className="btn btn-ghost" href="#entrenamientos">Ver entrenamientos</a>
        </div>
        <div className="chips">{['Funcional', 'Fuerza', 'Musculación', 'Seguimiento'].map((c)=><span key={c}>{c}</span>)}</div>
      </div>
      <aside className="panel">
        <h3>Plan de entrenamiento</h3>
        <p>{business.tagline}</p>
        <div className="metrics"><span>Fuerza 80%</span><span>Resistencia 75%</span><span>Técnica 90%</span></div>
      </aside>
    </section>
  );
}
