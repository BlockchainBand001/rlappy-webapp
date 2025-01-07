import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


// setup
const HomePage = () => {
  return (
    <section className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to RLappy Laptop Rental Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          // ...product image...
          // ...product details...
          <h3 className="text-xl font-bold mb-2">Acer Laptop</h3>
          <p className="text-green-500">N2,500/hr</p>
          <Button>Add to Cart</Button>
        </div>
        // ...additional product cards...
      </div>
    </section>
  );
};

export default HomePage;
