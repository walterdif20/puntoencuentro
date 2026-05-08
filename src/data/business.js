export const business = {
  name: 'Punto Entrenamiento',
  tagline: 'Tu punto de partida para entrenar mejor en Necochea',
  phone: '5492262239835',
  // Se encontró también 5492262556744 en una fuente pública.
  // Verificar con el cliente antes de publicar o reemplazar este número.
  whatsappMessage:
    'Hola Punto Entrenamiento, quiero consultar horarios y cupos para entrenar.',
  city: 'Necochea, Buenos Aires, Argentina',
  shortAddress: 'C. 48 2841, Necochea',
  fullAddress: 'C. 48 2841, B7630CHY Necochea, Provincia de Buenos Aires, Argentina',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Punto%20Entrenamiento%20C.%2048%202841%20Necochea%20Buenos%20Aires',
  social: {
    instagram: 'https://www.instagram.com/punto_entrenamiento/',
    facebook: 'https://www.facebook.com/puntoentrenamiento/',
  },
  hours: [
    // Horarios detectados públicamente: validar con cliente antes de publicar en producción.
    'Lunes: 07:00 a 11:00 y 19:00 a 22:00',
    'Martes a viernes: 06:30 a 22:00',
    'Sábado y domingo: cerrado',
  ],
};

export const buildWhatsAppUrl = (phone = business.phone, message = business.whatsappMessage) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
