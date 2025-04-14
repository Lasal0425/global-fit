import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="font-bold text-xl mb-2 sm:mb-0">AIESEC Match</div>
        
        {/* Mobile menu button */}
        <button 
          className="sm:hidden absolute right-4 top-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <ul className="hidden sm:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-200 transition-colors">Find Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
          </li>
        </ul>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="sm:hidden flex flex-col space-y-4 w-full mt-4">
            <li>
              <Link to="/" className="hover:text-blue-200 transition-colors block">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-200 transition-colors block">About</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-200 transition-colors block">Find Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-200 transition-colors block">Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;