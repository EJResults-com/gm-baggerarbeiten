import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black relative overflow-x-hidden">
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.3) 1px, transparent 0),
              linear-gradient(45deg, transparent 40%, rgba(16, 185, 129, 0.1) 50%, transparent 60%)
            `,
            backgroundSize: '40px 40px, 80px 80px'
          }}></div>
        </div>
        
        <Navbar />
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leistungen" element={<Services />} />
            <Route path="/ueber-uns" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;