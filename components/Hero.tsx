import React from 'react';
import { ArrowDownRight, Mail } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative px-6 md:px-12 max-w-[1400px] mx-auto min-h-[85vh] flex flex-col justify-center border-b border-line pb-20">
      
      {/* Status Pill */}
      <div className="inline-flex items-center space-x-3 mb-12">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
        </span>
        <span className="text-graphite text-xs font-bold uppercase tracking-widest">Available for work</span>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-ink leading-[0.9] tracking-tight mb-8">
            {HERO_DATA.tagline.split('&').map((part, i) => (
              <span key={i} className="block">
                {i === 0 ? part : <span className="italic font-light text-graphite">& {part}</span>}
              </span>
            ))}
          </h1>
        </div>

        <div className="lg:col-span-4 lg:mb-4">
          <p className="text-lg md:text-xl text-graphite mb-10 leading-relaxed font-light">
            {HERO_DATA.summary}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="group flex items-center justify-between gap-4 bg-ink text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-zinc-800"
            >
              Contact Me
              <Mail className="w-4 h-4" />
            </a>
            <a 
              href="https://drive.google.com/uc?export=download&id=1sBwv6jnNtM2N6PieHVj_gfqDowu_RZ0u"
              className="group flex items-center justify-between gap-4 bg-transparent border border-line text-ink px-8 py-4 rounded-full font-medium transition-all hover:border-ink"
            >
              Download CV
              <ArrowDownRight className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;