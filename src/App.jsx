import React from 'react';
import { business } from './data/business';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import TrainingExperience from './components/TrainingExperience';
import GalleryMock from './components/GalleryMock';
import ScheduleHighlight from './components/ScheduleHighlight';
import Location from './components/Location';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

const App = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ExerciseGym',
    name: business.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.shortAddress,
      addressLocality: 'Necochea',
      addressRegion: 'Buenos Aires',
      addressCountry: 'AR',
    },
    areaServed: 'Necochea',
    url: 'https://www.puntoentrenamiento.com/',
    telephone: `+${business.phone}`,
    sameAs: [business.social.instagram, business.social.facebook],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '07:00', closes: '11:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '19:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '06:30', closes: '22:00' },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <header id="inicio"><Navbar /></header>
      <main>
        <Hero />
        <Benefits />
        <Services />
        <WhyChooseUs />
        <TrainingExperience />
        <GalleryMock />
        <ScheduleHighlight />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
};

export default App;
