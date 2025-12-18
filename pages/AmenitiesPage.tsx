import React from 'react';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { Wifi, Utensils, Car, Clock, Shirt, Coffee, Plane, ShieldCheck, Monitor, Wind, Key } from 'lucide-react';
import { Link } from 'react-router-dom';

const allAmenities = [
  { icon: Clock, title: "24-Hour Front Desk", desc: "Our team is available round the clock to assist you with check-ins, concierge services, and any requests." },
  { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Stay connected with complimentary high-speed internet access available in all rooms and public areas." },
  { icon: Plane, title: "Airport Shuttle", desc: "Complimentary pick and drop service to Sukkur Airport for a hassle-free travel experience." },
  { icon: Utensils, title: "Fine Dining Restaurant", desc: "Savor local Sindhi delicacies and international cuisine at our in-house restaurant." },
  { icon: Coffee, title: "Room Service", desc: "Enjoy delicious meals in the comfort of your room with our prompt room service." },
  { icon: Shirt, title: "Laundry & Dry Cleaning", desc: "Professional laundry services available with same-day delivery options." },
  { icon: Utensils, title: "BBQ Facility", desc: "Experience outdoor dining with our dedicated BBQ area, perfect for family gatherings." },
  { icon: Car, title: "Car Rental Service", desc: "Explore Sukkur and nearby attractions with our reliable car rental service." },
  { icon: ShieldCheck, title: "24/7 Security", desc: "Your safety is our priority with CCTV surveillance and trained security personnel." },
  { icon: Wind, title: "Air Conditioning", desc: "Split air conditioning in all rooms to ensure your comfort in all seasons." },
  { icon: Monitor, title: "Smart TV", desc: "Entertainment at your fingertips with flat-screen TVs and satellite channels." },
  { icon: Key, title: "Secure Parking", desc: "Ample secure parking space available for guests within the hotel premises." },
];

const AmenitiesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Hotel Hayatt Sukkur Amenities – Premium Facilities" 
        description="Explore Hotel Hayatt Sukkur’s top-notch amenities including 24-hour front desk, free Wi-Fi, airport shuttle, room service, restaurant, and more."
      />
      <PageHero 
        title="Amenities & Services" 
        subtitle="Designed for Your Absolute Comfort"
        image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <Section className="bg-gray-50 dark:bg-dark-800">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allAmenities.map((item, index) => (
            <div key={index} className="bg-white dark:bg-dark-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-brand-50 dark:bg-dark-800 flex items-center justify-center text-brand-500 mb-6">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white dark:bg-dark-900 text-center">
         <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">Ready to Experience Luxury?</h2>
         <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">Book your stay today and enjoy all these premium amenities at an unbeatable value.</p>
         <Link to="/contact" className="inline-block px-10 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold uppercase tracking-widest rounded-sm transition-all shadow-lg">
            Book Now
         </Link>
      </Section>
    </>
  );
};

export default AmenitiesPage;