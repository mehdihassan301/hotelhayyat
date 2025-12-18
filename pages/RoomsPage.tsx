import React from 'react';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { Users, Wifi, Wind, Monitor, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Room } from '../types';

const roomsData: Room[] = [
  {
    id: 'deluxe',
    name: 'Deluxe King Room',
    description: 'Spacious and elegantly furnished, offering a perfect blend of comfort and style for the discerning traveler. Includes a king-size bed and modern ensuite bathroom.',
    price: 15000,
    capacity: '2 Adults, 1 Child',
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Flat Screen TV', 'Breakfast', 'Mini Bar'],
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'twin',
    name: 'Executive Twin Room',
    description: 'Perfect for colleagues or friends, featuring two plush twin beds and a dedicated workspace. Enjoy city views and premium bedding.',
    price: 18000,
    capacity: '2 Adults',
    amenities: ['Free Wi-Fi', 'Work Desk', 'City View', 'Mini Bar', 'Tea/Coffee Maker'],
    image: 'https://images.unsplash.com/photo-1590490360182-f33efe29a79d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'family',
    name: 'Family Suite',
    description: 'Designed for families, this suite offers extra space with two connecting rooms and a shared lounge area for quality time together.',
    price: 25000,
    capacity: '4 Adults, 2 Children',
    amenities: ['2 Bedrooms', 'Living Area', '2 Bathrooms', 'Complimentary Fruits', 'Large TV'],
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'suite',
    name: 'Hayatt Royal Suite',
    description: 'The ultimate luxury experience with a separate living area, premium furnishings, Jacuzzi, and panoramic views of Sukkur.',
    price: 35000,
    capacity: '2 Adults',
    amenities: ['Living Area', 'Jacuzzi', 'Butler Service', 'Lounge Access', 'King Bed'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const RoomsPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Hotel Hayatt Sukkur Rooms – Comfortable Stays in Sukkur" 
        description="Browse our luxurious rooms at Hotel Hayatt Sukkur. Enjoy fully furnished rooms with air conditioning, private bathrooms, TV, and modern amenities."
      />
      <PageHero 
        title="Rooms & Suites" 
        subtitle="Your Private Sanctuary in Sukkur"
        image="https://images.unsplash.com/photo-1590490360182-f33efe29a79d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <Section className="bg-gray-50 dark:bg-dark-800">
        <div className="space-y-12">
          {roomsData.map((room, index) => (
            <div key={room.id} className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg flex flex-col lg:flex-row">
               <div className="lg:w-2/5 relative h-64 lg:h-auto">
                 <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                 <div className="absolute top-4 left-4 bg-brand-500 text-white px-3 py-1 text-sm font-bold shadow-md rounded-sm">
                    PKR {room.price.toLocaleString()} / night
                 </div>
               </div>
               <div className="p-8 lg:w-3/5 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-4">
                     <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">{room.name}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                     {room.description}
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                     <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Users size={16} className="text-brand-500" />
                        <span>{room.capacity}</span>
                     </div>
                     {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                           <span className="w-1.5 h-1.5 bg-brand-300 rounded-full"></span>
                           <span>{amenity}</span>
                        </div>
                     ))}
                  </div>
                  
                  <div className="mt-auto">
                     <Link 
                        to="/contact" 
                        state={{ selectedRoom: room.name }} // Pass selected room to contact form
                        className="inline-block w-full md:w-auto px-8 py-3 bg-gray-900 dark:bg-white hover:bg-brand-500 dark:hover:bg-brand-500 text-white dark:text-gray-900 dark:hover:text-white font-bold uppercase tracking-wider rounded-sm transition-all text-center"
                     >
                        Reserve This Room
                     </Link>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </Section>
      
      <div className="bg-brand-600 py-16 px-4 text-center">
         <h2 className="text-3xl font-serif font-bold text-white mb-4">Need Help Choosing?</h2>
         <p className="text-brand-100 mb-8 max-w-2xl mx-auto">Call us directly and our reservation desk will help you find the perfect room for your needs.</p>
         <a href="tel:+923334294444" className="inline-block px-8 py-3 bg-white text-brand-600 font-bold uppercase tracking-widest rounded-sm hover:bg-gray-100 transition-colors">
            Call +92-333-429-4444
         </a>
      </div>
    </>
  );
};

export default RoomsPage;