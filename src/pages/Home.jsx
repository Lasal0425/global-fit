import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="font-sans">
      {/* Landing Section */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Find your perfect volunteering match</h1>
          <p className="text-xl mb-8">Discover life-changing projects abroad that match your interests</p>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full flex items-center"
        >
          <Link to="/about" className="flex items-center">
            Start Matching <ChevronRight className="ml-2" />
          </Link>
        </motion.button>
      </div>
      
      {/* Sticky chat button */}
      <div className="fixed bottom-4 right-4 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center"
        >
          <MessageCircle size={24} />
          <span className="ml-2 hidden md:inline">Chat with us</span>
        </motion.button>
      </div>
    </div>
  );
}

export default Home;