import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="font-sans">
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto min-h-screen">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">What is AIESEC?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Global Network</h3>
              <p className="text-gray-700 mb-3">AIESEC is the world's largest youth-run organization present in 126+ countries and territories.</p>
              <div className="text-3xl font-bold text-blue-600">126+</div>
              <div className="text-sm text-gray-500">Countries & Territories</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-blue-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Youth Empowerment</h3>
              <p className="text-gray-700 mb-3">We empower young people through cross-cultural exchanges and leadership opportunities.</p>
              <div className="text-3xl font-bold text-blue-600">40K+</div>
              <div className="text-sm text-gray-500">Volunteers Yearly</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-blue-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
              <p className="text-gray-700 mb-3">Creating positive change through leadership development experiences aligned with UN SDGs.</p>
              <div className="text-3xl font-bold text-blue-600">70+</div>
              <div className="text-sm text-gray-500">Years of Experience</div>
            </motion.div>
          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-blue-600">What is Global Volunteer?</h2>
          
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-xl mb-12 ">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Live abroad, volunteer with purpose, grow as a leader</h3>
                <p className="text-gray-700 mb-6">
                  Global Volunteer is AIESEC's cross-cultural volunteering experience. Working on projects 
                  addressing the UN Sustainable Development Goals while developing leadership skills 
                  and making a positive impact.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-70 p-3 rounded">
                    <div className="font-bold text-blue-600">4-8 weeks</div>
                    <div className="text-sm">Program Duration</div>
                  </div>
                  <div className="bg-white bg-opacity-70 p-3 rounded">
                    <div className="font-bold text-blue-600">17 SDGs</div>
                    <div className="text-sm">UN Goals Addressed</div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <img 
                  src="/api/placeholder/500/300" 
                  alt="Global Volunteer" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full flex items-center mx-auto"
            >
              <Link to="/projects" className="flex items-center">
                Find Your Match <ChevronRight className="ml-2" />
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;