import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'RLappy has been a game-changer for my studies. The laptops are top-notch and the service is exceptional!',
    avatar: '/avatars/john-doe.jpg'
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'As a professional, I rely on high-performance laptops. RLappy provides exactly what I need with flexible rental options.',
    avatar: '/avatars/jane-smith.jpg'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    feedback: 'Excellent customer support and quality laptops. Highly recommend RLappy for anyone looking to rent laptops.',
    avatar: '/avatars/mike-johnson.jpg'
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <p className="text-lg italic text-gray-600 dark:text-gray-400">
                "{testimonial.feedback}"
              </p>
              <h4 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
