import React from 'react';
import { FaLaptop, FaClock, FaDollarSign } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: <FaLaptop size={40} className="text-primary" />,
    title: 'Wide Selection of Laptops',
    description: 'Choose from a vast range of high-quality laptops to suit your needs.'
  },
  {
    id: 2,
    icon: <FaClock size={40} className="text-primary" />,
    title: 'Flexible Rental Plans',
    description: 'Rent laptops for as long or as short as you need with our flexible plans.'
  },
  {
    id: 3,
    icon: <FaDollarSign size={40} className="text-primary" />,
    title: 'Affordable Pricing',
    description: 'Get top-notch laptops without breaking the bank.'
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose RLappy?</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {features.map(feature => (
            <div key={feature.id} className="flex-1 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
