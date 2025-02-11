import React from 'react';
import {motion} from 'framer-motion';

const categories = [
  {
    title: 'Criminal Law',
    image: 'https://source.unsplash.com/400x300/?court,law',
  },
  {
    title: 'Family Law',
    image: 'https://source.unsplash.com/400x300/?family,court',
  },
  {
    title: 'Corporate Law',
    image: 'https://source.unsplash.com/400x300/?business,law',
  },
  {
    title: 'Property Law',
    image: 'https://source.unsplash.com/400x300/?realestate,law',
  },
  {
    title: 'Intellectual Property',
    image: 'https://source.unsplash.com/400x300/?copyright,law',
  },
  {
    title: 'Employment Law',
    image: 'https://source.unsplash.com/400x300/?office,law',
  },
];

const LawCategories = () => {
  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Legal Case Categories
      </h2>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-6"
          animate={{x: ['0%', '-100%']}}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15,
            ease: 'linear',
          }}
        >
          {/* Duplicating content for infinite effect */}
          {[...categories, ...categories].map ((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 w-72 flex-shrink-0"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LawCategories;
