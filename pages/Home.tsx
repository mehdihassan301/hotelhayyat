import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Rooms from '../components/Rooms';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Hotel Hayatt Sukkur | Luxury & Comfort" 
        description="Experience luxury and comfort at Hotel Hayatt Sukkur. Located near Sukkur Township with premium amenities, 3-star rating, and exceptional service." 
      />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Gallery />
      <BookingForm />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;