import React from 'react';
import Section from './Section';
import { Room } from '../types';
import { Wifi, Tv, Wind, Coffee, Users } from 'lucide-react';

const rooms: Room[] = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    description: 'Spacious and elegantly furnished, offering a perfect blend of comfort and style for the discerning traveler.',
    price: 14000,
    capacity: '2 Adults, 1 Child',
    amenities: ['Free Wi-Fi', 'Nestle Bottle Water', 'Flat Screen TV','Free Car Parking', 'Breakfast','Cleaning & Iron Pressing'],
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'standard',
    name: 'Executive Twin Room',
    description: 'Perfect for colleagues or friends, featuring two plush twin beds and a dedicated workspace.',
    price: 11000,
    capacity: '2 Adults',
    amenities: ['Free Wi-Fi', 'Work Desk', 'City View', 'Mini Bar'],
    image: 'https://images.unsplash.com/photo-1590490360182-f33efe29a79d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'suite',
    name: 'Tr',
    description: 'The ultimate luxury experience with a separate living area, premium furnishings, and panoramic views.',
    price: 35000,
    capacity: '4 Adults',
    amenities: ['Living Area', 'Jacuzzi', 'Butler Service', 'Lounge Access'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Rooms: React.FC = () => {
  return (
    <Section id="rooms" className="bg-gray-50 dark:bg-dark-800">
      <div className="text-center mb-16">
        <span className="text-brand-500 font-bold tracking-widest uppercase text-sm">Accommodation</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mt-3">Rooms & Suites</h2>
        <div className="w-20 h-1 bg-brand-500 mx-auto mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div key={room.id} className="group bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={room.image} 
                alt={room.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-dark-800/90 backdrop-blur text-gray-900 dark:text-white px-3 py-1 rounded-sm font-bold text-sm shadow-sm">
                PKR {room.price.toLocaleString()} <span className="text-xs font-normal text-gray-500 dark:text-gray-400">/ night</span>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">{room.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">{room.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                   <Users size={16} className="text-brand-500" />
                   <span>{room.capacity}</span>
                </div>
                
                <div className="border-t border-gray-100 dark:border-dark-700 pt-4 flex flex-wrap gap-3">
                  {room.amenities.slice(0, 3).map((amenity, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md">
                      {amenity}
                    </span>
                  ))}
                  <span className="text-xs text-brand-500 px-2 py-1">+ more</span>
                </div>

                <a href="#reservation" className="block w-full text-center py-3 border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white transition-colors rounded-sm font-semibold uppercase text-xs tracking-wider">
                  Book This Room
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Rooms;