import React from 'react';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';

export const CatalogPreviewSection = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Dell XPS 13',
      price: 3000,
      image: '/laptops/dell-xps-13.jpg',
      specs: ['Intel i7', '16GB RAM', '512GB SSD']
    },
    {
      id: 2,
      name: 'HP Spectre x360',
      price: 2800,
      image: '/laptops/hp-spectre-x360.jpg',
      specs: ['Intel i5', '8GB RAM', '256GB SSD']
    },
    {
      id: 3,
      name: 'Lenovo ThinkPad X1',
      price: 3200,
      image: '/laptops/lenovo-thinkpad-x1.jpg',
      specs: ['Intel i7', '16GB RAM', '1TB SSD']
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="mt-12">
          <Link href="/catalog" className="btn-primary">
            View Full Catalog
          </Link>
        </div>
      </div>
    </section>
  );
};
