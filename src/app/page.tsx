import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button'; // Added import
import { ProductCard } from '@/components/ProductCard';



export default function HomePage() {
  const products = [
    {
      id: 1,
      name: 'Acer Swift',
      price: 2500,
      image: '/laptops/acer-swift.jpg',
      specs: ['Intel i5', '8GB RAM', '256GB SSD']
    },
    // ...more products
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
          Welcome to RLappy
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Your trusted laptop rental service
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
}
