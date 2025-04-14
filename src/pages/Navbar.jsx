import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white w-full min-w-full left-0 right-0">
      <div className="flex items-center justify-between px-4 py-4 w-full">
        <Link to="/" className="text-xl font-bold">AIESEC Match</Link>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
          <Link to="/projects" className="hover:text-blue-200 transition-colors">Find Projects</Link>
          <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden w-full">
          <div className="flex flex-col space-y-4 px-4 py-4 bg-blue-700">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
            <Link to="/projects" className="hover:text-blue-200 transition-colors">Find Projects</Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;