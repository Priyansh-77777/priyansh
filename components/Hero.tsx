import React from 'react';
import { Download, ChevronRight, Mail } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-start min-h-[80vh] justify-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
         <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-[128px]"></div>
         <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-slate-300 text-sm font-medium">Open to opportunities</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
        {HERO_DATA.tagline.split('&').map((part, i) => (
          <span key={i} className="block">
            {i === 0 ? part : <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">& {part}</span>}
          </span>
        ))}
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
        {HERO_DATA.summary}
      </p>

      <div className="flex flex-wrap gap-4">
        <a 
          href="#contact" 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-blue-900/20"
        >
          <Mail className="w-5 h-5" />
          Contact Me
        </a>
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-3.5 rounded-lg font-medium transition-all"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </button>
        <a 
          href="#impact"
          className="flex items-center gap-2 text-slate-400 hover:text-white px-6 py-3.5 font-medium transition-colors"
        >
          View Impact <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;