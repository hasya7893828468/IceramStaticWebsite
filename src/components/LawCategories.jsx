import React from 'react';
import {motion} from 'framer-motion';
import ice1 from '../iceram/CASTLE 101 CHOCOLATE ⚜️.jpeg';
import ice4
  from '../iceram/Eiswaffel mit Karamell Generative AI _ Premium KI-generiertes Bild.jpeg';
import ice3 from '../iceram/Ice Cream.jpeg';
import ice6 from '../iceram/♔ Crèmes Glacées Créées par IA.jpeg';
import ice2
  from '../milkshake/Chocolate Milkshake Recipe (Chick-fil-A Copycat).jpeg';
import ice5
  from '../milkshake/How to Make Korean Strawberry Milk at Home (Easy Vegan Recipe!).jpeg';
const categories = [
  {
    title: 'Creamy Caramel',
    image: ice1,
    rate: 200,
    mrate: 400,
  },
  {
    title: 'Choco Bliss',
    image: ice2,
    rate: 200,
    mrate: 400,
  },
  {
    title: 'Strawberry Swirl',
    image: ice3,
    rate: 200,
    mrate: 400,
  },
  {
    title: 'Property Law',
    image: ice5,
    rate: 200,
    mrate: 400,
  },
  {
    title: 'Mango Magic',
    image: ice4,
    rate: 200,
    mrate: 400,
  },
  {
    title: 'Minty Fresh',
    image: ice6,
    rate: 200,
    mrate: 400,
  },
];

const LawCategories = () => {
  return (
    <section className="py-12 bg-black-100 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Enjoy a Sweet Treat
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
              className=" rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 w-72 flex-shrink-0"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4 text-white">
                <h3 className="text-xl text-center font-semibold text-white text-2xl">
                  <b>{category.title}</b>
                </h3>
                {/* rate */}
                <b>
                  <div className="text-center">
                    <b className="p-5 m-5 text-3xl">₹{category.rate}💴</b>
                    <b className="p-5 m-5 line-through">₹{category.mrate}💰</b>
                  </div>
                </b>

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LawCategories;
