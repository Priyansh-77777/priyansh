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
    <div className="min-h-screen bg-paper text-ink selection:bg-black selection:text-white">
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-paper/90 backdrop-blur-md border-line py-4' : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold tracking-tight text-ink">
            Priyansh<span className="text-accent">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="text-sm font-medium text-graphite hover:text-ink transition-colors uppercase tracking-widest text-[11px]"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2 bg-ink text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-ink"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-paper border-b border-line p-6 md:hidden flex flex-col gap-6 shadow-xl">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif font-medium text-ink hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-24">
        {children}
      </main>
    </div>
  );
};

export default Layout;