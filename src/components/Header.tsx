import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="min-h-[90vh] flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              alt="Saime Shaikh"
              className="rounded-2xl shadow-2xl w-64 h-64 object-cover mx-auto"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
              Saime Shaikh
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Cloud Engineer & DevOps Enthusiast
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Passionate about building scalable infrastructure and automating deployment processes.
              Experienced in cloud technologies and modern DevOps practices.
            </p>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;