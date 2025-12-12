import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            Priyansh<span className="text-blue-500">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-4 py-2 bg-slate-100 text-slate-900 rounded font-semibold text-sm hover:bg-white transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;