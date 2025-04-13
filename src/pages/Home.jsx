import React from 'react';
import { ChevronRight } from 'lucide-react';

function Home() {
  return (
    <div className="font-sans bg-black text-white min-h-screen">
      {/* Navigation */}
      <div className="py-4 px-6">
        <h1 className="text-xl font-bold">AIESEC Match</h1>
        <ul className="mt-4 space-y-2">
          <li>• <a href="/" className="text-blue-400 hover:underline">Home</a></li>
          <li>• <a href="/about" className="text-blue-400 hover:underline">About</a></li>
          <li>• <a href="/projects" className="text-blue-400 hover:underline">Find Projects</a></li>
          <li>• <a href="/contact" className="text-blue-400 hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Empowering Change Across Sri Lanka</h1>
        <p className="text-lg mb-8">
          Join a vibrant community of change-makers transforming lives in Colombo, Galle, Kandy, and beyond. Your journey to making a difference starts here.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded flex items-center">
            Start your journey <ChevronRight className="ml-2" size={18} />
          </button>
          <button className="bg-transparent border border-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded">
            Learn More
          </button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="px-6 py-16">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
        
        <div className="mb-12">
          <div className="mb-1">♥</div>
          <h3 className="text-xl font-bold mb-2">Make an Impact</h3>
          <p className="text-gray-400">Contribute to meaningful causes and create positive change in your community</p>
        </div>
        
        <div className="mb-12">
          <div className="mb-1">👥</div>
          <h3 className="text-xl font-bold mb-2">Join the Community</h3>
          <p className="text-gray-400">Connect with like-minded volunteers and grow together</p>
        </div>
        
        <div className="mb-12">
          <div className="mb-1">🏅</div>
          <h3 className="text-xl font-bold mb-2">Earn Recognition</h3>
          <p className="text-gray-400">Get rewarded for your contributions with badges and certificates</p>
        </div>
        
        <div className="mb-12">
          <div className="mb-1">📍</div>
          <h3 className="text-xl font-bold mb-2">Local Focus</h3>
          <p className="text-gray-400">Find opportunities near you in major cities across Sri Lanka</p>
        </div>
      </div>
    </div>
  );
}

export default Home;