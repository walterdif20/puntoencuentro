import { buildWhatsAppUrl } from '../data/business';
export default function WhatsAppFloatingButton(){return <a className="wa-float" aria-label="Abrir WhatsApp" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">WhatsApp</a>}
