import React from 'react';
import { ChevronRight } from 'lucide-react';

function Home() {
  return (
    <div className="font-sans bg-white text-black min-h-screen">
      {/* Navigation */}
      <header className="flex justify-between items-center py-6 px-10 border-b">
        <h1 className="text-2xl font-bold text-[#101828]">AIESEC Match</h1>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="/" className="hover:text-orange-600">Home</a>
          <a href="/about" className="hover:text-orange-600">About</a>
          <a href="/projects" className="hover:text-orange-600">Find Projects</a>
          <a href="/contact" className="hover:text-orange-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-10 py-20 gap-10">
        <div className="max-w-xl">
          <p className="text-orange-600 font-semibold mb-2">❤️ Welcome to AIESEC Match</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
            Empowering Change <br />
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">
              Across Sri Lanka
            </span>
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Join a vibrant community of change-makers transforming lives in Colombo, Galle, Kandy, and beyond. Your journey to making a difference starts here.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white px-6 py-3 rounded-full flex items-center font-semibold">
              Start your journey <ChevronRight className="ml-2" size={18} />
            </button>
            <button className="border border-orange-400 hover:bg-orange-50 text-orange-600 px-6 py-3 rounded-full font-semibold">
              Learn More
            </button>
          </div>
          <p className="text-red-500 mt-6">Error fetching data: Failed to fetch</p>
        </div>
        <div className="w-full lg:w-[500px]">
          <img src="https://images.unsplash.com/photo-1584824486539-53bb4646bdbc?auto=format&fit=crop&w=800&q=80"
               alt="Volunteers in action"
               className="rounded-2xl shadow-lg object-cover" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-10 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <div className="text-2xl mb-2">♥</div>
            <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
            <p className="text-gray-600">Contribute to meaningful causes and create positive change in your community</p>
          </div>
          <div>
            <div className="text-2xl mb-2">👥</div>
            <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
            <p className="text-gray-600">Connect with like-minded volunteers and grow together</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🏅</div>
            <h3 className="text-xl font-semibold mb-2">Earn Recognition</h3>
            <p className="text-gray-600">Get rewarded for your contributions with badges and certificates</p>
          </div>
          <div>
            <div className="text-2xl mb-2">📍</div>
            <h3 className="text-xl font-semibold mb-2">Local Focus</h3>
            <p className="text-gray-600">Find opportunities near you in major cities across Sri Lanka</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
