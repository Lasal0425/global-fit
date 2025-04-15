import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="font-sans">
      <div className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-blue-600 text-center">Why AIESEC in IIT?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-bold mb-4">We're not just a global org. We're a community right here.</h3>
              <p className="text-gray-700 mb-6">
                AIESEC in IIT is one of the most active chapters in the country. Our members are passionate
                about creating impact, developing leadership, and helping fellow students access global opportunities.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2">What our members say:</h4>
                <p className="italic text-gray-700">
                  "Joining AIESEC was the best decision I made while im in University. It completely transformed my 
                  perspective and gave me friends from around the world."
                </p>
                <p className="text-right text-sm text-gray-500 mt-2">— Aditya, 3rd Year</p>
              </div>
              <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full">
                Join our community
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="/api/placeholder/300/200" alt="AIESEC Team" className="rounded-lg shadow-sm" />
              <img src="/api/placeholder/300/200" alt="AIESEC Event" className="rounded-lg shadow-sm" />
              <img src="/api/placeholder/300/200" alt="AIESEC Workshop" className="rounded-lg shadow-sm" />
              <img src="/api/placeholder/300/200" alt="AIESEC Conference" className="rounded-lg shadow-sm" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-8 mb-12">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Upcoming Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-blue-600 font-semibold mb-1">April 15, 2025</div>
                <h4 className="font-bold mb-1">Info Session: Global Volunteer</h4>
                <p className="text-gray-700 text-sm">Learn all about our volunteering opportunities abroad.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-blue-600 font-semibold mb-1">April 22, 2025</div>
                <h4 className="font-bold mb-1">Workshop: Cross-Cultural Communication</h4>
                <p className="text-gray-700 text-sm">Essential skills for global experiences.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h3 className="text-xl font-bold mb-6 text-blue-600 text-center">Get in Touch</h3>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="name" 
                  type="text" 
                  placeholder="Your Name"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="message" 
                  placeholder="How can we help you?"
                  rows="4"
                ></textarea>
              </div>
              
              <div className="flex items-center justify-between">
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="text-center">
            <Link to="/">
              <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
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

export default Contact;