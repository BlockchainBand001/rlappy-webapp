import React from 'react';
import Button from './Button';

const Card: React.FC = () => {
  return (
    <div className="card">
      // ...product image...
      // ...product details...
      <Button>Add to Cart</Button>
    </div>
  );
};

export default Card;
