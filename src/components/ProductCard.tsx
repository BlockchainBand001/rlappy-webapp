import Image from 'next/image';
import { Button } from './Button';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  specs: string[];
}

export const ProductCard = ({ name, price, image, specs }: ProductCardProps) => {
  return (
    <div className="card">
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <ul className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        {specs.map((spec, i) => (
          <li key={i}>{spec}</li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <p className="text-green-500 font-bold">₦{price}/hr</p>
        <Button variant="primary">Rent Now</Button>
      </div>
    </div>
  );
};
