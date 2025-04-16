import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans w-full min-w-full">
        {/* Using the imported Navbar component */}
        <Navbar />

        {/* Routes */}
        <div className="w-full min-w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Using the imported Footer component */}
        <Footer />

        {/* Global styles */}
        {/* <style jsx global>{`
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            max-width: 100vw;
            overflow-x: hidden;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          #root {
            width: 100%;
            min-width: 100%;
            max-width: 100vw;
            display: flex;
            flex-direction: column;
          }
          * {
            box-sizing: border-box;
          }
        `}</style> */}
      </div>
    </Router>
  );
}

export default App;