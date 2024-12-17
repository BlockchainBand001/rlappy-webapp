import Image  from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="container mx-auto p-12">
      <h1>Welcome to Rlappy</h1>
      <Image src="/logo.png" alt="LeCommerce Logo" width={600} 
height={400} objectFit='contain' />
      <p>Explore our collection of products and services.</p>
      <Link href="/products">View Our Products</Link>
      <Link href="/about">About Us</Link>
    </div>
  );
};

export default HomePage;
