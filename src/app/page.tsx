'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const hashiraData = [
    { 
      name: 'Zenitsu Agatsuma', 
      element: 'Thunder', 
      color: 'from-yellow-100 to-amber-100', 
      borderColor: 'border-yellow-200', 
      textColor: 'text-yellow-800',
      image: '/images/hashira/zenitsu.jpg',
      fallback: '⚡'
    },
    { 
      name: 'Giyu Tomioka', 
      element: 'Water', 
      color: 'from-blue-100 to-cyan-100', 
      borderColor: 'border-blue-200', 
      textColor: 'text-blue-800',
      image: '/images/hashira/giyu.jpg',
      fallback: '💧'
    },
    { 
      name: 'Shinobu Kocho', 
      element: 'Insect', 
      color: 'from-purple-100 to-pink-100', 
      borderColor: 'border-purple-200', 
      textColor: 'text-purple-800',
      image: '/images/hashira/shinobu.jpg',
      fallback: '🦋'
    },
    { 
      name: 'Kyojuro Rengoku', 
      element: 'Flame', 
      color: 'from-red-100 to-orange-100', 
      borderColor: 'border-red-200', 
      textColor: 'text-red-800',
      image: '/images/hashira/kyojuro.jpg',
      fallback: '🔥'
    },
    { 
      name: 'Tengen Uzui', 
      element: 'Sound', 
      color: 'from-pink-100 to-rose-100', 
      borderColor: 'border-pink-200', 
      textColor: 'text-pink-800',
      image: '/images/hashira/tengen.jpg',
      fallback: '🎵'
    },
    { 
      name: 'Mitsuri Kanroji', 
      element: 'Love', 
      color: 'from-rose-100 to-pink-100', 
      borderColor: 'border-rose-200', 
      textColor: 'text-rose-800',
      image: '/images/hashira/mitsuri.jpg',
      fallback: '💕'
    },
    { 
      name: 'Obanai Iguro', 
      element: 'Serpent', 
      color: 'from-green-100 to-emerald-100', 
      borderColor: 'border-green-200', 
      textColor: 'text-green-800',
      image: '/images/hashira/obanai.jpg',
      fallback: '🐍'
    },
    { 
      name: 'Sanemi Shinazugawa', 
      element: 'Wind', 
      color: 'from-gray-100 to-slate-100', 
      borderColor: 'border-gray-200', 
      textColor: 'text-gray-800',
      image: '/images/hashira/sanemi.jpg',
      fallback: '💨'
    },
    { 
      name: 'Gyomei Himejima', 
      element: 'Stone', 
      color: 'from-stone-100 to-gray-100', 
      borderColor: 'border-stone-200', 
      textColor: 'text-stone-800',
      image: '/images/hashira/gyomei.jpg',
      fallback: '🗿'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Thunder */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-20 bg-gradient-to-b from-yellow-300 to-transparent opacity-60 animate-pulse"></div>
          <div className="absolute top-32 right-16 w-1 h-16 bg-gradient-to-b from-amber-400 to-transparent opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-32 left-20 w-1.5 h-24 bg-gradient-to-b from-orange-300 to-transparent opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 right-10 w-1 h-12 bg-gradient-to-b from-yellow-400 to-transparent opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Floating Thunder Elements */}
          <motion.div 
            className="absolute top-1/4 left-1/4 text-yellow-400 opacity-20"
            animate={{ 
              y: [-10, 10, -10],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ⚡
          </motion.div>
          <motion.div 
            className="absolute top-1/3 right-1/4 text-amber-400 opacity-25"
            animate={{ 
              y: [10, -10, 10],
              opacity: [0.25, 0.45, 0.25]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            ⚡
          </motion.div>
          <motion.div 
            className="absolute bottom-1/3 left-1/3 text-orange-400 opacity-15"
            animate={{ 
              y: [-5, 15, -5],
              opacity: [0.15, 0.35, 0.15]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            ⚡
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Zenitsu Image Placeholder */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-yellow-100 to-amber-200 rounded-full flex items-center justify-center border-4 border-yellow-300 shadow-2xl">
                <motion.div
                  className="text-8xl sm:text-9xl lg:text-[12rem]"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ⚡
                </motion.div>
              </div>
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-amber-400/30 rounded-full blur-xl animate-pulse"></div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-amber-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Breath of Thunder
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl sm:text-2xl text-amber-800 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Hashira of Hope and Power
          </motion.p>

          {/* CTA Button */}
          <motion.button 
            className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter the Demon Slayer Corps
          </motion.button>

          {/* Decorative Elements */}
          <motion.div 
            className="flex justify-center items-center mt-12 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"></div>
            <span className="text-amber-700 font-medium">Thunder Breathing</span>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Hashira Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6">
              The Nine Hashira
            </h2>
            <p className="text-lg text-amber-800 max-w-2xl mx-auto">
              The strongest swordsmen in the Demon Slayer Corps, each wielding unique breathing techniques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hashiraData.map((hashira, index) => (
              <motion.div
                key={hashira.name}
                className={`group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${hashira.borderColor} hover:-translate-y-2`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`aspect-square bg-gradient-to-br ${hashira.color} rounded-xl mb-4 flex items-center justify-center overflow-hidden relative`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${hashira.color.replace('100', '200')} opacity-50`}></div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <Image
                      src={hashira.image}
                      alt={hashira.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {
                        // Fallback to emoji if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="text-6xl">${hashira.fallback}</div>`;
                        }
                      }}
                    />
                  </div>
                </div>
                <h3 className={`text-2xl font-bold ${hashira.textColor} mb-2 text-center`}>
                  {hashira.name}
                </h3>
                <p className={`${hashira.textColor.replace('800', '600')} text-sm text-center font-medium`}>
                  {hashira.element} Hashira
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-100 to-yellow-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Demon Slayer Corps
            </h3>
            <p className="text-amber-800 mb-6">
              &ldquo;Set your heart ablaze&rdquo; - Kyojuro Rengoku
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mb-6"></div>
            <p className="text-amber-700 text-sm">
              © 2025 Demon Slayer | Built with Next.js & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}