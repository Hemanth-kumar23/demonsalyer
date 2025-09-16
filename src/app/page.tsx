'use client';
import './page.css';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (hashiraName: string) => {
    setImageErrors(prev => ({ ...prev, [hashiraName]: true }));
  };

  const hashiraData = [
    { name: 'Zenitsu Agatsuma', element: 'Thunder', color: 'from-yellow-100 to-amber-100', borderColor: 'border-yellow-200', textColor: 'text-yellow-800', image: '/images/hashira/zenitsu.jpg', fallback: '⚡'},
    { name: 'Giyu Tomioka', element: 'Water', color: 'from-blue-100 to-cyan-100', borderColor: 'border-blue-200', textColor: 'text-blue-800', image: '/images/hashira/giyu.jpg', fallback: '💧'},
    { name: 'Shinobu Kocho', element: 'Insect', color: 'from-purple-100 to-pink-100', borderColor: 'border-purple-200', textColor: 'text-purple-800', image: '/images/hashira/shinobu.jpg', fallback: '🦋'},
    { name: 'Kyojuro Rengoku', element: 'Flame', color: 'from-red-100 to-orange-100', borderColor: 'border-red-200', textColor: 'text-red-800', image: '/images/hashira/kyojuro.jpg', fallback: '🔥'},
    { name: 'Tengen Uzui', element: 'Sound', color: 'from-pink-100 to-rose-100', borderColor: 'border-pink-200', textColor: 'text-pink-800', image: '/images/hashira/tengen.jpg', fallback: '🎵'},
    { name: 'Mitsuri Kanroji', element: 'Love', color: 'from-rose-100 to-pink-100', borderColor: 'border-rose-200', textColor: 'text-rose-800', image: '/images/hashira/mitsuri.jpg', fallback: '💕'},
    { name: 'Obanai Iguro', element: 'Serpent', color: 'from-green-100 to-emerald-100', borderColor: 'border-green-200', textColor: 'text-green-800', image: '/images/hashira/obanai.jpg', fallback: '🐍'},
    { name: 'Sanemi Shinazugawa', element: 'Wind', color: 'from-gray-100 to-slate-100', borderColor: 'border-gray-200', textColor: 'text-gray-800', image: '/images/hashira/sanemi.jpg', fallback: '💨'},
    { name: 'Gyomei Himejima', element: 'Stone', color: 'from-stone-100 to-gray-100', borderColor: 'border-stone-200', textColor: 'text-stone-800', image: '/images/hashira/gyomei.jpg', fallback: '🗿'},
  ];

  return (
    // The conflicting background class has been removed here to allow page.css to take over
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center p-4">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="zenitsu-container"
          >
            <Image
              src="/zenitsu_agatsuma.webp" // IMPORTANT: Add a Zenitsu image to your /public folder!
              alt="Zenitsu Agatsuma"
              layout="fill"
              objectFit="cover"
              className="zenitsu-image"
            />
            {/* These divs are the lightning bolts styled by page.css */}
            <div className="lightning bolt1"></div>
            <div className="lightning bolt2"></div>
            <div className="lightning bolt3"></div>
          </motion.div>

          <motion.h1 
            className="text-5xl sm:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Demon Slayer Corps
          </motion.h1>

          <motion.p 
            className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            The Pillars of Strength and Resolve
          </motion.p>

          <motion.a 
            href="#hashira-showcase"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Discover the Hashira
          </motion.a>
        </section>

        {/* Hashira Showcase Section */}
        <section id="hashira-showcase" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              The Nine Hashira
            </h2>
            <p className="text-gray-400 mb-12">
              The strongest swordsmen in the Demon Slayer Corps.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hashiraData.map((hashira, index) => (
                <motion.div
                  key={hashira.name}
                  // Using dark-theme friendly colors
                  className={`group bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 border border-gray-700 hover:-translate-y-2`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`aspect-square rounded-xl mb-4 flex items-center justify-center overflow-hidden relative`}>
                    {imageErrors[hashira.name] ? (
                      <div className="text-6xl">{hashira.fallback}</div>
                    ) : (
                      <Image
                        src={hashira.image}
                        alt={hashira.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                        onError={() => handleImageError(hashira.name)}
                      />
                    )}
                  </div>
                  <h3 className={`text-2xl font-bold text-gray-200 mb-2 text-center`}>
                    {hashira.name}
                  </h3>
                  <p className={`text-amber-400 text-sm text-center font-medium`}>
                    {hashira.element} Hashira
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center text-gray-500">
            <p>&ldquo;Set your heart ablaze&rdquo; - Kyojuro Rengoku</p>
          </div>
        </footer>
      </main>
    </div>
  );
}