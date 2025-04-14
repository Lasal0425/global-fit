import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b">
      <div className="flex justify-between items-center py-6 px-10 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900">AIESEC Match</h1>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="/" className="hover:text-orange-600 transition-colors">Home</a>
          <a href="/about" className="hover:text-orange-600 transition-colors">About</a>
          <a href="/projects" className="hover:text-orange-600 transition-colors">Find Projects</a>
          <a href="/contact" className="hover:text-orange-600 transition-colors">Contact</a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden py-4 px-10 border-t flex flex-col gap-4 text-sm font-medium">
          <a href="/" className="hover:text-orange-600 py-2 transition-colors">Home</a>
          <a href="/about" className="hover:text-orange-600 py-2 transition-colors">About</a>
          <a href="/projects" className="hover:text-orange-600 py-2 transition-colors">Find Projects</a>
          <a href="/contact" className="hover:text-orange-600 py-2 transition-colors">Contact</a>
        </nav>
      )}
    </header>
  );
}