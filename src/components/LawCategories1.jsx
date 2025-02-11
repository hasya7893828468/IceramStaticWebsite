import React from 'react';
import {motion} from 'framer-motion';

const categories = [
  {
    title: 'Criminal Law',
    image: 'https://source.unsplash.com/400x300/?court,justice',
    description: 'Criminal law deals with crimes such as theft, assault, and fraud. It ensures justice and proper punishment under legal frameworks.',
  },
  {
    title: 'Family Law',
    image: 'https://source.unsplash.com/400x300/?family,law',
    description: 'Family law governs matters such as divorce, child custody, adoption, and domestic disputes, ensuring legal protection for families.',
  },
  {
    title: 'Corporate Law',
    image: 'https://source.unsplash.com/400x300/?business,law',
    description: 'Corporate law handles company regulations, mergers, acquisitions, and legal compliance for businesses to operate smoothly.',
  },
  {
    title: 'Property Law',
    image: 'https://source.unsplash.com/400x300/?realestate,law',
    description: 'Property law involves real estate transactions, property disputes, landlord-tenant agreements, and land rights.',
  },
  {
    title: 'Intellectual Property',
    image: 'https://source.unsplash.com/400x300/?copyright,patent',
    description: 'Intellectual property law protects creations such as trademarks, copyrights, and patents to secure innovation and originality.',
  },
  {
    title: 'Employment Law',
    image: 'https://source.unsplash.com/400x300/?office,law',
    description: 'Employment law ensures fair labor practices, workplace rights, compensation, and employee benefits under the legal framework.',
  },
];

const LawCategories1 = () => {
  return (
    <section
      className="relative w-full py-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?law,justice')",
      }}
    >
      <div className="absolute inset-0  opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Your Sweet Escape,
          One Scoop at a Time
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map ((category, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-lg overflow-hidden p-6 text-black transition-transform hover:scale-105"
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.2}}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold">{category.title}</h3>
              <p className="text-md mt-2">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LawCategories1;
